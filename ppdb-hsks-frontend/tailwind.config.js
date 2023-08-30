/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  ],
  theme: {
    screen: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
  },

    fontFamily: {
      poppins: ["Poppins"],
  },
  extend: {
      colors: {
          biruprimary: "#204397",
          BiruSecondary1: "#27B6C1",
          BiruSecondary2: "#131E3C",
          Hijau: "#25D366",
          Emas: "#B8A200",
          Kuning: "#FBC72D",
          AbuAbu: "#9EA9C6",
      },
      screens: {
        'mysm': '300px',
        'mymd': '640px',
    }
  },
  },
  plugins: [],
}