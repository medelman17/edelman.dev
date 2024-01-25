import { createClient } from "@sanity/client/stega";

import { apiVersion, dataset, projectId, useCdn } from "@/sanity/env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/blog/studio",
  },
});
