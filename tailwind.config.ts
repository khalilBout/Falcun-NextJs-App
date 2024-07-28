/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        TitleFont: ["Cairo", "sans-serif"],
        bodyFont: ["Markazi Text", "sans-serif"],
      },
      colors: {
        primeColor: "#193A81",
        scendColor: "#53B2EF",
        lightText: "#6D6D6D",
        thirdColor: "#F8CB5C",
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        bgBlue: "url('/bg/bgBlue.webp')",
        bgGreen: "url('/bg/bgGreen.webp')",
        bgSky: "url('/bg/bgSky.webp')",
        bgNight: "url('/bg/bgNight.webp')",
        bgLend: "url(/bg/bgLend.webp')",
        // 'hero-2': "url('/img/hero-pattern.svg')",
        // 'hero-3': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
