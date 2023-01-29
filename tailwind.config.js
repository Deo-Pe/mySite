module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'min': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      textColor: {
        'main': '#5684A4',
        'main2': '#AEB4B8',
        'mycolor': '#B19C5D'
      },
      // #eef3f6
      backgroundColor: {
        "mainCol": "#eef3f6"
      }
    },
    inset: {
      '43': '42%'
    },
    fontFamily: {
      'ProstoOne': ['Prosto One'],
      'Laptev': ['Laptev_Brush'],
      'Caveat': ['Caveat'],
    }
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
  plugins: [],
}
