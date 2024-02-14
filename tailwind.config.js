const colors = require("./src/common/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "8k": { max: "7679px" }, // 8K Monitors
      "4k": { max: "3839px" }, // 4K Monitors
      "2k": { max: "2047px" }, // 2K Monitors
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      current: colors.current,
      colorPrimary: colors.colorPrimary,
      colorSecondary: colors.colorSecondary,
      colorText: colors.colorText,
      colorAccent: colors.colorText,
      colorElementor: colors.colorElementor,
      colorBackgroundLightGrey: colors.colorBackgroundLightGrey,
      colorBorderLightGrey: colors.colorBorderLightGrey,
      colorDisabledLightGrey: colors.colorDisabledLightGrey,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
