const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      scale: ['focus-within'],
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
}
