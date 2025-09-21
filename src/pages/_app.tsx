import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/layout/Layout";
// Ensure the correct import path for the Layout component
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
