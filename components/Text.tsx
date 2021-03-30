import { Heading, Text, Box } from "@chakra-ui/react";
import * as React from "react";

export function BodyText(props) {
  return (
    <Text
      fontSize={["md", "lg"]}
      mb={[3, 3, 3]}
      lineHeight={["base", "base", "base"]}
      color={["gray.900"]}
      {...props}
    >
      {props.children}
    </Text>
  );
}

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
      {...props}
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
      {...props}
    >
      {props.children}
    </Heading>
  );
}

export function HeadingFour(props) {
  return (
    <Heading
      as={"h4"}
      size={"xl"}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      fontSize={["16px", "16px", "20px", "20px"]}
      {...props}
    >
      {props.children}
    </Heading>
  );
}

export function ContentTitle(props) {
  return (
    <Heading
      as={"h1"}
      size={"4xl"}
      fontSize={["36px", "36px", "60px", "60px"]}
      // mx={[0, 0, 0, "-1rem"]}
      mb={[4, 6, 8]}
      mt={[4, 2, 4]}
      color={["primary.700", "primary.700", "primary.700", "primary.700"]}
      letterSpacing={"-.1rem"}
      className={"p-name"}
    >
      {props.children}
    </Heading>
  );
}
