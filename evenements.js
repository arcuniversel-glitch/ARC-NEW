/* ==========================================================================
   JESUS — rubrique « Événements »
   Billetterie, inscriptions, QR codes, votes en ligne, tableau de bord organisateur,
   administration (modération, organisateurs, revenus).
   À charger APRÈS le script principal de index.html :
       <script src="evenements.js"></script>      (juste avant </body>)
   ========================================================================== */
(function () {
  "use strict";
  var E = (window.EVT = {});
  var S = {
    vue: "decouvrir", orgVue: "evenements", categorie: "Tous", filtre: "",
    evenements: [], detail: null, panier: {}, paiement: null,
    concours: [], mesVotes: {}, mesEvts: null, mesConcours: null, form: null, cform: null, scan: null
  };
  var CATEGORIES = ["Concert", "Conférence", "Séminaire", "Festival", "Autre"];
  var TYPES_CONCOURS = ["Concours", "Élection", "Award"];

  // ------------------------------------------------------------------ outils
  function esc(t) { return escapeHtml(t == null ? "" : String(t)); }
  function code() { return membreCourant ? membreCourant.code : null; }
  function fcfa(n) { return Number(n || 0).toLocaleString("fr-FR") + " FCFA"; }
  function quand(s) {
    if (!s) return "";
    var d = new Date(s);
    return isNaN(d.getTime()) ? esc(s) : d.toLocaleString("fr-FR", { weekday: "short", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  function echec(e) { alert("Erreur : " + ((e && e.message) || e)); }
  function zone() { return document.getElementById("evtContenu"); }
  function qrUrl(texte, taille) { return "https://api.qrserver.com/v1/create-qr-code/?size=" + taille + "x" + taille + "&margin=6&data=" + encodeURIComponent(texte); }
  function maintenantIso() {
    var d = new Date(), p = function (n) { return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + "T" + p(d.getHours()) + ":" + p(d.getMinutes());
  }
  function besoinMembre() {
    if (membreCourant) return true;
    confirmerApp_("Connectez-vous (ou créez un compte) pour continuer.", quitterVisiteurEtSeConnecter);
    return false;
  }
  function puce(texte, type) { return '<span class="evt-puce ' + (type || "") + '">' + esc(texte) + "</span>"; }
  function puceStatut(s) {
    var m = { "Publié": ["Publié", "ok"], "EnAttente": ["En vérification", "att"], "Brouillon": ["Brouillon", ""], "Refusé": ["Refusé", "ko"], "Annulé": ["Annulé", "ko"] };
    var x = m[s] || [s, ""];
    return puce(x[0], x[1]);
  }

  // Fenêtre modale (au-dessus de l'application, sous les alertes)
  function modal(html, large, surFermeture) {
    var fond = document.createElement("div");
    fond.className = "dlg-overlay";
    fond.style.cssText = "z-index:9500;align-items:flex-start;overflow-y:auto;";
    var boite = document.createElement("div");
    boite.className = "dlg-boite";
    boite.style.cssText = "max-width:" + (large ? "580px" : "420px") + ";margin:16px 0;";
    boite.innerHTML = html;
    fond.appendChild(boite);
    document.body.appendChild(fond);
    var obj = { el: boite, close: function () { if (fond.parentNode) fond.remove(); if (surFermeture) surFermeture(); } };
    fond.addEventListener("click", function (e) { if (e.target === fond) obj.close(); });
    S.modalCourante = obj;
    return obj;
  }
  E.fermer = function () { if (S.modalCourante) S.modalCourante.close(); };

  // Réduit une image choisie (recadrage centré) et la renvoie en JPEG base64
  function reduireImage(fichier, w, h, q) {
    return new Promise(function (ok, ko) {
      var fr = new FileReader();
      fr.onerror = function () { ko(new Error("Lecture de l'image impossible.")); };
      fr.onload = function () {
        var im = new Image();
        im.onerror = function () { ko(new Error("Image illisible.")); };
        im.onload = function () {
          var c = document.createElement("canvas"); c.width = w; c.height = h;
          var s = Math.max(w / im.width, h / im.height), dw = im.width * s, dh = im.height * s;
          c.getContext("2d").drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
          ok(c.toDataURL("image/jpeg", q));
        };
        im.src = fr.result;
      };
      fr.readAsDataURL(fichier);
    });
  }

  // Un paiement lancé depuis une autre rubrique annule tout paiement d'événement resté en attente
  var ouvrirOrigine = window.openKkiapayWidget;
  window.openKkiapayWidget = function (o) {
    if (!o || o.contexte !== "evenement") S.paiement = null;
    return ouvrirOrigine.apply(this, arguments);
  };

  // ------------------------------------------------------------------ styles
  var css = document.createElement("style");
  css.textContent =
    ".evt-grille{display:grid;gap:12px}.evt-carte{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:var(--shadow)}" +
    ".evt-titre{font-family:Montserrat,Arial,sans-serif;font-weight:800;font-size:16px;color:var(--blue2);margin:6px 0}" +
    ".evt-meta{font-size:12px;color:var(--muted);line-height:1.6}.evt-chip{width:auto;padding:7px 12px;font-size:12px;border-radius:999px}" +
    ".evt-kpi{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:10px 0}.evt-kpi div{background:#f4f7fb;border-radius:12px;padding:10px;text-align:center}" +
    ".evt-kpi b{display:block;font-size:17px;color:var(--blue2)}.evt-kpi span{font-size:11px;color:var(--muted)}" +
    ".evt-cand{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}.evt-cand:last-child{border-bottom:0}" +
    ".evt-cand img,.evt-cand .evt-av{width:52px;height:52px;border-radius:12px;object-fit:cover;background:#eef3f9;flex-shrink:0;display:flex;align-items:center;justify-content:center}" +
    ".evt-ligne-form{border:1px dashed var(--line);border-radius:12px;padding:10px;margin-bottom:8px}.evt-ligne-form input{margin-bottom:6px}" +
    ".evt-2col{display:grid;grid-template-columns:1fr 1fr;gap:6px}.evt-billet{text-align:center;border:2px solid var(--blue2);border-radius:16px;padding:12px;margin-bottom:12px}" +
    ".evt-billet img{display:block;margin:8px auto}";
  document.head.appendChild(css);

  // ------------------------------------------------------------------ navigation
  function nav() {
    var o = [["decouvrir", "🎫 Découvrir"], ["votes", "🗳️ Votes"]];
    if (membreCourant) { o.splice(1, 0, ["billets", "🎟️ Mes billets"]); o.push(["organisateur", "🧑‍💼 Espace organisateur"]); }
    document.getElementById("evtNav").innerHTML = o.map(function (x) {
      return '<button class="small ' + (S.vue === x[0] ? "" : "secondary") + '" onclick="EVT.vue(\'' + x[0] + '\')">' + x[1] + "</button>";
    }).join("");
  }
  window.chargerEvenements = function () {
    nav();
    var v = S.vue;
    if (v === "decouvrir") vueDecouvrir();
    else if (v === "billets") vueBillets();
    else if (v === "votes") vueVotes();
    else if (v === "organisateur") vueOrganisateur();
  };
  E.vue = function (v) { S.vue = v; window.chargerEvenements(); };

  // ------------------------------------------------------------------ DÉCOUVRIR
  function vueDecouvrir() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getEvenements").then(function (r) { S.evenements = r.evenements || []; listeDecouvrir(); })
      .catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function listeDecouvrir() {
    var h = '<input type="text" id="evtRecherche" placeholder="🔎 Rechercher un événement…" value="' + esc(S.filtre) + '" oninput="EVT.filtrer(this.value)">' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">' +
      ["Tous"].concat(CATEGORIES).map(function (c) {
        return '<button class="evt-chip ' + (S.categorie === c ? "" : "secondary") + '" onclick="EVT.cat(\'' + c + '\')">' + esc(c) + "</button>";
      }).join("") + '</div><div id="evtListe" class="evt-grille"></div>';
    zone().innerHTML = h;
    cartes();
  }
  E.filtrer = function (v) { S.filtre = v; cartes(); };
  E.cat = function (c) { S.categorie = c; listeDecouvrir(); };
  function cartes() {
    var q = S.filtre.trim().toLowerCase();
    var liste = S.evenements.filter(function (e) {
      return (S.categorie === "Tous" || e.categorie === S.categorie) &&
        (!q || (e.titre + " " + e.lieu + " " + e.organisateur).toLowerCase().indexOf(q) !== -1);
    });
    var z = document.getElementById("evtListe");
    if (!liste.length) { z.innerHTML = '<p class="empty-state">Aucun événement à venir pour le moment.</p>'; return; }
    z.innerHTML = liste.map(function (e) {
      var prix = e.complet ? puce("Complet", "ko") : (e.prixMin > 0 ? puce("Dès " + fcfa(e.prixMin), "") : puce("Gratuit", "ok"));
      return '<div class="evt-carte evt-carte" onclick="EVT.ouvrir(\'' + jsq_(e.id) + '\')" style="cursor:pointer;">' +
        (e.image ? '<img class="evt-img" src="' + e.image + '" alt="">' : "") +
        puce(e.categorie, "") + " " + prix +
        '<div class="evt-titre">' + esc(e.titre) + '</div><div class="evt-meta">📅 ' + quand(e.dateDebut) + "<br>📍 " + esc(e.lieu) + "</div></div>";
    }).join("");
  }

  // ------------------------------------------------------------------ DÉTAIL + BILLETTERIE
  E.ouvrir = function (id) {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getEvenement", id, code()).then(function (r) {
      if (!r.succes) { zone().innerHTML = '<p class="error">' + esc(r.message) + "</p>"; return; }
      S.detail = r.evenement; S.panier = {}; detail();
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  };
  function detail() {
    var e = S.detail;
    var h = '<button class="secondary small" onclick="EVT.vue(\'decouvrir\')">← Retour</button>' +
      '<div class="card" style="margin-top:10px;">' + (e.image ? '<img class="evt-img" src="' + e.image + '" alt="">' : "") +
      puce(e.categorie, "") + " " + puceStatut(e.statut) +
      '<div class="evt-titre" style="font-size:20px;">' + esc(e.titre) + "</div>" +
      '<div class="evt-meta">📅 ' + quand(e.dateDebut) + " → " + quand(e.dateFin) + "<br>📍 " + esc(e.lieu) + (e.adresse ? " — " + esc(e.adresse) : "") +
      "<br>👤 Organisé par " + esc(e.organisateur) + "</div>" +
      '<p style="white-space:pre-wrap;font-size:14px;line-height:1.6;">' + esc(e.description) + "</p></div>";
    if (e.statut !== "Publié") h += '<div class="form-public-note">Cet événement n\'est pas encore public (aperçu réservé à l\'organisateur).</div>';
    else if (!e.inscriptionOuverte) h += '<div class="form-public-note">Les inscriptions sont closes.</div>';
    else h += '<div class="card"><p class="field-label">Billets</p><div id="evtBillets"></div></div>';
    zone().innerHTML = h;
    if (e.statut === "Publié" && e.inscriptionOuverte) billets();
  }
  function totalPanier() {
    var t = 0, n = 0;
    S.detail.billets.forEach(function (b) { var q = S.panier[b.id] || 0; t += q * b.prix; n += q; });
    return { total: t, nb: n };
  }
  function billets() {
    var e = S.detail;
    var lignes = e.billets.map(function (b) {
      var q = S.panier[b.id] || 0, plein = b.restants === 0;
      var max = Math.min(10, b.restants == null ? 10 : b.restants);
      return '<div class="evt-ligne"><div><div class="item-nom">' + esc(b.nom) + "</div>" +
        '<div class="item-desc">' + (b.prix > 0 ? fcfa(b.prix) : "Gratuit") + (b.restants != null ? " · " + (plein ? "complet" : b.restants + " place(s)") : "") + "</div>" +
        (b.description ? '<div class="item-desc">' + esc(b.description) + "</div>" : "") + "</div>" +
        (plein ? puce("Complet", "ko") :
          '<div class="evt-qte"><button class="secondary" onclick="EVT.qte(\'' + jsq_(b.id) + "'," + (-1) + "," + max + ')">−</button><span>' + q +
          '</span><button class="secondary" onclick="EVT.qte(\'' + jsq_(b.id) + "'," + 1 + "," + max + ')">+</button></div>') + "</div>";
    }).join("");
    var t = totalPanier();
    document.getElementById("evtBillets").innerHTML = lignes +
      '<div style="margin-top:12px;font-weight:800;color:var(--blue2);">Total : ' + (t.total > 0 ? fcfa(t.total) : (t.nb ? "Gratuit" : "—")) + "</div>" +
      '<button class="flame full-mt" ' + (t.nb ? "" : "disabled") + ' onclick="EVT.reserver()">' + (t.total > 0 ? "💳 Payer " + fcfa(t.total) : "✅ M'inscrire") + "</button>" +
      '<p class="item-desc" style="margin-top:8px;">Paiement par Mobile Money ou carte bancaire (FedaPay). Vous recevrez un QR code par billet.</p>';
  }
  E.qte = function (id, delta, max) {
    var q = Math.max(0, Math.min(max, (S.panier[id] || 0) + delta));
    var total = 0; S.detail.billets.forEach(function (b) { total += (b.id === id ? q : (S.panier[b.id] || 0)); });
    if (total > 10) return;
    S.panier[id] = q; billets();
  };
  E.reserver = function () {
    if (!besoinMembre()) return;
    var lignes = [];
    Object.keys(S.panier).forEach(function (id) { if (S.panier[id] > 0) lignes.push({ typeId: id, quantite: S.panier[id] }); });
    if (!lignes.length) return;
    appelServeur("creerCommande", code(), S.detail.id, lignes).then(function (r) {
      if (!r.succes) { alert(r.message || "Réservation impossible."); return; }
      if (r.gratuit) { montrerBillets(r.billets, "✅ Inscription confirmée"); return; }
      payer({ type: "billets", commandeId: r.commandeId }, r.montant);
    }).catch(echec);
  };
  function payer(infos, montant) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    S.paiement = infos;
    openKkiapayWidget({ amount: montant, api_key: configApp.paiementPublicKey, sandbox: false, data: code(), contexte: "evenement", metadata: { commande: infos.commandeId } });
  }
  addKkiapayListener("success", function (resp) {
    var p = S.paiement;
    if (!p) return;
    S.paiement = null;
    var tid = resp.transactionId || (resp.detail && resp.detail.transactionId);
    var m = modal('<div class="loading">Vérification du paiement…</div>');
    var appel = p.type === "vote" ? appelServeur("confirmerCommandeVote", code(), p.commandeId, tid) : appelServeur("confirmerCommande", code(), p.commandeId, tid);
    appel.then(function (r) {
      m.close();
      if (!r.succes) { alert(r.message || "Le paiement n'a pas pu être vérifié. Contactez un responsable."); return; }
      if (p.type === "vote") { alert("✅ Vote(s) enregistré(s). Merci !"); S.vue = "votes"; window.chargerEvenements(); }
      else montrerBillets(r.billets, "✅ Paiement confirmé");
    }).catch(function (e) { m.close(); echec(e); });
  });

  function htmlBillet(b) {
    return '<div class="evt-billet"><div class="item-nom">' + esc(b.titre) + "</div>" +
      '<div class="item-desc">' + quand(b.dateDebut) + " · " + esc(b.lieu) + "</div>" +
      '<div style="margin-top:6px;">' + puce(b.type, "") + " " + (b.statut === "Utilisé" ? puce("Déjà utilisé", "att") : b.statut === "Annulé" ? puce("Annulé", "ko") : puce("Valide", "ok")) + "</div>" +
      '<img src="' + qrUrl(b.qr, 200) + '" width="200" height="200" alt="QR code du billet">' +
      '<div class="item-desc">' + esc(b.porteur) + " · " + esc(b.id) + "</div></div>";
  }
  function montrerBillets(liste, titre) {
    modal('<div class="item-nom" style="font-size:16px;margin-bottom:10px;">' + esc(titre) + "</div>" + (liste || []).map(htmlBillet).join("") +
      '<p class="item-desc">Présentez ce QR code à l\'entrée. Retrouvez-le à tout moment dans « Mes billets ».</p>' +
      '<button class="flame full-mt" onclick="EVT.fermer();EVT.vue(\'billets\')">Voir mes billets</button>', true);
  }

  // ------------------------------------------------------------------ MES BILLETS
  function vueBillets() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesBillets", code()).then(function (r) {
      var l = r.billets || [];
      zone().innerHTML = l.length ? l.map(htmlBillet).join("") : '<p class="empty-state">Vous n\'avez pas encore de billet.</p>';
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }

  // ------------------------------------------------------------------ VOTES
  function vueVotes() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    var p = [appelServeur("getConcours")];
    if (membreCourant) p.push(appelServeur("getMesVotes", code()));
    Promise.all(p).then(function (r) {
      S.concours = r[0].concours || []; S.mesVotes = (r[1] && r[1].votes) || {};
      zone().innerHTML = S.concours.length ? S.concours.map(carteConcours).join("") : '<p class="empty-state">Aucun vote en cours pour le moment.</p>';
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function barres(c) {
    var max = Math.max.apply(null, c.candidats.map(function (x) { return x.votes || 0; }).concat([1]));
    return max;
  }
  function carteConcours(c) {
    var utilises = S.mesVotes[c.id] || 0, restants = Math.max(0, c.votesParMembre - utilises);
    var etat = c.ouvert ? puce("Vote ouvert", "ok") : puce("Vote clos", "ko");
    var max = c.scoresVisibles ? barres(c) : 1;
    var h = '<div class="card">' + puce(c.type, "") + " " + etat + (c.prixVote > 0 ? " " + puce(fcfa(c.prixVote) + " / vote", "att") : "") +
      '<div class="evt-titre">' + esc(c.titre) + "</div>" +
      (c.description ? '<p class="item-desc" style="white-space:pre-wrap;">' + esc(c.description) + "</p>" : "") +
      '<div class="evt-meta">' + (c.dateFin ? "⏰ Fin : " + quand(c.dateFin) + "<br>" : "") +
      (c.prixVote > 0 ? "" : (membreCourant ? "Il vous reste " + restants + " vote(s)." : "1 vote minimum par membre connecté.")) +
      (c.scoresVisibles ? "<br>" + c.totalVotes + " vote(s) au total" : "<br>Résultats visibles à la clôture") + "</div>";
    h += c.candidats.map(function (x) {
      var pct = c.scoresVisibles ? Math.round(((x.votes || 0) / Math.max(1, c.totalVotes)) * 100) : 0;
      var peutVoter = c.ouvert && (c.prixVote > 0 || restants > 0);
      return '<div class="evt-cand">' + (x.image ? '<img src="' + x.image + '" alt="">' : '<div class="evt-av">👤</div>') +
        '<div style="flex:1;min-width:0;"><div class="item-nom">' + esc(x.nom) + "</div>" +
        (x.description ? '<div class="item-desc">' + esc(x.description) + "</div>" : "") +
        (c.scoresVisibles ? '<div class="evt-barre" style="margin-top:6px;"><div style="width:' + Math.round((x.votes || 0) / max * 100) + '%"></div></div><div class="item-desc">' + x.votes + " vote(s) · " + pct + " %</div>" : "") + "</div>" +
        (peutVoter ? '<button class="flame small" style="width:auto;" onclick="EVT.voter(\'' + jsq_(c.id) + "','" + jsq_(x.id) + '\')">' + (c.prixVote > 0 ? "Voter" : "🗳️ Voter") + "</button>" : "") + "</div>";
    }).join("");
    return h + "</div>";
  }
  function trouverCandidat(cid, xid) {
    var c = S.concours.find(function (y) { return y.id === cid; });
    return { c: c, x: c && c.candidats.find(function (y) { return y.id === xid; }) };
  }
  E.voter = function (cid, xid) {
    if (!besoinMembre()) return;
    var t = trouverCandidat(cid, xid);
    if (!t.c || !t.x) return;
    if (t.c.prixVote > 0) {
      var m = modal('<div class="item-nom">Voter pour « ' + esc(t.x.nom) + ' »</div><p class="item-desc">' + fcfa(t.c.prixVote) + ' par vote.</p>' +
        '<label class="field-label">Nombre de votes</label><input id="evtNbVotes" type="number" min="1" max="100" value="1" oninput="EVT.majTotalVote(' + t.c.prixVote + ')">' +
        '<div id="evtTotalVote" class="item-nom" style="margin-bottom:10px;">Total : ' + fcfa(t.c.prixVote) + '</div>' +
        '<button class="flame" onclick="EVT.payerVote(\'' + jsq_(cid) + "','" + jsq_(xid) + '\')">💳 Payer et voter</button>');
      return;
    }
    confirmerApp_("Voter pour « " + t.x.nom + " » ? Ce vote est définitif.", function () {
      appelServeur("voter", code(), cid, xid).then(function (r) {
        if (!r.succes) { alert(r.message || "Vote impossible."); return; }
        alert("✅ Vote enregistré. Il vous reste " + r.restants + " vote(s)."); vueVotes();
      }).catch(echec);
    });
  };
  E.majTotalVote = function (prix) {
    var n = Math.max(1, Math.min(100, parseInt(document.getElementById("evtNbVotes").value, 10) || 1));
    document.getElementById("evtTotalVote").textContent = "Total : " + fcfa(n * prix);
  };
  E.payerVote = function (cid, xid) {
    var n = Math.max(1, Math.min(100, parseInt(document.getElementById("evtNbVotes").value, 10) || 1));
    appelServeur("creerCommandeVote", code(), cid, xid, n).then(function (r) {
      if (!r.succes) { alert(r.message || "Impossible de lancer le paiement."); return; }
      E.fermer();
      payer({ type: "vote", commandeId: r.commandeId }, r.montant);
    }).catch(echec);
  };

  // ------------------------------------------------------------------ ESPACE ORGANISATEUR
  function vueOrganisateur() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesEvenements", code()).then(function (r) {
      S.mesEvts = r;
      if (!r.organisateur && !(r.controles || []).length) {
        zone().innerHTML = '<div class="card"><div class="item-nom">🧑‍💼 Devenir organisateur</div><p class="item-desc">Vous pouvez organiser des concerts, conférences, séminaires et festivals, vendre des billets et lancer des votes. Contactez l\'administration pour obtenir le statut d\'organisateur.</p>' +
          '<button class="secondary" onclick="afficherEcranContact()">📞 Contacter l\'administration</button></div>';
        return;
      }
      orgPanneau();
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function orgPanneau() {
    var r = S.mesEvts;
    var onglets = [["evenements", "Événements"], ["concours", "Votes"], ["revenus", "💰 Revenus"], ["scan", "📷 Contrôle"]];
    if (!r.organisateur) onglets = [["scan", "📷 Contrôle"]], S.orgVue = "scan";
    var h = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">' + onglets.map(function (o) {
      return '<button class="evt-chip ' + (S.orgVue === o[0] ? "" : "secondary") + '" onclick="EVT.org(\'' + o[0] + '\')">' + o[1] + "</button>";
    }).join("") + '</div><div id="evtOrg"></div>';
    zone().innerHTML = h;
    var v = S.orgVue;
    if (v === "evenements") orgEvenements();
    else if (v === "concours") orgConcours();
    else if (v === "revenus") orgRevenus();
    else orgScan();
  }
  E.org = function (v) { S.orgVue = v; orgPanneau(); };
  function orgZone() { return document.getElementById("evtOrg"); }

  // ----- Mes événements
  function orgEvenements() {
    var l = S.mesEvts.evenements || [];
    var h = '<button class="flame" onclick="EVT.nouveau()">＋ Créer un événement</button><div style="margin-top:12px;" class="evt-grille">';
    h += l.length ? l.map(function (e) {
      var peutSoumettre = e.statut === "Brouillon" || e.statut === "Refusé";
      return '<div class="evt-carte">' + puceStatut(e.statut) + " " + puce(e.categorie, "") +
        '<div class="evt-titre">' + esc(e.titre) + '</div><div class="evt-meta">📅 ' + quand(e.dateDebut) + "<br>📍 " + esc(e.lieu) + "</div>" +
        (e.statut === "Refusé" && e.motifRefus ? '<div class="error" style="margin:6px 0;">Motif du refus : ' + esc(e.motifRefus) + "</div>" : "") +
        '<div class="evt-kpi"><div><b>' + e.vendus + "</b><span>billets</span></div><div><b>" + e.entrees + "</b><span>entrées</span></div><div><b>" + fcfa(e.brut) + "</b><span>ventes</span></div><div><b>" + fcfa(e.net) + "</b><span>net</span></div></div>" +
        '<div class="evt-actions">' +
        '<button class="secondary" onclick="EVT.modifier(\'' + jsq_(e.id) + '\')">✏️ Modifier</button>' +
        (peutSoumettre ? '<button onclick="EVT.soumettre(\'' + jsq_(e.id) + '\')">📤 Soumettre</button>' : '<button class="secondary" onclick="EVT.voir(\'' + jsq_(e.id) + '\')">👁 Voir</button>') +
        '<button class="secondary" onclick="EVT.stats(\'' + jsq_(e.id) + '\')">📊 Statistiques</button>' +
        '<button class="secondary" onclick="EVT.participants(\'' + jsq_(e.id) + "','" + jsq_(e.titre) + '\')">👥 Participants</button>' +
        '<button class="secondary" onclick="EVT.controleurs(\'' + jsq_(e.id) + '\')">🛂 Contrôleurs</button>' +
        (e.statut !== "Annulé" ? '<button class="danger-outline" onclick="EVT.annuler(\'' + jsq_(e.id) + '\')">Annuler</button>' : "") + "</div></div>";
    }).join("") : '<p class="empty-state">Vous n\'avez pas encore créé d\'événement.</p>';
    orgZone().innerHTML = h + "</div>";
  }
  E.voir = function (id) { S.vue = "decouvrir"; nav(); E.ouvrir(id); };
  E.soumettre = function (id) {
    confirmerApp_("Envoyer cet événement à l'administration pour vérification ? Il sera publié après validation.", function () {
      appelServeur("soumettreEvenement", code(), id).then(function () { vueOrganisateur(); }).catch(echec);
    });
  };
  E.annuler = function (id) {
    confirmerApp_("Annuler cet événement ? Il ne sera plus visible. Les billets déjà vendus devront être remboursés par vos soins.", function () {
      appelServeur("annulerEvenement", code(), id).then(function () { vueOrganisateur(); }).catch(echec);
    });
  };

  // ----- Formulaire événement
  E.nouveau = function () {
    S.form = { id: "", image: "", billets: [{ nom: "Entrée", description: "", prix: 0, quota: 0 }] };
    formEvenement({ titre: "", categorie: "Concert", description: "", lieu: "", adresse: "", dateDebut: "", dateFin: "", inscriptionOuverte: true });
  };
  E.modifier = function (id) {
    var e = (S.mesEvts.evenements || []).find(function (x) { return x.id === id; });
    if (!e) return;
    S.form = { id: e.id, image: e.image || "", billets: e.billets.map(function (b) { return { id: b.id, nom: b.nom, description: b.description, prix: b.prix, quota: b.quota, vendus: b.vendus }; }) };
    formEvenement(e);
  };
  function formEvenement(e) {
    var h = '<div class="item-nom" style="font-size:16px;">' + (S.form.id ? "Modifier l'événement" : "Nouvel événement") + "</div>" +
      '<label class="field-label" style="margin-top:10px;">Titre *</label><input id="efTitre" maxlength="120" value="' + esc(e.titre) + '">' +
      '<label class="field-label">Catégorie</label><select id="efCat">' + CATEGORIES.map(function (c) { return '<option ' + (c === e.categorie ? "selected" : "") + ">" + c + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Description *</label><textarea id="efDesc" rows="5" maxlength="4000">' + esc(e.description) + "</textarea>" +
      '<label class="field-label">Lieu *</label><input id="efLieu" maxlength="150" value="' + esc(e.lieu) + '">' +
      '<label class="field-label">Adresse</label><input id="efAdr" maxlength="200" value="' + esc(e.adresse) + '">' +
      '<div class="evt-2col"><div><label class="field-label">Début *</label><input id="efDebut" type="datetime-local" value="' + esc(e.dateDebut) + '"></div>' +
      '<div><label class="field-label">Fin *</label><input id="efFin" type="datetime-local" value="' + esc(e.dateFin) + '"></div></div>' +
      '<label class="field-label">Affiche (image)</label><div id="efApercu">' + (S.form.image ? '<img class="evt-img" src="' + S.form.image + '">' : "") + "</div>" +
      '<label class="file-btn-label">🖼️ Choisir une image<input type="file" accept="image/*" style="display:none;" onchange="EVT.imageEvt(event)"></label>' +
      '<label style="display:flex;gap:8px;align-items:center;margin:12px 0;font-size:13px;"><input type="checkbox" id="efOuvert" style="width:auto;margin:0;" ' + (e.inscriptionOuverte !== false ? "checked" : "") + "> Inscriptions ouvertes</label>" +
      '<p class="field-label">Billets (laissez le prix à 0 pour une inscription gratuite)</p><div id="efBillets"></div>' +
      '<button class="secondary small" onclick="EVT.ajouterBillet()">＋ Ajouter un type de billet</button>' +
      '<div id="efErreur" class="error" style="display:none;margin-top:10px;"></div>' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.enregistrer()">Enregistrer</button></div>';
    modal(h, true);
    lignesBillets();
  }
  function lignesBillets() {
    document.getElementById("efBillets").innerHTML = S.form.billets.map(function (b, i) {
      if (b.supprimer) return "";
      return '<div class="evt-ligne-form"><input placeholder="Nom (ex : VIP, Standard)" maxlength="60" value="' + esc(b.nom) + '" oninput="EVT.bm(' + i + ",'nom',this.value)\">" +
        '<input placeholder="Description (facultative)" maxlength="200" value="' + esc(b.description) + '" oninput="EVT.bm(' + i + ",'description',this.value)\">" +
        '<div class="evt-2col"><input type="number" min="0" placeholder="Prix FCFA" value="' + (b.prix || 0) + '" ' + (b.vendus ? "disabled title=\"Des billets sont vendus\"" : "") + ' oninput="EVT.bm(' + i + ",'prix',this.value)\">" +
        '<input type="number" min="0" placeholder="Places (0 = illimité)" value="' + (b.quota || 0) + '" oninput="EVT.bm(' + i + ",'quota',this.value)\"></div>" +
        '<button class="danger-outline small" onclick="EVT.rm(' + i + ')">Retirer</button>' + (b.vendus ? ' <span class="item-desc">' + b.vendus + " vendu(s)</span>" : "") + "</div>";
    }).join("");
  }
  E.bm = function (i, champ, v) { S.form.billets[i][champ] = (champ === "prix" || champ === "quota") ? Number(v) || 0 : v; };
  E.rm = function (i) { var b = S.form.billets[i]; if (b.id) b.supprimer = true; else S.form.billets.splice(i, 1); lignesBillets(); };
  E.ajouterBillet = function () { S.form.billets.push({ nom: "", description: "", prix: 0, quota: 0 }); lignesBillets(); };
  E.imageEvt = function (ev) {
    var f = ev.target.files[0]; if (!f) return;
    reduireImage(f, 960, 540, 0.72).then(function (d) {
      if (d.length > 390000) { alert("Image trop lourde, choisissez-en une plus simple."); return; }
      S.form.image = d; document.getElementById("efApercu").innerHTML = '<img class="evt-img" src="' + d + '">';
    }).catch(echec);
  };
  E.enregistrer = function () {
    var err = document.getElementById("efErreur"); err.style.display = "none";
    var d = {
      id: S.form.id || undefined, titre: document.getElementById("efTitre").value, categorie: document.getElementById("efCat").value,
      description: document.getElementById("efDesc").value, lieu: document.getElementById("efLieu").value, adresse: document.getElementById("efAdr").value,
      dateDebut: document.getElementById("efDebut").value, dateFin: document.getElementById("efFin").value, image: S.form.image,
      inscriptionOuverte: document.getElementById("efOuvert").checked, billets: S.form.billets
    };
    appelServeur("enregistrerEvenement", code(), d).then(function (r) {
      if (r && r.succes === false) throw new Error(r.message);
      E.fermer(); vueOrganisateur();
      if (!S.form.id) alert("✅ Événement enregistré en brouillon. Appuyez sur « Soumettre » pour demander sa publication.");
    }).catch(function (e) { err.textContent = e.message; err.style.display = "block"; });
  };

  // ----- Statistiques / participants / contrôleurs
  E.stats = function (id) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getStatsEvenement", code(), id).then(function (r) {
      var maxJ = Math.max.apply(null, r.parJour.map(function (j) { return j.montant || j.billets; }).concat([1]));
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">📊 ' + esc(r.evenement.titre) + "</div>" +
        '<div class="evt-kpi"><div><b>' + r.totalBillets + "</b><span>billets</span></div><div><b>" + r.entrees + "</b><span>entrées</span></div>" +
        "<div><b>" + fcfa(r.brut) + "</b><span>ventes brutes</span></div><div><b>" + fcfa(r.net) + "</b><span>net organisateur</span></div></div>" +
        '<div class="item-desc">Commission de la plateforme : ' + fcfa(r.commission) + "</div>" +
        '<p class="field-label" style="margin-top:12px;">Par type de billet</p>' + r.parType.map(function (t) {
          var pct = t.quota ? Math.round(t.vendus / t.quota * 100) : null;
          return '<div style="margin-bottom:10px;"><div class="item-nom">' + esc(t.nom) + " · " + (t.prix ? fcfa(t.prix) : "Gratuit") + '</div><div class="evt-barre"><div style="width:' + (pct == null ? 100 : pct) + '%"></div></div>' +
            '<div class="item-desc">' + t.vendus + (t.quota ? " / " + t.quota : "") + " vendu(s) · " + t.entrees + " entrée(s) · " + fcfa(t.revenu) + "</div></div>";
        }).join("") +
        '<p class="field-label" style="margin-top:12px;">Ventes par jour (30 derniers jours)</p>' +
        (r.parJour.length ? r.parJour.map(function (j) {
          return '<div class="item-desc">' + esc(j.jour) + " — " + j.billets + " billet(s) · " + fcfa(j.montant) + '</div><div class="evt-barre" style="margin-bottom:6px;"><div style="width:' + Math.round((j.montant || j.billets) / maxJ * 100) + '%"></div></div>';
        }).join("") : '<p class="item-desc">Aucune vente pour le moment.</p>') +
        '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.participants = function (id, titre) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getParticipants", code(), id).then(function (r) {
      S.liste = r.participants;
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">👥 ' + esc(titre) + " — " + r.participants.length + ' billet(s)</div>' +
        '<button class="secondary small full-mt" onclick="EVT.csv(\'' + jsq_(titre) + '\')">⬇️ Exporter en CSV</button>' +
        '<table class="mini-table" style="margin-top:10px;"><tr><th>Nom</th><th>Billet</th><th>Téléphone</th><th>Statut</th></tr>' +
        r.participants.map(function (p) { return "<tr><td>" + esc(p.nom) + "</td><td>" + esc(p.type) + "</td><td>" + esc(p.telephone || "") + "</td><td>" + esc(p.statut) + "</td></tr>"; }).join("") +
        '</table><button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.csv = function (titre) {
    var cell = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
    var lignes = [["Nom", "Code membre", "Type de billet", "Prix", "Statut", "Téléphone", "E-mail", "Achat", "Entrée"]].concat((S.liste || []).map(function (p) {
      return [p.nom, p.code, p.type, p.prix, p.statut, p.telephone, p.email, p.achat, p.entree];
    }));
    var blob = new Blob(["\ufeff" + lignes.map(function (l) { return l.map(cell).join(";"); }).join("\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "participants-" + titre.replace(/[^\w]+/g, "_") + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
  };
  E.controleurs = function (id) {
    var m = modal('<div class="loading">Chargement…</div>');
    var rendre = function (liste) {
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">🛂 Contrôleurs d\'entrée</div><p class="item-desc">Ces membres peuvent scanner les billets de cet événement.</p>' +
        (liste.length ? liste.map(function (c) { return '<div class="evt-ligne"><div>' + esc(c.nom) + '<div class="item-desc">' + esc(c.code) + '</div></div><button class="danger-outline small" onclick="EVT.ctrl(\'' + jsq_(id) + "','" + jsq_(c.code) + "',false)\">Retirer</button></div>"; }).join("") : '<p class="item-desc">Aucun contrôleur pour le moment.</p>') +
        '<label class="field-label" style="margin-top:12px;">Ajouter par code membre (MB-…)</label><input id="ctrlCode" placeholder="MB-XXXXXXXX">' +
        '<button class="flame" onclick="EVT.ctrl(\'' + jsq_(id) + "',document.getElementById('ctrlCode').value,true)\">Ajouter</button>" +
        '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    };
    S.rendreCtrl = rendre;
    appelServeur("getControleurs", code(), id).then(function (r) { rendre(r.controleurs); }).catch(function (e) { m.close(); echec(e); });
  };
  E.ctrl = function (id, codeCtrl, ajouter) {
    if (!String(codeCtrl).trim()) return;
    appelServeur("definirControleur", code(), id, codeCtrl, ajouter).then(function () {
      return appelServeur("getControleurs", code(), id);
    }).then(function (r) { S.rendreCtrl(r.controleurs); }).catch(echec);
  };

  // ----- Concours / votes (organisateur)
  function orgConcours() {
    orgZone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesConcours", code()).then(function (r) {
      S.mesConcours = r.concours || [];
      var h = '<button class="flame" onclick="EVT.nouveauConcours()">＋ Créer un vote (concours, élection, award)</button><div style="margin-top:12px;">';
      h += S.mesConcours.length ? S.mesConcours.map(function (c) {
        var max = barres(c);
        return '<div class="card">' + puce(c.type, "") + " " + (c.statut === "Ouvert" ? (c.ouvert ? puce("Ouvert", "ok") : puce("Terminé (date)", "ko")) : c.statut === "Clos" ? puce("Clos", "ko") : puce("Brouillon", "")) +
          (c.prixVote > 0 ? " " + puce(fcfa(c.prixVote) + " / vote", "att") : "") +
          '<div class="evt-titre">' + esc(c.titre) + '</div><div class="item-desc">' + c.totalVotes + " vote(s)" + (c.dateFin ? " · fin " + quand(c.dateFin) : "") + "</div>" +
          c.candidats.map(function (x) {
            return '<div class="evt-cand"><div style="flex:1;"><div class="item-nom">' + esc(x.nom) + '</div><div class="evt-barre"><div style="width:' + Math.round(x.votes / max * 100) + '%"></div></div></div><b>' + x.votes + "</b></div>";
          }).join("") +
          '<div class="evt-actions"><button class="secondary" onclick="EVT.modifierConcours(\'' + jsq_(c.id) + '\')">✏️ Modifier</button>' +
          (c.statut !== "Ouvert" ? '<button onclick="EVT.statutConcours(\'' + jsq_(c.id) + '\',\'Ouvert\')">▶ Ouvrir</button>' : '<button class="danger-outline" onclick="EVT.statutConcours(\'' + jsq_(c.id) + '\',\'Clos\')">⏹ Clore</button>') + "</div></div>";
      }).join("") : '<p class="empty-state">Aucun vote créé pour le moment.</p>';
      orgZone().innerHTML = h + "</div>";
    }).catch(function (e) { afficherErreurZone("evtOrg", e); });
  }
  E.statutConcours = function (id, statut) {
    var go = function () { appelServeur("changerStatutConcours", code(), id, statut).then(orgConcours).catch(echec); };
    if (statut === "Clos") confirmerApp_("Clore ce vote ? Plus personne ne pourra voter.", go); else go();
  };
  E.nouveauConcours = function () {
    S.cform = { id: "", candidats: [{ nom: "", description: "", image: "" }, { nom: "", description: "", image: "" }] };
    formConcours({ titre: "", description: "", type: "Concours", dateFin: "", votesParMembre: 1, prixVote: 0, afficherResultats: "Direct", evenementId: "" });
  };
  E.modifierConcours = function (id) {
    var c = S.mesConcours.find(function (x) { return x.id === id; });
    if (!c) return;
    S.cform = { id: c.id, candidats: c.candidats.map(function (x) { return { id: x.id, nom: x.nom, description: x.description, image: x.image, votes: x.votes }; }), aDesVotes: c.totalVotes > 0 };
    formConcours(c);
  };
  function formConcours(c) {
    var evts = (S.mesEvts && S.mesEvts.evenements) || [];
    var h = '<div class="item-nom" style="font-size:16px;">' + (S.cform.id ? "Modifier le vote" : "Nouveau vote") + "</div>" +
      '<label class="field-label" style="margin-top:10px;">Titre *</label><input id="cfTitre" maxlength="120" value="' + esc(c.titre) + '">' +
      '<label class="field-label">Type</label><select id="cfType">' + TYPES_CONCOURS.map(function (t) { return "<option " + (t === c.type ? "selected" : "") + ">" + t + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Description</label><textarea id="cfDesc" rows="3" maxlength="2000">' + esc(c.description) + "</textarea>" +
      '<label class="field-label">Événement lié (facultatif)</label><select id="cfEvt"><option value="">Aucun</option>' + evts.map(function (e) { return '<option value="' + esc(e.id) + '" ' + (e.id === c.evenementId ? "selected" : "") + ">" + esc(e.titre) + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Fin du vote (facultatif)</label><input id="cfFin" type="datetime-local" value="' + esc(c.dateFin) + '">' +
      '<div class="evt-2col"><div><label class="field-label">Votes par membre</label><input id="cfNb" type="number" min="1" max="100" value="' + (c.votesParMembre || 1) + '"></div>' +
      '<div><label class="field-label">Prix du vote (0 = gratuit)</label><input id="cfPrix" type="number" min="0" value="' + (c.prixVote || 0) + '" ' + (S.cform.aDesVotes ? "disabled" : "") + "></div></div>" +
      '<label class="field-label">Résultats</label><select id="cfRes"><option value="Direct" ' + (c.afficherResultats !== "Apres" ? "selected" : "") + '>Visibles en direct</option><option value="Apres" ' + (c.afficherResultats === "Apres" ? "selected" : "") + ">Visibles après la clôture</option></select>" +
      '<p class="field-label" style="margin-top:12px;">Candidats (2 minimum)</p><div id="cfCands"></div>' +
      '<button class="secondary small" onclick="EVT.ajouterCandidat()">＋ Ajouter un candidat</button>' +
      '<div id="cfErreur" class="error" style="display:none;margin-top:10px;"></div>' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.enregistrerConcours()">Enregistrer</button></div>';
    modal(h, true);
    lignesCandidats();
  }
  function lignesCandidats() {
    document.getElementById("cfCands").innerHTML = S.cform.candidats.map(function (x, i) {
      if (x.supprimer) return "";
      return '<div class="evt-ligne-form"><div style="display:flex;gap:8px;align-items:center;">' +
        (x.image ? '<img src="' + x.image + '" style="width:44px;height:44px;border-radius:10px;object-fit:cover;">' : '<div class="evt-av" style="width:44px;height:44px;border-radius:10px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">👤</div>') +
        '<label class="file-btn-label" style="margin:0;">Photo<input type="file" accept="image/*" style="display:none;" onchange="EVT.imageCand(event,' + i + ')"></label></div>' +
        '<input placeholder="Nom du candidat *" maxlength="80" value="' + esc(x.nom) + '" oninput="EVT.cm(' + i + ",'nom',this.value)\" style=\"margin-top:6px;\">" +
        '<input placeholder="Description (facultative)" maxlength="300" value="' + esc(x.description) + '" oninput="EVT.cm(' + i + ",'description',this.value)\">" +
        '<button class="danger-outline small" onclick="EVT.rc(' + i + ')">Retirer</button>' + (x.votes ? ' <span class="item-desc">' + x.votes + " vote(s)</span>" : "") + "</div>";
    }).join("");
  }
  E.cm = function (i, champ, v) { S.cform.candidats[i][champ] = v; };
  E.rc = function (i) { var x = S.cform.candidats[i]; if (x.id) x.supprimer = true; else S.cform.candidats.splice(i, 1); lignesCandidats(); };
  E.ajouterCandidat = function () { S.cform.candidats.push({ nom: "", description: "", image: "" }); lignesCandidats(); };
  E.imageCand = function (ev, i) {
    var f = ev.target.files[0]; if (!f) return;
    reduireImage(f, 320, 320, 0.7).then(function (d) { S.cform.candidats[i].image = d; lignesCandidats(); }).catch(echec);
  };
  E.enregistrerConcours = function () {
    var err = document.getElementById("cfErreur"); err.style.display = "none";
    var d = {
      id: S.cform.id || undefined, titre: document.getElementById("cfTitre").value, type: document.getElementById("cfType").value,
      description: document.getElementById("cfDesc").value, evenementId: document.getElementById("cfEvt").value, dateFin: document.getElementById("cfFin").value,
      votesParMembre: document.getElementById("cfNb").value, prixVote: document.getElementById("cfPrix").value, afficherResultats: document.getElementById("cfRes").value,
      candidats: S.cform.candidats
    };
    appelServeur("enregistrerConcours", code(), d).then(function () { E.fermer(); orgConcours(); })
      .catch(function (e) { err.textContent = e.message; err.style.display = "block"; });
  };

  // ----- Revenus (organisateur)
  function htmlRevenus(r, titre) {
    return (titre ? '<div class="item-nom">' + esc(titre) + "</div>" : "") +
      '<div class="evt-kpi"><div><b>' + fcfa(r.brut) + "</b><span>ventes brutes</span></div><div><b>" + fcfa(r.commission) + "</b><span>commission plateforme</span></div>" +
      "<div><b>" + fcfa(r.net) + "</b><span>net</span></div><div><b>" + fcfa(r.solde) + "</b><span>solde à recevoir</span></div></div>" +
      '<p class="field-label">Reversements reçus (' + fcfa(r.verse) + ")</p>" +
      (r.reversements.length ? r.reversements.map(function (x) { return '<div class="evt-ligne"><div>' + fcfa(x.montant) + '<div class="item-desc">' + quand(x.date) + (x.note ? " · " + esc(x.note) : "") + "</div></div></div>"; }).join("") : '<p class="item-desc">Aucun reversement pour le moment.</p>');
  }
  function orgRevenus() {
    orgZone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getRevenus", code()).then(function (r) {
      orgZone().innerHTML = '<div class="card">' + htmlRevenus(r) + '<p class="item-desc">Le solde vous est reversé par l\'administration (Mobile Money ou virement).</p></div>';
    }).catch(function (e) { afficherErreurZone("evtOrg", e); });
  }

  // ----- Contrôle d'entrée (scan des QR codes)
  function orgScan() {
    var r = S.mesEvts, liste = (r.evenements || []).filter(function (e) { return e.statut === "Publié"; }).concat(r.controles || []);
    orgZone().innerHTML = liste.length ? '<p class="item-desc">Choisissez l\'événement dont vous contrôlez l\'entrée :</p>' + liste.map(function (e) {
      return '<div class="evt-carte" style="margin-bottom:10px;"><div class="item-nom">' + esc(e.titre) + '</div><div class="evt-meta">' + quand(e.dateDebut) + '</div><button class="flame full-mt" onclick="EVT.scanner(\'' + jsq_(e.id) + "','" + jsq_(e.titre) + '\')">📷 Scanner les billets</button></div>';
    }).join("") : '<p class="empty-state">Aucun événement publié à contrôler.</p>';
  }
  E.scanner = function (id, titre) {
    S.scan = { id: id, occupe: false, dernier: "", t: 0, timer: null, flux: null };
    var m = modal('<div class="item-nom">📷 Contrôle — ' + esc(titre) + '</div>' +
      '<video id="evtVideo" playsinline muted style="width:100%;border-radius:12px;background:#000;margin-top:10px;max-height:300px;"></video>' +
      '<div id="evtScanRes"></div><label class="field-label" style="margin-top:10px;">Ou saisir le code du billet</label><input id="evtManuel" placeholder="BIL-…">' +
      '<button class="secondary" onclick="EVT.manuel()">Valider ce code</button><button class="flame full-mt" onclick="EVT.fermer()">Terminer</button>', true, arreterScan);
    var video = document.getElementById("evtVideo");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { document.getElementById("evtScanRes").innerHTML = '<p class="item-desc">Caméra indisponible : utilisez la saisie manuelle.</p>'; return; }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (flux) {
      if (!S.scan) { flux.getTracks().forEach(function (t) { t.stop(); }); return; }
      S.scan.flux = flux; video.srcObject = flux; video.play();
      var detecteur = window.BarcodeDetector ? new BarcodeDetector({ formats: ["qr_code"] }) : null;
      if (!detecteur && !window.jsQR) { var s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js"; document.head.appendChild(s); }
      var canvas = document.createElement("canvas");
      var boucle = function () {
        if (!S.scan) return;
        if (video.readyState >= 2 && !S.scan.occupe) {
          if (detecteur) detecteur.detect(video).then(function (res) { if (res.length) traiterScan(res[0].rawValue); }).catch(function () {});
          else if (window.jsQR) {
            canvas.width = video.videoWidth; canvas.height = video.videoHeight;
            var ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0);
            var img = ctx.getImageData(0, 0, canvas.width, canvas.height), res = jsQR(img.data, img.width, img.height);
            if (res && res.data) traiterScan(res.data);
          }
        }
        if (S.scan) S.scan.timer = setTimeout(boucle, 300);
      };
      boucle();
    }).catch(function () { document.getElementById("evtScanRes").innerHTML = '<p class="item-desc">Accès à la caméra refusé : utilisez la saisie manuelle.</p>'; });
  };
  function arreterScan() {
    if (!S.scan) return;
    clearTimeout(S.scan.timer);
    if (S.scan.flux) S.scan.flux.getTracks().forEach(function (t) { t.stop(); });
    S.scan = null;
  }
  function traiterScan(texte) {
    var s = S.scan; if (!s || s.occupe) return;
    if (texte === s.dernier && Date.now() - s.t < 4000) return;
    s.occupe = true; s.dernier = texte; s.t = Date.now();
    appelServeur("scannerBillet", code(), s.id, texte).then(function (r) {
      var cls = r.resultat === "VALIDE" ? "ok" : (r.resultat === "DEJA_UTILISE" ? "dej" : "ko");
      var z = document.getElementById("evtScanRes");
      if (z) z.innerHTML = '<div class="scan-res ' + cls + '">' + (r.resultat === "VALIDE" ? "✅ " : "⚠️ ") + esc(r.message) + (r.porteur ? "<br>" + esc(r.porteur) + " · " + esc(r.type) : "") + "</div>";
      try { if (navigator.vibrate) navigator.vibrate(r.resultat === "VALIDE" ? 80 : [120, 60, 120]); } catch (e) {}
    }).catch(function (e) {
      var z = document.getElementById("evtScanRes"); if (z) z.innerHTML = '<div class="scan-res ko">' + esc(e.message) + "</div>";
    }).then(function () { if (S.scan) S.scan.occupe = false; });
  }
  E.manuel = function () {
    var v = (document.getElementById("evtManuel").value || "").trim().toUpperCase();
    if (!v) return;
    traiterScan(v.indexOf("JB1.") === 0 ? v : "JB1." + v);
  };

  // ------------------------------------------------------------------ ADMINISTRATION
  function peutAdminEvt() {
    var p = membreCourant ? permissionsDe_(membreCourant) : [];
    return p.indexOf("evenements") !== -1 || p.indexOf("systeme") !== -1;
  }
  function injecterAdmin() {
    var section = document.getElementById("section-admin");
    if (!section || document.getElementById("admin-evenements")) return;
    var d = document.createElement("div");
    d.className = "admin-section"; d.id = "admin-evenements";
    d.innerHTML = '<div id="evtAdminCommission"></div><div class="card"><p class="field-label">Événements à valider</p><div id="evtAdminModeration"><div class="loading">Chargement…</div></div></div>' +
      '<div class="card"><p class="field-label">Ajouter un organisateur</p><input id="evtOrgCode" placeholder="Code du membre (MB-…)"><button onclick="EVT.addOrga()">Donner le statut d\'organisateur</button></div>' +
      '<div class="card"><p class="field-label">Organisateurs, revenus et reversements</p><div id="evtAdminOrgas"><div class="loading">Chargement…</div></div></div>';
    section.appendChild(d);
  }
  var construireOrigine = window.construireAdminSubtabs;
  window.construireAdminSubtabs = function () {
    var visibles = construireOrigine.apply(this, arguments);
    if (!peutAdminEvt()) return visibles;
    injecterAdmin();
    var barre = document.getElementById("adminSubtabs");
    var seul = !visibles.length;
    var t = document.createElement("div");
    t.className = "admin-subtab" + (seul ? " active" : ""); t.dataset.sub = "evenements"; t.textContent = "🎫 Événements";
    t.onclick = function () { afficherSousOnglet("evenements"); };
    barre.appendChild(t);
    if (seul) { document.getElementById("admin-evenements").classList.add("active"); return [{ id: "evenements" }]; }
    return visibles;
  };
  var sousOngletOrigine = window.afficherSousOnglet;
  window.afficherSousOnglet = function (nom) {
    sousOngletOrigine.apply(this, arguments);
    if (nom === "evenements") adminCharger();
  };
  function adminCharger() {
    injecterAdmin();
    // Commission : seul le droit « système » peut la modifier (mettreAJourConfig)
    var sys = permissionsDe_(membreCourant).indexOf("systeme") !== -1;
    appelServeur("getOrganisateurs", code()).then(function (r) {
      document.getElementById("evtAdminCommission").innerHTML = sys ?
        '<div class="card"><p class="field-label">Commission de la plateforme (%)</p><div class="cotisation-pay-row"><input id="evtCommission" type="number" min="0" max="100" value="' + r.commission + '"><button class="small" onclick="EVT.commission()">Enregistrer</button></div><p class="item-desc">Prélevée sur chaque vente de billets et de votes payants, pour les nouvelles commandes uniquement.</p></div>' :
        '<div class="card"><p class="item-desc">Commission actuelle : ' + r.commission + " %</p></div>";
      document.getElementById("evtAdminOrgas").innerHTML = r.organisateurs.length ? r.organisateurs.map(function (o) {
        return '<div class="item-block"><div class="item-nom">' + esc(o.nom) + '</div><div class="item-desc">' + esc(o.code) + " · " + esc(o.telephone) + " · " + o.evenements + " événement(s)</div>" +
          '<div class="evt-kpi"><div><b>' + fcfa(o.brut) + "</b><span>ventes</span></div><div><b>" + fcfa(o.net) + "</b><span>net</span></div><div><b>" + fcfa(o.verse) + "</b><span>déjà versé</span></div><div><b>" + fcfa(o.solde) + "</b><span>à verser</span></div></div>" +
          '<div class="evt-actions"><button onclick="EVT.versement(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + "'," + o.solde + ')">💸 Enregistrer un versement</button>' +
          '<button class="secondary" onclick="EVT.revenusOrga(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + '\')">Historique</button>' +
          '<button class="danger-outline" onclick="EVT.retirerOrga(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + '\')">Retirer le statut</button></div></div>';
      }).join("") : '<p class="empty-state">Aucun organisateur.</p>';
    }).catch(function (e) { afficherErreurZone("evtAdminOrgas", e); });
    appelServeur("getEvenementsAModerer", code()).then(function (r) {
      document.getElementById("evtAdminModeration").innerHTML = r.evenements.length ? r.evenements.map(function (e) {
        return '<div class="item-block"><div class="item-nom">' + esc(e.titre) + " " + puce(e.categorie, "") + '</div><div class="item-desc">Par ' + esc(e.organisateur) + " · " + quand(e.dateDebut) + " · " + esc(e.lieu) + "</div>" +
          '<p class="item-desc" style="white-space:pre-wrap;">' + esc(e.description.slice(0, 400)) + "</p>" +
          '<div class="item-desc">' + e.billets.map(function (b) { return esc(b.nom) + " (" + (b.prix ? fcfa(b.prix) : "gratuit") + ")"; }).join(" · ") + "</div>" +
          '<div class="evt-actions"><button onclick="EVT.moderer(\'' + jsq_(e.id) + '\',\'Publié\')">✅ Publier</button><button class="danger-outline" onclick="EVT.refuser(\'' + jsq_(e.id) + '\')">✖ Refuser</button></div></div>';
      }).join("") : '<p class="empty-state">Aucun événement en attente.</p>';
    }).catch(function (e) { afficherErreurZone("evtAdminModeration", e); });
  }
  E.commission = function () {
    var v = Number(document.getElementById("evtCommission").value);
    if (!(v >= 0 && v <= 100)) { alert("Indiquez un pourcentage entre 0 et 100."); return; }
    appelServeur("mettreAJourConfig", code(), "CommissionEvenements", v).then(function () { alert("Commission enregistrée : " + v + " %."); }).catch(echec);
  };
  E.moderer = function (id, decision) { appelServeur("moderEvenement", code(), id, decision, "").then(adminCharger).catch(echec); };
  E.refuser = function (id) {
    demanderTexteApp_("Motif du refus (visible par l'organisateur) :", function (motif) {
      appelServeur("moderEvenement", code(), id, "Refusé", motif).then(adminCharger).catch(echec);
    });
  };
  E.addOrga = function () {
    var c = document.getElementById("evtOrgCode").value.trim();
    if (!c) return;
    appelServeur("definirOrganisateur", code(), c, true).then(function (r) { document.getElementById("evtOrgCode").value = ""; alert("✅ " + r.nom + " est maintenant organisateur."); adminCharger(); }).catch(echec);
  };
  E.retirerOrga = function (c, nom) {
    confirmerApp_("Retirer le statut d'organisateur à " + nom + " ? Ses événements restent en place.", function () {
      appelServeur("definirOrganisateur", code(), c, false).then(adminCharger).catch(echec);
    });
  };
  E.revenusOrga = function (c, nom) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getRevenus", code(), c).then(function (r) {
      m.el.innerHTML = htmlRevenus(r, "💰 " + nom) + '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.versement = function (c, nom, solde) {
    var m = modal('<div class="item-nom">💸 Versement à ' + esc(nom) + '</div><p class="item-desc">Solde à verser : ' + fcfa(solde) + '. Enregistrez ici le versement après l\'avoir effectué (Mobile Money, virement…).</p>' +
      '<label class="field-label">Montant (FCFA)</label><input id="vsMontant" type="number" min="1" max="' + solde + '" value="' + solde + '">' +
      '<label class="field-label">Note (référence, moyen de paiement)</label><input id="vsNote" maxlength="200">' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.validerVersement(\'' + jsq_(c) + '\')">Enregistrer</button></div>');
  };
  E.validerVersement = function (c) {
    appelServeur("enregistrerReversement", code(), c, Number(document.getElementById("vsMontant").value), document.getElementById("vsNote").value)
      .then(function () { E.fermer(); adminCharger(); }).catch(echec);
  };
})();
