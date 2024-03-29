module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FF9169',
          main: '#38C6F4',
          dark: '#0084CB',
        },
        secondary: {
          main: '#fff',
          dark: '#868686',
          light: '#c0e3e5',
        },
        tertiary: {
          main: '#2eb3ff',
          light: '#F6F9FB',
          dark: '#00314B',
        },
      },
      fontFamily: {
        montsarrat: ['Montserrat,sans-serif', 'sans-serif'],
      },
      spacing: {
        '95%': '95%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
  content: ['./node_modules/flowbite/**/*.js'],
};
