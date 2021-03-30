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
import { ContentSnip } from "../../hooks";
import { RecentContentListItem } from "./RecentContent";
import { Topic } from "../../lib/schema";
import Link from "next/link";
import { titleCase } from "../../utils";
import { MdChevronRight } from "react-icons/md";

export interface HotTopicListProps {}

export interface HotTopicListItemProps {
  snip: Topic & { _type: "topic" };
}

export function HotTopicListItem(props: HotTopicListItemProps) {
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
            <ChakraLink as={Link} href={`/topics/${props.snip.slug.current}`}>
              <a>
                <HeadingThree m={0} size={["md", "lg"]} fontSize={["md", "lg"]}>
                  {titleCase(props.snip.name)}
                </HeadingThree>
              </a>
            </ChakraLink>
          </Flex>
          <Text fontSize={["sm", "sm", "md"]} noOfLines={[5, 5, 5]}>
            {props.snip.oneLiner}
          </Text>
          {/*<ChakraLink as={Link} href={`/topics/${props.snip.slug.current}`}>*/}
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

export function HotTopicList(props: HotTopicListProps) {
  const snips = useTopicList();
  const renderContentSnip = React.useCallback(
    (
      snip: Topic & { _type: "topic" },
      i: number,
      snips: (Topic & { _type: "topic" })[]
    ) => {
      return <HotTopicListItem snip={snip} key={snip._id} />;
    },
    []
  );

  return (
    <VStack width={"100%"} align={"stretch"} spacing={4}>
      <HeadingTwo>Hot Topics</HeadingTwo>
      {snips.map(renderContentSnip)}
    </VStack>
  );
}

export default HotTopicList;
