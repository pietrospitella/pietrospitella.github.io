// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    },
  },
  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' }
  ],
  modules: [
    'nuxt-anchorscroll',
    'nuxt-locomotive-scroll',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    'nuxt-viewport'
  ],
  anchorscroll: {
    hooks: [
      'page:transition:finish',
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
  },
  i18n: {
    vueI18n: './locales/i18n.config.ts' // if you are using custom path, default
  },
  build: {
    transpile: ['@nuxtjs/i18n'],
  },
  compatibilityDate: '2024-07-04'
})