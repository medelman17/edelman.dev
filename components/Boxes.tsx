import * as React from "react";
import { VStack } from "@chakra-ui/react";

export interface MainContentContainerProps {
  children: React.ReactNode;
  as?: string;
}

export const MainContentContainer = (props: {
  children: React.ReactNode;
  as?: React.ElementType;
  [index: string]: any;
}): JSX.Element => {
  return (
    <VStack
      align={"stretch"}
      as={props.as}
      className={"h-entry"}
      m={" 0 auto"}
      w={"100%"}
      maxW={{ lg: "800px" }}
      {...props}
    >
      {props.children}
    </VStack>
  );
};

MainContentContainer.defaultProps = {
  as: "main",
};

export interface PageSectionContainerProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

export const PageSectionContainer = (
  props: PageSectionContainerProps
): JSX.Element => {
  return (
    <VStack align={"stretch"} as={props.as}>
      {props.children}
    </VStack>
  );
};
