import { api } from "@src/services/api-client";
import { GetServerSidePropsContext } from "next";
export { default } from "./home";

export interface ShopsProps {
  id: string;
  owner_id: string;
  slug: string;
  name: string;
  description?: string;
  logo?: string;
  banner?: string;
  favicon?: string;
  primary_color?: string;
  secondary_color?: string;
  domain: string;
  plan_type: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const slug = req.headers.host!.split(".")[0];
  try {
    const { data: shop } = await api.get<ShopsProps>("shop/" + slug);
    return {
      props: { shop },
    };
  } catch (err) {
    return { notFound: true };
  }
}
