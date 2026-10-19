// Catch Logger offline worker. Each release changes VERSION, so iPads download the new copy
// the next time the app is opened with internet. Files are always fetched fresh from the
// website (cache: 'reload'), never from the iPad's web cache, so an update cannot pick up old files.
const VERSION = 'catch-logger-v12';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  // take over as soon as the fresh files are stored, so the next open (or the restart button) uses them
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(u => new Request(u, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
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
