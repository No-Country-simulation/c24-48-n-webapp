import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9234",
        secondary: "#FFCD3C",
        accent: "#FAFCB4",
        dark: "#253B06",
        light: "#FFFFFF",
        gray: "#BDBDBD",
        black: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
