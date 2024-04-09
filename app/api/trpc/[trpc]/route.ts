import { createContext } from "@/lib/trpc/context";
import MainRouter from "@/server/routers";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (request: Request) => {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: MainRouter,
    createContext
  });
};

export { handler as GET, handler as POST };
