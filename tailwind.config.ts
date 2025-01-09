import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'mobile-margin': '1rem', 
        'tablet-margin': '3.75rem', 
        'laptop-margin': '6.25rem', 
        'desktop-margin': '7.5rem', 
      }, 
      colors: {
        white: {
          DEFAULT: "#ffffff",
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
        yellow: {
          50: "#fefee8",
          100: "#feffc2",
          200: "#fffc89",
          300: "#fff44f",
          400: "#fde512",
          500: "#ecca06",
          600: "#cc9f02",
          700: "#a37105",
          800: "#86590d",
          900: "#724811",
          950: "#432605",
        },
        green: {
          50: "#f0f9f5",
          100: "#daf1e4",
          200: "#b8e2ce",
          300: "#89ccaf",
          400: "#57b08d",
          500: "#369371",
          600: "#25755a",
          700: "#1e5e4a",
          800: "#1a4b3c",
          900: "#163e32",
          950: "#0b231c",
        },
        
        
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '8px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
      },
      screens: {
        'sm': '640px',  // Small devices
        'md': '768px',  // Tablets
        'lg': '1024px', // Laptops
        'xl': '1280px', // Desktops
        '2xl': '1536px', // Large screens
        // Custom breakpoints
        'xs': '480px', 
        '3xl': '1920px', 
      },
      
    },
  },
  plugins: [],
} satisfies Config;
