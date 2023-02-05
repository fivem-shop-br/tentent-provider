import { styled } from "@fivem-shop/react";
import { responsived } from "@src/styles/global.css";
import Image from "next/image";

export const Main = styled("main", {
  minHeight: "86vh",
  padding: "calc(135px + 4rem) 0",

  h1: {
    fontWeight: 500,
    fontSize: "$heading-small",
    lineHeight: "130%",
  },

  "@media (max-width: 576px)": {
    padding: "0.5rem",
    paddingTop: "calc(50px + 4rem)",
  },

  "@media (max-width: 768px)": {
    "> h1": {
      textAlign: "center",
      fontSize: "$ultra-large",
    },
  },

  ...responsived,
});

export const Banner = styled(Image, {
  width: "100%",
  height: "auto",

  marginBottom: "50px",
});

export const SlideForYouProducts = styled("section", {
  maxWidth: "100%",
  marginTop: "30px",

  ".swiper": {
    paddingBottom: "50px !important",
  },

  ".swiper-pagination-bullet": {
    background: "$blue-700",
  },

  ".swiper-slide": {
    height: "auto !important",
  },
});
