import * as React from "react";
import { Layout } from "../../../components/Layout";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
} from "@chakra-ui/react";
// import { serializers } from "../serializers";
import { Category, MainImage, HowtoStep } from "../../../lib/schema";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import * as DataHooks from "../../../hooks";
import { SEO } from "../../../components/SEO";
import BlogPostCard from "../../blog/components/blog-post-card";
import { Figure } from "../../../components/Figure";
import { serializers } from "../../blog/serializers";
import { HowToMetadata } from "./how-to-metadata";
import { HowToSteps } from "./how-to-steps";
import { HowToPrerequisites } from "./how-to-prereqs";
const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

function HowToPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { howto } = DataHooks.useHowTo();
  const { author, slug, steps, prerequisites } = howto;

  return (
    <>
      <SEO
        title={howto.title}
        description={howto.title}
        tags={[]}
        pageAuthor={["Michael Edelman"]}
        datePublished={howto._createdAt}
        dateModified={howto._updatedAt}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary",
        }}
        images={[]}
        og={{
          type: "howto",
        }}
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
            {howto.title}
          </Heading>
          <Box
            mb={8}
            mx={[0, 0, "-1rem"]}
            boxShadow={
              "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
            }
          >
            <Figure node={howto.mainImage} />
          </Box>
          <HowToMetadata author={author} howto={howto} />

          <Box className={"e-content"}>
            <SimpleBlockContent blocks={howto.body} serializers={serializers} />
          </Box>

          <HowToPrerequisites prerequisites={prerequisites} />
          <HowToSteps steps={steps} />

          {/*<VStack w={"100%"} alignItems={"flex-start"}>*/}
          {/*  <Heading>Steps</Heading>*/}
          {/*  {steps.map(renderStep)}*/}
          {/*</VStack>*/}
          <Flex
            borderBottom={"1px solid black"}
            borderBottomColor={"gray.300"}
            direction={"column"}
            width={"100%"}
            pb={2}
            mb={[4, 4, 6]}
          ></Flex>

          <Flex
            justifyContent={"space-between"}
            wrap={"wrap"}
            flex={1}
            width={"100%"}
          >
            {/*{cat.content.map((p) => {*/}
            {/*  return <BlogPostCard post={p} key={p._id} />;*/}
            {/*})}*/}
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}

HowToPage.dataHooks = [
  DataHooks.useHowTo,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
];

export default HowToPage;
