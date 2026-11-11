/**
 * Service worker de l'application JESUS.
 * - Pages et fichiers de l'appli : « réseau d'abord » (les mises à jour apparaissent tout de suite),
 *   avec la dernière copie connue quand il n'y a pas de connexion.
 * - Notifications push : à la réception, on lit le dernier message envoyé par l'équipe puis on l'affiche.
 * Les appels vers les autres domaines (Worker, Apps Script, YouTube…) et les requêtes non GET ne sont jamais interceptés.
 */
const CACHE = "jesus-cache-v5";
const API = "https://sun-api.arcuniversel.workers.dev";
const FICHIERS_DE_BASE = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-512-maskable.png"];

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return Promise.all(FICHIERS_DE_BASE.map(function (fichier) {
        return cache.add(new Request(fichier, { cache: "reload" })).catch(function () {});
      }));
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (noms) {
      // Supprime les anciennes versions de l'appli, mais GARDE les audios enregistrés pour le mode hors-ligne.
      return Promise.all(noms.filter(function (nom) { return nom !== CACHE && nom !== "jesus-hors-ligne"; }).map(function (nom) { return caches.delete(nom); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const requete = event.request;
  if (requete.method !== "GET") return;
  const url = new URL(requete.url);
  if (url.origin !== self.location.origin) return;

  const estPage = requete.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith(".html");
  const aller = estPage ? new Request(requete.url, { cache: "no-cache", credentials: "same-origin" }) : requete;

  event.respondWith(
    fetch(aller).then(function (reponse) {
      if (reponse && reponse.ok && reponse.type === "basic") {
        const copie = reponse.clone();
        caches.open(CACHE).then(function (cache) { cache.put(requete, copie); });
      }
      return reponse;
    }).catch(function () {
      return caches.match(requete).then(function (enCache) {
        return enCache || (estPage ? caches.match("index.html") : undefined);
      });
    })
  );
});

// ---- Notifications push ----
self.addEventListener("push", function (event) {
  const parDefaut = { titre: "JESUS — Réveil Chrétien", message: "Une nouvelle notification vous attend.", lien: "" };
  event.waitUntil(
    self.registration.pushManager.getSubscription().then(function (s) { return s ? s.endpoint : ""; }, function () { return ""; }).then(function (endpoint) {
      return fetch(API, { method: "POST", body: JSON.stringify({ action: "dernierePush", params: endpoint ? [endpoint] : [] }) });
    })
      .then(function (r) { return r.json(); })
      .then(function (j) { return (j && j.succes && j.resultat) ? j.resultat : parDefaut; })
      .catch(function () { return parDefaut; })
      .then(function (n) {
        return self.registration.showNotification(n.titre || parDefaut.titre, {
          body: n.message || parDefaut.message,
          icon: "icon-192.png",
          badge: "icon-192.png",
          data: { lien: n.lien || "" }
        });
      })
      .then(majBadge)
  );
});

// Pastille de l'icône de l'application : nombre de notifications non lues
function majBadge() {
  return self.registration.getNotifications().then(function (l) {
    const n = l.length;
    if (self.navigator && self.navigator.setAppBadge) return n ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge();
  }).catch(function () {});
}

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  event.waitUntil(majBadge());
  const lien = (event.notification.data && event.notification.data.lien) || "";
  const cible = /^https?:\/\//i.test(lien) ? lien : self.registration.scope;
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (fenetres) {
      for (const f of fenetres) { if ("focus" in f && cible === self.registration.scope) return f.focus(); }
      return self.clients.openWindow(cible);
    })
  );
});
