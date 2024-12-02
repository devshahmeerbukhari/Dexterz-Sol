/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this to include all component files
  ],
  theme: {
    extend: {
      animation: {
        fill: "fillProgress 2s forwards",
      },
      keyframes: {
        fillProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
}

