/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565d8",
        dark: {
          light: "#5A7184",
          hard: "#0d2436",
          soft: "#183856",
        },
      },
      fontFamily: {
          opensans: ["'Open Sans'", "sans-serif"],
          roboto: ["'Roboto'", "sans-serif"],
      }
    },
  },
  plugins: [],
}
