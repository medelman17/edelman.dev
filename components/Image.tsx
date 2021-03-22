import * as React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "../lib/schema";

export const imageBuilder = imageUrlBuilder(sanity);

export interface SanityImageProps {
  image: SanityImage;
}

export function Image(props) {
  const imgProps = useNextSanityImage(sanity, props.image);

  return <Img {...imgProps} />;
}

export default Image;
