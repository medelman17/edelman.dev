import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import TopicPage from "../../routes/topics/Page";
import sanity from "../../lib/sanity-client";

import { initAmplify } from "../../lib/amplify";

initAmplify();

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allCats = await sanity.getAll("category");
  return {
    paths:
      allCats.map((cat) => ({
        params: {
          slug: cat.slug.current,
        },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: TopicPage.dataHooks,
  });
  return { props: dataHooksProps, revalidate: 1 };
};

export default TopicPage;
