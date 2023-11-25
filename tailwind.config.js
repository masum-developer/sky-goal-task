/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          '100': '#F8F1D3',
          // ... Add more percentage-based shades as needed
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

