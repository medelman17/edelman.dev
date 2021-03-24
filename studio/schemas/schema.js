// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./documents/category";
import post from "./documents/post";
import author from "./documents/author";
import page from "./documents/page";
import site_settings from "./documents/site-settings";
import route from "./documents/route";
import internalLink from "./objects/internalLink";
import simplePortableText from "./objects/simplePortableText";
import link from "./objects/link";
import embedHTML from "./objects/embedHTML";
import textSection from "./objects/textSection";
import portableText from "./objects/portableText";
import mainImage from "./objects/mainImage";
import navMenu from "./documents/navMenu";
import cta from "./objects/cta";
import openGrpah from "./objects/openGrpah";
import { videoEmbed } from "./objects/embeds";
import * as plugs from "./plugs";
import plugDefaultFields from "./plugs/_plugDefaultFields";
import excerptPortableText from "./objects/excerptPortableText";
import bodyPortableText from "./objects/bodyPortableText";
import simpleBlockContent from "./objects/simpleBlockContent";
import howto, {
  HowToStep,
  HowToPrerequisite,
  HowToTool,
  HowToReference,
  Prerequisite,
  Reference,
} from "./documents/howto";
import { Resource } from "./documents/resource";
import howtoStepPortableText from "./objects/howtoStepPortableText";
const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      // The following are document types which will appear
      // in the studio.
      openGrpah,

      route,

      link,
      internalLink,
      simpleBlockContent,
      cta,
      site_settings,
      post,
      navMenu,
      page,
      category,
      author,
      mainImage,
      videoEmbed,
      embedHTML,
      bodyPortableText,
      blockContent,
      simplePortableText,
      textSection,
      portableText,
      excerptPortableText,
      howtoStepPortableText,
      Resource,
      Reference,
      Prerequisite,
      HowToReference,
      HowToPrerequisite,
      HowToTool,
      HowToStep,
      howto,
    ])
    .concat(allPlugs),
});
