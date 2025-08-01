/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#080113ff",
        secondary: "#151312",
        accent: "#AB8BFF",
        background: "#F5F8FA",
        light: {
          100: "#D6C6FF",
          200: "#A8B5DB",
          300: "#9CA4Ab",
        },
        dark: {
          100: "#221f3d",
          200: "#0f0d23",
        },
        border: "#E1E8ED",
      },
    },
  },
  plugins: [],
};
