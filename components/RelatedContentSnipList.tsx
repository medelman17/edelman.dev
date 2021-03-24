import * as React from "react";
import { Flex, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import { RelatedContent } from "../hooks/resources";
import { ExpandedResourceRelatedContentPrereqSnip } from "../hooks";
import { Howto, Post, Prerequisite } from "../lib/schema";
import { HeadingThree } from "./Text";
import { blockContentToPlainText } from "react-portable-text";

export interface RelatedContentSnipListProps {
  content: RelatedContent[];
}

export function SnipWrapper(props: { children: React.ReactNode }) {
  return (
    <WrapItem
      radius={2}
      shadow={1}
      flex={1}
      width={"100%"}
      minWidth={["350px", "48%"]}
      maxWidth={[null, "48%"]}
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
      {props.children}
    </WrapItem>
  );
}
//
// const buildImage = (image: SanityImage) =>
//   useNextSanityImage(sanity, image, {
//     imageBuilder: myCustomImageBuilder,
//   });

export function PrerequisiteSnipItem(props: { item: Prerequisite }) {
  //@ts-ignore
  const excerpt = blockContentToPlainText(props.item.body);
  return (
    <SnipWrapper>
      <Wrap>
        {/*<WrapItem w={"100%"} maxWidth={[null, null, "300px"]} flex={1}>*/}
        {/*  <Box w={"100%"} minWidth={"200px"} flex={1} alignSelf={"stretch"}>*/}
        {/*    <Img*/}
        {/*      {...buildImage(props.item.mainImage)}*/}
        {/*      alt={props.item.mainImage.alt}*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*</WrapItem>*/}
        <WrapItem flex={2} p={[2, 4]}>
          <VStack align={"flex-start"}>
            <Link href={`/how-to/${props.item.slug.current}`}>
              <a className={"p-name u-url"}>
                <HeadingThree mb={0}>{props.item.title}</HeadingThree>
              </a>
            </Link>
            <Text noOfLines={5}>{excerpt}</Text>
          </VStack>
        </WrapItem>
      </Wrap>
    </SnipWrapper>
  );
}

export function PostSnipItem(props: { item: Post }) {
  //@ts-ignore
  const excerpt = blockContentToPlainText(props.item.excerpt);
  return (
    <SnipWrapper>
      <Wrap>
        {/*<WrapItem w={"100%"} maxWidth={[null, null, "300px"]} flex={1}>*/}
        {/*  <Box w={"100%"} minWidth={"200px"} flex={1} alignSelf={"stretch"}>*/}
        {/*    <Img*/}
        {/*      {...buildImage(props.item.mainImage)}*/}
        {/*      alt={props.item.mainImage.alt}*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*</WrapItem>*/}
        <WrapItem flex={2} p={[2, 4]}>
          <VStack align={"flex-start"}>
            <Link href={`/how-to/${props.item.slug.current}`}>
              <a className={"p-name u-url"}>
                <HeadingThree mb={0}>{props.item.title}</HeadingThree>
              </a>
            </Link>
            <Text noOfLines={5}>{excerpt}</Text>
          </VStack>
        </WrapItem>
      </Wrap>
    </SnipWrapper>
  );
}

export function HowtoSnipItem(props: { item: Howto }) {
  //@ts-ignore
  const excerpt = blockContentToPlainText(props.item.excerpt);
  return (
    <SnipWrapper>
      <Wrap>
        {/*<WrapItem w={"100%"} maxWidth={[null, null, "300px"]} flex={1}>*/}
        {/*  <Box w={"100%"} minWidth={"200px"} flex={1} alignSelf={"stretch"}>*/}
        {/*    <Img*/}
        {/*      {...buildImage(props.item.mainImage)}*/}
        {/*      alt={props.item.mainImage.alt}*/}
        {/*    />*/}
        {/*  </Box>*/}
        {/*</WrapItem>*/}
        <WrapItem flex={2} p={[2, 4]}>
          <VStack align={"flex-start"}>
            <Link href={`/how-to/${props.item.slug.current}`}>
              <a className={"p-name u-url"}>
                <HeadingThree mb={0}>{props.item.title}</HeadingThree>
              </a>
            </Link>
            <Text noOfLines={5}>{excerpt}</Text>
          </VStack>
        </WrapItem>
      </Wrap>
    </SnipWrapper>
  );
}

export function RelatedContentSnipList(props: RelatedContentSnipListProps) {
  const renderRelatedContent = React.useCallback(
    (c: RelatedContent) => {
      if (isPrereqSnip(c)) {
        return <PrerequisiteSnipItem item={c} />;
      } else if (isPostSnip(c)) {
        return <PostSnipItem item={c} />;
      } else if (isHowToSnip(c)) {
        return <HowtoSnipItem item={c} />;
      } else {
        throw new Error("Related content type not supported");
      }
    },
    [props.content]
  );

  return (
    <Flex marginBottom={6} wrap={"wrap"}>
      {props.content.map(renderRelatedContent)}
    </Flex>
  );
}

function isPostSnip(b: RelatedContent): b is Post {
  return (b as Post)._type === "post";
}
function isHowToSnip(b: RelatedContent): b is Howto {
  return (b as Howto)._type === "howto";
}

function isPrereqSnip(
  b: RelatedContent
): b is ExpandedResourceRelatedContentPrereqSnip {
  return (
    (b as ExpandedResourceRelatedContentPrereqSnip)._type === "prerequisite"
  );
}
