import type { AppRouterDefinition } from "@/server/routers";
import { createTRPCReact } from "@trpc/react-query";

const Server = createTRPCReact<AppRouterDefinition>();

export { Server };
