// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-svgo',
    '@nuxt/content',
  ],
  features: {
    inlineStyles: false
  },
  svgo: {
    defaultImport: 'component',
  },
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Software Stewardship Lab',
      htmlAttrs: { lang: 'en' },
      script: [
        {
          'data-goatcounter': 'https://stewardshiplab.goatcounter.com/count',
          src: '//gc.zgo.at/count.js',
          async: '',
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  content: {
    database: {
      type: 'sqlite',
      filename: ':memory:',
    },
    experimental: { sqliteConnector: 'native' },
  },
  vite: {
    optimizeDeps: {
      include: [
        'cheerio',
        'temporal-polyfill',
      ]
    },
  },
  future: { compatibilityVersion: 4 },
  experimental: {
    typedPages: true,
    extractAsyncDataHandlers: true,
  },
  compatibilityDate: 'latest',
  routeRules: {
    '/**': {
      prerender: true,
    },
    '/foundations': {
      redirect: {
        to: '/reports/foundations',
        statusCode: 308,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700],
    },
  },
  htmlValidator: {
    failOnError: true,
  },
})
