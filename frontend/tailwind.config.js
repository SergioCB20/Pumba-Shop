/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sombreado_white: "rgba(255, 255, 255, 0.3)",
        sombreado_black: "rgba(0,0,0,0.5)",
      },
      maxWidth:{
        '30':'7.2rem'
      },
      height:{
        'hero':'900px'
      },
      inset:{
        '30':'7.1rem'
      }
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      'md': '810px',
      'ilg': '933px',
      'lg': '1096px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    translate: {
      'hiddenLeft': '-100%',
      'hiddenRight':'100%'
    },
  },
  plugins: [],
};
