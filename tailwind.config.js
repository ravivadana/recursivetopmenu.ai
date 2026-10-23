/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#76d7c4",
        secondary: "#48c9b0",
        dark: "#333333",
        hoverRed: "#ff5252",
        hoverYellow: "#ffe400",
      },
    },
  },
  plugins: [],
}