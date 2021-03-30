import * as React from "react";
import { Flex } from "@chakra-ui/react";

export interface ContentProps {
  children: React.ReactNode;
}

export function Content(props: ContentProps): JSX.Element {
  return <ContentContainer>{props.children}</ContentContainer>;
}

function ContentContainer(props) {
  return (
    <Flex
      as={"main"}
      align="flex-start"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={3}
      flexGrow={2}
    >
      {props.children}
    </Flex>
  );
}
