import * as React from "react";
import { Author, Post } from "../../../lib/schema";
import { Flex, Text, Wrap, Link, Badge } from "@chakra-ui/react";

export interface BlogPostAuthorProps {
  author: Author;
}

function BlogPostAuthor(props: BlogPostAuthorProps) {
  return (
    <Flex
      paddingY={[3, 3, 4, 5]}
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <Text>{props.author.name}</Text>
    </Flex>
  );
}

export default BlogPostAuthor;
