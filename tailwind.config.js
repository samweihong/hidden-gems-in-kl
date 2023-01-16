/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0087FF",
          200: "#1746A2",
          300: "#002F69",
        },
        secondary: {
          100: "#FFF7E9",
          200: "#FFAF7E",
          300: "#DD4912",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-bugaki)", "serif"],
        cursive: ["var(--font-cookie)", "cursive"],
      },
    },
  },
  plugins: [],
};
