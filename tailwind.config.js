/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/components/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#6171ff',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
