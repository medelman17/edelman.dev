import * as React from "react";
import { Layout } from "../../../components/Layout";
import { Flex, Stack } from "@chakra-ui/react";
import * as DataHooks from "../../../hooks";
import { useRouter } from "next/router";
import { renderPageContent } from "../renderPageContent";
import { SEO } from "../../../components/SEO";
import { useSiteSettings } from "../../../hooks";
import { MainContentContainer } from "../../../components/Boxes";
import { RenderContentSections } from "../../../components/PageSections";

function Page() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const data = DataHooks.usePageData();
  const { page } = data;
  const settings = useSiteSettings();

  return (
    <>
      <SEO
        title={page.title}
        description={settings.openGraph.description}
        tags={[]}
        pageAuthor={["Michael Edelman"]}
        twitter={{
          site: "Michael Edelman",
          handle: "@edelman215",
          cardType: "summary",
        }}
        datePublished={settings._createdAt}
        images={[settings.openGraph.image]}
        og={{ description: settings.openGraph.description, type: "website" }}
      />
      <Layout headerTitle={page.title}>
        <MainContentContainer>
          <RenderContentSections sections={data.page.content} />
        </MainContentContainer>
      </Layout>
    </>
  );
}

Page.dataHooks = [
  DataHooks.usePageData,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
  DataHooks.useRecentContentSnips,
];

export default Page;
