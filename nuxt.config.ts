// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/seo",
    "@nuxt/content",
    "nuxt-studio",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/image"
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  runtimeConfig: {
    public: {
      demoBookingPageLink: {
        de: process.env.DEMO_BOOKING_PAGE_DE || process.env.DEMO_BOOKING_PAGE,
        en: process.env.DEMO_BOOKING_PAGE_EN || process.env.DEMO_BOOKING_PAGE,
        it: process.env.DEMO_BOOKING_PAGE_IT || process.env.DEMO_BOOKING_PAGE,
      },
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

  ogImage: {
    enabled: false
  },

  app: {
    head: {
      meta: [
        // Open Graph
        { property: 'og:title', content: 'Vinoteqa — Wine Cellar Management for Restaurants' },
        { property: 'og:description', content: 'Vinoteqa helps restaurants with 200+ labels digitalize wine cellar management. Generate wine lists, track inventory & access analytics. Book a free demo.' },
        { property: 'og:image', content: 'https://www.vinoteqa.com/screenshot.png' },
        { property: 'og:url', content: 'https://www.vinoteqa.com/' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Vinoteqa — Wine Cellar Management for Restaurants' },
        { name: 'twitter:description', content: 'Vinoteqa helps restaurants with 200+ labels digitalize wine cellar management. Generate wine lists, track inventory & access analytics. Book a free demo.' },
        { property: 'twitter:domain', content: 'vinoteqa.com' },
        { property: 'twitter:url', content: 'vinoteqa.com' },
        { name: 'twitter:image', content: 'https://www.vinoteqa.com/screenshot.png' }
      ]
    }
  },

  i18n: {
    baseUrl: 'https://www.vinoteqa.com',
    defaultLocale: 'en',
    restructureDir: false,
    locales: [{
      code: 'en',
      language: 'en',
      name: 'English',
      file: 'en.json',
    },
    {
      code: 'de',
      language: 'de',
      name: 'Deutsch',
      file: 'de.json',
    },
    {
      code: 'it',
      language: 'it',
      name: 'Italiano',
      file: 'it.json',
    }],
    strategy: 'prefix',
    lazy: false,
    langDir: 'locales/',
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },

  sitemap: {
    autoLastmod: true
  },

  // Nix/store and many hosts ship a read-only filesystem. Content restores the
  // SQLite dump into this DB on boot — file paths under the store fail with
  // SQLITE_CANTOPEN. Override at build time via CONTENT_DATABASE_PATH if needed.
  content: {
    database: {
      type: 'sqlite',
      filename: process.env.CONTENT_DATABASE_PATH || ':memory:',
    },
  },

  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'vinoteqa',
      repo: 'wcms-landing',
      branch: 'main',
    },
  },

  gtag: {
    enabled: false,
  },

  cookieControl: {
    locales: ['de', 'en', 'it'],

    cookies: {
      necessary: [],
      optional: [
        {
          id: 'google-analytics',
          name: 'google-analytics',
          targetCookieIds: ['_ga', '_ga_', '_gcl_au'],
        },
      ],
    },

    localeTexts: {
      de: {
        manageCookies: "Anpassen"
      },
      en: {
        manageCookies: "Manage"
      },
      it: {
        manageCookies: "Gestisci"
      }
    }
  }
})
