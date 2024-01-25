import { q, type Selection, type TypeFromSelection } from "groqd";
import { document } from "./document";

export const category_preview = {
  ...document,
  name: q.string(),
  desc: ["description", q.string()],
  slug: q.slug("slug"),
} satisfies Selection;

export type CategoryPreviewDisplayProps = TypeFromSelection<
  typeof category_preview
>;

export const category = {
  ...document,
  ...category_preview,
} satisfies Selection;

export type CategoryDisplayProps = TypeFromSelection<typeof category>;
