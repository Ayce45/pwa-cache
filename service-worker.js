self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('pokemon-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/icon.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});