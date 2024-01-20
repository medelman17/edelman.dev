"use server";

import { QueryParams } from "next-sanity";
import { draftMode } from "next/headers";
import Post from "@/app/blog/components/post";
import PostPreview from "@/app/blog/components/post-preview";
import * as actions from "@/app/blog/actions";

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
