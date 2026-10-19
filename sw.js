// Catch Logger offline worker. Bump VERSION whenever you change any app file,
// so iPads download the new copy next time they open the app with internet.
const VERSION = 'catch-logger-v8';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Serve the stored copy first so the app always opens, even with no signal.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, {ignoreSearch: true}).then(hit => hit ||
      fetch(e.request).catch(() => e.request.mode === 'navigate' ? caches.match('./index.html') : undefined))
  );
});
