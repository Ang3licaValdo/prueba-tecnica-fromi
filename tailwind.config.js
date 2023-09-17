/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-fromi': '#0680ba', 
        'lilac': '#CED8FF',
        'baby-blue': '#D0EFE8',
        'yellow': '#FFDE59',
        'baby-green': '#D2FF99'
      },
    },
  },
  plugins: [],
}
