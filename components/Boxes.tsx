import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
} from "@chakra-ui/react";

export interface MainContentContainerProps {
  children: React.ReactNode;
  as?: string;
}

export const MainContentContainer = (props) => {
  return (
    <Flex
      as={props.as ?? "main"}
      direction={"column"}
      width={"100%"}
      maxW={{ lg: "800px" }}
      m={" 0 auto"}
      className={"h-entry"}
    >
      {props.children}
    </Flex>
  );
};
