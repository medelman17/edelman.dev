import * as React from "react";
import {
  Flex,
  Heading,
  Box,
  Text,
  Badge,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { serializers } from "../routes/blog/serializers";
import dynamic from "next/dynamic";
import { BodyPortableText } from "../lib/schema";
const SimpleBlockContent = dynamic(() => import("./SimpleBlockContent"));

export function ContentBody(props: {
  body: BodyPortableText;
  serializers?: any;
}) {
  return (
    <Box>
      <SimpleBlockContent
        blocks={props.body}
        serializers={props.serializers ?? serializers}
      />
    </Box>
  );
}
