/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0B2B4B",
        brandGreen: "#1BAA6B",
        brandGreen2: "#0F8A58",
        ink: "#0B1220",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 43, 75, 0.15)",
        glow: "0 0 0 1px rgba(27, 170, 107, 0.25), 0 10px 30px rgba(27, 170, 107, 0.18)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      transitionTimingFunction: {
        "cubic-bezier-fast": "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

