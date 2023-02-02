import { ShopsProps } from "@src/pages/index.page";
import { api } from "@src/services/api-client";
import { GetServerSidePropsContext } from "next";

export const getShop = () =>
  async function getServerSideProps({ req }: GetServerSidePropsContext) {
    const slug = req.headers.host!.split(".")[0];
    try {
      /* const { data: shop } = await api.get<ShopsProps>("shop/" + slug); */
      return {
        props: { shop: "" },
      };
    } catch (err) {
      return { notFound: true };
    }
  };
