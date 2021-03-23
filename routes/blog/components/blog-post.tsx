import * as React from "react";

import { createDataHook } from "next-data-hooks";
import sanity from "../../../lib/sanity-client";
import { Layout } from "../../../components/Layout";
import { Figure } from "../../../components/Figure";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { serializers } from "../serializers";
// import Head from "next/head";
import imageUrlBuilder from "@sanity/image-url";
import simg from "../../../lib/sanity";
import { NextSeo, ArticleJsonLd } from "next-seo";
import { blockContentToPlainText } from "react-portable-text";
import { Category, MainImage } from "../../../lib/schema";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as DataHooks from "../../../hooks";
import { SEO } from "../../../components/SEO";
import { BlogPostCategories } from "./post-categories";

const BlogPostMetadata = dynamic(() => import("./post-metadata"));

const PostHeader = dynamic(() => import("./post-header"));

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

const builder = imageUrlBuilder(simg);

function getOgTagsForPost(post: any) {
  return {
    type: "article",
  };
}

function BlogPost() {
  const router = useRouter();

  // console.log("data", data);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const data = DataHooks.useBlogPost();

  const images = React.useMemo(() => {
    let result: MainImage[] = [];

    if (data.post.mainImage) {
      result.push(data.post.mainImage);
    }

    data.post.body.forEach((block) => {
      if (block._type == "mainImage") {
        result.push(block);
      }
    });

    return result;
  }, [data.post]);

  return (
    <>
      <SEO
        title={data.post.title}
        description={data.post.title}
        tags={data.categories}
        pageAuthor={[data.author.name]}
        datePublished={data.post.publishedAt}
        dateModified={data.post.publishedAt}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary",
        }}
        images={images}
        og={getOgTagsForPost(data)}
      />
      <Layout>
        <Flex
          as={"article"}
          direction={"column"}
          width={"100%"}
          maxW={{ lg: "800px" }}
          m={" 0 auto"}
          className={"h-entry"}
        >
          <Heading
            as={"h1"}
            size={"4xl"}
            fontSize={["36px", "36px", "60px", "60px"]}
            // mx={[0, 0, 0, "-1rem"]}
            mb={[4, 6, 8]}
            mt={[4, 2, 4]}
            color={["primary.700", "primary.700", "primary.700", "primary.700"]}
            letterSpacing={"-.1rem"}
            className={"p-name"}
          >
            {data.post.title}
          </Heading>
          <Box
            mb={8}
            mx={[0, 0, "-1rem"]}
            boxShadow={
              "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
            }
          >
            <Figure node={data.post.mainImage} />
          </Box>
          <BlogPostMetadata
            author={data.author}
            categories={data.categories}
            post={data.post}
          />

          <Box className={"e-content"}>
            <SimpleBlockContent
              blocks={data.post.body}
              serializers={serializers}
            />
          </Box>
          <BlogPostCategories categories={data.categories} />
        </Flex>

        <Flex></Flex>
      </Layout>
    </>
  );
}

BlogPost.dataHooks = [
  DataHooks.useBlogPost,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
];

export default BlogPost;

// <ArticleJsonLd
//     url={data.seo.canonical}
//     title={data.seo.title}
//     images={data.seo.ogImages.map((img) => img.url)}
//     datePublished={data.seo.publishedAt}
//     authorName={["Michael Edelman"]}
//     description={data.seo.description}
//     publisherName={"EdelmanDev"}
//     publisherLogo={"https://edelman.dev/android-chrome-512x512.png"}
// />
// <NextSeo
//     title={data.seo.title}
//     titleTemplate={"Edelman | %s"}
//     description={data.seo.description}
//     canonical={data.seo.canonical}
//     twitter={{
//       site: "@edelman215",
//       cardType: "summary",
//       handle: "@edelman215",
//     }}
//     openGraph={{
//       profile: {
//         firstName: "Michael",
//         lastName: "Edelman",
//       },
//       url: data.seo.canonical,
//       title: data.post.title,
//       site_name: "Edelman.Dev",
//       type: "article",
//       article: {
//         authors: ["https://edelman.dev/"],
//         tags: data.seo.tags,
//       },
//       images: data.seo.ogImages,
//     }}
// />
