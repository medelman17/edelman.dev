import * as queryStore from "@sanity/react-loader";

import { client } from "@/sanity/client";
import { token } from "@/sanity/token";

queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;
