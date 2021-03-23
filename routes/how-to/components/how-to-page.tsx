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
import {
  Category,
  MainImage,
  HowtoStep,
  Howto,
  Prerequisite,
  Resource,
} from "../../../lib/schema";
import { blockContentToPlainText } from "react-portable-text";

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
import { imageBuilder } from "../../../components/Image";
import { NextSeo } from "next-seo";

import HowToJsonLd from "../../../components/HowToJsonLd";

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

function createHowToSupplies(name: string) {
  return {
    "@type": "HowToSupply",
    name,
  };
}

function createHowToTool(name: string) {
  return {
    "@type": "HowToTool",
    name,
  };
}

function createHowToStepDirection(text) {
  return {
    "@type": "HowToDirection",
    text,
  };
}

function createImage(url: string, height, width) {
  return {
    "@type": "ImageObject",
    url,
    width,
    height,
  };
}

function createHowToStep(s: HowtoStep, i: number, ht: Howto) {
  return {
    "@type": "HowToStep",
    url: `https://edel.monster/how-to/${ht.slug.current}#step${i}`,
    name: s.title,
    //@ts-ignore
    text: blockContentToPlainText(s.body),
  };
}

function createHowToJSONLD(howto: Howto) {
  const { prerequisites, steps } = howto;

  let resources: Resource[] = [];

  for (const prereq of prerequisites) {
    //@ts-ignore
    resources = [...resources, ...prereq.resources];
  }

  // console.log("res", resources);

  const imgUrl = imageBuilder
    .image(howto.mainImage)
    .height(300)
    .width(400)
    .auto("format")
    .url();

  return {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: howto.title,
    //@ts-ignore
    description: blockContentToPlainText(howto.excerpt),
    image: createImage(imgUrl, 400, 300),
    supply: resources.map((r) => createHowToSupplies(r.title)),
    step: steps.map((s, i) => createHowToStep(s, i, howto)),
  };
}

function HowToPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { howto } = DataHooks.useHowTo();
  const { author, slug, steps, prerequisites } = howto;

  const imgUrl = imageBuilder
    .image(howto.mainImage)
    .height(300)
    .width(400)
    .auto("format")
    .url();

  return (
    <>
      <HowToJsonLd
        supplies={howto.prerequisites.map((p) =>
          //@ts-ignore
          p.resources.map((r) => r.title)
        )}
        tools={[]}
        steps={howto.steps.map((s, i) => ({
          name: s.title,
          //@ts-ignore
          text: blockContentToPlainText(s.body),
          url: `https://edel.monster/how-to/${howto.slug.current}#step${i}`,
        }))}
        title={howto.title}
        //@ts-ignore
        description={blockContentToPlainText(howto.excerpt)}
        image={imgUrl}
      />

      <NextSeo
        title={howto.title}
        description={howto.title}
        canonical={`https://edel.monster/how-to/${slug}`}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary_large_image",
        }}
        openGraph={{
          url: `https://edel.monster/how-to/${slug}`,
          title: howto.title,
          type: "website",
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
