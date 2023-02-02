import { NextSeo } from "next-seo";
import { ShopsProps } from "../index.page";

interface homeProps {
  shop: ShopsProps;
}

export default function Home({ shop }: homeProps) {
  return (
    <>
      <NextSeo title={shop.name} description={shop.description} />
    </>
  );
}
