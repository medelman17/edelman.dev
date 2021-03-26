import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { UiComponentRef } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import RenderUiComponent from "../PageUi/RenderUIComponent";

export interface UiComponentRefBlockProps extends PageSectionBlock {
  block: SanityKeyed<UiComponentRef>;
}

export function UiComponentRefBlock(props: UiComponentRefBlockProps) {
  return (
    <>
      <RenderUiComponent ui={props.block.name} />
    </>
  );
}

export default UiComponentRefBlock;
