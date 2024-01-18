import { draftMode } from "next/headers";
import PostList from "@/app/blog/components/post-list";
import PostListPreview from "@/app/blog/components/post-list-preview";
import * as actions from "@/actions";

export default async function HomePage() {
  const initial = await actions.fetchBlogPostListItems();

  return draftMode().isEnabled ? (
    <PostListPreview initial={initial} />
  ) : (
    <main className="max-w-2xl mx-auto px-4">
      <PostList posts={initial.data} />
    </main>
  );
}
