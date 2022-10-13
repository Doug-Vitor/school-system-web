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
      boxShadow: { custom: '10px 1px 16px #c2c2c2' },
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
