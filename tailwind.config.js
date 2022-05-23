module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '45': '45%',
        '55': '55%',
        '56.25': '56.25%'
      },
      colors: {
        'primary-light': '#161136',
        'primary-dark': '#1F005E',
        'primary-dark-medium': '#080524',
        'purple-bright': '#745AA2',
        'lightBlue-500': '#0EA5E9',
        'lightBlue-600': '#0284C7',
        'red-light': '#BD0B79',
        'pink-light': '#EC67E6',
        'pink-normal': '#CB55C4',
        'blue-normal': '#015ACF',
        'purple-normal': '#6F2674'
      },
      screens: {
        'desktop-min': {
          'max': '1024px'
        },
        'mobile': {
          'max': '550px'
        }
      }  
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}