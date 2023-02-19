/** @type {import('tailwindcss').Config} */
const defaultThem = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Open Sans',  ...defaultThem.fontFamily.sans], 
      }, 
      colors:{
        "brand-gray-1":'#dadce0', 
        "brand-blue-1":"#1967d2"
        , 'brand-green':"#137333"
      }
    },
  },
  plugins: [],
}
