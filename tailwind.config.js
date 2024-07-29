/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue-dark": "#031F45",
        "blue-white": "#EEF5FF",
        "blue-text": "#226CF2",
        "blue-bold": "#104294",
        "blue-strong": "#031F45",
        "captions-heading": "#1F508E",
        "green-white": "#5A9A3D33",
        "green-dark": "#1C4808",
        "green-light": "#DDEAD7",
        "gray-light": "#F6F6F7",
        "gray-text": "#5E5E63",
        divider: "#CECED4",
        "red-base": "#D53943",
        "red-error": "#F8DFE0",
        "yellow-caution": "#FDD200",
        "yellow-light": "#F7EAD3",
        "orange-base": "#FF9901",
        "purple-base": "#AE549C",
      },
    },
  },
  plugins: [],
};
