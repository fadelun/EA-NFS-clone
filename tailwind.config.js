/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      reguler: ['PT Sans Narrow', 'serif'],
    }
  },
  plugins: [],
}
