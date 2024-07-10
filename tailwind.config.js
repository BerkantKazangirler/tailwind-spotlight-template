/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
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

