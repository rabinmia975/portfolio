/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {50:'#eef5ff',100:'#d9e8ff',200:'#bcd6ff',300:'#8ebcff',400:'#5996ff',500:'#3370ff',600:'#1b4df5',700:'#143ce1',800:'#1433b6',900:'#16308d',950:'#111f57'}
      }
    }
  },
  plugins: []
}
