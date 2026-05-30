import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // night — deep cave / cosmos ground, warm charcoal-umber
        night: {
          950: "#14110d",
          900: "#1c1710",
          800: "#271f15",
          700: "#352a1c",
          600: "#473827",
          500: "#5c4a33",
        },
        // ochre — cave-painting clay: the primary thread, warmth of fire & earth (PRIMARY)
        ochre: {
          600: "#a8531f",
          500: "#c1652f",
          400: "#d4793a",
          300: "#e0925a",
          200: "#ecb083",
        },
        // oxide — hand-stencil red / iron oxide: the human mark, blood, the Cognitive Revolution
        oxide: {
          600: "#7e2f1c",
          500: "#9c3e26",
          400: "#b9543a",
          300: "#cd6e54",
          200: "#dd9078",
        },
        // sage — domesticated green: the Agricultural Revolution, wheat & field
        sage: {
          600: "#5a6b3a",
          500: "#7a8a4e",
          400: "#9aa86b",
          300: "#bcc591",
        },
        // dusk — lapis / cosmos blue: the Scientific Revolution, the future, the void above
        dusk: {
          600: "#3a4f6b",
          500: "#52708f",
          400: "#7593b0",
          300: "#a3bad2",
        },
        // ember — gilded highlight: gods, gold, the apex
        ember: {
          500: "#cda23f",
          400: "#dcb863",
          300: "#ebd28f",
        },
        // bone — ivory / aged page: light text & surfaces on night
        bone: {
          50: "#f5eedd",
          100: "#ece0c8",
          200: "#d6c4a0",
          300: "#b39e76",
          500: "#897959",
          700: "#48402e",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        serif: ['"Spectral"', "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        zh: ['"Noto Serif SC"', "serif"],
      },
      boxShadow: {
        cave: "inset 0 1px 0 rgba(236,176,131,0.08), 0 28px 70px -32px rgba(0,0,0,0.96)",
        glow: "0 0 48px -10px rgba(193,101,47,0.55)",
        glowember: "0 0 44px -10px rgba(205,162,63,0.5)",
        stencil: "0 0 0 1px rgba(156,62,38,0.5), 0 0 30px -6px rgba(156,62,38,0.4)",
      },
      keyframes: {
        fadeup: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-9px)" },
        },
      },
      animation: {
        fadeup: "fadeup 0.8s cubic-bezier(0.2,0.7,0.2,1) both",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
