import * as actions from "@/actions";
import PostList from "@/components/post-list";
import PostListPreview from "@/components/post-list-preview";
import { draftMode } from "next/headers";

export default async function HomePage() {
  const drafting = draftMode().isEnabled;
  const perspective = drafting ? "previewDrafts" : "published";
  const initial = await actions.fetchPosts(perspective);

  if (drafting) return <PostListPreview initial={initial} />;
  else return <PostList posts={initial.data} />;
}
