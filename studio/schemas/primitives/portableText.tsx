import {
  highlightIcon,
  highlightRender,
} from "../components/PortableTextEditorComponents";
import * as Primitives from "./index";

export const portableTextStyles = [
  { title: "Normal", value: "normal" },
  { title: "H1", value: "h1" },
  { title: "H2", value: "h2" },
  { title: "H3", value: "h3" },
  { title: "H4", value: "h4" },
  { title: "Quote", value: "blockquote" },
];

export const portableTextLists = [
  { title: "Bullet", value: "bullet" },
  { title: "Number", value: "number" },
];

export const portableTextDecorators = [
  { title: "Strong", value: "strong" },
  { title: "Emphasis", value: "em" },
  { title: "Code", value: "code" },
  {
    title: "Highlight",
    value: "highlight",
    blockEditor: {
      icon: highlightIcon,
      render: highlightRender,
    },
  },
];

export const portableTextAnnotations = [
  { type: "link" },
  { type: "internalLink" },
];

export const portableTextMarks = {
  decorators: portableTextDecorators,
  annotations: portableTextAnnotations,
};

export const portableTextBlock = {
  type: "block",
  title: "Block",
  // Styles set the various mark up that the user can use to format content blocks. These
  // correspond to HTML tags, but you can set a custom title and/or value
  // and decide how it will be formatted or displayed where your content is used.
  styles: Primitives.portableTextStyles,
  lists: Primitives.portableTextLists,
  // Marks let you mark up inline text in the block editor.
  marks: Primitives.portableTextMarks,
  // of: [{ type: "math", icon: mathInlineIcon, title: "Inline math" }],
};

export const portableTextFields = [
  portableTextBlock,
  { type: "mainImage", options: { hotspot: true } },
  { type: "videoEmbed" },
  { type: "embedHTML" },
  { type: "code" },
  { type: "callout" },
];
