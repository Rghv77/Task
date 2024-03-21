/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "rgba(20, 22, 46, 1)", // Blue color using RGB values
        customRed: "", // Red color using RGB values
        // Add more custom colors as needed
        circle1: "rgba(68, 97, 242, 0.5)",
        circle2: "rgba(255, 235, 160, 1)",
      },
    },
  },
  plugins: [],
};
