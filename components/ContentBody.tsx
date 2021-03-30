import * as React from "react";
import { Box } from "@chakra-ui/react";
import { serializers } from "../routes/blog/serializers";
import dynamic from "next/dynamic";
import { BodyPortableText } from "../lib/schema";
const SimpleBlockContent = dynamic(() => import("./SimpleBlockContent"));

export function ContentBody(props: {
  body: BodyPortableText;
  serializers?: any;
}): JSX.Element {
  return (
    <Box>
      <SimpleBlockContent
        blocks={props.body}
        serializers={props.serializers ?? serializers}
      />
    </Box>
  );
}

export default ContentBody;
