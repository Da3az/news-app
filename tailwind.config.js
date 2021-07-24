const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        blackTr: '#0000007d',
        blackWh: '#0f0d0d',
        blackH: '#494343',
        indigo: colors.indigo,
        red: '#c42433',
        yellow: 'orange',
        white: '#fff',
        whiteWh:'wheat',
        blue:'navajowhite',
        gray: '#525252',
        hulu: '#06202A',
        hulu_:'#020D11'
      },
      spacing: {
        'nav':'96px',
        'hero': 'calc(100vh - 96px)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
