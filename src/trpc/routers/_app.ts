import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../init";
export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(async(opts) => {
      return {
        greeting: `haha ${opts.input.text}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
