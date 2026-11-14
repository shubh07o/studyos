/* Service Worker for Mock Manager (StudyOS) */
const CACHE_VERSION = 'v1.0.3';
const STATIC_CACHE = `mockmanager-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `mockmanager-dynamic-${CACHE_VERSION}`;

// Pre-cached App Shell Assets (relative paths for GitHub Pages compatibility)
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './offline.html',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable.png',
  './icons/favicon.png'
];

// Install Event: Pre-cache App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear obsolete caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== STATIC_CACHE && key !== DYNAMIC_CACHE) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Smart Cache Strategy
self.addEventListener('fetch', (event) => {
  const req = event.request;

  // Only handle GET requests
  if (req.method !== 'GET') return;

  // Ignore browser extensions and non-HTTP schemes
  if (!req.url.startsWith('http')) return;

  // 1. Navigation requests (HTML pages)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(async () => {
          const cachedRes = await caches.match(req);
          if (cachedRes) return cachedRes;
          return caches.match('./offline.html');
        })
    );
    return;
  }

  // 2. Static Assets, Lectures & Mocks: Stale-While-Revalidate
  event.respondWith(
    caches.match(req).then((cachedRes) => {
      const fetchPromise = fetch(req)
        .then((networkRes) => {
          if (networkRes && networkRes.status === 200) {
            const clone = networkRes.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(req, clone));
          }
          return networkRes;
        })
        .catch(() => {
          // Network failed, nothing extra needed if cachedRes exists
        });

      return cachedRes || fetchPromise;
    })
  );
});
