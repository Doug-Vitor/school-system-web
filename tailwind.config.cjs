/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/styles/*.ts',
    './src/styles/**/*.ts'
  ],
  theme: {
    extend: {
      colors: {
        primary: { main: '#0e00ad' },
        shadow: '#c2c2c2',

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
