import { HowtoStep } from "../../../lib/schema";
import { Divider, Flex, Heading, VStack, Box } from "@chakra-ui/react";
import { serializers } from "../../blog/serializers";
import * as React from "react";
import dynamic from "next/dynamic";
import { HeadingTwo, HeadingThree, HeadingOne } from "../../../components/Text";
import { HowToMetadata } from "./how-to-page";
import { HeaderTreeItem } from "../../../components/TOC";

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

export interface HowToStepProps {
  step: HowtoStep;
  index: number;
  heading: HeaderTreeItem;
}

export function HowToStep(props: HowToStepProps) {
  const { step } = props;

  return (
    <Box as={"section"} id={props.heading.id}>
      <HeadingTwo>
        Step {props.index}: {step.title}
      </HeadingTwo>
      <SimpleBlockContent blocks={step.body} serializers={serializers} />
    </Box>
  );
}

export interface HowToStepsProps {
  steps: HowtoStep[];
  metadata: HowToMetadata;
}

export function HowToSteps(props: HowToStepsProps) {
  const { headings } = props.metadata;
  const [stepHeaders] = headings.filter((t) => t.id === "steps");
  return (
    <VStack w={"100%"} alignItems={"flex-start"} as={"section"} id={"steps"}>
      <HeadingOne>Steps</HeadingOne>
      {props.steps.map((s, i) => (
        <HowToStep
          key={s.title}
          step={s}
          index={i + 1}
          heading={stepHeaders.children[i]}
        />
      ))}
    </VStack>
  );
}
