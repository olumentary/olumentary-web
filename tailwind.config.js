/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,md,liquid,erb,serb,rb}', './frontend/javascript/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/hero.jpg')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
