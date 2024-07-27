/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#0b1215',
      'white': '#fdfff7',
      'vinoteqa': '#8a101e',
      'vinoteqa-hover': '#9c1222',
    },
    extend: {
      fontFamily: {
        display: ['BricolageGrotesque', ...defaultTheme.fontFamily.sans],
        body: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}