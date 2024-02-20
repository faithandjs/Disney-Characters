/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#d40819',
        blue: '#105191',
        light_blue: '#50a5fa',
        green: '#09912d',
        purple: '#502b99',
        dark_puple: '#352f40',
        orange: '#e89a5f',
        teal: '#00AEAE',
        yellow: '#e8d85f',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};

