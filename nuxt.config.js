const translations = require('./i18n/index.js');

module.exports = {
  generate: {
    subFolders: false // HTML files are generated according to the route path
  },
  router: {
    base: '/hebamme-eisenach/'
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-i18n',
    '@nuxtjs/fontawesome',
  ],
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: translations,
    }
  },
  fontawesome: {
    icons: {
      solid: ['faPhone', 'faEnvelope'],
    },
  },
  head: {
    title: 'Hebamme - Jana Göllner',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'hebamme-eisenach/favicon.svg' }
    ]
  },
  components: true
};
