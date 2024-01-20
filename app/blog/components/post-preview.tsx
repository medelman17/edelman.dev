"use client";

import {
  POST_QUERY,
  PostQueryResponseData,
  PostQueryResponseInitial,
} from "@/lib/sanity/queries/post-query";
import { useQuery } from "@sanity/react-loader";
import { QueryParams } from "next-sanity";

import Post from "@/app/blog/components/post";

interface PostPreviewProps {
  initial: PostQueryResponseInitial;
  params: QueryParams;
}

export default function PostPreview({ initial, params }: PostPreviewProps) {
  const { data } = useQuery<PostQueryResponseData>(POST_QUERY, params, {
    initial,
  });

  return data ? (
    <Post post={data} />
  ) : (
    <div className="bg-red-100">Post not found</div>
  );
}
