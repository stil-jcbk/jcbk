/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [],
}
