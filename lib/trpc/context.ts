import * as trpc from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { Data } from "types";
import data from "../../data/data.json";

async function createContext(opts: FetchCreateContextFnOptions) {
  return { ...opts, data: data as Data };
}

export { createContext };
export type TRPCContext = trpc.inferAsyncReturnType<typeof createContext>;
