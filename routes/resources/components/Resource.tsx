import * as React from "react";
import { Layout } from "../../../components/Layout";
import {
  Flex,
  Box,
  List,
  ListItem,
  Link as ChakraLink,
  Tooltip,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import * as DataHooks from "../../../hooks";
import { MainContentContainer } from "../../../components/Boxes";
import { ContentTitle, HeadingTwo } from "../../../components/Text";
import { ContentMainImage } from "../../../components/Image";
import { ContentBody } from "../../../components/ContentBody";
import { RelatedContentSnipList } from "../../../components/RelatedContentSnipList";
import { ExpandedResourceRelatedContent, RelatedContent } from "../../../hooks";
import { blockContentToPlainText } from "react-portable-text";

function isResourceRelatedContent(
  b: RelatedContent
): b is ExpandedResourceRelatedContent {
  return (b as ExpandedResourceRelatedContent)._type === "prerequisite";
}

function Resource() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const res = DataHooks.useResource();

  const relatedContent = React.useMemo(() => {
    let result: RelatedContent[] = [];

    function pickRelatedContent(content: RelatedContent) {
      if (isResourceRelatedContent(content)) {
        const { relatedContent } = content;
        result.push(content);
        relatedContent.forEach(pickRelatedContent);
      } else {
        result.push(content);
      }
    }

    res.relatedContent?.forEach(pickRelatedContent);

    return result;
  }, [res.relatedContent]);

  return (
    <>
      <Layout>
        <MainContentContainer>
          <ContentMainImage
            image={res.mainImage}
            withShadow={false}
            marginTop={4}
          />
          <ContentTitle>{res.title}</ContentTitle>
          <Box>
            <ContentBody body={res.description} />
          </Box>
          <Box my={[2, 3]}>
            <HeadingTwo mb={[4, 6, 8]} mt={[4, 2, 4]}>
              Related Content
            </HeadingTwo>
            <RelatedContentSnipList content={relatedContent} />
          </Box>
          <Box my={[2, 2]}>
            <HeadingTwo mb={[4, 6, 8]} mt={[4, 2, 4]}>
              Selected Resources
            </HeadingTwo>
            <List>
              {res.references?.map((r) => {
                //@ts-ignore
                const desc = blockContentToPlainText(r.description);
                return (
                  <ListItem key={r.link}>
                    <Flex>
                      <Tooltip
                        label={desc}
                        bg={"primary.100"}
                        hasArrow
                        placement={"auto"}
                        color={"gray.900"}
                      >
                        <ChakraLink
                          href={r.link}
                          isExternal={true}
                          color={"primary.500"}
                          fontWeight={"bold"}
                        >
                          {r.title}
                        </ChakraLink>
                      </Tooltip>
                    </Flex>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </MainContentContainer>
      </Layout>
    </>
  );
}

Resource.dataHooks = [
  DataHooks.useResource,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
];

export default Resource;
