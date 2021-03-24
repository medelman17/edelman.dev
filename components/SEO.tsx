import * as React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { NextSeo, ArticleJsonLd, LogoJsonLd } from "next-seo";
import { useRouter } from "next/router";
import { Category, Howto, MainImage, SiteConfig } from "../lib/schema";
import * as DataHooks from "../hooks";
import simg from "../lib/sanity";
import { imageBuilder } from "../components/Image";
import type { SanityImage } from "sanity-codegen";
import HowToJsonLd from "./HowToJsonLd";
import { blockContentToPlainText } from "react-portable-text";
import { HowToMetadata } from "../routes/how-to/components/how-to-page";

export interface HowToSEOProps {
  metadata: HowToMetadata;
}

export function HowToSEO(props: HowToSEOProps) {
  const howto = DataHooks.useHowTo();
  const { author, slug, steps, prerequisites } = howto;

  return (
    <>
      <HowToJsonLd
        supplies={HowToSEO.JSONLD.buildSupplies(howto)}
        tools={HowToSEO.JSONLD.buildTools(howto)}
        steps={HowToSEO.JSONLD.buildSteps(howto)}
        title={howto.title}
        description={HowToSEO.JSONLD.buildExcerpt(howto)}
        image={HowToSEO.JSONLD.buildImages(howto)}
      />
      <NextSeo
        title={howto.title}
        description={HowToSEO.JSONLD.buildExcerpt(howto)}
        canonical={`https://edel.monster/how-to/${slug}`}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: `https://edel.monster/how-to/${slug}`,
          title: howto.title,
          type: "website",
          description: HowToSEO.JSONLD.buildExcerpt(howto),
        }}
      />
    </>
  );
}

HowToSEO.JSONLD = {
  buildSupplies(howto: Howto) {
    //@ts-ignore
    return howto.prerequisites.map((p) => p.resources.map((r) => r.title));
  },
  buildSteps(howto: Howto) {
    return howto.steps.map((step, i) => ({
      name: step.title,
      //@ts-ignore
      text: blockContentToPlainText(step.body),
      url: `https://edel.monster/how-to/${howto.slug.current}#step${i}`,
    }));
  },
  buildTools(howto: Howto) {
    return [];
  },
  buildExcerpt(howto: Howto) {
    //@ts-ignore
    return blockContentToPlainText(howto.excerpt);
  },
  buildImages(howto: Howto) {
    return imageBuilder
      .image(howto.mainImage)
      .height(300)
      .width(400)
      .auto("format")
      .url();
  },
};

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
