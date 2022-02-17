module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "376px" },
      },
      fontFamily: {
        sans: ['"Poppins"'],
      },
      colors: {
        blue: {
          800: "#1e40afbd",
        },
      },
    },
  },
  plugins: [],
};
