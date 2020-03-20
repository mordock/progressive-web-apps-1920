const staticCacheName = 'static-files';
const assets = [
    '/', 
    '/css/style.css',
    '/char/css/style.css'
];

self.addEventListener('install', event => {
    console.log('install'); 
    event.waitUntil(caches.open(staticCacheName).then(cache =>{
        console.log('caching');
        cache.addAll(assets);
        })
    );
}); 
self.addEventListener('activate', event => { 
    console.log('activate');
    // am I even active? 
}); 
self.addEventListener('fetch', event => { 
    console.log('fetch');
    // can I even do cool stuff?
    event.respondWith(
        caches.match(event.request).then(chacheRes => {
            return chacheRes || fetch(event.request);
        })
    ) 
});