import { GetServerSidePropsContext } from "next";

interface Products {
  shop: string;
}

export default function Products(props: Products) {
  return <h1>Products {props.shop}</h1>;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const shop = req.headers.host!.split(".")[0];
  return {
    props: {
      shop,
    },
  };
}
