import { initTRPC } from "@trpc/server";
import SuperJSON from "superjson";
import { TRPCContext } from "./context";

const trpc = initTRPC.context<TRPCContext>().create({ transformer: SuperJSON });

const Router = trpc.router;
const Procedure = trpc.procedure;

export * from "./context";
export { Procedure, Router };
