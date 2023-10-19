/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#333e48",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFD700",
          secondary: "#ffc300",
          accent: "#0062bd",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
