const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

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
      secondary: colors.orange,
      gray: colors.gray,
      indigo: colors.indigo,
      amber: colors.amber,
      accent: colors.teal,
      danger: colors.rose,
    },
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/hero.jpg')",
      },
    },
    fontFamily: {
      sans: [
        '"Inter"',
        {
          fontFeatureSettings: '"cv11", "ss01"',
          fontVariationSettings: '"opsz" 32',
        },
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
