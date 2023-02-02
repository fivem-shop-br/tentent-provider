import { globalCss } from "@fivem-shop/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "$default",
  },

  body: {
    background: "$gray-900",
    color: "white",
  },

  "button, input": {
    outline: "none",
    border: 0,
  },
});
