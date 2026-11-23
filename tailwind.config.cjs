/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0b0c0e",
          surface: "#121418",
          card: "#171a20",
          border: "#232730",
        },
        accent: {
          DEFAULT: "#bef264", // refined electric lime
          hover: "#a3e635",
          muted: "rgba(190, 242, 100, 0.15)",
        },
        violet: {
          DEFAULT: "#8b5cf6",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      }
    }
  },
  plugins: []
};
