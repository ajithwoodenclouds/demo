/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-rgba": "rgba(245, 247, 250, 0.3)", // Adding custom RGBA color
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(192.82deg, #424953 5.95%, #1C1C1C 94.05%)",
      },
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"], // Existing font
        causten: ['"Causten"', "sans-serif"], // Use the same name for all weights
        interLightItalic: ['"Inter-LightItalic"', "sans-serif"],
        interRegular: ['"Inter-Regular"', "sans-serif"],
        interSemibold: ['"Inter-Semibold"', "sans-serif"],
        interBold: ['"Inter-Bold"', "sans-serif"],
        interVariable: ['"Inter-Variable"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
