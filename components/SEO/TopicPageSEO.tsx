import * as React from "react";
import { WebsiteJSONLD, WebPageJSONLD } from "./WebsiteJSONLD";
import { NextSeo, LogoJsonLd } from "next-seo";
import * as DataHooks from "../../hooks";
import { useRouter } from "next/router";
import { imageBuilder } from "../../components/Image";

export interface TopicPageSEOProps {}

export function TopicPageSEO(props: TopicPageSEOProps) {
  const router = useRouter();
  const page = DataHooks.useTopicBySlug();
  const settings = DataHooks.useSiteSettings();
  const canonical = `${settings.url}${router.asPath}`;
  const title = `${settings.title} | ${page.name}`;

  const ogImages = React.useMemo(() => {
    if (page.illustration && !page.illustration.disabled) {
      return [
        {
          height: 600,
          width: 800,
          alt: page.illustration.image.alt,
          url: imageBuilder
            .image(page.illustration.image)
            .height(600)
            .width(800)
            .url(),
        },
      ];
    } else {
      return [];
    }
  }, []);

  return (
    <>
      <NextSeo
        title={title}
        description={page.shortDesc}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          site_name: settings.title,
          type: "website",
          images: ogImages,
        }}
      />
      <WebsiteJSONLD name={settings.title} url={settings.url} />
      <WebPageJSONLD
        name={page.name}
        description={page.shortDesc}
        type={"ItemPage"}
        siteName={settings.title}
      />
    </>
  );
}
