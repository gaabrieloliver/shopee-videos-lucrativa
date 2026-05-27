import { createFileRoute } from "@tanstack/react-router";
import { ShopeeQuizFunnel } from "@/components/m5d/ShopeeQuizFunnel";

const TITLE = "Shopee Vídeos Lucrativa · Renda Orgânica Automática";
const DESC =
  "Aprenda a faturar alto com comissões da Shopee Vídeos sem precisar aparecer e de forma 100% orgânica.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <ShopeeQuizFunnel />
    </main>
  );
}

