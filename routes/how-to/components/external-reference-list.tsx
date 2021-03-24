import * as React from "react";
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
  List,
  ListItem,
  Tooltip,
  Link,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  BodyText,
  ContentTitle,
  HeadingOne,
  HeadingThree,
} from "../../../components/Text";
import { HowToMetadata } from "./how-to-page";
import { SimplePortableText } from "../../../lib/schema";

export interface ConformedExternalReference {
  id: string;
  title: string;
  externalLink: string;
  description: SimplePortableText;
}

export interface ExternalReferenceListProps {
  references: ConformedExternalReference[];
}

export interface ExternalReferenceListItemProps {
  reference: ConformedExternalReference;
}
export function ExternalReferenceListItem(
  props: ExternalReferenceListItemProps
) {
  return (
    <ListItem>
      <Flex>
        <Tooltip label={""}>
          <Link href={props.reference.externalLink} isExternal={true}>
            {props.reference.title} <ExternalLinkIcon mx="2px" />
          </Link>
        </Tooltip>
        <Box flex={1}></Box>
      </Flex>
    </ListItem>
  );
}

// @ts-ignore
const ExternalReferenceListItemBodyWithRef = React.forwardRef<
  unknown,
  ExternalReferenceListItemProps
>((props, ref) => {
  //@ts-ignore
  return <span ref={ref}>{props.reference.title}</span>;
});

export function ExternalReferenceList(props: ExternalReferenceListProps) {
  return (
    <Flex direction={"column"} as={"section"} id={"references"}>
      <HeadingOne>References</HeadingOne>
      <List>
        {props.references.map((r) => (
          <ExternalReferenceListItem reference={r} key={r.id} />
        ))}
      </List>
    </Flex>
  );
}
