import * as Primitives from "../primitives";

export default {
  name: "page",
  type: "document",
  title: "Page",
  fieldsets: [
    {
      title: "SEO & metadata",
      name: "metadata",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "navMenu",
      type: "reference",
      title: "Navigation menu",
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: "navigationMenu" }],
      description: "Which nav menu should be shown, if any",
    },
    Primitives.pageSections,

    {
      name: "description",
      type: "text",
      title: "Description",
      description: "This description populates meta-tags on the webpage",
      fieldset: "metadata",
    },
    {
      name: "openGraphImage",
      type: "image",
      title: "Open Graph Image",
      description: "Image for sharing previews on Facebook, Twitter etc.",
      fieldset: "metadata",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
