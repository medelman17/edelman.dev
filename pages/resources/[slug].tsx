import { GetStaticProps, GetStaticPaths } from "next";
import { getDataHooksProps } from "next-data-hooks";
import ResourcePage from "../../routes/resources/components/Resource";
import sanity from "../../lib/sanity-client";

export const getStaticPaths: GetStaticPaths = async (context) => {
  const allResources = await sanity.getAll("resource");
  return {
    paths:
      allResources.map((cat) => ({
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
    dataHooks: ResourcePage.dataHooks,
  });
  return { props: dataHooksProps, revalidate: 1 };
};

export default ResourcePage;
