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
  HStack,
  Center,
  Link as ChakraLink,
  Icon as ChakraIcon,
  Badge as ChakraBadge,
  Tag,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import { HeadingThree, HeadingTwo } from "../Text";
import { useTopicList } from "../../routes/topics/hooks";
import { Resource, Topic } from "../../lib/schema";
import { HotTopicListItem } from "./HotTopicList";
import { useResources } from "../../hooks";
import Link from "next/link";
import { titleCase } from "../../utils";
import { MdChevronRight } from "react-icons/md";

export interface HotResourceListItemProps {
  snip: Resource & { _type: "resource" };
}

export function HotResourceListItem(props: HotResourceListItemProps) {
  return (
    <>
      <HStack
        w={"100%"}
        spacing={8}
        borderRadius={"base"}
        radius={2}
        shadow={1}
        p={[2, 0, 0, 0]}
        boxShadow={[
          "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px",
          "none",
        ]}
      >
        <VStack align={"stretch"} spacing={0}>
          <Flex
            justifyContent={"space-between"}
            // border={"1px solid black"}
            // alignItems={"flex-start"}
          >
            <ChakraLink
              as={Link}
              href={`/resources/${props.snip.slug.current}`}
            >
              <a>
                <HeadingThree m={0} size={["md", "lg"]} fontSize={["md", "lg"]}>
                  {titleCase(props.snip.title)}
                </HeadingThree>
              </a>
            </ChakraLink>
          </Flex>
          <Text fontSize={["sm", "sm", "md"]} noOfLines={[5, 5, 5]}>
            {props.snip.oneLiner}
          </Text>
          {/*<ChakraLink as={Link} href={`/resources/${props.snip.slug.current}`}>*/}
          {/*  <a className={"p-name u-url"}>*/}
          {/*    <Tag mt={[2, 4]}>*/}
          {/*      <TagLabel>More</TagLabel>*/}
          {/*      <TagRightIcon as={MdChevronRight} />*/}
          {/*    </Tag>*/}
          {/*  </a>*/}
          {/*</ChakraLink>*/}
        </VStack>
      </HStack>
    </>
  );
}

export interface HotResourceListProps {}

export function HotResourceList(props: HotResourceListProps) {
  const snips = useResources();
  const renderContentSnip = React.useCallback(
    (
      snip: Resource & { _type: "resource" },
      i: number,
      snips: (Resource & { _type: "resource" })[]
    ) => {
      return <HotResourceListItem snip={snip} key={snip.slug.current} />;
    },
    []
  );

  return (
    <VStack width={"100%"} align={"stretch"} spacing={4}>
      <HeadingTwo>Hot Resources</HeadingTwo>
      {snips.map(renderContentSnip)}
    </VStack>
  );
}

export default HotResourceList;
