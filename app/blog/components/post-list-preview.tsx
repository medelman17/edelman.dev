"use client";

import { useQuery } from "@sanity/react-loader";
import {
  AwaitedFetchBlogPostListItemsResponse,
  BlogPostListItemAsFetched,
} from "@/actions/list-blog-posts";

import PostList from "@/app/blog/components/post-list";
import { POSTS_QUERY } from "@/lib/sanity/queries/posts-query";

interface PostListPreviewProps {
  initial: AwaitedFetchBlogPostListItemsResponse;
}

export default function PostListPreview({ initial }: PostListPreviewProps) {
  const { data } = useQuery<BlogPostListItemAsFetched[] | null>(
    POSTS_QUERY,
    {},
    { initial }
  );

  return data ? (
    <PostList posts={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
