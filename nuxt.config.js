export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Witnet Foundation',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A non-profit dedicated to stewarding the advancement of the Witnet oracle protocol and ecosystem, with a focus on fostering research and development of technologies that enhance the freedom of the individual.',
      },
      { name: 'theme-color', content: '#122135' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:type', content: 'article' },
      { name: 'og:title', content: 'Witnet Foundation' },
      {
        name: 'og:description',
        content:
          'A non-profit dedicated to stewarding the advancement of the Witnet oracle protocol and ecosystem, with a focus on fostering research and development of technologies that enhance the freedom of the individual.',
      },
      { name: 'og:image', content: '/favicon-192x192.png' },
      { name: 'og:url', content: 'https://witnet.foundation' },
      { name: 'og:locale:alternate', content: 'es_ES' },
    ],
    link: [
      { rel: 'canonical', href: 'https://witnet.foundation' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon-192x192.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/colors.scss', '~/assets/styles/main.scss'],
  // You will have to add this new object if it doesn't exist already
  styleResources: {
    scss: ['~/assets/styles/main.scss', '~/assets/styles/colors.scss'],
  },
  // ...
  modules: ['@nuxtjs/style-resources', '@nuxt/content', 'nuxt-i18n'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  i18n: {
    // add SEO attributes in layout head for better performance
    seo: true,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        isCatchallLocale: true,
      },
      {
        code: 'es',
        iso: 'es-ES',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require('./locales/en.json'),
        es: require('./locales/es.json'),
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
