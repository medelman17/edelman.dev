import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
};

/**
 * Route
 *
 *
 */
export interface Route extends SanityDocument {
  _type: "route";

  /**
   * page — `reference`
   *
   * The page you want to appear at this path. Remember it needs to be published.
   */
  page?: SanityReference<Page>;

  /**
   * Path — `slug`
   *
   * This is the website path the page will accessible on
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Use site title? — `boolean`
   *
   * Use the site settings title as page title instead of the title on the referenced page
   */
  useSiteTitle?: boolean;

  /**
   * Open graph — `openGraph`
   *
   * These values populate meta tags
   */
  openGraph?: OpenGraph;

  /**
   * Include in sitemap — `boolean`
   *
   * For search engines. Will be generateed to /sitemap.xml
   */
  includeInSitemap?: boolean;

  /**
   * Disallow in robots.txt — `boolean`
   *
   * Hide this route for search engines like google
   */
  disallowRobots?: boolean;

  /**
   * Campaign — `string`
   *
   * UTM for campaings
   */
  campaign?: string;
}

/**
 * Site configuration
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "site-config";

  /**
   * Site title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url?: string;

  /**
   * Open graph — `openGraph`
   *
   * These will be the default meta tags on all pages that have not set their own
   */
  openGraph?: OpenGraph;

  /**
   * Primary brand color — `color`
   *
   * Used to generate the primary accent color for websites, press materials, etc
   */
  primaryColor?: Color;

  /**
   * Secondary brand color — `color`
   *
   * Used to generate the secondary accent color for websites, press materials, etc
   */
  secondaryColor?: Color;

  /**
   * Keywords — `array`
   *
   * Add keywords that describes your blog.
   */
  keywords?: Array<SanityKeyed<string>>;

  /**
   * Site language — `string`
   *
   * Should be a valid bcp47 language code like en, en-US, no or nb-NO
   */
  lang?: string;

  /**
   * Brand logo — `image`
   *
   * Best choice is to use an SVG where the color are set with currentColor
   */
  logo?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Main navigation — `array`
   *
   * Select pages for the top menu
   */
  mainNavigation?: Array<SanityKeyedReference<Route>>;

  /**
   * Footer navigation items — `array`
   *
   *
   */
  footerNavigation?: Array<SanityKeyedReference<Route>>;

  /**
   * footerText — `simplePortableText`
   *
   *
   */
  footerText?: SimplePortableText;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Excerpt — `simplePortableText`
   *
   * This ends up on summary pages, on Google, when people share your post in social media.
   */
  excerpt?: SimplePortableText;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;
}

/**
 * navigationMenu
 *
 *
 */
export interface NavigationMenu extends SanityDocument {
  _type: "navigationMenu";

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<Cta>>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Navigation menu — `reference`
   *
   * Which nav menu should be shown, if any
   */
  navMenu?: SanityReference<NavigationMenu>;

  /**
   * Page sections — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<InfoRows>
    | SanityKeyed<PageHeader>
    | SanityKeyed<BigText>
    | SanityKeyed<UiComponentRef>
    | SanityKeyed<Columns>
  >;

  /**
   * Description — `text`
   *
   * This description populates meta-tags on the webpage
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Icon Name — `string`
   *
   *
   */
  icon?: string;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Resource
 *
 *
 */
export interface Resource extends SanityDocument {
  _type: "resource";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * One-liner about the topic — `string`
   *
   * In a short sentence, what does this topic involve?
   */
  oneLiner?: string;

  /**
   * 👀 Hide this resource? — `boolean`
   *
   * Turn this on to stop this resource from being seen while you work on it.
   */
  hidden?: boolean;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Description — `simplePortableText`
   *
   *
   */
  description?: SimplePortableText;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;

  /**
   * References — `array`
   *
   *
   */
  references?: Array<SanityKeyed<Externalref>>;

  /**
   * Topics — `array`
   *
   *
   */
  topics?: Array<SanityKeyedReference<Topic>>;
}

/**
 * Prerequisite
 *
 *
 */
export interface Prerequisite extends SanityDocument {
  _type: "prerequisite";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;

  /**
   * Steps — `array`
   *
   *
   */
  steps?: Array<SanityKeyed<HowtoStep>>;

  /**
   * Resources — `array`
   *
   *
   */
  resources?: Array<SanityKeyedReference<Resource>>;

  /**
   * References — `array`
   *
   *
   */
  references?: Array<SanityKeyed<Externalref>>;
}

/**
 * How-To
 *
 *
 */
export interface Howto extends SanityDocument {
  _type: "howto";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Prerequisites — `array`
   *
   *
   */
  prerequisites?: Array<SanityKeyedReference<Prerequisite>>;

  /**
   * Body — `bodyPortableText`
   *
   *
   */
  body?: BodyPortableText;

  /**
   * Steps — `array`
   *
   *
   */
  steps?: Array<SanityKeyed<HowtoStep>>;

  /**
   * References — `array`
   *
   *
   */
  references?: Array<SanityKeyed<Externalref>>;

  /**
   * Total Time — `string`
   *
   *
   */
  totalTime?: string;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * Excerpt — `simplePortableText`
   *
   * This ends up on summary pages, on Google, when people share your post in social media.
   */
  excerpt?: SimplePortableText;
}

/**
 * Topic
 *
 *
 */
export interface Topic extends SanityDocument {
  _type: "topic";

  /**
   * Topic Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Parent Topic — `reference`
   *
   *
   */
  parent?: SanityReference<Topic>;

  /**
   * One-liner about the topic — `string`
   *
   * In a short sentence, what does this topic involve?
   */
  oneLiner?: string;

  /**
   * Relative address in the site — `slug`
   *
   * Please avoid special characters, spaces and uppercase letters.
   */
  slug?: { _type: "slug"; current: string };

  /**
   * 👀 Hide this topic? — `boolean`
   *
   * Turn this on to stop this topic from being seen while you work on it.
   */
  hidden?: boolean;

  /**
   * Short Description — `text`
   *
   * Brief introduction of topic. Keep it short, 3 lines maximum.
   */
  shortDesc?: string;

  /**
   * Page sections — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<InfoRows>
    | SanityKeyed<PageHeader>
    | SanityKeyed<BigText>
    | SanityKeyed<UiComponentRef>
    | SanityKeyed<Columns>
  >;

  /**
   * Default Illustration — `illustration`
   *
   * Ideally this image has a transparent background for use over other images or on non-white backgrounds.
   */
  illustration?: Illustration;
}

export type Hero = {
  _type: "hero";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * tagline — `simplePortableText`
   *
   *
   */
  tagline?: SimplePortableText;

  /**
   * illustration — `illustration`
   *
   *
   */
  illustration?: Illustration;

  /**
   * cta — `cta`
   *
   *
   */
  cta?: Cta;
};

export type InfoRows = {
  _type: "infoRows";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * rows — `array`
   *
   *
   */
  rows?: Array<SanityKeyed<TextWithIllustration>>;
};

export type TextWithIllustration = {
  _type: "textWithIllustration";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * text — `simplePortableText`
   *
   *
   */
  text?: SimplePortableText;

  /**
   * illustration — `illustration`
   *
   *
   */
  illustration?: Illustration;
};

export type Illustration = {
  _type: "illustration";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * Image — `mainImage`
   *
   *
   */
  image?: MainImage;
};

export type CtaColumns = {
  _type: "ctaColumns";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * columns — `array`
   *
   *
   */
  columns?: Array<SanityKeyed<CtaPlug>>;
};

export type CtaPlug = {
  _type: "ctaPlug";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * label — `string`
   *
   *
   */
  label?: string;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Body — `simplePortableText`
   *
   *
   */
  body?: SimplePortableText;

  /**
   * ctas — `array`
   *
   *
   */
  ctas?: Array<SanityKeyed<Cta>>;
};

export type UiComponentRef = {
  _type: "uiComponentRef";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * name — `string`
   *
   *
   */
  name?:
    | "RecentContent"
    | "RelatedContent"
    | "HowToList"
    | "WebMentionList"
    | "ResourceList"
    | "TopicList"
    | "Breadcrumbs"
    | "PostList"
    | "SearchComponent";
};

export type Pricing = {
  _type: "pricing";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * Enable gradient background — `boolean`
   *
   *
   */
  transparentCTAs?: boolean;
};

export type Grid = {
  _type: "grid";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * Title — `text`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `simpleBlockContent`
   *
   *
   */
  subtitle?: SimpleBlockContent;

  /**
   * Columns — `string`
   *
   *
   */
  columns?: "max1" | "max2" | "max3";

  /**
   * Items — `array`
   *
   *
   */
  items?: Array<
    SanityKeyed<{
      _type: "item";
      /**
       * title — `string`
       *
       *
       */
      title?: string;

      /**
       * content — `blockContent`
       *
       *
       */
      content?: BlockContent;
    }>
  >;

  /**
   * Anchor — `string`
   *
   *
   */
  anchor?: string;
};

export type PageHeader = {
  _type: "pageHeader";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `simpleBlockContent`
   *
   *
   */
  subtitle?: SimpleBlockContent;

  /**
   * Illustration — `illustration`
   *
   *
   */
  illustration?: Illustration;
};

export type TwoColumn = {
  _type: "twoColumn";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `simpleBlockContent`
   *
   *
   */
  subtitle?: SimpleBlockContent;

  /**
   * First column — `blockContent`
   *
   *
   */
  firstColumn?: BlockContent;

  /**
   * Second column — `blockContent`
   *
   *
   */
  secondColumn?: BlockContent;

  /**
   * Anchor — `string`
   *
   *
   */
  anchor?: string;
};

export type BigText = {
  _type: "bigText";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;
};

export type Quote = {
  _type: "quote";
  /**
   * disabled — `boolean`
   *
   *
   */
  disabled?: boolean;

  /**
   * content — `blockContent`
   *
   *
   */
  content?: BlockContent;
};

export type OpenGraph = {
  _type: "openGraph";
  /**
   * Title — `string`
   *
   * Heads up! This will override the page title.
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Image — `mainImage`
   *
   * Facebook recommends 1200x630 (will be auto resized)
   */
  image?: MainImage;
};

export type Link = {
  _type: "link";
  /**
   * URL — `url`
   *
   *
   */
  href?: string;
};

export type InternalLink = SanityReference<Page | Route>;

export type SimpleBlockContent = Array<SanityKeyed<SanityBlock>>;

export type Cta = {
  _type: "cta";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Landing page — `reference`
   *
   *
   */
  landingPageRoute?: SanityReference<Route>;

  /**
   * Path — `string`
   *
   * Example: /blog
   */
  route?: string;

  /**
   * External link — `string`
   *
   * Example: https://www.sanity.io
   */
  link?: string;

  /**
   * Kind — `string`
   *
   *
   */
  kind?: "button" | "link";
};

export type MainImage = {
  _type: "mainImage";
  asset: SanityAsset;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type VideoEmbed = {
  _type: "videoEmbed";
  /**
   * url — `url`
   *
   *
   */
  url?: string;
};

export type EmbedHTML = {
  _type: "embedHTML";
  /**
   * HTML — `text`
   *
   * You usually want to avoid storing freeform HTML, but for embed codes it can be useful.
   */
  html?: string;
};

export type BodyPortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<MainImage>
  | SanityKeyed<VideoEmbed>
  | SanityKeyed<EmbedHTML>
  | SanityKeyed<Code>
  | SanityKeyed<Callout>
>;

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityAsset;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type SimplePortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<EmbedHTML>
>;

export type TextSection = {
  _type: "textSection";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Text — `blockContent`
   *
   *
   */
  text?: BlockContent;
};

export type PortableText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<EmbedHTML>
>;

export type ExcerptPortableText = Array<SanityKeyed<SanityBlock>>;

export type HowtoStepPortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<MainImage>
  | SanityKeyed<VideoEmbed>
  | SanityKeyed<EmbedHTML>
  | SanityKeyed<Code>
>;

export type Externalref = {
  _type: "externalref";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Reference — `simplePortableText`
   *
   *
   */
  description?: SimplePortableText;

  /**
   * Citation — `string`
   *
   *
   */
  citation?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
};

export type Howtoref = {
  _type: "howtoref";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Reference — `simplePortableText`
   *
   *
   */
  description?: SimplePortableText;

  /**
   * Citation — `string`
   *
   *
   */
  citation?: string;

  /**
   * Link — `url`
   *
   *
   */
  link?: string;
};

export type Howtoprerequisite = {
  _type: "howtoprerequisite";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `simplePortableText`
   *
   *
   */
  description?: SimplePortableText;

  /**
   * Resource — `reference`
   *
   *
   */
  resource?: SanityReference<Resource>;
};

export type Howtotool = {
  _type: "howtotool";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `simplePortableText`
   *
   *
   */
  description?: SimplePortableText;

  /**
   * Resource — `reference`
   *
   *
   */
  resource?: SanityReference<Resource>;
};

export type HowtoStep = {
  _type: "howtoStep";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Body — `howtoStepPortableText`
   *
   *
   */
  body?: HowtoStepPortableText;

  /**
   * Main image — `mainImage`
   *
   *
   */
  mainImage?: MainImage;

  /**
   * References — `array`
   *
   *
   */
  references?: Array<SanityKeyed<Externalref>>;
};

export type Callout = {
  _type: "callout";
  /**
   * Callout type — `string`
   *
   * Defines the icon and color of the callout in the website. Defaults to "Protip"
   */
  calloutType?: "protip" | "gotcha" | "example";

  /**
   * Content/body of the callout — `array`
   *
   *
   */
  body?: Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<MainImage>
    | SanityKeyed<VideoEmbed>
    | SanityKeyed<EmbedHTML>
    | SanityKeyed<Code>
    | SanityKeyed<Callout>
    | SanityKeyed<{
        _type: "image";
        asset: SanityAsset;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
      }>
  >;
};

export type Col = {
  _type: "col";
  /**
   * 👀 Hide this column? — `boolean`
   *
   * Turn this on to stop this column from being seen while you work on it.
   */
  hidden?: boolean;

  /**
   * Flex — `number`
   *
   *
   */
  flex?: number;

  /**
   * Page sections — `array`
   *
   *
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<InfoRows>
    | SanityKeyed<PageHeader>
    | SanityKeyed<BigText>
    | SanityKeyed<UiComponentRef>
    | SanityKeyed<Columns>
  >;
};

export type Columns = {
  _type: "columns";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `simpleBlockContent`
   *
   *
   */
  subtitle?: SimpleBlockContent;

  /**
   * Columns — `array`
   *
   *
   */
  cols?: Array<SanityKeyed<Col>>;
};

export type Documents =
  | Route
  | SiteConfig
  | Post
  | NavigationMenu
  | Page
  | Category
  | Author
  | Resource
  | Prerequisite
  | Howto
  | Topic;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Color = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;
