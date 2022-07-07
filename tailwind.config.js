/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_yellow: '#F1A208',
        my_creame: '#EADDC5',
        my_green: '#26A96C',
        my_brown: '#824600',
        my_2creame:'#FFF1D0',
        my_blue001021: '#001021',
        dolar_1: '#52812D',
        dolar_2: '#6EAE3C',
        dolar_3: '#7BC143'
      }
    },
  },
  plugins: [],
}
