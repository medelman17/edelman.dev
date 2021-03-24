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
  withNumber?: boolean;
  titleSize?: string | string[];
  as?: "h2" | "h3" | "h4";
}

export function HowToStep(props: HowToStepProps) {
  const { step } = props;

  const titleText = React.useMemo(() => {
    if (props.withNumber) {
      return `Step ${props.index}: ${step.title}`;
    } else {
      return step.title;
    }
  }, [props.withNumber]);

  return (
    <Box as={"section"} id={props.heading.id}>
      <HeadingTwo fontSize={props.titleSize} as={props.as}>
        {titleText}
      </HeadingTwo>
      <SimpleBlockContent blocks={step.body} serializers={serializers} />
    </Box>
  );
}

HowToStep.defaultProps = {
  withNumber: true,
  titleSize: ["20px", "20px", "24px", "24px"],
};

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
