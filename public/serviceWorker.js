const staticCacheName = 'static-files';
const assets = [
    '/', 
    'offline.html',
    'manifest.json',
    '/css/style.css',
    '/char/css/style.css'
];

self.addEventListener('install', event => {
    console.log('install bob'); 
    event.waitUntil(caches.open(staticCacheName).then(cache =>{
        console.log('caching bob2');
        cache.addAll(assets);
        })
    );
}); 
self.addEventListener('activate', event => { 
    console.log('activate');
    // am I even active? 
}); 
self.addEventListener('fetch', event => { 
    console.log('fetch bob 3');
    // can I even do cool stuff?
    event.respondWith(
        caches.match(event.request).then(chacheRes => {
            return chacheRes || fetch(event.request);
        })
    ) 
});