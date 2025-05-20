/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Montserrat, sans-serif'
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          'base-content': '#ccc',
          primary: '#FFF',
          secondary: '#2133ff',
          'base-100': '#2133ff',
          'base-300': '#2133ff'
        }
      }
    ]
  }
}
