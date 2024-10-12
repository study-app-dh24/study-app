import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark_purple: "#39275B",
        light_purple: "#A18BD1",
        salmon: "#FF6B6B",
        silk: "#F2F2F2",
        carbon: "#333333",
      },
    },
  },
  plugins: [
  ],
};
export default config;
