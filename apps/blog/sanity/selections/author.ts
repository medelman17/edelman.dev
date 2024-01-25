import { q, sanityImage, type Selection, type TypeFromSelection } from "groqd";
import { document } from "./document";

export const author_preview = {
  ...document,
  name: q.string(),
  slug: q.slug("slug"),
  bio: q.contentBlocks(),
  image: sanityImage("image", {
    additionalFields: {
      alt: q.string(),
    },
  }),
} satisfies Selection;

export type AuthorPreviewDisplayProps = TypeFromSelection<
  typeof author_preview
>;

export const author = {
  ...document,
  ...author_preview,
} satisfies Selection;

export type AuthorDisplayProps = TypeFromSelection<typeof author>;
