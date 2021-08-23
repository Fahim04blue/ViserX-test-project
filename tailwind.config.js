module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        denim: "#1565D8",
        porcelain: "#f7f8f9",
        blueBayoux: " #5A7184",
        oceanGreen: "#36B37E",
        cardHover: "#ebf7f2",
        lineThrough: " #959EAD ",
        special: " #E95432",
        clock: "#eb6546",
        partition: "#ECEEF2",
        nileBlue: "#183B56",
        sun: "#FAAD13",
      },
      fontSize: {
        "5xl": "3.5rem",
        "4xl": "2.5rem",
      },

      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      letterSpacing: {
        wide: "0.0125em",
      },
      width: {
        80: "28.5rem",
      },
      height: {
        32: "8.125rem",
        0.5: "0.188rem",
      },
      lineHeight: {
        loose: "3.25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
