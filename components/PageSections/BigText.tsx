import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { BigText } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface BigTextBlockProps extends PageSectionBlock {
  block: SanityKeyed<BigText>;
}

export function BigTextBlock(props: BigTextBlockProps) {
  return <></>;
}

export default BigTextBlock;
