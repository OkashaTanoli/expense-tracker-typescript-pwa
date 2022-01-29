console.log('registered service worker')
let cacheName = 'new_cache'
let cacheFiles = [
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  'index.html',
  '/'

]

self.addEventListener('activate', (e) => {
    // console.log("[ServiceWorker] Activate");
})

self.addEventListener("install", (e) => {
    // console.log('service worker install');
    e.waitUntill(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(cacheFiles)
        })
    )
})

self.addEventListener('fetch', function(e) {
    // console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
        // if(response){
        //   return response
        // }
      })
    );
  })