/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  theme: {

    extend: {
      colors: {
        "ea-theme-light": "#ff4747",
        "ea-theme-dark": "#0d1042"
      }
    },
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      reguler: ['PT Sans Narrow', 'Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
