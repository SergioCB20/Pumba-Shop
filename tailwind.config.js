/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sombreado_white: "rgba(255, 255, 255, 0.3)",
        sombreado_black: "rgba(0,0,0,0.5)",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
