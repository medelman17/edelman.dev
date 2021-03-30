import * as React from "react";
import { Wrap, Link, Badge, WrapItem } from "@chakra-ui/react";
import { default as NLink } from "next/link";
import { Category } from "../lib/schema";

export interface ContentCategoriesListProps {
  categories: Array<Category & { _type: "category" }>;
}

export function ContentCategoriesList(props: ContentCategoriesListProps) {
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

  return <Wrap my={2}>{cats}</Wrap>;
}
