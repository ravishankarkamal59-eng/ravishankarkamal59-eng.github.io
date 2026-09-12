// ===== Service Worker - Network First Strategy =====
const CACHE_NAME = 'rsi-v3';
const STATIC_ASSETS = [
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/logo.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(STATIC_ASSETS.map(url => 
        cache.add(url).catch(() => {})
      ));
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  
  // Skip API calls
  if (req.url.includes('api.github.com') || 
      req.url.includes('firebase') ||
      req.url.includes('googleapis') ||
      req.url.includes('gstatic.com')) {
    return;
  }
  
  // HTML files - ALWAYS network first, no cache
  if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }
  
  // CSS/JS - Network first, fallback to cache
  if (req.url.match(/\.(css|js)$/)) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }
  
  // Images - Cache first
  if (req.url.match(/\.(png|jpg|jpeg|svg|webp|gif)$/)) {
    e.respondWith(
      caches.match(req).then(cached => {
        return cached || fetch(req).then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, clone));
          return res;
        });
      })
    );
    return;
  }
  
  // Everything else - network
  e.respondWith(fetch(req).catch(() => caches.match(req)));
});

// Message handler to force update
self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
