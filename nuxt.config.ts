// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/html-validator',
    '@nuxt/fonts',
  ],
  devtools: { enabled: true },
  app: {
    head: { htmlAttrs: { lang: 'en' } },
  },
  css: ['~/assets/css/main.css'],
  future: { compatibilityVersion: 4 },
  features: {
    noScripts: 'all',
  },
  experimental: { typedPages: true },
  compatibilityDate: 'latest',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
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
