import * as React from "react";
import type { SanityKeyed } from "sanity-codegen";
import { BigText } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import { Heading, Center } from "@chakra-ui/react";
import SimpleBlockContent from "../SimpleBlockContent";

export const BigTextBlockRenderer = (props) => {
  switch (props.node.style) {
    case "normal":
      return (
        <Heading
          as={"h1"}
          size={"4xl"}
          fontSize={["30px", "38px", "75px", "92px"]}
          color={["primary.700", "primary.700", "primary.700", "primary.700"]}
          my={[6, 6, 8, 16]}
        >
          {props.children}
        </Heading>
      );

    default:
      console.log("not supportd", props.node);
      return null;
  }
};

export const BigTextBlockSerializers = {
  types: { block: BigTextBlockRenderer },
};

export interface BigTextBlockProps extends PageSectionBlock {
  block: SanityKeyed<BigText>;
}

export function BigTextBlock(props: BigTextBlockProps) {
  return (
    <Center p={4}>
      <SimpleBlockContent
        blocks={props.block.text}
        serializers={BigTextBlockSerializers}
      />
    </Center>
  );
}

export default BigTextBlock;
