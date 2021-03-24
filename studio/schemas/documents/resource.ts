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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
};
