import * as React from "react";
import { Heading, Link, Flex, Stack, Box } from "@chakra-ui/react";
import type { SanityKeyed } from "sanity-codegen";
import { Howto, UiComponentRef } from "../lib/schema";
import { usePageData } from "../hooks";
import { HowToCard } from "../routes/how-to/components/how-to-card";
import { RecentContentList } from "../routes/main/components/recent-content-list";

export interface UiComponentRefBlockProps {
  block: SanityKeyed<UiComponentRef>;
}

export const HowToList = () => {
  const { howtos } = usePageData();

  return (
    <Stack space={[4]}>
      <Heading
        as={"h2"}
        size={"xl"}
        pb={2}
        mb={[4, 4, 6]}
        borderBottom={"1px solid black"}
        borderBottomColor={"gray.300"}
        letterSpacing={"-.05rem"}
        color={["primary.700"]}
        fontSize={["24px", "24px", "30px", "30px"]}
      >
        Recent HowTos
      </Heading>
      <Flex
        justifyContent={"space-between"}
        wrap={"wrap"}
        flex={1}
        width={"100%"}
      >
        {howtos.map((ht) => (
          <HowToCard howto={ht} key={ht._id} />
        ))}
      </Flex>
    </Stack>
  );
};

export const UiComponentRefBlock = (props: UiComponentRefBlockProps) => {
  switch (props.block.name) {
    case "RecentContent":
      return <RecentContentList />;
    case "HowToList":
      return <HowToList />;
    default:
      return <Flex key={props.block._key}>UiComponentRef</Flex>;
  }
};

export default UiComponentRefBlock;
