/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '256': '44rem',
        '384': '96rem',
      },
      container: {
        screens: {
          sm: '400px',
          md: '600px',
          lg: '728px',
          xl: '984px',
          '2xl': '1240px',
        },
      }
    },
  },
  plugins: [],
}

