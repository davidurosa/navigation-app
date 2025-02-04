/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",

  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: "#0084D1",
        secondary: {
          DEFAULT: "#008236",
          50: "#B9F8CF",
          100: "#05DF72",
          200: "#00A63E",
        },
        tertiary: "#E7000B",
      },

      fontFamily: {
        "work-black": ["WorkSans-Black", "sans-serif"],
        "work-light": ["WorkSans-Light", "sans-serif"],
        "work-medium": ["WorkSans-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
}