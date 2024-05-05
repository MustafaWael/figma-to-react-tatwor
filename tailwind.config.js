/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "rgba(104, 80, 68, 1)",
        darkBlue: "rgba(58, 64, 90, 1)",
        lightBlue: "rgb(245, 248, 252)",
        rosy: "rgba(249, 222, 201, 1)",
      },
      animation: {
        "fade-in": "fade-in 1s ease-in-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
