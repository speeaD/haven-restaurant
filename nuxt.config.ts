// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  typescript: {
    strict: true
  },

  css: ['~/assets/css/styles.css'],

  app: {
    head: {
      title: 'Haven of Flavours - Haven',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css' }
      ]
    }
  },

  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@pinia/nuxt'],

  runtimeConfig: {
    public: {
      pocketbaseUrl: process.env.PUBLIC_POCKETBASE_URL
    }
  }
})
