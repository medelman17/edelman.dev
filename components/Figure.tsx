import * as React from "react";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import sanity from "../lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanity);

export const myCustomImageBuilder = (imageUrlBuilder, options) => {
  return imageUrlBuilder
    .width(
      options?.width !== null
        ? options.width
        : Math.min(options.originalImageDimensions.width, 800)
    )
    .fit("clip")
    .auto("format");
};

function urlFor(source) {
  const t = builder.image(source).auto("format").url();

  return builder.image(source);
}

const myLoader = (props) => {
  return `${props.src}&w=${props.width}`;
};

export function Figure(props) {
  const { loader, ...rest } = useNextSanityImage(sanity, props.node, {
    imageBuilder: myCustomImageBuilder,
  });

  return (
    <Img
      {...rest}
      loader={loader}
      sizes="(max-width: 800px) 100vw, 800px"
      alt={props.node.alt}
      priority={true}
    />
  );
}

export default Figure;
