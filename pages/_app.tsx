// Wraps around all individual pages, good for global state or shared layouts

import { AppProps } from "next/app";
import RootLayout from "../components/layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="margin">
      <Head>
        <title>Bookmark Landing Page</title>
      </Head>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  );
}

export default MyApp;
