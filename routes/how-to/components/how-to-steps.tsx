import { HowtoStep } from "../../../lib/schema";
import { Divider, Flex, Heading, VStack, Box } from "@chakra-ui/react";
import { serializers } from "../../blog/serializers";
import * as React from "react";
import dynamic from "next/dynamic";
import { HeadingTwo, HeadingThree, HeadingOne } from "../../../components/Text";

const SimpleBlockContent = dynamic(
  () => import("../../../components/SimpleBlockContent")
);

export interface HowToStepProps {
  step: HowtoStep;
  index: number;
}

export function HowToStep(props: HowToStepProps) {
  const { step } = props;
  return (
    <Box>
      <HeadingTwo>
        Step {props.index}: {step.title}
      </HeadingTwo>
      <SimpleBlockContent blocks={step.body} serializers={serializers} />
    </Box>
  );
}

export interface HowToStepsProps {
  steps: HowtoStep[];
}

export function HowToSteps(props: HowToStepsProps) {
  return (
    <VStack w={"100%"} alignItems={"flex-start"}>
      <HeadingOne>Steps</HeadingOne>
      {/*<Divider />*/}
      {props.steps.map((s, i) => (
        <HowToStep key={s.title} step={s} index={i + 1} />
      ))}
    </VStack>
  );
}
