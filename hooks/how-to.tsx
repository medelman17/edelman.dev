import { createDataHook } from "next-data-hooks";
import sanity from "../lib/sanity-client";
import {
  Prerequisite,
  Resource,
  Author,
  Howto,
  HowtoStep,
  MainImage,
  Category,
} from "../lib/schema";
import { Slug } from "@sanity/types";

export const useHowTos = createDataHook("HowTos", async (context) => {
  return await sanity.getAll("howto");
});

export type ExpandedPrerequisite = Prerequisite & {
  _type: "prerequisite";
  resources: Array<Resource & { _type: "resource" }>;
};

export type UseHowToQueryResult = Howto & {
  // _id: string;
  author: Author;
  steps: HowtoStep[];
  prerequisites: ExpandedPrerequisite[];
  categories: Category[];
  // slug: Slug;
  // title: string;
  // body: Howto["body"];
  // excerpt: Howto["excerpt"];
  // publishedAt: Howto["publishedAt"];
};

export const useHowTo = createDataHook("HowTo", async (context) => {
  const [
    result,
  ] = await sanity.query<UseHowToQueryResult>(`*[_type == "howto" && slug.current == "${context.params.slug}"]{
    author->{...},
    categories[]->{...},
    prerequisites[]->{
      resources[]->{...},
       ...
    },
    ...                  
  }`);

  return result;
});
