// Service worker minimal — il ne met rien en cache de façon agressive (l'application est
// fondamentalement en ligne : membres, paiements, messages doivent toujours être à jour),
// mais sa seule présence est ce qui permet aux navigateurs de proposer l'installation.
self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  // Volontairement transparent : aucune mise en cache, pour ne jamais afficher de
  // données périmées. Sa présence suffit à satisfaire les critères d'installation.
});
