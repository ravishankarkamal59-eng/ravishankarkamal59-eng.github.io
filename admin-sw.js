// ===== Service Worker - Network First, Cache v4 =====
const CACHE_VERSION = 'rsi-v4-' + Date.now();
const STATIC_ASSETS = [
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/images/logo.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return Promise.all(STATIC_ASSETS.map(url => 
        cache.add(url).catch(() => {})
      ));
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(names => Promise.all(
      names.filter(n => n !== CACHE_VERSION).map(n => caches.delete(n))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  
  // Skip external APIs
  if (req.url.includes('api.github.com') || 
      req.url.includes('firebase') ||
      req.url.includes('googleapis') ||
      req.url.includes('gstatic.com') ||
      req.url.includes('googlesyndication')) {
    return;
  }
  
  // HTML pages - always network first
  if (req.headers.get('accept') && req.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(req).then(res => res).catch(() => caches.match(req))
    );
    return;
  }
  
  // JS/CSS - network first
  if (req.url.match(/\.(css|js)$/)) {
    e.respondWith(
      fetch(req).then(res => {
        const clone = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(req, clone));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  
  // Images - cache first
  if (req.url.match(/\.(png|jpg|jpeg|svg|webp|gif)$/)) {
    e.respondWith(
      caches.match(req).then(cached => {
        return cached || fetch(req).then(res => {
          const clone = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, clone));
          return res;
        });
      })
    );
    return;
  }
  
  // Default
  e.respondWith(fetch(req).catch(() => caches.match(req)));
});
