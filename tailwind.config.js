let primary = "#F08A58";

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1440px",
      // => @media (min-width: 1440px) { ... }
      xxl: "1700px",
      // => @media (min-width: 1700px) { ... }
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: primary,
      secondary: "rgba(112, 112, 112, 0.25)",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: primary,
      secondary: "#F7F7F7",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      primary: primary,
      secondary: "rgba(51, 51, 51, 0.75)",
      tertiary: "#333333",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
};
