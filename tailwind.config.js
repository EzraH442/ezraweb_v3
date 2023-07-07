/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        150: "150px",
      },
      colors: {
        "gray-dark": "#222629",
        "grass-green": "#86c232;",
      },
      screens: {
        tb: "960px",
      },
    },
  },
  plugins: [],
};
