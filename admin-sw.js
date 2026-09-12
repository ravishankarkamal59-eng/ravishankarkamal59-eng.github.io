// Minimal SW - सिर्फ unregister
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(names => Promise.all(
      names.map(n => caches.delete(n))
    )).then(() => self.registration.unregister())
  );
});
