import * as React from "react";
import { Flex } from "@chakra-ui/react";
import type { SanityKeyed } from "sanity-codegen";
import { CtaColumns } from "../lib/schema";

export interface CtaColumnsBlockProps {
  block: SanityKeyed<CtaColumns>;
}

export const CtaColumnsBlock = (props: CtaColumnsBlockProps) => {
  // console.log("CtaColumnsBlock", props);
  return <Flex key={props.block._key}>CtaColumns</Flex>;
};

export default CtaColumnsBlock;
