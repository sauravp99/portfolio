import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          DEFAULT: "var(--stone)",
          "700": "var(--stone-700)",
          "300": "var(--stone-300)",
          "100": "var(--stone-100)",
        },
        ice: {
          DEFAULT: "var(--ice)",
          "500": "var(--ice-500)",
          "300": "var(--ice-300)",
          "200": "var(--ice-200)",
        },
        sand: {
          DEFAULT: "var(--sand)",
          "500": "var(--sand-500)",
        },
        snow: {
          DEFAULT: "var(--snow)",
        },
        flame: {
          DEFAULT: "var(--flame)",
        },
      },
      borderWidth: {
        "1": "1px",
        "2": "2px",
        "4": "4px",
        "8": "8px",
        "0.5": "0.5px",
      },
      boxShadow: {
        "1": "0px 1px 1px 0px rgba(0, 0, 0, 0.25)",
        "2": "0px 2px 2px 0px rgba(0, 0, 0, 0.25)",
        "3": "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
        minimal: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        xxl: "1600px",
      },
      fontFamily: {
        heading: ["Days One", "sans-serif"],
        body: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        normal: ["0.92rem", "1.5rem"],
        xs: ["0.81rem", { lineHeight: "1.25rem", fontWeight: 400 }],
        uppercase_sm: [
          "0.81rem",
          { lineHeight: "1rem", fontWeight: 500, letterSpacing: "0.05rem" },
        ],
        uppercase_md: [
          "0.9rem",
          { lineHeight: "1rem", fontWeight: 600, letterSpacing: "0.06rem" },
        ],
        sm: ["0.875rem", { lineHeight: "1.5rem", fontWeight: 400 }],
        md: ["1rem", { lineHeight: "1.6rem", fontWeight: 400 }],
        md_strong: ["1rem", { lineHeight: "1.6rem", fontWeight: 500 }],
        lg: ["1.2rem", { lineHeight: "1.6rem", fontWeight: 400 }],
        xl: ["1.5rem", { lineHeight: "2rem", fontWeight: 600 }],
        lead: ["2.1rem", { lineHeight: "3rem", fontWeight: 400 }],
        "2xl": ["2.6rem", { lineHeight: "3.7rem", fontWeight: 650 }],
        "3xl": ["5.5rem", { lineHeight: "6.5rem", fontWeight: 700 }],
        base: ["1rem", { lineHeight: "1.6rem", fontWeight: 400 }],
      },
      spacing: {
        xxs: "2px",
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        xxl: "64px",
      },
      letterSpacing: {
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".05em",
        wider: ".1em",
        widest: ".15em",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        pulseFast: {
          "50%": {
            opacity: "0.2",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-right": "fadeInLeft 0.5s ease-out",
        "fade-in": "fadeIn 300ms ease",
        "pulse-fast": "pulseFast 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} as Config;
