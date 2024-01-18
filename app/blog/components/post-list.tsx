import PostListItem from "./post-list-item";
import { BlogPostListItemAsFetched } from "@/actions/list-blog-posts";

interface PostListProps {
  posts: BlogPostListItemAsFetched[];
}

export default function PostList({ posts }: PostListProps) {
  const renderedPostItems = posts.map((post, idx) => (
    <PostListItem key={idx} item={post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {renderedPostItems}
    </div>
  );
}
