import * as React from "react";
import { Layout } from "../../components/Layout";
import { useRouter } from "next/router";
import * as DataHooks from "../../hooks";
import { TopicPageSEO } from "../../components/SEO/TopicPageSEO";
import { MainContentContainer } from "../../components/Boxes";
import { RenderContentSections } from "../../components/PageSections/RenderContentSections";

export type ContentSections = ReturnType<
  typeof DataHooks.useTopicBySlug
>["content"];

function TopicPage() {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const data = DataHooks.useTopicBySlug();
  const settings = DataHooks.useSiteSettings();

  const content = React.useMemo(() => {
    let children: JSX.Element[] = [];

    // for (const child of data.content) {
    // }

    return children;
  }, [data.content]);

  return (
    <>
      <TopicPageSEO />
      <Layout>
        <MainContentContainer>
          <RenderContentSections sections={data.content} />
        </MainContentContainer>
      </Layout>
    </>
  );
}

TopicPage.dataHooks = [
  DataHooks.useResources,

  DataHooks.useTopicBySlug,
  DataHooks.useGlobalNavigation,
  DataHooks.useSiteSettings,
];

export default TopicPage;
