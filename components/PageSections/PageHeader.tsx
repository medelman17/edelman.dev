import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { PageHeader } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface PageHeaderProps extends PageSectionBlock {
  block: SanityKeyed<PageHeader>;
}

export function PageHeaderBlock(props: PageHeaderProps) {
  return <></>;
}

export default PageHeaderBlock;
