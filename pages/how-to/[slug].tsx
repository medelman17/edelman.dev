import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import HowToPage from "../../routes/how-to/components/how-to-page";
import sanity from "../../lib/sanity-client";
import * as Sentry from "@sentry/react";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allHowTo = await sanity.getAll("howto");

  console.log("ALL HOWQ TO", allHowTo);
  return {
    paths:
      allHowTo.map((cat) => ({
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
    dataHooks: HowToPage.dataHooks,
  });
  return { props: dataHooksProps, revalidate: 1 };
};

export default Sentry.withProfiler(HowToPage);
