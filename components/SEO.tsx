import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { NextSeo, ArticleJsonLd, LogoJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { Category, MainImage, SiteConfig } from "../lib/schema";
import * as DataHooks from "../hooks";
import simg from "../lib/sanity";
import { imageBuilder } from "../components/Image";
import type { SanityImage } from "sanity-codegen";

export interface PageSEOProps {
  title: string;
  description: string;
  images?: SanityImage[];
  settings: SiteConfig;
}

export function PageSEO(props: PageSEOProps) {
  const router = useRouter();
  const { settings } = props;
  // const data = DataHooks.usePageData();

  const title = `${settings.title} | ${props.title}`;
  const canonical = `${settings.url}${router.asPath}`;
  const ogImages = props.images.map(buildOgImage);

  const logoUrl = React.useMemo(() => {
    return imageBuilder.image(settings.logo).auto("format").url();
  }, []);

  console.log("settings", settings);

  return (
    <>
      <LogoJsonLd logo={logoUrl} url={settings.url} />
      <NextSeo
        title={title}
        description={props.description}
        canonical={canonical}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: canonical,
          title: title,
          site_name: settings.title,
          type: "website",
          images: ogImages,
        }}
      />
    </>
  );
}

export function SEO(props: SEOProps) {
  const router = useRouter();

  const settings = DataHooks.useSiteSettings();
  const canonical = `${settings.url}${router.asPath}`;
  const title = `${settings.title} | ${props.title}`;
  const ogImages = props.images.map(buildOgImage);

  return (
    <>
      <ArticleJsonLd
        url={canonical}
        title={title}
        images={ogImages.map((i) => i.url)}
        datePublished={props.datePublished}
        dateModified={props.dateModified}
        authorName={props.pageAuthor}
        description={props.description}
        publisherName={"Michael Edelman"}
        publisherLogo={builder.image(settings.logo).url()}
        {...props.jsonLD}
      />
      <NextSeo
        title={title}
        description={props.description}
        canonical={canonical}
        twitter={props.twitter}
        openGraph={{
          url: canonical,
          title: title,
          site_name: settings.title,
          type: props.og.type,
          images: ogImages,
          ...props.og,
        }}
        {...props.seo}
      />
    </>
  );
}

export const builder = imageUrlBuilder(simg);

function buildOgImage(img: MainImage): OGImage {
  let result: OGImage = {
    url: builder.image(img).width(800).height(600).url(),
    height: 600,
    width: 800,
    alt: img.alt,
  };

  return result;
}

export type OGImage = {
  url: string;
  height: number;
  width: number;
  alt: string;
};

export interface SEOProps {
  title: string;
  description: string;
  tags: Category[];
  pageAuthor: string[];
  datePublished: string;
  dateModified?: string;
  twitter: {
    site: string;
    cardType: string;
    handle: string;
  };
  images: MainImage[];
  og: {
    type: string;
    [index: string]: string;
  };
  jsonLD?: { [index: string]: any };
  seo?: { [index: string]: any };
}
