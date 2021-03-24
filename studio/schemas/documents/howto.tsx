export const HowToStep = {
  name: "howtoStep",
  title: "How-To Step",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "howtoStepPortableText",
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
      name: "references",
      title: "References",
      type: "array",
      of: [{ type: "externalref" }],
    },
  ],
};

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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
  ],
};

export const Prerequisite = {
  name: "prerequisite",
  title: "Prerequisite",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText",
    },
    {
      name: "step",
      title: "Steps",
      type: "array",
      of: [{ type: "howtoStep" }],
    },
    {
      name: "resources",
      title: "Resources",
      type: "array",
      of: [{ type: "reference", to: { type: "resource" } }],
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [{ type: "externalref" }],
    },
  ],
};

// export const Tool = {
//   name: "tool",
//   title: "Tool",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//     },
//     {
//       name: "body",
//       title: "Body",
//       type: "bodyPortableText",
//     },
//     {
//       name: "resources",
//       title: "Resources",
//       type: "array",
//       of: [{ type: "reference", to: { type: "resource" } }],
//     },
//     {
//       name: "references",
//       title: "References",
//       type: "array",
//       of: [{ type: "externalref" }],
//     },
//   ],
// };

export const HowToPrerequisite = {
  name: "howtoprerequisite",
  title: "How-To Prerequisite",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Description",
    },
    {
      name: "resource",
      title: "Resource",
      type: "reference",
      to: { type: "resource" },
    },
  ],
};

export const HowToTool = {
  name: "howtotool",
  title: "How-To Tool",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Description",
    },
    {
      name: "resource",
      title: "Resource",
      type: "reference",
      to: { type: "resource" },
    },
  ],
};

export const Reference = {
  name: "externalref",
  title: "Reference",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Reference",
    },
    {
      name: "citation",
      type: "string",
      title: "Citation",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};

export const HowToReference = {
  name: "howtoref",
  title: "How-To Reference",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      type: "simplePortableText",
      title: "Reference",
    },
    {
      name: "citation",
      type: "string",
      title: "Citation",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
  ],
};

export default {
  name: "howto",
  title: "How-To",
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "prerequisites",
      title: "Prerequisites",
      type: "array",
      of: [{ type: "reference", to: { type: "prerequisite" } }],
    },
    // {
    //   name: "tools",
    //   title: "Tools",
    //   type: "array",
    //   of: [{ type: "reference", to: { type: "prerequisite" } }],
    // },
    {
      name: "body",
      title: "Body",
      type: "bodyPortableText",
    },

    {
      name: "steps",
      title: "Steps",
      type: "array",
      of: [{ type: "howtoStep" }],
    },
    {
      name: "references",
      title: "References",
      type: "array",
      of: [{ type: "externalref" }],
    },
    {
      name: "totalTime",
      title: "Total Time",
      type: "string",
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
      name: "excerpt",
      type: "simplePortableText",
      title: "Excerpt",
      description:
        "This ends up on summary pages, on Google, when people share your post in social media.",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      slug: "slug",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
