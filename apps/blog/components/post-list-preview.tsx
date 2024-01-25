"use client";

import { useQuery } from "@sanity/react-loader";

import PostList from "@/components/post-list";
import {
  POSTS_QUERY,
  PostsQueryResponseData,
  PostsQueryResponseInitial,
} from "@/sanity/queries/posts-query";

interface PostListPreviewProps {
  initial: PostsQueryResponseInitial;
}

export default function PostListPreview({ initial }: PostListPreviewProps) {
  const { data } = useQuery<PostsQueryResponseData>(
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
