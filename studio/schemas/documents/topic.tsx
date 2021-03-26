import * as Primitives from "../primitives";

export default {
  name: "topic",
  type: "document",
  title: "Topic",
  fields: [
    {
      title: "Topic Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Parent Topic",
      name: "parent",
      type: "reference",
      to: { type: "topic" },
    },
    {
      title: "One-liner about the topic",
      name: "oneLiner",
      description: "In a short sentence, what does this topic involve?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    Primitives.Builder.slug({
      basePath: "edel.monster/topics",
      source: "name",
    }),

    {
      title: "👀 Hide this topic?",
      name: "hidden",
      type: "boolean",
      description:
        "Turn this on to stop this topic from being seen while you work on it.",
    },
    {
      title: "Short Description",
      description:
        "Brief introduction of topic. Keep it short, 3 lines maximum.",
      name: "shortDesc",
      type: "text",
      rows: 3,
    },
    Primitives.pageSections,
    {
      title: "Default Illustration",
      name: "illustration",
      type: "illustration",
      description:
        "Ideally this image has a transparent background for use over other images or on non-white backgrounds.",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "oneLiner",
      media: "illustration.image",
    },
  },
};
