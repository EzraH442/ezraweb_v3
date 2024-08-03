/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        150: "150px",
      },
      colors: {
        background: "#222629",
        primary: "#d4d4d8",
        secondary: "#67e8f9",
        accent: "#cdb4db",
      },
      screens: {
        tb: "960px",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.zinc[300]"),
            "--tw-prose-headings": theme("colors.fuchsia[200]"),
            "--tw-prose-links": theme("colors.cyan[300]"),
            "--tw-prose-bold": theme("colors.pink[900]"),
            "--tw-prose-counters": theme("colors.pink[200]"),
            "--tw-prose-bullets": theme("colors.pink[200]"),
            "--tw-prose-quotes": theme("colors.zinc[300]"),
            "--tw-prose-quote-borders": theme("colors.pink[300]"),
            "--tw-prose-code": theme("colors.purple[200]"),
            "--tw-prose-pre-code": theme("colors.gray[300]"),
            "--tw-prose-pre-bg": theme("colors.black"),
          },
        },
      }),
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require("@tailwindcss/typography")],
};
