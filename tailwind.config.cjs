/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan Variable", defaultTheme.fontFamily.sans],
      },
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
          alt: "hsl(var(--border-alt))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-fluid-type"),
    require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

module.exports = config
