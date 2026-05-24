/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        display: ["Sora", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#e9f1ff",
          100: "#d6e4ff",
          200: "#adc6ff",
          300: "#7aa2ff",
          400: "#4c7dff",
          500: "#2f5fff",
          600: "#1f46d6",
          700: "#1836a8",
          800: "#142c85",
          900: "#102266",
        },
        surface: {
          50: "#f6f8fb",
          100: "#edf1f6",
          200: "#d8e0ea",
          300: "#bcc9db",
          400: "#91a1ba",
          500: "#6f819f",
          600: "#54647f",
          700: "#404b62",
          800: "#2c3546",
          900: "#1d2432",
        },
      },
      boxShadow: {
        card: "0 16px 40px -24px rgba(15, 23, 42, 0.35)",
        soft: "0 8px 24px -12px rgba(15, 23, 42, 0.25)",
      },
      borderRadius: {
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
