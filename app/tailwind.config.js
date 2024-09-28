/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ['"Russo One"']
      },
      animation: {
        'moon-spin': 'spin 30s linear infinite'
      }
    },
  },
  plugins: [],
}