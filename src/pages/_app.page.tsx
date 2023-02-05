import { queryClient } from "@src/services/query-client";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/global.css";
import { QueryClientProvider } from "react-query";

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
