const translations = require('./i18n/index.js');

module.exports = {
  // dir: 'dist/app',
  // target: 'static',
  generate: {
    subFolders: false // HTML files are generated according to the route path
  },
  router: {
    // base: '/hebamme-jana-goellner/'
    base: '/'
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
    locales: ['de'],
    defaultLocale: 'de',
    vueI18n: {
      fallbackLocale: 'de',
      messages: translations,
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'faEnvelope',
        'faHandshake',
        'faHome',
        'faMap',
        'faPhone',
        'faStickyNote',
        'faUser',
      ],
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
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' }
    ]
  },
  components: true
};
