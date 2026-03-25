/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Luxury palette */
        primary: "#0F172A", // Deep Navy
        secondary: "#10B981", // Emerald Green
        accent: "#F59E0B", // Gold/Amber
        highlight: "#10B981", // Secondary glow accent

        background: "#FAFAF9",
        ink: "#0F172A",
        text: "#334155",

        // Back-compat tokens (existing components use these names)
        brandBlue: "#0F172A",
        brandGreen: "#10B981",
        brandGreen2: "#047857",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.25)",
        /* Premium amber glow */
        glow: "0 0 0 1px rgba(245, 158, 11, 0.25), 0 18px 50px rgba(245, 158, 11, 0.18)",
        /* Emerald glow (used by some secondary accent styles) */
        highlight: "0 0 0 1px rgba(16, 185, 129, 0.22), 0 18px 50px rgba(16, 185, 129, 0.16)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"],
        serif: ["Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      transitionTimingFunction: {
        "cubic-bezier-fast": "cubic-bezier(0.2, 0.8, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

