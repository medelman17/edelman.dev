export const Resource = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "One-liner about the topic",
      name: "oneLiner",
      description: "In a short sentence, what does this topic involve?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "👀 Hide this resource?",
      name: "hidden",
      type: "boolean",
      description:
        "Turn this on to stop this resource from being seen while you work on it.",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "mainImage",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Description",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [{ type: "externalref" }],
    },
    {
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "reference", to: { type: "topic" } }],
    },
  ],
};
