import * as queryStore from "@sanity/react-loader";

import { client } from "@/lib/sanity/client";
import { token } from "@/lib/sanity/token";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
