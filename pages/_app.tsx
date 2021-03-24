import * as React from "react";
import "../styles/globals.css";
import type { AppProps, AppContext } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Amplify, { Analytics } from "aws-amplify";
import { NextDataHooksProvider } from "next-data-hooks";
import { init } from "../lib/sentry";
import theme from "../lib/theme";
import Head from "next/head";
import awsExports from "../src/aws-exports";

Amplify.configure({
  ...awsExports,
  ssr: true,
  Auth: {
    cookieStorage: {
      domain: ".edel.monster",
      path: "/",
      expires: 365,
      sameSite: "strict",
      secure: true,
    },
  },
});

init();

//
// if (process.env.NODE_ENV === "production") {
//   Analytics.autoTrack("session", {
//     enable: process.env.NODE_ENV === "production",
//     provider: "AWSPinpoint",
//   });
//
//   Analytics.autoTrack("pageView", {
//     enable: process.env.NODE_ENV === "production",
//     event: "pageView",
//     type: "multiPageApp",
//     provider: "AWSPinpoint",
//   });
//
//   Analytics.autoTrack("event", {
//     enable: process.env.NODE_ENV === "production",
//     events: ["click"],
//     selectorPrefix: "data-amplify-analytics-",
//     provider: "AWSPinpoint",
//   });
// }

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
