import * as React from "react";

import {
  SanityKeyed,
  UiComponentRef,
  Hero,
  InfoRows,
  CtaColumns,
  CtaPlug,
} from "../../lib/schema";

import { HeroBlock } from "../../components/Hero";
import { UiComponentRefBlock } from "../../components/UiComponentRef";
import { InfoRowsBlock } from "../../components/InfoRows";
import { CtaColumnsBlock } from "../../components/CtaColumns";
import { CtaPlugBlock } from "../../components/CtaPlug";

export function renderPageContent(block: PageContent) {
  if (isUiComponentRef(block)) {
    return <UiComponentRefBlock block={block} />;
  } else if (isCtaColumns(block)) {
    return <CtaColumnsBlock block={block} />;
  } else if (isCtaPlug(block)) {
    return <CtaPlugBlock block={block} />;
  } else if (isHero(block)) {
    return <HeroBlock block={block} />;
  } else if (isInfoRows(block)) {
    return <InfoRowsBlock block={block} />;
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

function isCtaPlug(b: PageContent): b is SanityKeyed<CtaPlug> {
  return (b as SanityKeyed<CtaPlug>)._type === "ctaPlug";
}

function isCtaColumns(b: PageContent): b is SanityKeyed<CtaColumns> {
  return (b as SanityKeyed<CtaColumns>)._type === "ctaColumns";
}
