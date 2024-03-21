/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "rgba(20, 22, 46, 1)", // Blue color using RGB values
        bgLight: "rgba(246, 246, 246, 1)", // Red color using RGB values
        // Add more custom colors as needed
        circle1: "rgba(68, 97, 242, 1)",
        circle2: "rgba(221, 168, 42, 1)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
