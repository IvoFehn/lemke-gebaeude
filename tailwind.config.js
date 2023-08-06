const colors = require("./src/common/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
