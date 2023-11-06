/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'honey': '#a66908',
        'navy': '#001B42',
        'grey': '#595959',
        'tan': '#e0e0dc',
        'blue': '#cbd3de',
        'yellow': '#f6e9d4',
      },
    },
    fontFamily: {
      'work': ['Work Sans','Arial', 'sans-serif'],
      'inter': ['Inter', 'Arial', 'sans-serif']
    },
    fontSize: {
      'title-1': '4rem',
      'title-1-mobile': '2.5rem',
      'title-2': '3rem',
      'title-2-mobile': '2rem',
      'title-3': '2rem',
      'title-3-mobile': '1.5rem',
      'title-4': '1.5rem',
      'title-4-mobile': '1.25rem',
      'title-5': '1.25rem',
      'title-5-mobile': '1.125rem',
      'title-6': '1.125rem',
      'body': '1rem',
      'cta': ['0.9375rem', {
        fontWeight: '700',
      }],
    }
  },
  plugins: [],
}

