import { QueryParams, SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import { client, queries } from "@/lib/sanity";
import { loadQuery } from "@/lib/sanity/store";
import { BlogPostListItemAsFetched } from "@/actions/list-blog-posts";
import Post from "@/app/blog/components/post";
import PostPreview from "@/app/blog/components/post-preview";

export async function generateStaticParams() {
  const posts = await client.fetch<BlogPostListItemAsFetched[]>(
    queries.POSTS_QUERY
  );

  return posts.map(({ slug }) => ({ slug }));
}

export default async function PostPage({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(queries.POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post post={initial.data} />
  );
}
