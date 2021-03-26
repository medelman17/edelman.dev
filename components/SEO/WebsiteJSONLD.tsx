import * as React from "react";
import * as SEOUtils from "./utils";
import Head from "next/head";

const markup = (jsonld: string) => ({ __html: jsonld });

export interface WebsiteJSONLDProps {
  name: string;
  url: string;
}

export function WebsiteJSONLD(props: WebsiteJSONLDProps) {
  const jsonld = `{
    "@context": "https://schema.org",
    "@type": "Website",
    "name": "${props.name}",
    "url": "${props.url}"
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jsonld)}
        key="jsonld-website"
      />
    </Head>
  );
}

export interface WebPageJSONLDProps {
  name: string;
  description: string;
  type: string;
  siteName: string;
}

export function WebPageJSONLD(props: WebPageJSONLDProps) {
  const jsonld = `{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "${props.name}",
    "description": "${props.description}"
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jsonld)}
        key="jsonld-webpage"
      />
    </Head>
  );
}
