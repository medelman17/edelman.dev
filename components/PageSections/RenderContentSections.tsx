import * as React from "react";
import dynamic from "next/dynamic";
import * as Guards from "../../guards";
import * as Types from "../../types";

const HeroBlock = dynamic(() => import("./Hero"));
const InfoRowsBlock = dynamic(() => import("./InfoRows"));
const UiComponentRefBlock = dynamic(() => import("./UIComponent"));
const PageHeaderBlock = dynamic(() => import("./PageHeader"));

const BigTextBlock = dynamic(() => import("./BigText"));
const ColumnsBlock = dynamic(() => import("./Columns"));

export interface RenderContentSectionsProps {
  sections: Types.PageSections;
}

function getBlockProps<T extends Types.PageSection>(
  block: T,
  index: number,
  sections: Types.PageSections
) {
  return { block: block, position: index, key: block._key };
}

function renderPageSection(
  block: Types.PageSection,
  index: number,
  sections: Types.PageSections
) {
  console.log("block", block);
  if (Guards.PageSection.isUiComponentRef(block)) {
    return <UiComponentRefBlock {...getBlockProps(block, index, sections)} />;
  } else if (Guards.PageSection.isPageHeader(block)) {
    return <PageHeaderBlock {...getBlockProps(block, index, sections)} />;
  } else if (Guards.PageSection.isHero(block)) {
    return <HeroBlock {...getBlockProps(block, index, sections)} />;
  } else if (Guards.PageSection.isInfoRows(block)) {
    return <InfoRowsBlock {...getBlockProps(block, index, sections)} />;
  } else if (Guards.PageSection.isBigText(block)) {
    return <BigTextBlock {...getBlockProps(block, index, sections)} />;
  } else if (Guards.PageSection.isColumns(block)) {
    return <ColumnsBlock {...getBlockProps(block, index, sections)} />;
  } else {
    console.error(
      `Component for page section for type not implemented; returning null`
    );
    console.log("unsupported block props", block);
    return null;
  }
}

export function RenderContentSections(props: RenderContentSectionsProps) {
  const content = React.useMemo(() => {
    return props.sections.map(renderPageSection);
  }, [props.sections]);

  return <>{content}</>;
}

export default RenderContentSections;
