import * as React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { MainImage, SanityImage } from "../lib/schema";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Figure } from "./Figure";

export const imageBuilder = imageUrlBuilder(sanity);

export interface SanityImageProps {
  image: SanityImage;
}

export function Image(props) {
  const imgProps = useNextSanityImage(sanity, props.image);

  return <Img {...imgProps} />;
}

export function ContentMainImage(props: { image: MainImage }) {
  return (
    <Box
      mb={8}
      mx={[0, 0, "-1rem"]}
      boxShadow={
        "rgb(0 0 0 / 20%) 0px 1px 5px 0px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 3px 1px -2px"
      }
    >
      <Figure node={props.image} />
    </Box>
  );
}

export default Image;
