"use server";

import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import Post from "@/components/post";
import PostPreview from "@/components/post-preview";
import * as actions from "@/actions";

export interface PostPageProps {
  params: QueryParams;
}

export async function generateStaticParams() {
  const { data: posts } = await actions.fetchPosts();

  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const drafting = draftMode().isEnabled;
  const perspective = drafting ? "previewDrafts" : "published";
  const initial = await actions.fetchPost(params, perspective);

  if (drafting) {
    return <PostPreview initial={initial} params={params} />;
  } else {
    return <Post post={initial.data} />;
  }
}
