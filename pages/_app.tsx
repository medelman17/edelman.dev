import * as React from "react";
import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextDataHooksProvider } from "next-data-hooks";
import { init } from "../lib/sentry";
import theme from "../lib/theme";
import Head from "next/head";

init();

//

function MyApp({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, viewport-fit=cover"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="webmention"
          href="https://webmention.io/edel.monster/webmention"
        />
        <link rel="pingback" href="https://webmention.io/edel.monster/xmlrpc" />
      </Head>
      <NextDataHooksProvider {...rest}>
        <ChakraProvider theme={theme} resetCSS={true}>
          <Component {...rest}>{children}</Component>
        </ChakraProvider>
      </NextDataHooksProvider>
    </>
  );
}

export default MyApp;
