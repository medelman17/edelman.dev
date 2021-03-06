import * as React from "react";

import {
  Flex,
  Heading,
  Box,
  VStack,
  Avatar,
  useBreakpointValue,
  Icon,
  Link,
} from "@chakra-ui/react";
import { Divider, Text } from "@chakra-ui/react";
import { Author, Category, Post } from "../../../lib/schema";
import { imageBuilder } from "../../../components/Image";
import type { SanityImage } from "sanity-codegen";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { default as NLink } from "next/link";
import { SocialIcon } from "../../../components/Icons";

export interface BlogPostMetadataProps {
  author: Author & { _type: "author" };
  categories: Array<Category & { _type: "category" }>;
  post: Post & { _type: "post" };
}

export interface AvatarProps {
  image: SanityImage;
  name: string;
}

export function AuthorAvatar(props: AvatarProps) {
  const { image, name } = props;
  const variant = useBreakpointValue({ base: 96, sm: 96, md: 128, lg: 128 });
  const size = useBreakpointValue({ base: "lg", sm: "lg", md: "xl", lg: "xl" });

  const avatarUrl = React.useMemo(() => {
    return imageBuilder
      .image(image)
      .height(variant)
      .width(variant)
      .fit("clip")
      .auto("format")
      .url();
  }, [variant]);

  return (
    <Avatar
      name={name}
      src={avatarUrl}
      size={size}
      className={"u-photo"}
      alt={name}
    />
  );
}

export function BlogPostMetadata(props: BlogPostMetadataProps) {
  const publishedAt = new Date(props.post.publishedAt).toLocaleDateString();

  return (
    <VStack marginBottom={4} className={"p-author h-card"}>
      <Divider />
      <Flex width={"100%"} py={[1, 2]}>
        <Box marginRight={4} alignSelf={"center"}>
          <AuthorAvatar image={props.author.image} name={props.author.name} />
        </Box>

        <VStack flex={1} align="stretch" spacing={[0, 0, 0]}>
          <NLink href={"/about"} passHref={true}>
            <Link className={"p-name u-url"}>
              <Text fontSize={["lg", "lg"]} as={"b"} className={"u-name"}>
                {props.author.name}
              </Text>
            </Link>
          </NLink>

          <Text fontSize={["xs", "sm"]}>
            Published on{" "}
            <Text as={"b"} className={"dt-published"}>
              {publishedAt}
            </Text>
          </Text>
          <Flex>
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
              <SocialIcon
                icon={FaGithub}
                to={"https://github.com/medelman17"}
              />
              <SocialIcon
                icon={FaTwitter}
                to={"https://twitter.com/edelman215"}
              />
            </Flex>
            <Flex alignItems={"center"} marginLeft={3}>
              <Text fontSize={"sm"}></Text>
            </Flex>
          </Flex>
        </VStack>
        <Box></Box>
      </Flex>
      <Divider />
    </VStack>
  );
}

export default BlogPostMetadata;
