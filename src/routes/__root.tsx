import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // title= M5D Shopee Secrets - Sua Nova Fonte de Renda Extra
      // name="description"
      { title: "M5D Shopee Secrets - Sua Nova Fonte de Renda Extra" },
      {
        name: "description",
        content:
          "Aprenda a construir uma nova fonte de renda de forma realista na Shopee usando estratégias validadas de IA e garimpo de produtos.",
      },
      { name: "author", content: "Gabriel Oliveira" },
      { property: "og:title", content: "M5D Shopee Secrets - Sua Nova Fonte de Renda Extra" },
      {
        property: "og:description",
        content:
          "Aprenda a construir uma nova fonte de renda de forma realista na Shopee usando estratégias validadas de IA e garimpo de produtos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "M5D Shopee Secrets - Sua Nova Fonte de Renda Extra" },
      {
        name: "twitter:description",
        content:
          "Aprenda a construir uma nova fonte de renda de forma realista na Shopee usando estratégias validadas de IA e garimpo de produtos.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6420702c-0258-4ebb-8b47-f1567cf34520/id-preview-fcd54c4f--983a78a9-8bef-4884-8a23-2cc0757ccbe8.lovable.app-1777785961858.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6420702c-0258-4ebb-8b47-f1567cf34520/id-preview-fcd54c4f--983a78a9-8bef-4884-8a23-2cc0757ccbe8.lovable.app-1777785961858.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
