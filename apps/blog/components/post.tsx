import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { image as img } from "@/sanity";
import type {
  PostDisplayProps,
  PostQueryResponseData,
} from "@/sanity/queries/post-query";
import Link from "next/link";
import * as paths from "@/paths";
import * as utils from "@/utils";
import { portable_text } from "./portable-text";

interface PostBreadCrumbsProps {
  post: PostDisplayProps;
}

function PostBreadCrumbs({ post: { slug, title } }: PostBreadCrumbsProps) {
  return (
    <nav className="flex space-x-2 text-sm text-gray-500 mb-4">
      <Link href={paths.home()}>Home</Link>
      <span>/</span>
      <Link href={paths.blog.index()}>Blog</Link>
      <span>/</span>
      <Link href={paths.blog.post(slug)}>
        <span className="line-clamp-1">{utils.truncate(title)}</span>
      </Link>
    </nav>
  );
}

interface PostTitleProps {
  post: PostDisplayProps;
}

function PostTitle({ post: { title } }: PostTitleProps) {
  return (
    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] mb-4">
      {title}
    </h1>
  );
}

interface PostBylineProps {
  post: PostDisplayProps;
}

function PostByline({ post }: PostBylineProps) {
  return (
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      Posted on <PostPublicationDate date={post._createdAt} /> by{" "}
      {<PostAuthor author={post.author} />}
    </p>
  );
}

interface PostPublicationDateProps {
  date: Date;
}

function PostPublicationDate({ date }: PostPublicationDateProps) {
  return <span>{date.toString()}</span>;
}

interface PostAuthorProps {
  author: PostDisplayProps["author"];
}

function PostAuthor({ author }: PostAuthorProps) {
  return (
    <Link href={paths.blog.index()}>
      <span>{author.name}</span>
    </Link>
  );
}

interface PostCategoriesProps {
  post: PostDisplayProps;
}

function PostCategories({ post }: PostCategoriesProps) {
  return (
    <p className="text-gray-500 dark:text-gray-400 text-sm">
      Posted on {<PostAuthor author={post.author} />} by ...
    </p>
  );
}

export default function Post({ post }: { post: PostQueryResponseData }) {
  const { title, image, body, slug, author, categories } = post;

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-3 md:py-12 lg:py-16">
      <div className="w-full">
        <PostBreadCrumbs post={post} />
        <article className="prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <PostTitle post={post} />
            <PostByline post={post} />
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
}
