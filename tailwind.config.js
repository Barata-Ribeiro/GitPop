/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        orange: "#e65b2e",
        darkBlack: "#212121",
        darkGray: "#29292e",
        almostWhite: "#f2f2f2",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
