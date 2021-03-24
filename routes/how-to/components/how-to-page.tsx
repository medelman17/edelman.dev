import * as React from "react";
import * as DataHooks from "../../../hooks";
import { Layout } from "../../../components/Layout";
import { useRouter } from "next/router";
import { HowToSEO } from "../../../components/SEO";
import { serializers } from "../../blog/serializers";
import { HowToMetadata } from "./how-to-metadata";
import { HowToSteps } from "./how-to-steps";
import { HowToPrerequisites } from "./how-to-prereqs";
import { ContentMainImage } from "../../../components/Image";
import { MainContentContainer } from "../../../components/Boxes";
import { ContentTitle, HeadingThree } from "../../../components/Text";
import { ContentBody } from "../../../components/ContentBody";
import { UseHowToQueryResult } from "../../../hooks";
import { TableOfContents, HeaderTreeItem } from "../../../components/TOC";
import {
  MainImage,
  SimpleBlockContent,
  SimplePortableText,
} from "../../../lib/schema";
import { ExternalReferenceList } from "./external-reference-list";
import { Slug } from "@sanity/types";
import type { SanityImage } from "sanity-codegen";
import {
  Grid,
  GridItem,
  Flex,
  Wrap,
  WrapItem,
  useBreakpointValue,
  useMediaQuery,
  Box,
  Divider,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import slugify from "slugify";

export type ConformedHowToResource = {
  id: string;
  name: string;
  image: MainImage;
  externalLink: string;
  description: SimplePortableText;
  slug: Slug;
};

export type ConformedHowToReference = {
  id: string;
  title: string;
  externalLink: string;
  description: SimplePortableText;
};

function useHowToMetadata(howto: UseHowToQueryResult) {
  const buildUrl = (l: string) => `/#${l}`;

  const { steps, references, prerequisites } = howto;
  const metadata = React.useMemo(() => {
    let resources: ConformedHowToResource[] = [];
    let references: ConformedHowToReference[] = [];
    let headings: HeaderTreeItem[] = [];
    let images: SanityImage[] = [];

    images.push(howto.mainImage);

    let prerequisiteHeadings: HeaderTreeItem = {
      id: "prerequisites",
      level: "one",
      link: buildUrl("prerequisites"),
      text: "Prerequisites",
      children: [],
    };

    let stepsHeadings: HeaderTreeItem = {
      id: "steps",
      level: "one",
      link: buildUrl("steps"),
      text: "Steps",
      children: [],
    };

    for (const step of steps) {
      if (step.mainImage) {
        images.push(step.mainImage);
      }
      stepsHeadings.children.push({
        id: slugify(step.title),
        level: "two",
        link: buildUrl(slugify(step.title)),
        text: step.title,
        children: [],
      });

      for (const ref of step?.references ?? []) {
      }
    }

    for (const prereq of prerequisites) {
      let prereqHeadings: HeaderTreeItem = {
        //@ts-ignore
        id: slugify(prereq.title),
        level: "two",
        //@ts-ignore
        text: prereq.title,
        //@ts-ignore
        link: buildUrl(slugify(prereq.title)),
        children: [],
      };

      //@ts-ignore
      if (prereq.steps) {
        //@ts-ignore
        for (const step of prereq.steps) {
          console.log("step", step);
          prereqHeadings.children.push({
            id: slugify(step.title),
            level: "three",
            text: step.title,
            link: buildUrl(slugify(step.title)),
            children: [],
          });
        }
      }

      prerequisiteHeadings.children.push(prereqHeadings);

      //@ts-ignore
      for (const ref of prereq.references) {
        console.log("ref", ref);
        references.push({
          id: ref._key,
          description: ref.description,
          externalLink: ref.link,
          title: ref.title,
        });
      }

      //@ts-ignore
      for (const res of prereq.resources) {
        resources.push({
          id: res._id,
          name: res.title,
          description: res.description,
          externalLink: res.link,
          image: res.mainImage,
          slug: res.slug,
        });
      }
    }

    headings.push(prerequisiteHeadings);
    headings.push(stepsHeadings);
    headings.push({
      id: "references",
      level: "one",
      text: "References",
      //@ts-ignore
      link: buildUrl("references"),
      children: [],
    });

    return { resources, references, headings, images };
  }, []);

  return metadata;
}

export type HowToMetadata = ReturnType<typeof useHowToMetadata>;

function HowToPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { howto } = DataHooks.useHowTo();
  const { author, steps, prerequisites } = howto;
  const metadata = useHowToMetadata(howto);

  return (
    <>
      <HowToSEO metadata={metadata} />
      <Layout>
        <MainContentContainer as={"article"}>
          <ContentTitle>{howto.title}</ContentTitle>
          <ContentMainImage image={howto.mainImage} />
          <HowToMetadata author={author} howto={howto} />
          <VStack align={"stretch"} w={"100%"}>
            <Accordion defaultIndex={[0]} allowMultiple allowToggle>
              <AccordionItem>
                <AccordionButton paddingX={0}>
                  <Box flex={"1"} textAlign="left">
                    {" "}
                    <HeadingThree mb={0}>Table of Contents</HeadingThree>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={2} paddingX={0}>
                  <TableOfContents headings={metadata.headings} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Box>
              <ContentBody body={howto.body} serializers={serializers} />
            </Box>
          </VStack>
          <HowToPrerequisites
            prerequisites={prerequisites}
            metadata={metadata}
          />
          <HowToSteps steps={steps} metadata={metadata} />
          <ExternalReferenceList references={metadata.references} />
        </MainContentContainer>
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
