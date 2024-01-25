import { q } from "groqd";
import type { QueryResponseInitial } from "@sanity/react-loader";
import { post as selection, PostDisplayProps } from "../selections";

export const { query: POST_QUERY, schema: POST_SCHEMA } = q("*")
  .filter("_type == 'post' && slug.current == $slug")
  .grab(selection)
  .slice(0);

export type PostQueryResponseInitial = QueryResponseInitial<PostDisplayProps>;

export type PostQueryResponseData = PostDisplayProps;

export type { PostDisplayProps };
