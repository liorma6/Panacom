/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0041C2",
        "primary-light": "#4f7ee5",
        secondary: "#F5A623",
        "secondary-dark": "#b37a12",
        background: "#f9fbff",
        surface: "#ffffff",
        "surface-muted": "#eef3ff",
        "text-primary": "#0f172a",
        "text-secondary": "#334155",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
