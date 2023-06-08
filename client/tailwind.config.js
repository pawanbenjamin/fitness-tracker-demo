/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: "100px 100% 100px",
      },
      gridTemplateColumns: {
        layout: "25% 75%",
      },
    },
  },
  plugins: [],
};
