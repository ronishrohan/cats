/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : {
          200 : "#D7AF84",
          300 : "#E1C3A3",
          900 : "#fff8ee"
        },
        "secondary" : "#ffcac4",
        "card" : {
          100 : "#463A34",
          900: "#816C61"
        },
      }
    },
  },
  plugins: [],
}

