/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iFontR: "Unbounded-Regular, sans-serif",
        iFontL: "Unbounded-Light, sans-serif",
        iFontM: "Unbounded-Medium, sans-serif",
        iFontEL: "Unbounded-ExtraLight, sans-serif",
        iFontB: "Unbounded-Bold, sans-serif",
        iFontEB: "Unbounded-ExtraBold, sans-serif",
        iFontBlk: "Unbounded-Black, sans-serif",
        iFontSB: "Unbounded-SemiBold, sans-serif",
        iFontSerif: "RobechaDaniera, serif",
      },
      colors: {
        iOrange: "#E54613",
        iPink: "#EFE0E0",
        iLight: "#FFFFFF",
        iDark: "#0A0A0A",
        iBlue: "#CADAE5",
      },
    },
  },
  plugins: [],
};
