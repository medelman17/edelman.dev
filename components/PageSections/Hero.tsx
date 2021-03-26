import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { Hero } from "../../lib/schema";
import { PageSectionBlock } from "./types";

export interface HeroBlockProps extends PageSectionBlock {
  block: SanityKeyed<Hero>;
}

export function HeroBlock(props: HeroBlockProps) {
  return <></>;
}

export default HeroBlock;
