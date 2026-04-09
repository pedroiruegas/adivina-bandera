const CACHE = 'flagquiz-v2';

const ASSETS = [
  '/adivina-bandera/',
  '/adivina-bandera/index.html',
  '/adivina-bandera/style.css',
  '/adivina-bandera/script.js',
  '/adivina-bandera/manifest.json',
];

const FLAG_CODES = [
  'mx','br','ar','co','cl','pe','ve','uy','ec','bo','py','cu','cr','gt','hn',
  'sv','ni','pa','jm','ht','do','tt','bb','bs','bz','gy','sr','ca','us',
  'es','fr','de','it','pt','gb','nl','be','ch','at','pl','ru','ua','se','no',
  'dk','fi','gr','tr','cz','hu','ro','bg','rs','hr','sk','si','ie','is','al',
  'ba','mk','md','by','ee','lv','lt','lu','mt','me','xk','ad','mc','sm','li','cy',
  'jp','cn','in','kr','kp','id','th','vn','ph','my','sg','sa','il','ir','iq',
  'pk','af','bd','lk','np','mm','kh','la','mn','kz','uz','az','ge','am','jo',
  'lb','sy','ye','om','qa','kw','bh','ae','tw','tl','bn','bt','mv','kg','tj','tm',
  'eg','ng','za','ke','et','gh','ma','dz','tz','ao','mz','cm','ci','sn','ml',
  'bf','zw','zm','ug','rw','so','sd','ly','tn','mr','ne','td','cg','cd','mg',
  'gn','bj','tg','sl','lr','er','ss','cf','gq','ga','bw','na','ls','sz','mw',
  'mu','cv','dj','km','au','nz','pg','fj','vu','ws','to','ki','fm','pw','mh','nr','tv'
];

const FLAG_URLS = FLAG_CODES.map(c => `https://flagcdn.com/w320/${c}.png`);

// Instalar — cachea archivos del juego + todas las banderas
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS).then(() => {
        return Promise.allSettled(
          FLAG_URLS.map(url =>
            fetch(url).then(res => {
              if (res.ok) cache.put(url, res);
            }).catch(() => {})
          )
        );
      });
    })
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

// Fetch — caché primero, red como respaldo
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (e.request.url.includes('flagcdn.com') && response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
