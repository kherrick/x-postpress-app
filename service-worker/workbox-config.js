const WORKBOX_CONFIG_PATH = process.env.WORKBOX_CONFIG_PATH || '/'

module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{css,js,png,ico,html}'],
  globIgnores: ['**/node_modules/**/*', '**/service-worker.js', 'dev/**', 'src/**', 'rollup.config.js'],
  templatedURLs: {
    [`${WORKBOX_CONFIG_PATH}`]: `${new Date()}`
  },
  swDest: 'service-worker.js',
  // Define runtime caching rules.
  runtimeCaching: [
    {
      // Match any request ends with .png, .jpg, .jpeg or .svg.
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

      // Apply a cache-first strategy.
      handler: 'CacheFirst',

      options: {
        // Use a custom cache name.
        cacheName: 'images',

        // Only cache 10 images.
        expiration: {
          maxEntries: 100
        }
      }
    },
    {
      urlPattern: new RegExp('^https://content.karlherrick.com/.*$'),
      handler: 'NetworkFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'content-karlherrick-com-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://herrickdesign.com/.*$'),
      handler: 'NetworkFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'herrickdesign-com-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://cdn.jsdelivr.net/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'cdn-jsdeliver-net-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://rawgit.com/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'rawgit-com-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    },
    {
      urlPattern: new RegExp('^https://unpkg.com/.*$'),
      handler: 'CacheFirst',
      options: {
        cacheableResponse: {
          statuses: [0, 200]
        },
        cacheName: 'unpkg-com-cache',
        expiration: {
          maxEntries: 1000,
          maxAgeSeconds: 365 * 24 * 60 * 60 // 365 days
        }
      }
    }
  ]
}
