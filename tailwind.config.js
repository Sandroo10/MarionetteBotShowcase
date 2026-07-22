/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080708",
        soot: "#111012",
        bone: "#e8e2d8",
        ash: "#9b9690",
        alarm: "#b8202e",
        bruise: "#6d3b78",
        amber: "#c9913d",
      },
      fontFamily: {
        display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
        mono: ["Consolas", "Courier New", "monospace"],
      },
      boxShadow: {
        alarm: "0 0 30px rgba(184, 32, 46, 0.28)",
      },
    },
  },
  plugins: [],
}
