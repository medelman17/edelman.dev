import { q, sanityImage } from "groqd";
import type { QueryResponseInitial } from "@sanity/react-loader";

export const { query: POSTS_QUERY, schema: POSTS_SCHEMA } = q("*", {
  isArray: true,
})
  .filter(`_type == "post" && defined(slug)`)
  .order("_createdAt", "desc")
  .grab({
    title: q.string(),
    slug: q.slug("slug"),
    image: sanityImage("mainImage", {
      additionalFields: {
        alt: q.string(),
      },
    }),
    desc: ["description", q.string()],
  });

export type PostsQueryResponseInitial = QueryResponseInitial<
  ReturnType<typeof POSTS_SCHEMA.parse>
>;

export type PostsQueryResponseData = PostsQueryResponseInitial["data"];
