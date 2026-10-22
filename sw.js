/* Service worker — JESUS
 *
 * Principe : le RÉSEAU d'abord, le cache seulement en secours (hors connexion).
 * Ainsi, dès qu'une nouvelle version de index.html est mise en ligne sur GitHub, elle est
 * affichée à l'ouverture suivante — plus besoin de changer un numéro de version à la main.
 *
 * Les appels vers Apps Script, YouTube, Google Fonts, Kkiapay… (autres domaines) et toutes les
 * requêtes qui ne sont pas des GET ne sont JAMAIS interceptés : ils passent directement.
 */
const CACHE = "jesus-cache-v1";
const FICHIERS_DE_BASE = ["./", "index.html", "manifest.json", "icon-192.png", "icon-512.png", "icon-512-maskable.png"];

self.addEventListener("install", function (event) {
  self.skipWaiting(); // la nouvelle version s'active tout de suite, sans attendre la fermeture de l'appli
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      // Un fichier absent ne doit pas faire échouer l'installation
      return Promise.all(FICHIERS_DE_BASE.map(function (fichier) {
        return cache.add(new Request(fichier, { cache: "reload" })).catch(function () {});
      }));
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (noms) {
      // Supprime tous les anciens caches (versions précédentes de l'appli)
      return Promise.all(noms.filter(function (nom) { return nom !== CACHE; }).map(function (nom) { return caches.delete(nom); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const requete = event.request;
  if (requete.method !== "GET") return;                       // POST vers l'API, etc.
  const url = new URL(requete.url);
  if (url.origin !== self.location.origin) return;            // autres domaines : pas touchés

  const estPage = requete.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith(".html");
  // Pour les pages : on revalide toujours auprès du serveur (pas de copie HTTP périmée)
  const aller = estPage ? new Request(requete.url, { cache: "no-cache", credentials: "same-origin" }) : requete;

  event.respondWith(
    fetch(aller).then(function (reponse) {
      if (reponse && reponse.ok && reponse.type === "basic") {
        const copie = reponse.clone();
        caches.open(CACHE).then(function (cache) { cache.put(requete, copie); });
      }
      return reponse;
    }).catch(function () {
      // Hors connexion : on sert la dernière copie connue
      return caches.match(requete).then(function (enCache) {
        return enCache || (estPage ? caches.match("index.html") : undefined);
      });
    })
  );
});
