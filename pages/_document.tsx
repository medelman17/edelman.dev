import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ColorModeScript } from "@chakra-ui/react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="webmention"
            href="https://webmention.io/edel.monster/webmention"
          />
          <link
            rel="pingback"
            href="https://webmention.io/edel.monster/xmlrpc"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-E98E78KE7G`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-E98E78KE7G', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          {/*<ColorModeScript />*/}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
