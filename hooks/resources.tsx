import { createDataHook } from "next-data-hooks";
import sanity from "../lib/sanity-client";
import { Prerequisite, Resource, Howto, Post } from "../lib/schema";

export const useResources = createDataHook("Resources", async (context) => {
  return await sanity.getAll("resource");
});

export type ExpandedPrerequisiteRelatedContent =
  | (Howto & {
      _type: "howto";
    })
  | (Post & { _type: "post" });

export interface ExpandedResourceRelatedContentPrereqSnip extends Prerequisite {
  _type: "prerequisite";
  relatedContent: ExpandedPrerequisiteRelatedContent[];
}

export type ExpandedResourceRelatedContent = ExpandedResourceRelatedContentPrereqSnip;

export type RelatedContent =
  | ExpandedResourceRelatedContent
  | ExpandedPrerequisiteRelatedContent;

export interface ExpandedResource extends Resource {
  _type: "resource";
  relatedContent: ExpandedResourceRelatedContent[];
}

export const useResource = createDataHook("Resource", async (context) => {
  const [
    result,
  ] = await sanity.query<ExpandedResource>(`*[_type == "resource" && slug.current == "${context.params.slug}"]{
  "relatedContent": *[_type in ["post", "howto", "prerequisite"] && references(^._id)]{
  _type == "prerequisite" => {_id, 
    "relatedContent": *[_type in ["post", "howto"] && references(^._id)]{
      _type == "post" => {_id, _type, title, slug, mainImage, excerpt, 
        categories[]->{slug, title, _id}
      },
      _type == "howto" => { 
        ...
      }
    },
...
  },
  _type == "post" => {_id},
  _type == "howto" => {_id},
},
    ...                  
  }`);

  return result;
});
