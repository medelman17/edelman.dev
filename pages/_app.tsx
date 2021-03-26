import * as React from "react";
import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextDataHooksProvider } from "next-data-hooks";
import { init } from "../lib/sentry";
import theme from "../lib/theme";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

init();

function MyApp({ Component, pageProps }: AppProps) {
  const { children, ...rest } = pageProps;

  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://edel.monster",
          site_name: "Michael Edelman",
        }}
        twitter={{
          handle: "@edelman215",
          site: "Michael Edelman",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content:
              "initial-scale=1.0, width=device-width, viewport-fit=cover",
          },
        ]}
        //@ts-ignore
        additionalLinkTags={[
          {
            rel: "webmention",
            href: "https://webmention.io/edel.monster/webmention",
          },
          {
            rel: "pingback",
            href: "https://webmention.io/edel.monster/xmlrpc",
          },
        ]}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
