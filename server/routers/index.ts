import { Procedure, Router } from "@/lib/trpc";
import { mainRouter } from "./mainRouter";

const AppRouter = Router({
  health: Procedure.query(() => {
    return true;
  }),
  route: mainRouter
});

export type AppRouterDefinition = typeof AppRouter;
export default AppRouter;
