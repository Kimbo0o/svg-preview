/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        defaultDark: colors.gray[700],
        defaultLight: colors.gray[100],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
