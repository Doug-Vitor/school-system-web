/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: { main: '#0e00ad' },
        primary: { main: '#1300e4' },
        text: { main: '#fff' },
        shadow: { main: '#c2c2c2' },

        success: {
          main: '#00a508',
          hover: '#00c00a'
        },
        danger: {
          main: '#b40000',
          hover: '#ff0000'
        },
        info: {
          main: '#0e00ad',
          hover: '#1300e4'
        }
      }
    },
  },
  plugins: [],
}
