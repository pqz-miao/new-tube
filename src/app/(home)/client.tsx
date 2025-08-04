"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

export const Client = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.hello.queryOptions({ text: "prefetch" }));

  return (
    <div>
        Client component says: {data.greeting}
    </div>
  );
};
