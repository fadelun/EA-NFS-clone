/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  theme: {
    extend: {},
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      reguler: ['PT Sans Narrow', 'Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
