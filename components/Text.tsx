import { Heading, Text, Box } from "@chakra-ui/react";
import * as React from "react";

export function HeadingOne(props) {
  return (
    <Heading
      as={"h1"}
      size={"3xl"}
      fontSize={["30px", "30px", "36px", "36px"]}
      mb={[2, 3]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
    >
      {props.children}
    </Heading>
  );
}

export function HeadingTwo(props) {
  return (
    <Heading
      as={"h2"}
      size={"2xl"}
      mb={[2, 3]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      fontSize={["24px", "24px", "30px", "30px"]}
    >
      {props.children}
    </Heading>
  );
}

export function HeadingThree(props) {
  return (
    <Heading
      as={"h3"}
      size={"2xl"}
      mb={[2, 3]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      fontSize={["20px", "20px", "24px", "24px"]}
    >
      {props.children}
    </Heading>
  );
}
