import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    "fishtvue/module"
  ],
  fishtvue: {
      theme: {
        semantic:{
          customThemeColor: 150,
          customThemeColorContrast: 30,
        }
      },
    optionsTheme: {
      darkModeSelector: "html.dark"
    }
  },
  content: {
    // Можно настроить markdown здесь
  },
  i18n: {
    locales: [
      {code: 'en', iso: 'en-US', file: 'en.json'},
      {code: 'ru', iso: 'ru-RU', file: 'ru.json'}
    ],
    defaultLocale: 'en',
    lazy: false,
    strategy: 'prefix_except_default',
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
  compatibilityDate: '2024-11-01',
  devtools: {enabled: false},
  css: ['~/assets/css/main.css'],
  vite: {plugins: [tailwindcss()]},
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },
})