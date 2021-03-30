import * as React from "react";
import { Wrap, Link, Badge, WrapItem } from "@chakra-ui/react";
import { default as NLink } from "next/link";
import { Resource } from "../lib/schema";

export interface ContentResourceListProps {
  resources: Array<Resource & { _type: "resource" }>;
}

export function ContentResourceList(props: ContentResourceListProps) {
  const cats = React.useMemo(() => {
    return props.resources.map((r) => {
      return (
        <WrapItem key={r._id}>
          <NLink href={`/resources/${r.slug.current}`} passHref={true}>
            <Link className={"p-category"}>
              <Badge>#{r.title}</Badge>
            </Link>
          </NLink>
        </WrapItem>
      );
    });
  }, [props.resources]);

  return <Wrap my={2}>{cats}</Wrap>;
}
