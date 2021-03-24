import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Figure } from "../../../components/Figure";
import { Flex, Heading, Box } from "@chakra-ui/react";
import { serializers } from "../serializers";
import imageUrlBuilder from "@sanity/image-url";
import simg from "../../../lib/sanity";
import { MainImage } from "../../../lib/schema";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as DataHooks from "../../../hooks";
import { SEO } from "../../../components/SEO";
import { BlogPostCategories } from "./post-categories";

const BlogPostMetadata = dynamic(() => import("./post-metadata"));

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

function getOgTagsForPost(post: any) {
  return {
    type: "article",
  };
}

function BlogPost() {
  const router = useRouter();

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
