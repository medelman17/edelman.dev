// ./components/Posts.tsx

import { SanityDocument } from "next-sanity";
import Link from "next/link";

import paths from "@/lib/paths";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {posts.map((post, idx) => (
        <Card key={post._id}>
          <Image
            src={urlForImage(post.mainImage)}
            alt={post.mainImage.alt}
            width={800}
            height={800}
            className="rounted-t-lg h-[200px] object-cover"
          ></Image>
          <CardContent className="mt-5">
            <h3>{post.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
