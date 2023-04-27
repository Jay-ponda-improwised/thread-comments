// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      base_url: process.env.BASE_URL,
    },
  },

  app: {
    head: {
      title: 'Nuxt3',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  css: ['bootstrap/dist/css/bootstrap.min.css'], // add
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
