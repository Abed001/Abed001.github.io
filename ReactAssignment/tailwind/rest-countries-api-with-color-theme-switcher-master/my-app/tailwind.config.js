/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1440px',
      },
      colors: {
        darkBlue: 'rgb(38, 42, 44)',
        veryDarkBlue: 'rgb(31, 34, 36)',
        veryDarkBlueLightMode: 'rgb(28, 31, 33)',
        darkGray: 'rgb(52, 52, 52)',
        veryLightGray: 'rgb(247, 247, 247)',
        White: '#ffffff ',
        ghostWhite:'#eeede7'
        

      },

      fontFamily: {
        Nunito_Sans: ['var(--font-nunito-sans)'],
      },
    },
  },
  plugins: [],
};
