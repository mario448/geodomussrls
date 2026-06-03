import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts", "./lib/**/*.ts"],
  theme: {
    extend: {
      colors: {
        graphite: "#101312",
        forest: "#1f4a37",
        moss: "#6d7b52",
        timber: "#b98655",
        warm: "#f7f4ed",
        stone: "#ded8cd"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 19, 18, .08)"
      }
    }
  },
  plugins: []
};

export default config;
