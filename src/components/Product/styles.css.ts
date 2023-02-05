import { styled } from "@fivem-shop/react";
import Image from "next/image";

export const Container = styled("section", {
  a: {
    textDecoration: "none",

    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    section: {
      width: "100%",
      height: "250px",
      background: "$gray-700",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      overflow: "hidden",
    },
    div: {
      marginTop: "10px",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 500,
      fontSize: "$small",
    },
    span: { color: "$gray-500" },
    "span:nth-child(1), span:nth-child(2)": { color: "white" },
    button: {
      maxWidth: "122px",
      transition: "300ms",
      color: "$green-500",
      border: "1px solid $green-500",
      padding: "10px 24px",
      fontWeight: 500,
      fontSize: "14px",
      background: "transparent",
      marginTop: "10px",
      borderRadius: "999px",
      cursor: "pointer",
      "&:hover": { background: "$green-500", color: "$gray-900" },
    },
  },
});

export const ProductImage = styled(Image, {
  width: "100%",
  height: "auto",
});
