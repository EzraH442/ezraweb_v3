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
        "background": "#222629",
        "primary": "#fde047",
        "secondary": "#67e8f9",
        "accent": "#f0abfc"
      },
      screens: {
        tb: "960px",
      },
    },
  },
  plugins: [],
};
