const CACHE_NAME = 'snakes-ladders-v3';
const urlsToCache = [
  '/snakes/',
  '/snakes/index.html',
  '/snakes/snakes.jpg',
  '/snakes/favicon1.jpeg',
  '/snakes/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request).catch(() => {
          if (event.request.destination === 'document') {
            return caches.match('/snakes/index.html');
          }
        });
      })
  );
});