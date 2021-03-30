import * as React from "react";
import { Flex } from "@chakra-ui/react";
import { SiteConfig } from "../lib/schema";
import { SocialIcon } from "./Icons";
import { FaGithub, FaTwitter } from "react-icons/fa";

export interface FooterProps {
  navItems: SiteConfig["footerNavigation"];
  text: SiteConfig["footerText"];
}

export function Footer(props: FooterProps) {
  return (
    <FooterContainer>
      {" "}
      <Flex
        py={[1, 3]}
        sx={{
          a: {
            marginRight: 2,
          },
          "a:last-child": {
            marginRight: 0,
          },
        }}
      >
        <SocialIcon icon={FaGithub} to={"https://github.com/medelman17"} />
        <SocialIcon icon={FaTwitter} to={"https://twitter.com/edelman215"} />
      </Flex>
    </FooterContainer>
  );
}

function FooterContainer(props) {
  return (
    <Flex
      as={"footer"}
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={3}
      bg={["gray.500", "gray.500", "gray.500", "gray.500"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {props.children}
    </Flex>
  );
}
