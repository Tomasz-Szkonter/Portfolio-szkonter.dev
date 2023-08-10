/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#2ECC71',
        secondary: '#54D98C',
        'dark-100': '#263547',
        'dark-200': '#384E68',
        'black-100': '#020202',
        'black-200': '#090325',
        'gray-100': '#DFE0E0',
        'gray-200': '#C5C7C7',
        'white-100': '#ffffff',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
        card_2: '0 1rem 2rem hsl(0 0% 0% / 20%)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern-1': "url('/src/assets/herobg.png')",
        'hero-pattern-alt': "url('/src/assets/herobgalt.png')",
      },
      rotate: {
        36: '36deg',
      },
    },
  },
  plugins: [],
};
