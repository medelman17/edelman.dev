import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { HeadingOne, HeadingThree } from "./Text";

export interface TableOfContentsProps {
  headings: HeaderTreeItem[];
}

export type HeaderTreeItem = {
  id: string;
  level: "one" | "two" | "three";
  link: string;
  text: string;
  children: HeaderTreeItem[];
};

export function TableOfContentsEntry(props: {
  node: HeaderTreeItem;
  path: string;
}) {
  function getHeadingProps() {
    switch (props.node.level) {
      case "one":
        return { as: "h1", size: "md", fontSize: ["18px"], marginBottom: 2 };
      case "two":
        return {
          as: "h2",
          size: "sm",
          paddingLeft: 4,
          fontSize: ["16px"],
          marginBottom: 1,
        };
      case "three":
        return { as: "h3", size: "xs", paddingLeft: 8, fontSize: ["14px"] };
      default:
        throw new Error("No known level");
    }
  }
  return (
    <ListItem color={["primary.500"]}>
      <Link href={`${props.path}${props.node.link}`} passHref={true}>
        <ChakraLink>
          {/*//@ts-ignore*/}
          <Heading {...getHeadingProps()}>{props.node.text}</Heading>
        </ChakraLink>
      </Link>
      {props.node.children.length > 0 ? (
        <List marginBottom={2}>
          {props.node.children.map((node) => (
            <TableOfContentsEntry node={node} key={node.id} path={props.path} />
          ))}
        </List>
      ) : null}
    </ListItem>
  );
}

export function TableOfContents(props: TableOfContentsProps) {
  const router = useRouter();
  return (
    <Box>
      <List>
        {props.headings.map((node) => (
          <TableOfContentsEntry
            node={node}
            key={node.id}
            path={router.asPath}
          />
        ))}
      </List>
    </Box>
  );
}
