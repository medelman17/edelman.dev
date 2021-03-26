import * as Primitives from "../primitives";

export const column = {
  type: "object",
  name: "col",
  title: "Column",
  fields: [
    {
      title: "👀 Hide this column?",
      name: "hidden",
      type: "boolean",
      description:
        "Turn this on to stop this column from being seen while you work on it.",
    },
    Primitives.pageSections,
  ],
};

export default {
  type: "object",
  name: "columns",
  title: "Columns",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "simpleBlockContent",
    },
    { title: "Columns", name: "cols", type: "array", of: [{ type: "col" }] },
  ],
};
