"use server";

import { loadQuery } from "@/sanity/store";
import { draftMode } from "next/headers";
import {
  POSTS_QUERY,
  PostsQueryResponseInitial,
  PostsQueryResponseData,
} from "@/sanity/queries/posts-query";

export async function fetchPosts(
  perspective: "previewDrafts" | "published" = "published"
): Promise<PostsQueryResponseInitial> {
  return await loadQuery<PostsQueryResponseData>(
    POSTS_QUERY,
    {},
    {
      perspective,
    }
  );
}
