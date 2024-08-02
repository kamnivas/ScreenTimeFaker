self.addEventListener('install', function(event) {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open('pwa-cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/details.html',
        '/input.html',
        '/script.js',
        '/manifest.json',
        '/assets/images/settings_icon_192.png',
        '/assets/images/settings_icon_512.png',
        '/assets/images/main-page_bottom.png'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});