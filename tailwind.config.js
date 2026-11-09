/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        chocolate: "#2C1D11",
        "chocolate-card": "#3D2919",
        blush: "#F4C2C2",
        rose: "#E8A4B0"
      },
      fontFamily: {
        sans: ["DM Sans", "Arial", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};
