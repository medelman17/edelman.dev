import * as React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { capitalize } from "../../utils";
import { PageSectionContainer } from "../Boxes";
import { BreadcrumbJsonLd } from "next-seo";

export interface BreadcrumbListItemProps {
  title: string;
  href: string;
  isCurrentPage: boolean;
}

export function BreadcrumbListItem(props: BreadcrumbListItemProps) {
  return (
    <BreadcrumbItem separator={props.isCurrentPage ? "" : <ChevronRightIcon />}>
      <BreadcrumbLink
        href={props.href}
        as={Link}
        isCurrentPage={props.isCurrentPage}
      >
        {props.title}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

function conformBreadcrumbTitle(title: string) {
  if (title === "") {
    return "Home";
  }

  return title.split("-").map(capitalize).join(" ");
}

export interface BreadcrumbListProps {
  isDisabled?: boolean;
}

export interface JSONLDBreadcrumbListItem {
  name: string;
  item: string;
  position: number;
}

function useBreadcrumbs(): [JSX.Element[], JSONLDBreadcrumbListItem[]] {
  const router = useRouter();

  const result = React.useMemo((): [
    JSX.Element[],
    JSONLDBreadcrumbListItem[]
  ] => {
    const crumbs = router.asPath.split("/");
    const items = crumbs.map(getBreadcrumbComponent);
    const jsonld = crumbs.map(getBreadcrumbJSONLD);

    // crumbs.forEach((c, i, cs) => {
    //   const isCurrentPage = i + 1 === cs.length;
    //   const title = conformBreadcrumbTitle(c);
    //   const href = cs.slice(0, i + 1).join("/");
    //   items.push(
    //     <BreadcrumbListItem
    //       key={title}
    //       title={title}
    //       href={href === "" ? "/" : href}
    //       isCurrentPage={isCurrentPage}
    //     />
    //   );
    //   jsonldItems.push({
    //     name: title,
    //     item: "" ? "/" : href,
    //     position: i + 1,
    //   });
    // });

    return [items, jsonld];
  }, [router.asPath]);

  return result;
}

function getBreadcrumbComponent(
  crumb: string,
  index: number,
  crumbs: string[]
): JSX.Element {
  const isCurrentPage = index + 1 === crumbs.length;
  const title = conformBreadcrumbTitle(crumb);
  const href = crumbs.slice(0, index + 1).join("/");

  return (
    <BreadcrumbListItem
      key={title}
      title={title}
      href={href === "" ? "/" : href}
      isCurrentPage={isCurrentPage}
    />
  );
}

function getBreadcrumbJSONLD(
  crumb: string,
  index: number,
  crumbs: string[]
): JSONLDBreadcrumbListItem {
  const isCurrentPage = index + 1 === crumbs.length;
  const title = conformBreadcrumbTitle(crumb);
  const href = crumbs.slice(0, index + 1).join("/");

  return {
    position: index + 1,
    name: title === "" ? "Home" : title,
    item: `https://edel.monster${href}`,
  };
}

export function BreadcrumbList(props: BreadcrumbListProps) {
  const [crumbs, json] = useBreadcrumbs();

  return (
    <>
      <BreadcrumbJsonLd itemListElements={json} />
      <PageSectionContainer>
        <Breadcrumb>{crumbs}</Breadcrumb>
      </PageSectionContainer>
    </>
  );
}

export default BreadcrumbList;
