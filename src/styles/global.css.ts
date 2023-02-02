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

export const responsived = {
  margin: "0 auto",
  "@sm": {
    maxWidth: "540px !important",
  },

  "@md": {
    maxWidth: "720px !important",
  },

  "@lg": {
    maxWidth: "960px !important",
  },

  "@xl": {
    maxWidth: "1140px !important",
  },

  "@2xl": {
    maxWidth: "1320px !important",
  },
};
