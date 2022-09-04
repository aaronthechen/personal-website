/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        bg: '#F2E2C4',
        text: '#261D11',
        red: '#A6290D',
        yellow: '#F2B705',
        blue: '#0477BF',
      },
    }
  },
  plugins: [],
}