const { description } = require('commander');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      color:{
        bodyColor:"linear-gradient(180deg, #FAFAFA 0%, #FCFCFC 100%)",
        primaryColor:"#000000",
        secondaryColor:"#39DB4A",
        subtitleColor:"#F63B3B",
        descriptionColor:"#4A4A4A"
      }
    },
  },
  plugins: [],
}

