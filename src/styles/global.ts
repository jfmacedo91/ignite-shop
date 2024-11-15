import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "Roboto",
    "-webkit-font-smoothing": "antialiased",
    boxSizing: "border-box"
  },

  body: {
    backgroundColor: "$gray900",
    color: "$gray100"
  },
})