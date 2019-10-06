/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "dist/esm/dispatchers-be536cc4.js",
    "revision": "aadcf7742d5f1b73b7a97b45d753b9a1"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "6aadfd0d7277baee3c45f7405d55b8a8"
  },
  {
    "url": "dist/esm/lit-element-28c5473c.js",
    "revision": "b1a99883cc2f3fbc5912ac06e200a18e"
  },
  {
    "url": "dist/esm/lit-element-bc913f20.js",
    "revision": "adc200bdd3f4a8b88062770b4e00c5f4"
  },
  {
    "url": "dist/esm/lit-element-bcf89ae3.js",
    "revision": "6f438ccbb5b5a2c8d2ef88cf125b7d5b"
  },
  {
    "url": "dist/esm/x-postpress-app.js",
    "revision": "9a46b71420f61b0ba83a6e554c1e18ae"
  },
  {
    "url": "dist/esm/XPostpressApp.js",
    "revision": "9589d224abd806b92137a4985676493a"
  },
  {
    "url": "dist/esm/XPostpressBranding.js",
    "revision": "32d092cd28bb94701a5b30ffd017f205"
  },
  {
    "url": "dist/esm/XPostpressContent.js",
    "revision": "a9a98abd64a41aeefeb9562f0a835767"
  },
  {
    "url": "dist/esm/XPostpressDrawerChildren.js",
    "revision": "4a3bad370a4e79bd2dd2b67342e6121e"
  },
  {
    "url": "dist/esm/XPostpressHamburger.js",
    "revision": "ea7f6e57661c187c33347d4dbf3e62cd"
  },
  {
    "url": "dist/umd/index.js",
    "revision": "6162db9b1b43057a92d58563212c4666"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1541be46d0e48ddf14d4eaffdf2f2fa2"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b3c4915043fbf42450a262a702a81dc9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "737dbeeb265bff426a290c3e156b16a7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8b0639445ecc159db7848cec32fc1636"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9843dc733a8bca96ebb41a6e330959e0"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4b995869ae98ea520a369dad70a19e63"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d4e01d5114f575aac7ab4ecf13794364"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "602f70018994896e1a4573e738ce1225"
  },
  {
    "url": "index.html",
    "revision": "7d26c4d4edf95e4846f0e9f0701fdfab"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "6b9601ee07fc8e1d451cf3f428c29e34"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "45540fea5e8b9242d535d13c53e288cd"
  },
  {
    "url": "/",
    "revision": "a99335426bc7b2e362e228df94802bdb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
