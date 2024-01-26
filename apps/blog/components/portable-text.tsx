import { getImageDimensions } from "@sanity/asset-utils";
import { PortableTextComponents } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";

// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock() {}

export const portable_text: PortableTextComponents = {
  listItem: {},
  list: {},
  block: {},
  types: {
    code: ({ value }) => {
      return (
        <SyntaxHighlighter language={value.language}>
          {value.code}
        </SyntaxHighlighter>
      );
    },
  },
  marks: {},
};

//
