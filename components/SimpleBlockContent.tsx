import * as React from "react";
import sanity from "../lib/sanity";
import BlockContent, {
  BlockContentProps,
} from "@sanity/block-content-to-react";

const { projectId, dataset } = sanity.config();

export interface SimpleBlockContentProps {
  blocks: BlockContentProps["blocks"];
  serializers?: any;
}

export function SimpleBlockContent(props: SimpleBlockContentProps) {
  const { blocks, serializers } = props;

  if (!blocks) {
    return null;
  }

  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
    />
  );
}

export default SimpleBlockContent;
