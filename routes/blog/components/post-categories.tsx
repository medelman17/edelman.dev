import * as React from "react";
import { Flex, Text, Wrap, Link, Badge, WrapItem } from "@chakra-ui/react";
import { default as NLink } from "next/link";
import type { SanityKeyed } from "sanity-codegen";
import { Category } from "../../../lib/schema";

export interface BlogPostCategoriesProps {
  categories: Array<Category & { _type: "category" }>;
}

export function BlogPostCategories(props: BlogPostCategoriesProps) {
  const cats = React.useMemo(() => {
    return props.categories.map((c) => {
      return (
        <WrapItem key={c._id}>
          <NLink href={`/category/${c.slug.current}`} passHref={true}>
            <Link className={"p-category"}>
              <Badge>#{c.title}</Badge>
            </Link>
          </NLink>
        </WrapItem>
      );
    });
  }, [props.categories]);

  return <Wrap>{cats}</Wrap>;
}
