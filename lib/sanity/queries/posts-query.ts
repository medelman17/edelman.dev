import { q } from "groqd";
import type { QueryResponseInitial } from "@sanity/react-loader";
import {
  post_preview as selection,
  PostPreviewDisplayProps,
} from "../selections";

export const { query: POSTS_QUERY, schema: POSTS_SCHEMA } = q("*", {
  isArray: true,
})
  .filter(`_type == "post" && defined(slug)`)
  .order("_createdAt", "desc")
  .grab(selection);

export type PostsQueryResponseInitial = QueryResponseInitial<
  PostPreviewDisplayProps[]
>;

export type PostsQueryResponseData = PostsQueryResponseInitial["data"];

export type { PostPreviewDisplayProps };
