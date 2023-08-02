/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    letterSpacing: {
      widest: ".35em",
    },
    backgroundColor: {
      "slate-900": "hsl(230, 17%, 14%)",
      "slate-800": "hsl(232, 19%, 15%)",
      "slate-700": "hsl(228, 28%, 20%)",
    },
  },
  extend: {},
  plugins: [],
};
