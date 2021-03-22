import * as React from "react";
import { Heading, Link, Flex, Stack, Box, Text } from "@chakra-ui/react";
import type { SanityKeyed } from "sanity-codegen";
import { InfoRows, TextWithIllustration } from "../lib/schema";
import { serializers } from "../routes/blog/serializers";
import dynamic from "next/dynamic";

const SimpleBlockContent = dynamic(() => import("./SimpleBlockContent"));

export interface InfoRowsBlockProps {
  block: SanityKeyed<InfoRows>;
}

export const InfoRowsBlock = (props: InfoRowsBlockProps) => {
  const { block } = props;
  const { rows, title, _key } = block;

  function renderRow(row: TextWithIllustration) {
    // console.log("row", row);
    const { title, text, illustration } = row;
    return (
      <Flex width={"100%"} direction={"column"} key={row.title}>
        <Heading as={"h3"} size={"md"} color={["primary.700"]}>
          {row.title}
        </Heading>
        <Box>
          <SimpleBlockContent blocks={text} serializers={serializers} />
        </Box>
      </Flex>
    );
  }

  return (
    <Flex
      key={props.block._key}
      wrap={"wrap"}
      flex={1}
      width={"100%"}
      direction={"column"}
    >
      <Heading
        as={"h2"}
        size={"lg"}
        pb={[2]}
        borderBottom={"1px solid"}
        mb={[4]}
        borderBottomColor={"gray.300"}
        color={["primary.700"]}
      >
        {title}
      </Heading>
      <Stack>{rows.map(renderRow)}</Stack>
    </Flex>
  );
};

export default InfoRowsBlock;
