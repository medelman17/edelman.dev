export default {
  type: "object",
  name: "uiComponentRef",
  title: "UI component reference",

  fields: [
    {
      type: "string",
      name: "name",

      options: {
        list: [
          { title: "Recent Content", value: "RecentContent" },
          { title: "Related Content", value: "RelatedContent" },
          { title: "How-To List", value: "HowToList" },
          { title: "Web Mention List", value: "WebMentionList" },
          { title: "Resource List", value: "ResourceList" },
          { title: "Topic List", value: "TopicList" },
          { title: "Breadcrumbs", value: "Breadcrumbs" },
          { title: "Post List", value: "PostList" },
          { title: "Search", value: "SearchComponent" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "name",
    },
    prepare({ title }) {
      return {
        title: `UI reference: ${title}`,
      };
    },
  },
};
