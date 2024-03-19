/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        escuro: '#2A3326',
        medio:'#7CA081',
        claro:'#CAEECF',
        azclaro:'#9BC8B8',
        azmedio:'#5D796F',
        azescuro:'#0A0C7A'
      },
    },
  },
  plugins: [],
}