import * as React from "react";
import { Heading, Flex, Stack, Box, Button } from "@chakra-ui/react";
import type { SanityKeyed } from "sanity-codegen";
import { Hero, Cta } from "../lib/schema";
import { serializers } from "../routes/blog/serializers";
import dynamic from "next/dynamic";
import { Figure } from "./Figure";
import { useRouter } from "next/router";

const SimpleBlockContent = dynamic(() => import("./SimpleBlockContent"));

export interface HeroBlockProps {
  block: SanityKeyed<Hero>;
}

export interface HeroCtaProps {
  cta: Cta;
}

const HeroCta = (props: HeroCtaProps) => {
  const router = useRouter();

  function handleCtaClick(e: React.SyntheticEvent) {
    e.preventDefault();
    router.push(props.cta.route);
  }

  return (
    <Button onClick={handleCtaClick} mt={[2, 2, 4]}>
      {props.cta.title}
    </Button>
  );
};

export const HeroBlock = (props: HeroBlockProps) => {
  const { block } = props;
  const { heading, tagline, illustration, cta } = block;

  return (
    <Flex key={props.block._key} wrap={"wrap"} flex={1} width={"100%"}>
      <Stack w={"100%"} flex={1} minWidth={"300px"}>
        <Box
          boxShadow={
            "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
          }
        >
          <Figure node={illustration.image} />
        </Box>
      </Stack>
      <Box
        w={"100%"}
        flex={1}
        minWidth={["300px", "450px"]}
        marginTop={[4, 4, 0, 0]}
        marginLeft={[0, 0, 6, 6]}
      >
        <Heading
          as={"h1"}
          fontSize={["36px", "36px", "60px", "60px"]}
          // mb={[0, 2, 4]}
          color={["primary.700"]}
          letterSpacing={"-.05rem"}
        >
          {heading}
        </Heading>
        <SimpleBlockContent blocks={tagline} serializers={serializers} />
        <HeroCta cta={cta} />
      </Box>
    </Flex>
  );
};

export default HeroBlock;
