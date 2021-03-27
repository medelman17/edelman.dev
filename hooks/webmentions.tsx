import { graphqlOperation, API } from "aws-amplify";
import * as queries from "../src/graphql/queries";
import { WebMentionEventsBySlugQuery } from "../src/API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { createDataHook } from "next-data-hooks";

export const useWebmentionsBySlug = createDataHook(
  "WebmentionsBySlug",
  async (context) => {
    const result = (await API.graphql(
      graphqlOperation(queries.webMentionEventsBySlug, {
        targetSlug: context.params.slug,
      })
    )) as GraphQLResult<WebMentionEventsBySlugQuery>;

    return result?.data?.webMentionEventsBySlug
      ? result.data.webMentionEventsBySlug
      : { items: [], _typename: "ModelWebMentionEventConnection" };
  }
);
