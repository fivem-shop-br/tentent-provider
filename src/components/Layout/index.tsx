import { ShopsProps } from "@src/pages/index.page";
import Head from "next/head";
import { Header } from "../Header";

interface LayoutProps extends ShopsProps {
  children: React.ReactNode;
}

export function Layout({ children, favicon, ...rest }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon} />
      </Head>
      <Header {...rest} />
      {children}
    </>
  );
}
