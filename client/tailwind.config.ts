import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0e0d0d", //dark --->light  ->used in bg
        "secondary-dark": "#282829", //->used in navbar bg
        "text-dark": "#1c1c1d", //->used in normal box
        "quart-dark": "#252528", //->canbe used inside normal box
        "quint-dark": "#e5e5e5",

        "primary-text-dark": "#E0E0E0", // light---->dark
        "sec-text-dark": "#7a7a7c",
        "border-primary": "#2e2e2e",
      },
    },
  },
  plugins: [],
};
export default config;
