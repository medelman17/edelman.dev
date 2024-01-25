import { TypeFromSelection, q, sanityImage, Selection } from "groqd";
import { document } from "./document";
import { author_preview } from "./author";
import { category_preview } from "./category";

export const post_preview = {
  ...document,
  title: q.string(),
  slug: q.slug("slug"),
  author: q("author").deref().grab(author_preview),
  categories: q("categories").filter().deref().grab(category_preview),
  desc: ["description", q.string()],
  image: sanityImage("mainImage", {
    additionalFields: {
      alt: q.string(),
    },
  }),
} satisfies Selection;

export type PostPreviewDisplayProps = TypeFromSelection<typeof post_preview>;

export const post = {
  ...document,
  ...post_preview,
  body: q.contentBlocks(),
} satisfies Selection;

export type PostDisplayProps = TypeFromSelection<typeof post>;
