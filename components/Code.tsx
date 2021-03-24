import * as React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { Box, Heading } from "@chakra-ui/react";
import {
  dark,
  vscDarkPlus,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export function Code({ node }) {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;

  // console.log("lang code", language, code);

  function conformLanguage(lang: string) {
    switch (lang) {
      case "sh":
        return "bash";
      default:
        return lang;
    }
  }

  return (
    <Box mb={[2, 3]}>
      <SyntaxHighlighter
        language={conformLanguage(language) || "text"}
        style={vscDarkPlus}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}

export default Code;
