/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import {codeInput} from '@sanity/code-input'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/lib/sanity/env";
import { schema } from "./lib/sanity/schema";

import { presentationTool } from "sanity/presentation";

import { locate } from "@/lib/sanity/presentation/locate";

export default defineConfig({
  basePath: "/blog/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    codeInput(),
    unsplashImageAsset(),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
});
