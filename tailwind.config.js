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
        cinnabar: {
          50: "#fdf5ef",
          100: "#fbe6d9",
          200: "#f7cab1",
          300: "#f1a780",
          400: "#eb7a4c",
          500: "#e65b2e", // MAIN
          600: "#d7401f",
          700: "#b22f1c",
          800: "#8e281e",
          900: "#73221b",
          950: "#3e0f0c",
        },
        shark: {
          50: "#f5f5f6",
          100: "#e5e6e8",
          200: "#cdced4",
          300: "#abadb5",
          400: "#81838f",
          500: "#666874",
          600: "#575863",
          700: "#4a4b54",
          800: "#424348",
          900: "#3a3a3f",
          950: "#29292e", // MAIN
        },
      },
    },
  },
  plugins: [],
};
