import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Flex, Stack } from "@chakra-ui/react";
import * as DataHooks from "../../../hooks";
import { useRouter } from "next/router";
import { renderPageContent } from "../renderPageContent";

function Page() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { page } = DataHooks.usePageData();

  return (
    <Layout headerTitle={page.title}>
      <Flex direction={"column"} width={"100%"} m={"0 auto"}>
        <Stack spacing={8}>{page.content.map(renderPageContent)}</Stack>
      </Flex>
    </Layout>
  );
}

Page.dataHooks = [
  DataHooks.usePageData,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
];

export default Page;
