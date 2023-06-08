/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "10vh 80vh 10vh"
      },
      gridTemplateColumns: {
        layout: "25% 75%"
      }
    }
  },
  plugins: [require("daisyui")]
};
