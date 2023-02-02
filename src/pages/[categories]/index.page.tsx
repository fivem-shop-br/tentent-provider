import { GetServerSidePropsContext } from "next";

interface Categories {
  shop: string;
}

export default function Categories(props: Categories) {
  return <h1>Categories {props.shop}</h1>;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const shop = req.headers.host!.split(".")[0];
  return {
    props: {
      shop,
    },
  };
}
