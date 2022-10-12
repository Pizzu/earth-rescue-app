/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      primaryGreen: '#55C57A',
      secondaryPurple: {
        200: '#F6F1FF',
        700: '#9240FB',
      },
      secondaryOrange: {
        200: '#FFF7E8',
        700: '#FFB016',
      },
      secondaryRed: {
        200: '#FFF4F4',
        700: '#FF414C',
      },
      secondaryGreen: {
        200: '#EDFBEE',
        700: '#45C74E',
      },
      secondaryAzure: {
        200: '#EEF9FF',
        700: '#68CAFF',
      },
      neutral: {
        800: '#0B0E2C',
        700: '#303350',
        600: '#6F7182',
        500: '#989AAD',
        400: '#CACBD7',
        300: '#E9EAF3',
        200: '#F9FCF7',
        100: '#FFFFFF',
      },
    },
    extend: {
      fontSize: {
        displayOne: '4.875rem',
        displayTwo: '3.375rem',
        displayThree: '2.75rem',
        displayFour: '1.375rem',
        headingOne: '2.625rem',
        headingTwo: '2rem',
        headingThree: '1.5rem',
        headingFour: '1.375rem',
        headingFive: '1.125rem',
        headingSix: '1rem',
        bodyLarge: '1.125rem',
        bodyDefault: '0.875rem',
        bodySmall: '0.75rem',
        400: '1.125rem',
        300: '1rem',
        200: '0.875rem',
        100: '0.75rem',
        50: '0.625rem',
      },
    },
  },
  plugins: [],
};
