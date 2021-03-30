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
import { HeadingFour, HeadingThree, HeadingTwo } from "../Text";
import Link from "next/link";
import { titleCase } from "../../utils";
import { useRecentContentSnips, ContentSnip } from "../../hooks";
import dynamic from "next/dynamic";
import { MdChevronRight } from "react-icons/md";
import { IconType } from "react-icons";
import SimpleBlockContent from "../SimpleBlockContent";
export interface RecentContentListItemProps {
  snip: ContentSnip;
}

export const RecentContentItemBlockRenderer = (props) => {
  switch (props.node.style) {
    case "normal":
      return (
        <Text noOfLines={[5, 5, 5]} fontSize={["sm", "sm", "md"]}>
          {props.children}
        </Text>
      );

    default:
      console.log("not supportd", props.node);
      return null;
  }
};

export const RecentContentItemSerializers = {
  types: { block: RecentContentItemBlockRenderer },
};

function useContentSnip(snip: ContentSnip) {
  const SnipBits = React.useMemo(() => {
    let link = "";
    let Icon = null;
    let Badge = null;

    switch (snip._type) {
      case "post":
        link = `/blog/${snip.slug.current}`;
        Icon = dynamic<IconType>(() =>
          import("react-icons/md").then((m) => m.MdSchool)
        );
        Badge = (
          <ChakraBadge ml="2" colorScheme="blue">
            Post
          </ChakraBadge>
        );

        break;
      case "howto":
        link = `/how-to/${snip.slug.current}`;
        Icon = dynamic<IconType>(() =>
          import("react-icons/md").then((m) => m.MdSchool)
        );
        Badge = (
          <ChakraBadge ml="2" colorScheme="green">
            How To
          </ChakraBadge>
        );
        break;
      default:
        break;
    }

    return { link, Icon, Badge };
  }, [snip]);

  return SnipBits;
}

export function RecentContentListItem(props: RecentContentListItemProps) {
  const { link, Icon, Badge } = useContentSnip(props.snip);
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
            <ChakraLink as={Link} href={link}>
              <a className={"p-name u-url"}>
                <HeadingThree
                  m={0}
                  size={["lg", "2xl"]}
                  fontSize={["lg", "2xl"]}
                >
                  {titleCase(props.snip.title)}
                </HeadingThree>
              </a>
            </ChakraLink>
            <Box>{Badge}</Box>
          </Flex>

          <SimpleBlockContent
            blocks={props.snip.excerpt}
            serializers={RecentContentItemSerializers}
          />
          <ChakraLink as={Link} href={link}>
            <a className={"p-name u-url"}>
              <Tag mt={[2, 4]}>
                <TagLabel>Read</TagLabel>
                <TagRightIcon as={MdChevronRight} />
              </Tag>
            </a>
          </ChakraLink>
        </VStack>
      </HStack>
    </>
  );
}

export interface RecentContentListProps {}

export function RecentContentList(props: RecentContentListProps) {
  const snips = useRecentContentSnips();
  const renderContentSnip = React.useCallback(
    (snip: ContentSnip, i: number, snips: ContentSnip[]) => {
      return <RecentContentListItem snip={snip} key={snip._id} />;
    },
    []
  );

  return (
    <VStack width={"100%"} align={"stretch"} spacing={4}>
      <HeadingTwo>Recent Updates</HeadingTwo>
      {snips.map(renderContentSnip)}
    </VStack>
  );
}

export default RecentContentList;
