import {
  highlightIcon,
  highlightRender,
} from "../components/PortableTextEditorComponents";

import * as Builder from "./builder";

export const pageSections = {
  name: "content",
  type: "array",
  title: "Page sections",
  of: [
    { type: "hero" },
    { type: "infoRows" },
    { type: "pageHeader" },
    { type: "grid" },
    { type: "twoColumn" },
    { type: "bigText" },
    { type: "uiComponentRef" },
    { type: "columns" },
  ],
};

export * from "./portableText";

export { Builder };
