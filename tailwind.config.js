const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,md,liquid,erb,serb,rb}', './frontend/javascript/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: colors.indigo,
      secondary: colors.gray,
      gray: colors.gray,
      indigo: colors.indigo,
      orange: colors.amber,
      accent: colors.teal,
      danger: colors.rose,
      midnight: {
        100: '#edf1fc',
        700: '#222c42',
        900: '#0f172a',
      },
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
