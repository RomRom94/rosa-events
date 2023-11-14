/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': '#70A9A1',
        'green-dark': '#436661',
        'green-light': '#e6f7f5',
        'grey-text': '#B3A395',
        'black': '#1f1f1f'
      },
    },
    fontFamily: {
      'work': ['Work Sans','Arial', 'sans-serif'],
      'playfair': ['Playfair Display', 'Arial', 'serif'],
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
        fontWeight: '500',
      }],
    }
  },
  plugins: [],
}

