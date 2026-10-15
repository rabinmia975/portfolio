/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {50:'#fff1f1',100:'#ffdfdf',200:'#ffc6c6',300:'#ffa3a3',400:'#ff7a7a',500:'#ff4d4d',600:'#f23c3c',700:'#d92d2d',800:'#b92424',900:'#991f1f',950:'#5c0f0f'}
      }
    }
  },
  plugins: []
}
