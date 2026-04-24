/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sf: {
          blue: "#00A1E0",
          dark: "#0090C8",
          light: "#33B5E8",
        },
        ai: {
          indigo: "#6366F1",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
        surface: {
          DEFAULT: "#0D1626",
          2: "#111D30",
          3: "#162035",
        },
        border: {
          DEFAULT: "#1E2D45",
          light: "#243550",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Consolas", "Monaco", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideInRight 0.5s ease-out forwards",
        "slide-left": "slideInLeft 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        aurora: "aurora 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 161, 224, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 161, 224, 0.6)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
      boxShadow: {
        "glow-sf": "0 0 24px -2px rgba(0, 161, 224, 0.4)",
        "glow-ai": "0 0 24px -2px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 24px -2px rgba(34, 211, 238, 0.4)",
        "glow-sm": "0 0 10px -1px rgba(0, 161, 224, 0.3)",
        glow: "0 0 20px -2px rgba(0, 161, 224, 0.4)",
        "glow-lg": "0 0 30px -3px rgba(0, 161, 224, 0.5)",
        card: "0 4px 24px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 8px 32px rgba(0, 0, 0, 0.6)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
