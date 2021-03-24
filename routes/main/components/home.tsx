import * as React from "react";
import { Layout } from "../../../components/Layout";
import { PageSEO } from "../../../components/SEO";
import { VStack } from "@chakra-ui/react";
import * as DataHooks from "../../../hooks";
import { MainContentContainer } from "../../../components/Boxes";
import { renderPageContent } from "../renderPageContent";

function Home() {
  const data = DataHooks.useHomePageData();
  const { settings, content } = data;

  return (
    <>
      <PageSEO
        title={"Home"}
        description={settings.openGraph.description}
        images={[data.openGraphImage]}
        settings={settings}
      />
      <Layout>
        <MainContentContainer>
          <VStack spacing={8}>{content.map(renderPageContent)}</VStack>
        </MainContentContainer>
      </Layout>
    </>
  );
}

Home.dataHooks = [
  DataHooks.useGlobalNavigation,
  DataHooks.useHomePageData,
  DataHooks.useSiteSettings,
  DataHooks.useRecentContentSnips,
];

export default Home;
