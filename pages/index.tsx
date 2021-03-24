import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import * as Sentry from "@sentry/react";
import Home from "../routes/main/components/home";
import { initAmplify } from "../lib/amplify";

initAmplify();

export const getStaticProps: GetStaticProps = async (context) => {
  const dataHookProps = await getDataHooksProps({
    context,
    dataHooks: Home.dataHooks,
  });
  return { props: dataHookProps };
};

export default Sentry.withProfiler(Home);
