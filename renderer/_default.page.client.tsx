import React from "react";
import { hydrateRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { PageShell } from "./PageShell";
import type { PageContextClient } from "./types";

export { render };

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  const client = new QueryClient();
  hydrateRoot(
    document.getElementById("page-view")!,
    <PageShell pageContext={pageContext}>
      <QueryClientProvider client={client}>
        <Page {...pageProps} />
      </QueryClientProvider>
    </PageShell>
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
