import * as Primitives from "../primitives";

export default {
  name: "topic",
  type: "document",
  title: "Topic",
  fields: [
    {
      title: "Topic Name",
      name: "topicName",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "One-liner about the topic",
      name: "oneLiner",
      description: "In a short sentence, what does this topic involve?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Relative address in the site",
      description:
        "Please avoid special characters, spaces and uppercase letters.",
      type: "slug",
      options: {
        basePath: "edel.monster/topics",
        source: "topicName",
        maxLength: 96,
      },
    },
    Primitives.pageSections,
  ],
};
