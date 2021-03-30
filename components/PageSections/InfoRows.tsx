import * as React from "react";

import type { SanityKeyed } from "sanity-codegen";
import { InfoRows, TextWithIllustration } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import { Heading, VStack, Box } from "@chakra-ui/react";
import SimpleBlockContent from "../SimpleBlockContent";

export interface InfoRowsBlockProps extends PageSectionBlock {
  block: SanityKeyed<InfoRows>;
}

export function InfoRowsBlock(props: InfoRowsBlockProps) {
  const { block } = props;
  const { title, rows } = block;

  const renderRow = React.useCallback(
    (
      row: TextWithIllustration,
      index: number,
      rows: SanityKeyed<InfoRows>["rows"]
    ) => {
      return (
        <Box key={row.title}>
          <Heading>{row.title}</Heading>
          <SimpleBlockContent blocks={row.text} />
        </Box>
      );
    },
    []
  );
  return (
    <>
      <VStack align={"stretch"}>
        <Heading>{title}</Heading>
        {rows.map(renderRow)}
      </VStack>
    </>
  );
}

export default InfoRowsBlock;
