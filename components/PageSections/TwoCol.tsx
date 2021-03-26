import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { TwoColumn } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface TwoColBlockProps extends PageSectionBlock {
  block: SanityKeyed<TwoColumn>;
}

export function TwoColBlock(props: TwoColBlockProps) {
  return <></>;
}

export default TwoColBlock;
