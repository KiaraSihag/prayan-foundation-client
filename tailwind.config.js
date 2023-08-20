/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hoc/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    extend: {
      spacing: {
        '7': '1.75rem',
        '13': '3.25rem',
        '44': '11rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

