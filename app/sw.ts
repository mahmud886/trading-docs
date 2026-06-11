/// <reference lib="esnext" />
/// <reference lib="webworker" />

import type { PrecacheEntry, RuntimeCaching, SerwistGlobalConfig } from "serwist";
import {
  CacheFirst,
  ExpirationPlugin,
  NetworkFirst,
  RangeRequestsPlugin,
  Serwist,
  StaleWhileRevalidate,
} from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

/**
 * Full-offline caching strategy.
 * All content pages are precached at build time.
 * Runtime caching uses StaleWhileRevalidate/CacheFirst for maximum offline availability.
 */
const offlineCache: RuntimeCaching[] =
  process.env.NODE_ENV !== "production"
    ? [{ matcher: /.*/i, handler: new NetworkFirst({ cacheName: "dev-all" }) }]
    : [
        // Google Fonts (webfonts)
        {
          matcher: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: new CacheFirst({
            cacheName: "google-fonts-webfonts",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 8,
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Google Fonts (stylesheets)
        {
          matcher: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: new StaleWhileRevalidate({
            cacheName: "google-fonts-stylesheets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 8,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Static font files
        {
          matcher: /\.(?:eot|otf|ttc|ttf|woff|woff2|font\.css)$/i,
          handler: new CacheFirst({
            cacheName: "static-font-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 16,
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Images — cache-first for offline
        {
          matcher: /\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif)$/i,
          handler: new CacheFirst({
            cacheName: "static-image-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 256,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Next.js static JS bundles — immutable, cache-first
        {
          matcher: /\/_next\/static.+\.js$/i,
          handler: new CacheFirst({
            cacheName: "next-static-js-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 128,
                maxAgeSeconds: 365 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Next.js optimized images
        {
          matcher: /\/_next\/image\?url=.+$/i,
          handler: new StaleWhileRevalidate({
            cacheName: "next-image",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 128,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Audio files
        {
          matcher: /\.(?:mp3|wav|ogg)$/i,
          handler: new CacheFirst({
            cacheName: "static-audio-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 32,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
              new RangeRequestsPlugin(),
            ],
          }),
        },
        // Video files
        {
          matcher: /\.(?:mp4|webm)$/i,
          handler: new CacheFirst({
            cacheName: "static-video-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 32,
                maxAgeSeconds: 7 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
              new RangeRequestsPlugin(),
            ],
          }),
        },
        // JS assets
        {
          matcher: /\.js$/i,
          handler: new StaleWhileRevalidate({
            cacheName: "static-js-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 128,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // CSS assets
        {
          matcher: /\.(?:css|less)$/i,
          handler: new StaleWhileRevalidate({
            cacheName: "static-style-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 64,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
          }),
        },
        // Next.js data routes
        {
          matcher: /\/_next\/data\/.+\/.+\.json$/i,
          handler: new NetworkFirst({
            cacheName: "next-data",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 512,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // JSON/XML/CSV data files
        {
          matcher: /\.(?:json|xml|csv)$/i,
          handler: new NetworkFirst({
            cacheName: "static-data-assets",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 128,
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // API routes — network first with fast fallback
        {
          matcher: ({ sameOrigin, url: { pathname } }) => sameOrigin && pathname.startsWith("/api/"),
          method: "GET",
          handler: new NetworkFirst({
            cacheName: "apis",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 64,
                maxAgeSeconds: 24 * 60 * 60,
                maxAgeFrom: "last-used",
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // RSC prefetch requests
        {
          matcher: ({ request, url: { pathname }, sameOrigin }) =>
            request.headers.get("RSC") === "1" &&
            request.headers.get("Next-Router-Prefetch") === "1" &&
            sameOrigin &&
            !pathname.startsWith("/api/"),
          handler: new NetworkFirst({
            cacheName: "pages-rsc-prefetch",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 512,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // RSC navigation requests
        {
          matcher: ({ request, url: { pathname }, sameOrigin }) =>
            request.headers.get("RSC") === "1" && sameOrigin && !pathname.startsWith("/api/"),
          handler: new NetworkFirst({
            cacheName: "pages-rsc",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 512,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // HTML page requests
        {
          matcher: ({ request, url: { pathname }, sameOrigin }) =>
            request.headers.get("Content-Type")?.includes("text/html") && sameOrigin && !pathname.startsWith("/api/"),
          handler: new NetworkFirst({
            cacheName: "pages",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 512,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // All other same-origin requests
        {
          matcher: ({ url: { pathname }, sameOrigin }) => sameOrigin && !pathname.startsWith("/api/"),
          handler: new NetworkFirst({
            cacheName: "others",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 512,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              }),
            ],
            networkTimeoutSeconds: 3,
          }),
        },
        // Cross-origin requests
        {
          matcher: ({ sameOrigin }) => !sameOrigin,
          handler: new NetworkFirst({
            cacheName: "cross-origin",
            plugins: [
              new ExpirationPlugin({
                maxEntries: 64,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              }),
            ],
            networkTimeoutSeconds: 5,
          }),
        },
      ];

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: false, // Disabled for full offline — precache handles navigation
  runtimeCaching: offlineCache,
  fallbacks: {
    entries: [
      {
        url: "/~offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();
