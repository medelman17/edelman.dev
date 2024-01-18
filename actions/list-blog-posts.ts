"use server";

import { POSTS_QUERY } from "@/lib/sanity/queries/posts-query";
import { loadQuery } from "@/lib/sanity/store";
import { draftMode } from "next/headers";
import { Image } from "sanity";

export interface BlogPostListItemAsFetched {
  title: string;
  image: Image & { alt?: string };
  desc: string;
  slug: string;
}

export async function fetchBlogPostListItems() {
  return await loadQuery<BlogPostListItemAsFetched[]>(
    POSTS_QUERY,
    {},
    { perspective: draftMode().isEnabled ? "previewDrafts" : "published" }
  );
}

export type FetchBlogPostListItemsResponse = ReturnType<
  typeof fetchBlogPostListItems
>;

export type AwaitedFetchBlogPostListItemsResponse =
  Awaited<FetchBlogPostListItemsResponse>;
