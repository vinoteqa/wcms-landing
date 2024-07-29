/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  theme: {
    colors: {
      black: "#0b1215",
      white: "#fdfff7",
      vinoteqa: "#8a101e",
      "vinoteqa-hover": "#9c1222",
    },
    extend: {
      fontFamily: {
        display: ["BricolageGrotesque", ...defaultTheme.fontFamily.sans],
        body: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js,ts}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `utils/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
    `Error.{js,ts,vue}`,
    `error.{js,ts,vue}`,
    `app.config.{js,ts}`,
  ],
};
