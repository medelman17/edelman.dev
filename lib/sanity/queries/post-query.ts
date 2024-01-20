import { q, sanityImage } from "groqd";
import type { QueryResponseInitial } from "@sanity/react-loader";

export const { query: POST_QUERY, schema: POST_SCHEMA } = q("*")
  .filter("_type == 'post' && slug.current == $slug")
  .grab({
    title: q.string(),
    body: q.contentBlocks(),
    slug: q.slug("slug"),
    image: sanityImage("mainImage", {
      additionalFields: {
        alt: q.string()
      }
    }),
  })
  .slice(0);

export type PostQueryResponseInitial = QueryResponseInitial<
  ReturnType<typeof POST_SCHEMA.parse>
>;

export type PostQueryResponseData = PostQueryResponseInitial["data"];
