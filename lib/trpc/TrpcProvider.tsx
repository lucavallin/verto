"use client";

import { Server } from "@/lib/trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getFetch, httpBatchLink } from "@trpc/client";
import { useState } from "react";
import superjson from "superjson";

let url: string;

if (process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL) {
  // Branch deploy URL is available, use it
  url = `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}/api/trpc/`;
} else if (process.env.NEXT_PUBLIC_VERCEL_URL) {
  // Use the main deployment URL
  url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc/`;
} else {
  // Fallback to local development URL
  url = "http://localhost:3000/api/trpc/";
}

function TrpcProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 5000 } }
      })
  );

  const [trpcClient] = useState(() =>
    Server.createClient({
      links: [
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include"
            });
          }
        })
      ],
      transformer: superjson
    })
  );
  return (
    <Server.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Server.Provider>
  );
}

export { TrpcProvider };
