import * as React from "react";
import Head from "next/head";

export interface HowToStepJsonLd {
  name: string;
  url: string;
  text: string;
}

export interface HowToJsonLdProps {
  supplies: string[];
  tools: string[];
  steps: HowToStepJsonLd[];
  title: string;
  description: string;
  image: string;
}

const markup = (jsonld: string) => ({ __html: jsonld });

const HowToJsonLd: React.FC<HowToJsonLdProps> = (props) => {
  const jsonld = `{
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "${props.title}",
    "description": "${props.description}",
    "image": ${JSON.stringify({ "@type": "ImageObject", url: props.image })},
    "totalTime": "PT2M",
    "author": {
        "@type": "Person",
        "givenName": "Michael",
         "familyName": "Edelman"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Michael Edelman",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.sanity.io/images/1os98t11/production/845e412e79ea80736091aab881fffeddf916d18a-512x512.png"
      }
    },
    "tool": [
    ${props.tools.map((s) =>
      JSON.stringify({
        "@type": "HowToTool",
        name: s,
      })
    )}],
    "step": [
     ${props.steps.map((s) =>
       JSON.stringify({
         "@type": "HowToStep",
         name: s.name,
         url: s.url,
         // text: s.text,
         itemListElement: [
           {
             "@type": "HowToDirection",
             text: s.text,
           },
         ],
       })
     )}
    ],
    "supply": [
        ${props.supplies.map((s) =>
          JSON.stringify({
            "@type": "HowToSupply",
            name: s,
          })
        )}
    ]
  }`;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={markup(jsonld)}
        key="jsonld-howto-page"
      />
    </Head>
  );
};

export default HowToJsonLd;
