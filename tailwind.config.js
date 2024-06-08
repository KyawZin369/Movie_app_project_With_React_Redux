/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      },
      fontSize: {
        sm: '0.1rem',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
