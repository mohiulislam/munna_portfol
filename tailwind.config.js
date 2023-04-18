/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#03090d",
        secondary: "#15B9FF",
        secondaryDeep: "#046dba",
      },
    },
    fontFamily: {
      Righteous: "Righteous",
    },
  },
  plugins: [],
};
