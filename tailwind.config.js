/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ["Arial", "Helvetica", "sans-serif"],
        poppins: ["Poppins", "Arial", "sans-serif"],
        roboto: ["Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        14: "56px",
      },
      colors: {
        trans500: "rgba(0, 0, 0, 0.5)",
        "green-light": "#52994b",
        "white-muted": "#F9F9F9",
        "gray-light": "#AAAAAA",
        "green-matcha": "#E2F0CB",
        "green-olive": "#6A994E",
      },
      boxShadow: {
        drop: "0px 0px 16.1px 0px rgba(0, 0, 0, 0.5)",
        "drop-mobile": "0px 0px 16.1px 0px rgba(0, 0, 0, 0.25)",
        "drop-hover": "0px 10px 24px 0px rgba(0, 0, 0, 0.7)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateX(-15px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.35s ease forwards",
      },
    },
  },
  plugins: [],
};
