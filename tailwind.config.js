/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-hover": "#556c4f",
        primary: "#42583D",
        secondary: "#bd7124",
        whitesmoke: "#f7f3e7",
      },
      borderWidth: {
        thick: "25px",
      },
    },
  },
  plugins: [],
};
