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
import { TableOfContents, HeaderTreeItem } from "../../../components/TOC";
import { MainImage, SimplePortableText, Resource } from "../../../lib/schema";
import { ExternalReferenceList } from "./external-reference-list";
import { Slug } from "@sanity/types";
import type { SanityImage } from "sanity-codegen";
import {
  Box,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { ContentCategoriesList } from "../../../components/ContentCategoriesList";
import { ContentResourceList } from "../../../components/ContentResouceList";

import slugify from "slugify";
import Breadcrumbs from "../../../components/PageUi/Breadcrumbs";

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

type HTResult = ReturnType<typeof DataHooks.useHowTo>;

function gatherResources(howto: HTResult) {
  let resources: Resource[] = [];
  const { prerequisites } = howto;

  for (const prereq of prerequisites) {
    // @ts-ignore
    resources = [...resources, ...prereq.resources];
  }

  return resources;
}

function useHowToMetadata(howto: HTResult) {
  const buildUrl = (l: string) => `/#${l}`;

  const { steps, references, prerequisites, categories } = howto;

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
        id: slugify(step?.title ?? ""),
        level: "two",
        link: buildUrl(slugify(step.title)),
        text: step.title,
        children: [],
      });
    }

    for (const prereq of prerequisites) {
      let prereqHeadings: HeaderTreeItem = {
        //@ts-ignore
        id: slugify(prereq.title ?? ""),
        level: "two",
        //@ts-ignore
        text: prereq.title,
        //@ts-ignore
        link: buildUrl(slugify(prereq.title ?? "")),
        children: [],
      };

      //@ts-ignore
      if (prereq.steps) {
        //@ts-ignore
        for (const step of prereq.steps) {
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

  const howto = DataHooks.useHowTo();
  const { author, steps, prerequisites } = howto;
  const metadata = useHowToMetadata(howto);

  const resources = React.useMemo(() => {
    // return [];
    return gatherResources(howto);
  }, [howto]);

  return (
    <>
      <HowToSEO metadata={metadata} />
      <Layout>
        <MainContentContainer as={"article"} maxWidth={{ lg: "800px" }}>
          <Breadcrumbs />
          <ContentTitle>{howto.title}</ContentTitle>
          <ContentMainImage image={howto.mainImage} />
          <HowToMetadata author={author} howto={howto} />
          <VStack align={"stretch"} w={"100%"}>
            <Accordion allowMultiple allowToggle>
              <AccordionItem>
                <AccordionButton paddingX={0}>
                  <Box flex={"1"} textAlign="left">
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
          <ContentCategoriesList categories={howto.categories} />
          <ContentResourceList resources={resources} />
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
