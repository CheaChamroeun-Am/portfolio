/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        covers: "url('/cover.png')",
      },
      backgroundColor: {
        "gradient-color": "rgba(250, 244, 244, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg: "#EEEEEE",
        primary1: "#053B50",
        primary2: "#176B87",
        primary3: "#64CCC5",
      },
    },
    darkMode: "class",
  },
};
