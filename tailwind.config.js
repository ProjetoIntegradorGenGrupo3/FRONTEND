/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verde: '#7FC8A9',
        ocre:'#D5EEBB',
        verdeEscuro:'#5F7A61',
        marrom:'#444941',
      },
    },
  },
  plugins: [],
}