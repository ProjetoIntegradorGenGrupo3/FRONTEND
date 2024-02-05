/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        claro: '#2A3326',
        medio:'#7CA081',
        escuro:'#CAEECF',
        azlaro:'#9BC8B8',
        azmedio:'#5D796F',
      },
    },
  },
  plugins: [],
}