import * as Types from "../types";
import {
  BigText,
  Grid,
  Hero,
  InfoRows,
  PageHeader,
  SanityKeyed,
  TwoColumn,
  UiComponentRef,
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

export function isGrid(b: Types.PageSection): b is SanityKeyed<Grid> {
  return (b as SanityKeyed<Grid>)._type === "grid";
}

export function isBigText(b: Types.PageSection): b is SanityKeyed<BigText> {
  return (b as SanityKeyed<BigText>)._type === "bigText";
}

export function isTwoColumn(b: Types.PageSection): b is SanityKeyed<TwoColumn> {
  return (b as SanityKeyed<TwoColumn>)._type === "twoColumn";
}

// export function isBigText(b: Types.PageSection): b is SanityKeyed<BigText> {
//   return (b as SanityKeyed<BigText>)._type === "bigText";
// }
