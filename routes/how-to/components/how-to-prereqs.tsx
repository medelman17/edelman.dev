import { Prerequisite } from "../../../lib/schema";
import {
  Heading,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { serializers } from "../../blog/serializers";
import * as React from "react";
import dynamic from "next/dynamic";
import { HowToMetadata } from "./how-to-page";

import { HeadingTwo, HeadingThree, HeadingOne } from "../../../components/Text";
import { HeaderTreeItem } from "../../../components/TOC";

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

export interface HowToPrerequisiteProps {
  prerequisite: Prerequisite;
  heading: HeaderTreeItem;
}

export function HowToPrerequisite(props: HowToPrerequisiteProps) {
  const { prerequisite } = props;

  return (
    <ListItem as={"section"} id={props.heading.id}>
      <HeadingTwo>{prerequisite.title}</HeadingTwo>
      <SimpleBlockContent
        blocks={prerequisite.body}
        serializers={serializers}
      />
    </ListItem>
  );
}

export interface HowToPrerequisitesProps {
  prerequisites: Prerequisite[];
  metadata: HowToMetadata;
}

export function HowToPrerequisites(props: HowToPrerequisitesProps) {
  const { headings } = props.metadata;
  const [prereqHeaders] = headings.filter((t) => t.id === "prerequisites");
  return (
    <Flex direction={"column"} as={"section"} id={"prerequisites"}>
      <HeadingOne>Prerequisites</HeadingOne>

      <List py={3}>
        {props.prerequisites.map((prereq, i) => (
          <HowToPrerequisite
            prerequisite={prereq}
            key={prereq._id}
            heading={prereqHeaders.children[i]}
          />
        ))}
      </List>
    </Flex>
  );
}

// <Accordion allowMultiple allowToggle defaultIndex={0}>
//     {props.prerequisites.map((s) => (
//         <HowToPrerequisite key={s._id} prerequisite={s} />
//     ))}
// </Accordion>
