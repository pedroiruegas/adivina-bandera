const CACHE = 'flagquiz-v1';

const ASSETS = [
  '/adivina-bandera/',
  '/adivina-bandera/index.html',
  '/adivina-bandera/style.css',
  '/adivina-bandera/script.js',
  '/adivina-bandera/manifest.json',
];

// Instalar — guarda los archivos del juego en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activar — borra cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — responde con caché si no hay internet
self.addEventListener('fetch', e => {
  // Las banderas de flagcdn.com se cachean cuando se ven por primera vez
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cachear banderas de flagcdn
        if (e.request.url.includes('flagcdn.com')) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
