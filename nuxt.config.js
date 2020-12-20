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
  components: true
};
