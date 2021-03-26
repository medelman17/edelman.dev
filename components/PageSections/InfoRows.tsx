import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { InfoRows } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface InfoRowsBlockProps extends PageSectionBlock {
  block: SanityKeyed<InfoRows>;
}

export function InfoRowsBlock(props: InfoRowsBlockProps) {
  return <></>;
}

export default InfoRowsBlock;
