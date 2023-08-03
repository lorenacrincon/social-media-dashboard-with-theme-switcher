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
      "slate-400": "hsl(225, 100%, 98%)",
    },
    borderColor: {
      "blue-500": "hsl(208, 92%, 53%)",
      "blue-400": "hsl(203, 89%, 53%)",
      "red-500": "hsl(348, 97%, 39%)",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  extend: {},
  plugins: [],
};
