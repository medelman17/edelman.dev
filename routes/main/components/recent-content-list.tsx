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
import {
  Hero,
  MainImage,
  SanityKeyed,
  SimpleBlockContent,
  UiComponentRef,
} from "../../../lib/schema";
import { PageContent } from "../renderPageContent";
import { Box as Card } from "@chakra-ui/layout/dist/types/box";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../../../lib/sanity";
import { myCustomImageBuilder } from "../../../components/Figure";
import Link from "next/link";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { blockContentToPlainText } from "react-portable-text";

export interface RecentContentListProps {}

export function SnipCard(props: {
  image: MainImage;
  type: "post" | "howto";
  link: string;
  title: string;
  excerpt: string;
}) {
  const imgProps = useNextSanityImage(sanity, props.image, {
    imageBuilder: myCustomImageBuilder,
  });

  return (
    <WrapItem
      radius={2}
      shadow={1}
      flex={1}
      width={"100%"}
      minWidth={["350px", "500px"]}
      borderRadius={"base"}
      mr={[0, 0, 3]}
      my={[2, 2, 0]}
      sx={{
        ":last-child": {},
      }}
      overflow={"hidden"}
      boxShadow={
        "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
      }
      className={"h-entry"}
    >
      <Wrap>
        <WrapItem w={"100%"} maxWidth={[null, null, "300px"]} flex={1}>
          <Box w={"100%"} minWidth={"300px"} flex={1} alignSelf={"stretch"}>
            <Img
              {...imgProps}
              alt={props.image.alt}
              priority={true}
              className={"u-photo"}
            />
          </Box>
        </WrapItem>
        <WrapItem flex={2} p={2}>
          <VStack align={"flex-start"}>
            <Link href={props.link}>
              <a className={"p-name u-url"}>
                <HeadingTwo>{props.title}</HeadingTwo>
              </a>
            </Link>
            <BodyText noOfLines={5} className={"p-summary"}>
              {props.excerpt}
            </BodyText>
          </VStack>
        </WrapItem>
      </Wrap>
    </WrapItem>
  );
}

function getSnipExcerpt(excerpt: SimpleBlockContent) {
  //@ts-ignore
  return blockContentToPlainText(excerpt);
}

export function PostSnip(props: { snip: PostSnipQueryResult }) {
  return (
    <SnipCard
      image={props.snip.mainImage}
      type={props.snip._type}
      title={props.snip.title}
      excerpt={getSnipExcerpt(props.snip.excerpt)}
      link={`/blog/${props.snip.slug.current}`}
    />
  );
}

export function HowToSnip(props: { snip: HowToSnipQueryResult }) {
  return (
    <SnipCard
      image={props.snip.mainImage}
      type={props.snip._type}
      title={props.snip.title}
      excerpt={getSnipExcerpt(props.snip.excerpt)}
      link={`/how-to/${props.snip.slug.current}`}
    />
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
      <Wrap w={"100%"} sx={{}}>
        {snips.map(renderSnip)}
      </Wrap>
    </VStack>
  );
}

function isPostSnip(b: ContentSnip): b is PostSnipQueryResult {
  return (b as PostSnipQueryResult)._type === "post";
}

function isHowToSnip(b: ContentSnip): b is HowToSnipQueryResult {
  return (b as HowToSnipQueryResult)._type === "howto";
}
