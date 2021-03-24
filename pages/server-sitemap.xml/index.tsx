// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import sanity from "../../lib/sanity-client";

const url = (slug: string) => `https://edel.monster/${slug}`;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const posts = await sanity.getAll("post");
  const howtos = await sanity.getAll("howto");
  const routes = await sanity.getAll("route");
  const cats = await sanity.getAll("category");

  let fields = [
    {
      loc: "https://edel.monster", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];

  for (const post of posts) {
    fields.push({
      loc: url(`blog/${post.slug.current}`),
      lastmod: new Date(post._updatedAt).toISOString(),
    });
  }

  for (const howto of howtos) {
    fields.push({
      loc: url(`how-to/${howto.slug.current}`),
      lastmod: new Date(howto._updatedAt).toISOString(),
    });
  }

  for (const cat of cats) {
    fields.push({
      loc: url(`category/${cat.slug.current}`),
      lastmod: new Date(cat._updatedAt).toISOString(),
    });
  }

  for (const route of routes) {
    fields.push({
      loc: url(`${route.slug.current}`),
      lastmod: new Date(route._updatedAt).toISOString(),
    });
  }

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
