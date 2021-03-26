import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { Grid } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface GridBlockProps extends PageSectionBlock {
  block: SanityKeyed<Grid>;
}

export function GridBlock(props: GridBlockProps) {
  return <></>;
}

export default GridBlock;
