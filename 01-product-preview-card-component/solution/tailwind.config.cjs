/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    
    colors: {
      'cream': 'hsl(30, 38%, 92%)',
      'dark-cyan': 'hsl(158, 36%, 37%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      'white': 'hsl(0, 0%, 100%)'
    },
  },
  plugins: [require("daisyui")],
}