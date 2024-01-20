import * as actions from "@/app/blog/actions";
import PostList from "@/app/blog/components/post-list";
import PostListPreview from "@/app/blog/components/post-list-preview";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const drafting = draftMode().isEnabled;
  const perspective = drafting ? "previewDrafts" : "published";
  const initial = await actions.fetchPosts(perspective);

  if (drafting) return <PostListPreview initial={initial} />;
  else return <PostList posts={initial.data} />;
}
