/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-hero-1': "url('./src/assets/home-hero-1')"
      }
    },
    container: {
      center: true
    },
  },
  plugins: [],
}

