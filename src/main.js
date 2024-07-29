import { createApp } from "vue";
import { createI18n } from "vue-i18n";

// create app
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// set i18n
import de from "./locales/de.json";
import en from "./locales/en.json";
import it from "./locales/it.json";

const availableLocales = ["en", "de", "it"];

// Detect browser locale and extract language
const browserLocale = (
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language
).split(/[-_]/)[0];

// Fallback locale if browser locale is not available in the messages
const locale = availableLocales.includes(browserLocale) ? browserLocale : "en";

const i18n = createI18n({
  availableLocales,
  locale,
  fallbackLocale: "en",
  messages: {
    de,
    en,
    it,
  },
});

// mount app
app.use(i18n);
app.mount("#app");
