import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primary: "#377DFF",
        maingreen: "#38CB89",
        darkgreen: "#E5F6EF",
        lightgreen: "#F5FCF9",
        mainorange: "#FFBD38",
        darkorange: "#FDF4E0",
        lightorange: "#FFFBF1",
        mainred: "#FF5630",
        darkred: "#FFEFEB",
        lightred: "#FFF6F4",
        secondarygray: "#4E5D78",
        thirdgray: "#BBC3CC",
        bggray: "#F3F4F6",
      },
    },
  },
  plugins: [],
};
export default config;
