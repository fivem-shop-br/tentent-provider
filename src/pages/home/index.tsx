import { NextSeo } from "next-seo";
import { Layout } from "../../components/Layout";
import { ShopsProps } from "../index.page";

interface homeProps {
  shop: ShopsProps;
}

export default function Home({ shop }: homeProps) {
  return (
    <>
      <NextSeo title={shop.name} description={shop.description} />
      <Layout {...shop}>
        <h1>assa</h1>
      </Layout>
    </>
  );
}
