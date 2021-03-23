import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import Page from "../routes/main/components/page";
import sanity from "../lib/sanity-client";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allRoutes = await sanity.getAll("route");
  return {
    paths:
      allRoutes.map((route) => ({
        params: {
          slug: route.slug.current,
        },
      })) || [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHooksProps = await getDataHooksProps({
    context,
    dataHooks: Page.dataHooks,
  });
  return { props: dataHooksProps, revalidate: 1 };
};

export default Page;
