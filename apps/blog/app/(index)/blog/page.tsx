import { draftMode } from "next/headers";
import PostList from "@/components/post-list";
import PostListPreview from "@/components/post-list-preview";
import * as actions from "@/actions";

export default async function BlogPage() {
  const initial = await actions.fetchPosts();

  return draftMode().isEnabled ? (
    <PostListPreview initial={initial} />
  ) : (
    <main className="max-w-2xl mx-auto px-4">
      <PostList posts={initial.data} />
    </main>
  );
}
