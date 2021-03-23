import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  ContentSnip,
  HowToSnipQueryResult,
  PostSnipQueryResult,
  useRecentContentSnips,
} from "../../../hooks";

import { HeadingOne, HeadingTwo, BodyText } from "../../../components/Text";
import { Hero, SanityKeyed, UiComponentRef } from "../../../lib/schema";
import { PageContent } from "../renderPageContent";
import { Box as Card } from "@chakra-ui/layout/dist/types/box";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../../../lib/sanity";
import { myCustomImageBuilder } from "../../../components/Figure";
import Link from "next/link";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

export interface RecentContentListProps {}

export function SnipCard(props: { children: React.ReactNode }) {
  return (
    <WrapItem
      radius={2}
      shadow={1}
      flex={1}
      width={"100%"}
      minWidth={["350px", "500px"]}
      borderRadius={"base"}
      boxShadow={
        "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
      }
    >
      <Flex>{props.children}</Flex>
    </WrapItem>
  );
}

export function PostSnip(props: { snip: PostSnipQueryResult }) {
  const imgProps = useNextSanityImage(sanity, props.snip.mainImage, {
    imageBuilder: myCustomImageBuilder,
  });
  return (
    <SnipCard>
      <Wrap>
        <WrapItem w={"100%"} flex={1}>
          <Box w={"100%"} flex={1} minWidth={"300px"}>
            <Img {...imgProps} alt={props.snip.mainImage.alt} priority={true} />
          </Box>
        </WrapItem>
        <WrapItem>
          <Flex direction={"column"}>
            <Flex>
              <Link href={`/blog/${props.snip.slug.current}`}>
                <a>
                  <HeadingTwo>{props.snip.title}</HeadingTwo>
                </a>
              </Link>
            </Flex>
            <Flex>
              {" "}
              <BodyText>Excerpt</BodyText>
            </Flex>
          </Flex>
        </WrapItem>
      </Wrap>
    </SnipCard>
  );
}

export function HowToSnip(props: { snip: HowToSnipQueryResult }) {
  return (
    <SnipCard>
      {" "}
      <Text>HowTo</Text>
    </SnipCard>
  );
}

export function RecentContentList(props: RecentContentListProps) {
  const snips = useRecentContentSnips();
  const renderSnip = React.useCallback(
    (snip: ContentSnip, i: number, snips: ContentSnip[]) => {
      if (isPostSnip(snip)) {
        return <PostSnip key={snip._id} snip={snip} />;
      } else if (isHowToSnip(snip)) {
        return <HowToSnip key={snip._id} snip={snip} />;
      } else {
        throw new Error("No component for content type");
      }
    },
    []
  );

  return (
    <VStack w={"100%"} alignItems={"flex-start"}>
      <HeadingOne>Recent Content</HeadingOne>
      <Wrap w={"100%"}>{snips.map(renderSnip)}</Wrap>
    </VStack>
  );
}

function isPostSnip(b: ContentSnip): b is PostSnipQueryResult {
  return (b as PostSnipQueryResult)._type === "post";
}

function isHowToSnip(b: ContentSnip): b is HowToSnipQueryResult {
  return (b as HowToSnipQueryResult)._type === "howto";
}
