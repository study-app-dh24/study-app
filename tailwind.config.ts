import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/theme';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        beige: "#cac7c7"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    nextui(),
  ],
};
export default config;
