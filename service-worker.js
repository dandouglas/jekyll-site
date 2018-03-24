const CACHE_NAME = 'dd-cache-v3';
const urlsToCache = [
'/',
'/index.html',
'/main.css',
'/assets/images/favicon.png',
'/assets/images/logo-angular.svg',
'/assets/images/logo-html5.svg',
'/assets/images/logo-js.svg',
'/assets/images/logo-sass.svg',
'/assets/images/portrait.png',
'/assets/avenir-font/AvenirLTStd-Book.otf',
'/assets/avenir-font/AvenirLTStd-Light.otf',
'/assets/avenir-font/AvenirLTStd-Roman.otf',
'/scripts/scripts.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });
