import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: {
          50: "#ffffff",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        black: {
          DEFAULT: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
        blue: {
          50: "#effaff",
          100: "#def3ff",
          200: "#b6eaff",
          300: "#75dbff",
          400: "#2cc9ff",
          500: "#00adef",
          600: "#008fd4",
          700: "#0072ab",
          800: "#00608d",
          900: "#065074",
          950: "#04334d",
        },
        orange: {
          50: "#fff9ed",
          100: "#fef1d6",
          200: "#fddfab",
          300: "#fbc876",
          400: "#f9a53e",
          500: "#f68712",
          600: "#e76f0f",
          700: "#c0540e",
          800: "#984314",
          900: "#7b3913",
          950: "#421a08",
        },
     
      },
    },
  },
  plugins: [],
} satisfies Config;
