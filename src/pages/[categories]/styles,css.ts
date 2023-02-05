import { styled } from "@fivem-shop/react";

export const Products = styled("section", {
  width: "100%",

  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
  gap: "15px",

  rowGap: "30px",
});
