import { Layout } from "@src/components/Layout";
import { Product, ProductProps } from "@src/components/Product";
import { api } from "@src/services/api-client";
import { getShop } from "@src/utils/get-shop";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { homeProps } from "../home";
import { Main } from "../home/styles.css";
import { Products } from "./styles,css";
import { useQuery } from "react-query";
import { useEffect } from "react";

interface Categories {
  shop: string;
}

export default function Categories({ shop }: homeProps) {
  const { query } = useRouter();
  const { data: products, refetch, isLoading } = useQuery<ProductProps[]>(
    `products ${query}`,
    async () => {
      const { data } = await api.get("products/" + query.categories);
      return data;
    }
  );

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <>
      <NextSeo title={shop.name} description={shop.description} />
      <Layout {...shop}>
        <Main>
          <Products>
            {!isLoading && products &&
              products.map((product, key) => (
                <Product {...product} key={key} />
              ))}
          </Products>
        </Main>
      </Layout>
    </>
  );
}

export const getServerSideProps = getShop();
