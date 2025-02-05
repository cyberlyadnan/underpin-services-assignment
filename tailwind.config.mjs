/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caudex: ['var(--font-caudex)', 'serif'],
        bakbak: ['var(--font-bakbak)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        clash: ['var(--font-clash-display)', 'sans-serif'],
        themeFont:["Bakbak One","serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #0E1217, #0c331160, #0E1217)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        themeColor:"#5BFF6D"
      },
      screens: {
        'max-500': { 'max': '500px' },
      },
    },
  },
  plugins: [],
};
