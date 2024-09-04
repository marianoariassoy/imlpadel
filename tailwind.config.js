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
          'base-content': '#8c8c8c',
          primary: '#2133ff',
          accent: '#2133ff',
          'base-100': '#1c1c1c',
          'base-300': '#252525'
        }
      }
    ]
  }
}
