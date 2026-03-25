/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617", // Deep Navy
        secondary: "#0F172A", // Slate
        accent: "#22C55E", // Neon Green
        highlight: "#38BDF8", // Sky Blue

        // Back-compat tokens (existing components use these names)
        brandBlue: "#020617",
        brandGreen: "#22C55E",
        brandGreen2: "#16A34A",
        ink: "#0F172A",
        text: "#EAF2FF",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.35)",
        glow: "0 0 0 1px rgba(34, 197, 94, 0.25), 0 18px 50px rgba(34, 197, 94, 0.22)",
        highlight: "0 0 0 1px rgba(56, 189, 248, 0.25), 0 18px 50px rgba(56, 189, 248, 0.18)",
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

