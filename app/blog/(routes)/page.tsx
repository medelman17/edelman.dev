import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import Posts from "@/app/blog/components/post-list";
import PostsPreview from "@/app/blog/components/post-list-preview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <main className="max-w-2xl mx-auto px-4">
      <Posts posts={initial.data} />
    </main>
  );
}
