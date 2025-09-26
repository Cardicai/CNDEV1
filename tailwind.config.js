/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(22,181,255)',
        gold: 'rgb(241,196,15)',
        background: 'rgb(2,6,15)',
        surface: 'rgba(4,11,22,0.9)',
        foreground: 'rgba(255,255,255,0.95)'
      }
    },
  },
  plugins: [],
}
