import * as Types from "../types";
import {
  BigText,
  Hero,
  InfoRows,
  PageHeader,
  SanityKeyed,
  UiComponentRef,
  Columns,
} from "../lib/schema";

export function isUiComponentRef(
  b: Types.PageSection
): b is SanityKeyed<UiComponentRef> {
  return (b as SanityKeyed<UiComponentRef>)._type === "uiComponentRef";
}

export function isHero(b: Types.PageSection): b is SanityKeyed<Hero> {
  return (b as SanityKeyed<Hero>)._type === "hero";
}

export function isInfoRows(b: Types.PageSection): b is SanityKeyed<InfoRows> {
  return (b as SanityKeyed<InfoRows>)._type === "infoRows";
}

export function isPageHeader(
  b: Types.PageSection
): b is SanityKeyed<PageHeader> {
  return (b as SanityKeyed<PageHeader>)._type === "pageHeader";
}

export function isBigText(b: Types.PageSection): b is SanityKeyed<BigText> {
  return (b as SanityKeyed<BigText>)._type === "bigText";
}

export function isColumns(b: Types.PageSection): b is SanityKeyed<Columns> {
  return (b as SanityKeyed<Columns>)._type === "columns";
}
