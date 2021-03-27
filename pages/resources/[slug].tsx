import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import ResourcePage from "../../routes/resources/components/Resource";
import sanity from "../../lib/sanity-client";
import { initAmplify } from "../../lib/amplify";
import Amplify, { graphqlOperation, API } from "aws-amplify";
import * as queries from "../../src/graphql/queries";
import { WebMentionEventsBySlugQuery } from "../../src/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";

initAmplify();

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allResources = await sanity.getAll("resource");
  return {
    paths:
      allResources.map((cat) => ({
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
    dataHooks: ResourcePage.dataHooks,
  });

  // const webmentions = (await API.graphql(
  //   graphqlOperation(queries.webMentionEventsBySlug, {
  //     targetSlug: context.params.slug,
  //   })
  // )) as GraphQLResult<WebMentionEventsBySlugQuery>;

  return {
    props: {
      ...dataHooksProps,
    },
    revalidate: 1,
  };
};

export default ResourcePage;
