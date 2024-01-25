"use server";

import { loadQuery } from "@/sanity/store";
import { QueryParams } from "next-sanity";
import { POST_QUERY } from "@/sanity/queries/post-query";
import type { PostQueryResponseData } from "@/sanity/queries/post-query";
import type { PostQueryResponseInitial } from "@/sanity/queries/post-query";

export async function fetchPost(
  params: QueryParams,
  perspective: "previewDrafts" | "published" = "published"
): Promise<PostQueryResponseInitial> {
  return await loadQuery<PostQueryResponseData>(POST_QUERY, params, {
    perspective,
  });
}
