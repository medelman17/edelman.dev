import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import CategoryPage from "../../routes/categories/components/Category";
import sanity from "../../lib/sanity-client";
import * as Sentry from "@sentry/react";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allCats = await sanity.getAll("category");
  return {
    paths:
      allCats.map((cat) => ({
        params: {
          slug: cat.slug.current,
        },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: CategoryPage.dataHooks,
  });
  return { props: dataHooksProps, revalidate: 1 };
};

export default CategoryPage;
