import { GetServerSidePropsContext } from "next";

interface Product {
  shop: string;
}

export default function Product(props: Product) {
  return <h1>Product {props.shop}</h1>;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const shop = req.headers.host!.split(".")[0];
  return {
    props: {
      shop,
    },
  };
}
