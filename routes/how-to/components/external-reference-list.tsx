import * as React from "react";
import {
  Flex,
  Box,
  List,
  ListItem,
  Tooltip,
  Link,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HeadingOne } from "../../../components/Text";
import { SimplePortableText } from "../../../lib/schema";
import { blockContentToPlainText } from "react-portable-text";

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
  const desc = React.useMemo(() => {
    return (
      <Box>
        <Text color={"gray.900"}>
          {
            //@ts-ignore
            blockContentToPlainText(props.reference.description)
          }
        </Text>
      </Box>
    );
  }, []);

  return (
    <ListItem>
      <Flex>
        <Tooltip label={desc} bg={"primary.100"} hasArrow placement={"auto"}>
          <Link
            href={props.reference.externalLink}
            isExternal={true}
            color={"primary.500"}
          >
            {props.reference.title} <ExternalLinkIcon mx="2px" />
          </Link>
        </Tooltip>
        <Box flex={1}></Box>
      </Flex>
    </ListItem>
  );
}

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
