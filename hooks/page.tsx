import { createDataHook } from "next-data-hooks";
import {
  Page,
  SiteConfig,
  MainImage,
  SimpleBlockContent,
  Prerequisite,
} from "../lib/schema";
import sanity from "../lib/sanity-client";
import { Slug } from "@sanity/types";

export type UseHomePageDataQueryResult = Page & {
  settings: SiteConfig;
};

export type CategorySnipQueryResult = {
  _id: string;
  title: string;
  slug: Slug;
};

export type PostSnipQueryResult = {
  _id: string;
  _type: "post";
  title: string;
  mainImage: MainImage;
  excerpt: SimpleBlockContent;
  categories: CategorySnipQueryResult[];
  slug: Slug;
};

export type ExpandedResourceRelatedContentHowToSnipQueryResult = {
  _id: string;
  _type: "howto";
  title: string;
  mainImage: MainImage;
  excerpt: SimpleBlockContent;
  categories: CategorySnipQueryResult[];
  slug: Slug;
  prerequisites: Array<
    Prerequisite & { resources: { _id: string; title: string }[] }
  >;
};

export type HowToSnipQueryResult = {
  _id: string;
  _type: "howto";
  title: string;
  mainImage: MainImage;
  excerpt: SimpleBlockContent;
  categories: CategorySnipQueryResult[];
  slug: Slug;
  prerequisites: Array<
    Prerequisite & { resources: { _id: string; title: string }[] }
  >;
};

export type ContentSnip = HowToSnipQueryResult | PostSnipQueryResult;

export const useRecentContentSnips = createDataHook(
  "RecentContentSnips",
  async (context) => {
    const result = await sanity.query<ContentSnip>(`*[_type in ["post", "howto"]][0..9]{
      _type == "post" => {_id, _type, title, slug, mainImage, excerpt, 
        categories[]->{slug, title, _id}
      },
      _type == "howto" => {_id, _type, title, slug, mainImage, excerpt, 
        categories[]->{slug, title, _id}, 
        prerequisites[]->{
          resources[]->{_id, title}
        }
      }
    } | order(publishedAt asc)`);

    return result;
  }
);

export const useHomePageData = createDataHook(
  "HomePageData",
  async (context) => {
    const [
      data,
    ] = await sanity.query<UseHomePageDataQueryResult>(`*[_id == "frontpage"]{
      "settings": *[_id == "siteSettings"],
      ...
   }`);

    const { settings, ...rest } = data;

    return { ...rest, settings: settings[0] };
  }
);
