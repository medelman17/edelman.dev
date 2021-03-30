import * as React from "react";
import type { SanityKeyed } from "sanity-codegen";
import { PageHeader } from "../../lib/schema";
import { PageSectionBlock } from "./types";
import { Heading, VStack } from "@chakra-ui/react";
import SimpleBlockContent from "../SimpleBlockContent";

export interface PageHeaderProps extends PageSectionBlock {
  block: SanityKeyed<PageHeader>;
}

export function PageHeaderBlock(props: PageHeaderProps) {
  const { block } = props;
  const { illustration, title, subtitle } = block;
  const isIllustrationDisabled = illustration.disabled;

  return (
    <>
      <VStack align={"flex-start"}>
        <Heading>{title}</Heading>
        <SimpleBlockContent blocks={subtitle} />
      </VStack>
    </>
  );
}

export default PageHeaderBlock;
