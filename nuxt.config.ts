import { fileURLToPath, URL } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss", "@nuxtjs/seo", "@nuxt/content"],

  runtimeConfig: {
    public: {
      demoBookingPageLink: process.env.DEMO_BOOKING_PAGE,
      hubspot: {
        portalId: process.env.HUBSPOT_PORTAL_ID,
        formId: {
          de: process.env.HUBSPOT_FORM_ID_DE,
          en: process.env.HUBSPOT_FORM_ID_EN,
          it: process.env.HUBSPOT_FORM_ID_IT,
        }
      }
    }
  },

  site: {
    url: 'https://www.vinoteqa.com',
    defaultLocale: 'en',
    title: 'Vinoteqa',
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  i18n: {
    baseUrl: 'https://www.vinoteqa.com',
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      iso: 'en',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'de',
      iso: 'de',
      name: 'Deutsch',
      file: 'de.json',
    },
    {
      code: 'it', 
      iso: 'it',
      name: 'Italiano',
      file: 'it.json',
    }],
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