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

import { HeadingTwo, HeadingThree, HeadingOne } from "../../../components/Text";

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

export interface HowToPrerequisiteProps {
  prerequisite: Prerequisite;
}

export function HowToPrerequisite(props: HowToPrerequisiteProps) {
  const { prerequisite } = props;

  return (
    <ListItem>
      <HeadingTwo>{prerequisite.title}</HeadingTwo>
      <SimpleBlockContent
        blocks={prerequisite.body}
        serializers={serializers}
      />
    </ListItem>
  );

  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          <HeadingTwo>{prerequisite.title}</HeadingTwo>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel></AccordionPanel>
    </AccordionItem>
  );

  return <VStack w={"100%"} alignItems={"flex-start"}></VStack>;
}

export interface HowToPrerequisitesProps {
  prerequisites: Prerequisite[];
}

export function HowToPrerequisites(props: HowToPrerequisitesProps) {
  return (
    <Flex direction={"column"}>
      <HeadingOne>Prerequisites</HeadingOne>
      {/*<Divider />*/}
      <List py={3}>
        {props.prerequisites.map((prereq) => (
          <HowToPrerequisite prerequisite={prereq} key={prereq._id} />
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
