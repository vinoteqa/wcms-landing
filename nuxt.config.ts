import { fileURLToPath, URL } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  i18n: {
    locales: [{
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'de',
      iso: 'de-DE',
      name: 'Deutsch',
      file: 'de.json',
    },
    {
      code: 'it', 
      iso: 'it-IT',
      name: 'Italiano',
      file: 'it.json',
    }],
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales/',
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})