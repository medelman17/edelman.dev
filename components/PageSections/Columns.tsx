import * as React from "react";
import type { SanityKeyed } from "sanity-codegen";
import { Col, Columns } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import { Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import SimpleBlockContent from "../SimpleBlockContent";
import RenderContentSections from "./RenderContentSections";
import { HeadingTwo } from "../Text";

export interface ColumnsBlockProps extends PageSectionBlock {
  block: SanityKeyed<Columns>;
}

export function ColumnBlock(props: { block: SanityKeyed<Col> }) {
  return (
    <WrapItem
      w={"100%"}
      minWidth={["300px", "300px", "0px", "0px"]}
      flex={props.block.flex}
      pr={[0, 0, 4]}
      paddingBottom={[4, 4, 0, 0]}
      sx={{ "&:last-child": { pr: 0 } }}
    >
      <VStack align={"stretch"} w={"100%"} spacing={8}>
        <RenderContentSections sections={props.block.content} />
      </VStack>
    </WrapItem>
  );
}

export function ColumnsBlock(props: ColumnsBlockProps) {
  const { block } = props;
  const { title, subtitle, cols } = block;
  return (
    <>
      <VStack align={"stretch"} flex={1}>
        <HeadingTwo>{title}</HeadingTwo>
        <SimpleBlockContent blocks={subtitle} />
        <Wrap w={"100%"}>
          {cols.map((col, i, cols) => (
            <ColumnBlock block={col} key={col._key} />
          ))}
        </Wrap>
      </VStack>
    </>
  );
}

export default ColumnsBlock;
