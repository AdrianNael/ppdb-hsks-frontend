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
  extend: {
      colors: {
          biruprimary: "#204397",
          BiruSecondary1: "#27B6C1",
          BiruSecondary2: "#131E3C",
          Hijau: "#25D366",
          Emas: "#B8A200",
          Kuning: "#FBC72D",
          AbuAbu: "#9EA9C6",
          TK: "#EEAC20",
          SD: "#FF0000",
          SMP: "#000080",
          SMA: "#A5A4A4",
      },
      screens: {
        'hp': '400px',
        'lsm': '550px',
    }
  },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}