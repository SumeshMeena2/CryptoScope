/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        nunito: "Nunito", 
      },
      screens: { // Adding max-width breakpoints
        'max-xl': { 'max': '1279px' }, // Max width for xl
        'max-lg': { 'max': '1023px' }, // Max width for lg
        'max-md': { 'max': '767px' },  // Max width for md
        'max-sm': { 'max': '639px' },  // Max width for sm
        'max-ssm': { 'max': '400px' },  // Max width for sm
      },
      colors: {
        gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
        white: "#fff",
        cyan: "#1abc9c",
        red: "#d6436e",
        green: "#25da72",
      },
      fontSize: { 
        sm: "14px", 
        md: "18px", 
        lg: "24px", 
        xl: "32px", 
        base: "16px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
