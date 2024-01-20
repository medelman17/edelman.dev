"use server";

import { loadQuery } from "@/lib/sanity/store";
import { draftMode } from "next/headers";
import {
  POSTS_QUERY,
  PostsQueryResponseInitial,
  PostsQueryResponseData,
} from "@/lib/sanity/queries/posts-query";

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
