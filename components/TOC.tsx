import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
  Link as CLink,
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

export type HeaderTreeItem = {
  id: string;
  level: "one" | "two" | "three";
  link: string;
  text: string;
  children: HeaderTreeItem[];
};

export interface TableOfContentsProps {
  headings: HeaderTreeItem[];
}

export function TableOfContentsEntry(props: {
  entry: HeaderTreeItem;
  path: string;
}) {
  function getHeadingProps() {
    switch (props.entry.level) {
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
      <Link
        href={`${props.path}${props.entry.link}`}
        passHref={true}
        scroll={false}
        shallow={true}
      >
        <CLink>
          {/*//@ts-ignore*/}
          <Heading {...getHeadingProps()}>{props.entry.text}</Heading>
        </CLink>
      </Link>
      {props.entry.children.length > 0 ? (
        <List marginBottom={2}>
          {" "}
          {props.entry.children.map((c) => (
            <TableOfContentsEntry entry={c} key={c.id} path={props.path} />
          ))}
        </List>
      ) : null}
    </ListItem>
  );
}

export function TableOfContents(props: TableOfContentsProps) {
  const [path, setPath] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    setPath(router.asPath);
  }, []);

  return (
    <Box>
      <List>
        {props.headings.map((e) => (
          <TableOfContentsEntry entry={e} key={e.id} path={path} />
        ))}
      </List>
    </Box>
  );
}
