import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SanityDocument } from "next-sanity";
import { image as img } from "@/lib/sanity";
import type { PostQueryResponseData } from "@/lib/sanity/queries/post-query";
import Link from "next/link";
import * as paths from "@/lib/paths";
import * as utils from "@/lib/utils";
import { portable_text } from "./portable-text";

interface PostBreadCrumbsProps {
  slug: string;
  title: string;
}

function PostBreadCrumbs({ slug, title }: PostBreadCrumbsProps) {
  return (
    <nav className="flex space-x-2 text-sm text-gray-500 mb-4">
      <Link href={paths.home()}>Home</Link>
      <span>/</span>
      <Link href={paths.blog.index()}>Blog</Link>
      <span>/</span>
      <Link href={paths.blog.post(slug)}>
        <span className="text-clip overflow-hidden ">
          {utils.truncate(title)}
        </span>
      </Link>
    </nav>
  );
}

function PostTitle() {}

export default function Post({ post }: { post: PostQueryResponseData }) {
  const { title, image, body, slug } = post;

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="w-full">
        <PostBreadCrumbs title={title} slug={slug} />
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              {title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Posted on ... by ...
            </p>
          </div>
          <Image
            className="w-full h-[400px] object-cover mb-6 mt-6"
            alt={image.alt}
            src={img.builder.image(image).url()}
            width={800}
            height={400}
          />
          {body ? (
            <PortableText value={body} components={portable_text} />
          ) : null}
        </article>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto prose prose-lg p-4">
      <PostBreadCrumbs title={title} slug={slug} />
      {title ? <h1>{title}</h1> : null}
      {image ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={img.builder
            .image(image)
            .width(300)
            .height(300)
            .quality(80)
            .url()}
          width={300}
          height={300}
          alt={image.alt || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
    </main>
  );
}
