import { createDataHook } from "next-data-hooks";
import sanity from "../lib/sanity-client";
import {
  Prerequisite,
  Resource,
  Author,
  Howto,
  HowtoStep,
  MainImage,
} from "../lib/schema";
import { Slug } from "@sanity/types";

export const useHowTos = createDataHook("HowTos", async (context) => {
  return await sanity.getAll("howto");
});

export type UseHowToQueryResult = Howto & {
  // _id: string;
  author: Author;
  steps: HowtoStep[];
  prerequisites: Prerequisite[];
  // slug: Slug;
  // title: string;
  // body: Howto["body"];
  // excerpt: Howto["excerpt"];
  // publishedAt: Howto["publishedAt"];
};

export const useHowTo = createDataHook("HowTo", async (context) => {
  const [
    howto,
  ] = await sanity.query<UseHowToQueryResult>(`*[_type == "howto" && slug.current == "${context.params.slug}"]{
    author->{...},
    "steps": step,
    prerequisites[]->{
     
      resources[]->{...},
      ...
    },
    ...                  
  }`);

  return {
    howto,
  };
});
