import { createDataHook } from "next-data-hooks";
import sanity from "../../../lib/sanity-client";
import { Topic } from "../../../lib/schema";

export const useTopicList = createDataHook("TopicList", async (context) => {
  return await sanity.getAll("topic");
});

export type UseTopicBySlugResult = Topic & { _type: "topic" };

export const useTopicBySlug = createDataHook("TopicBySlug", async (context) => {
  const { params } = context;
  const [res] = await sanity.query<UseTopicBySlugResult>(
    `*[_type == "topic" && slug.current == "${params.slug}"]`
  );

  return res;
});
