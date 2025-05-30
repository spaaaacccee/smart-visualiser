import { createTRPCClient, createWSClient, wsLink } from "@trpc/client";
import type { AppRouter } from "smart-service";

const wsClient = createWSClient({ url: `ws://128.2.112.9:8194` });
// const wsClient = createWSClient({ url: `ws://${location.hostname}:8194` });

export const client = createTRPCClient<AppRouter>({
  links: [
    wsLink({
      client: wsClient,
    }),
  ],
});
