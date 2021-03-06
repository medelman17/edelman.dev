import * as React from "react";
import dynamic from "next/dynamic";

import {
  SanityKeyed,
  UiComponentRef,
  Hero,
  InfoRows,
  CtaColumns,
  CtaPlug,
} from "../../lib/schema";

const HeroBlock = dynamic(() => import("../../components/Hero"));
const InfoRowsBlock = dynamic(() => import("../../components/InfoRows"));

const UiComponentRefBlock = dynamic(
  () => import("../../components/UiComponentRef")
);

export function renderPageContent(block: PageContent) {
  if (isUiComponentRef(block)) {
    return <UiComponentRefBlock block={block} key={block._key} />;
  } else if (isHero(block)) {
    return <HeroBlock block={block} key={block._key} />;
  } else if (isInfoRows(block)) {
    return <InfoRowsBlock block={block} key={block._key} />;
  } else {
    throw new Error("Page content type not supported");
  }
}

export type PageBlock = UiComponentRef | Hero | InfoRows | CtaColumns | CtaPlug;

export type PageContent = SanityKeyed<PageBlock>;

function isUiComponentRef(b: PageContent): b is SanityKeyed<UiComponentRef> {
  return (b as SanityKeyed<UiComponentRef>)._type === "uiComponentRef";
}

function isHero(b: PageContent): b is SanityKeyed<Hero> {
  return (b as SanityKeyed<Hero>)._type === "hero";
}

function isInfoRows(b: PageContent): b is SanityKeyed<InfoRows> {
  return (b as SanityKeyed<InfoRows>)._type === "infoRows";
}
