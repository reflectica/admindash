import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-gray': 'rgba(230, 230, 230, 1)',
        'custom-blue': '#5271FF',
        'light-grey':'#BDBDBD',
        'custom-license-gray': '#A5A5A5',
        'custom-divider-gray': '#E6E6E6',
        'custom-usage-gray':'#525252'
      },
      fontFamily: {
        'urbanist': ['Urbanist', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;
