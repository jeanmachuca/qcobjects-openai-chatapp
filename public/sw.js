/**
 * QCObjects Framework
 * ____________________________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
// eslint-disable-next-line no-undef

/* eslint-disable no-undef */
// This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

const CACHE = "qcobjectsnewapp-offline-page";

importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const offlineFallbackPage = "index-fallback.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  // eslint-disable-next-line prefer-regex-literals
  new RegExp("/*"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});


const version = "1.0.0";
const appName = "qcobjectsnewapp";
const cacheSufix = (Math.round(Date.now()/(1000*3600))).toString(); // 1 hour
const cacheName = `qcobjects-app-${appName}-${version}-${cacheSufix}`;
const startUrl = "/?homescreen=1";
caches.delete(cacheName); // force to reload cache for the first time the sw is loaded
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([`${startUrl}`,
	"/",
	"404.html",
	"_redirects",
	"css/index.css",
	"css/index.css.map",
	"favicon.ico",
	"humans.txt",
	"index-fallback.html",
	"index.html",
	"js/chat.js",
	"js/chat.js.map",
	"js/chunks/chunk-2S4V2J2X.js",
	"js/chunks/chunk-2S4V2J2X.js.map",
	"js/chunks/chunk-NPLKSVUT.js",
	"js/chunks/chunk-NPLKSVUT.js.map",
	"js/chunks/chunk-VGJRBPUX.js",
	"js/chunks/chunk-VGJRBPUX.js.map",
	"js/chunks/chunk-YGYTGWRZ.js",
	"js/chunks/chunk-YGYTGWRZ.js.map",
	"js/chunks/chunk-YMZNYSXG.js",
	"js/chunks/chunk-YMZNYSXG.js.map",
	"js/config.js",
	"js/config.js.map",
	"js/customWidgets.js",
	"js/customWidgets.js.map",
	"js/init.js",
	"js/init.js.map",
	"manifest.json",
	"robots.txt"])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
