import { createDataHook } from "next-data-hooks";
import { Route, Post, Category } from "../lib/schema";
import sanity from "../lib/sanity-client";

export const useSiteSettings = createDataHook(
  "SiteSettings",
  async (context) => {
    return await sanity.get("site-config", "siteSettings");
  }
);

export const useGlobalNavigation = createDataHook(
  "GlobalNavigation",
  async (context) => {
    let results: Array<GlobalNavMenuItem> = [];
    const settings = await useSiteSettings.getData(context);
    for (const ref of settings.mainNavigation) {
      const result = await sanity.expand(ref);
      const page = await sanity.expand(result.page);
      results.push({ ...result, pageTitle: page.title, pageId: page._id });
    }

    return results;
  }
);

export const usePageData = createDataHook("PageData", async (context) => {
  let posts: ({ _type: "post" } & Post)[] = [];

  if (context.params.slug === "blog") {
    posts = await useBlogPosts.getData(context);
  }

  const [route] = await sanity.getAll(
    "route",
    `slug.current == "${context.params.slug}"`
  );
  const page = await sanity.expand(route.page);

  return { route, page, posts };
});

export const useBlogPosts = createDataHook("BlogPosts", async (context) => {
  return await sanity.getAll("post");
});

export const useBlogPost = createDataHook("BlogPost", async (context) => {
  const [post] = await sanity.getAll(
    "post",
    `slug.current == "${context.params.slug}"`
  );

  if (!post) {
    throw new Error("No post");
  }

  const author = await sanity.expand(post.author);

  let categories: Array<Category & { _type: "category" }> = [];

  for (const cat of post.categories) {
    const c = await sanity.expand(cat);
    categories.push(c);
  }

  return {
    post,
    author,
    categories,
  };
});

export type GlobalNavMenuItem = Route & {
  _type: "route";
  pageTitle: string;
  pageId: string;
};
