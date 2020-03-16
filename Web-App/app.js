if("serviceWorker" in navigator){
    console.log('AAHHHHHHH');
    navigator.serviceWorker.register('/serviceWorker.js')
    .then(() => console.log('registered'))
    .catch(() => console.log('failed'));
}