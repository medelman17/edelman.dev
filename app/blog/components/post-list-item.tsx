import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PostsQueryResponseData } from "@/lib/sanity/queries/posts-query";
import { urlFor } from "@/lib/sanity/image";
import * as paths from "@/lib/paths";

interface PostListItemProps {
  item: PostsQueryResponseData[0];
}

export default function PostListItem({ item }: PostListItemProps) {
  const { title, desc, slug, image } = item;

  return (
    <Card>
      <PostListItemImage image={image} />
      <CardContent className="mt-5">
        <PostListItemTitle title={title} />
        <PostListItemDescription description={desc} />
        <Button asChild className="w-full mt-7">
          <Link href={paths.blog.post(slug)}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

interface PostListItemTitleProps {
  title: string;
}

function PostListItemTitle({ title }: PostListItemTitleProps) {
  return <h3 className="text-lg line-clamp-2 font-bold">{title}</h3>;
}

interface PostListItemDescriptionProps {
  description: string;
}

function PostListItemDescription({
  description,
}: PostListItemDescriptionProps) {
  return (
    <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
      {description}
    </p>
  );
}

interface PostListItemImageProps {
  image: PostsQueryResponseData[0]["image"];
  width?: number;
  height?: number;
}

function PostListItemImage({
  image: { alt = "", ...image },
  width = 800,
  height = 800,
}: PostListItemImageProps) {
  const src = urlFor(image).height(height).width(width).url();
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="rounded-t-lg h-[200px] object-cover"
    />
  );
}
