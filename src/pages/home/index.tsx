import { NextSeo } from "next-seo";
import { Layout } from "../../components/Layout";
import { ShopsProps } from "../index.page";
import { Banner, Main, SlideForYouProducts } from "./styles.css";
import DefaultBanner from "@src/source/default-banner.svg";
import { SliderContainer } from "./components/Slide";

export interface homeProps {
  shop: ShopsProps;
}

export default function Home({ shop }: homeProps) {
  return (
    <>
      <NextSeo title={shop.name} description={shop.description} />
      <Layout {...shop}>
        <Main>
          {shop.banner ? (
            <Banner src={shop.banner} alt="Banner" width={1920} height={1920} />
          ) : (
            <Banner src={DefaultBanner} alt="Banner Padrão" />
          )}

          <h1>Produtos Para você</h1>
          <SliderContainer slug={shop.slug} />
        </Main>
      </Layout>
    </>
  );
}
