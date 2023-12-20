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

importScripts(
  "https://cdn.wostatic.cn/dist/lib/workbox/4.3.1/workbox-sw.js",
  "https://cdn.wostatic.cn/dist/precache-manifest.870d42406272213b6d5be017dabe759a.js"
);

workbox.core.setCacheNameDetails({prefix: "pwa-cache"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/[^.]+.wolai\.com\/login/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-html", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 864000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.json.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-json", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\/javascript\/.*\.js.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-js", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.css.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-css", plugins: [new workbox.expiration.Plugin({ maxEntries: 50, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*\.(eot|ttf|woff|woff2).*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-font", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
workbox.routing.registerRoute(/.*twemoji-sprite-64\.png.*/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"pwa-image", plugins: [new workbox.expiration.Plugin({ maxEntries: 1, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 200 ] })] }), 'GET');
