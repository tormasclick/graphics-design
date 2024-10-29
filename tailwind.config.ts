// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Scan all files in the app directory
    "./components/**/*.{js,ts,jsx,tsx}", // Scan all files in the components directory
    "./pages/**/*.{js,ts,jsx,tsx}", // Scan all files in the pages directory (if you have one)
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure these variables are set in your CSS
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

export default config;