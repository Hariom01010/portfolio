/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Cedarville: ["Cedarville Cursive","cursive"],
      },
      keyframes:{
        slideInLeft: {
          '0%': {transform: "translate(-1000px)"},
          "100": {transform: "translate(0px)"}
        },
        slideInRight: {
          '0%': {transform: "translate(400px)"},
          "100": {transform: "translate(0px)"}
        },
        fadeIn:{
          '0%': {opacity: "0"},
          "100": {opacity: "100"}
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        fadeIn: 'fadeIn 3.5s ease-out'
      }
    },
  },
  plugins: [],
}