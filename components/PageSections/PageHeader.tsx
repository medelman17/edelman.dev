import * as React from "react";
import type { SanityKeyed } from "sanity-codegen";
import { PageHeader } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import { Heading, VStack, Text } from "@chakra-ui/react";
import SimpleBlockContent from "../SimpleBlockContent";
import { HeadingOne, ContentTitle } from "../Text";
import { BigTextBlockRenderer } from "./BigText";

export const PageHeaderBlockRenderer = (props) => {
  switch (props.node.style) {
    case "normal":
      return (
        <Text
          // size={["lg", "lg", "lg", "lg"]}
          fontSize={["lg", "lg", "xl", "xl"]}
          // color={["primary.700", "primary.700", "primary.700", "primary.700"]}
          // my={[6, 6, 8, 16]}
          marginBottom={[4]}
          lineHeight={["base", "base", "base"]}
          color={["gray.900"]}
        >
          {props.children}
        </Text>
      );

    default:
      console.log("not supportd", props.node);
      return null;
  }
};

export const PageHeaderBlockSerializers = {
  types: { block: PageHeaderBlockRenderer },
};

export interface PageHeaderProps extends PageSectionBlock {
  block: SanityKeyed<PageHeader>;
}

export function PageHeaderBlock(props: PageHeaderProps) {
  const { block } = props;
  const { illustration, title, subtitle } = block;
  const isIllustrationDisabled = illustration.disabled;

  return (
    <>
      <VStack align={"flex-start"} my={[1, 6, 8, 16]}>
        <ContentTitle mb={[4, 6, 16]}>{title}</ContentTitle>
        <SimpleBlockContent
          blocks={subtitle}
          serializers={PageHeaderBlockSerializers}
        />
      </VStack>
    </>
  );
}

export default PageHeaderBlock;
