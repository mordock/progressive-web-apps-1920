self.addEventListener('install', event => {
    console.log('install'); 
    // do I even exist? 
}); 
self.addEventListener('activate', event => { 
    console.log('activate');
    // am I even active? 
}); 
self.addEventListener('fetch', event => { 
    console.log('fetch');
    // can I even do cool stuff? 
});