import { BarChart3, Globe2, Search, Wand2, Layers } from "lucide-react";

const items = [
  {
    icon: BarChart3,
    title: "Mineração por Métricas",
    desc: "Aprenda a ler os números da Shopee e escolher produtos com alta conversão e baixa concorrência.",
  },
  {
    icon: Globe2,
    title: "Acesso à Ferramenta Gringa",
    desc: "O segredo para caçar produtos e tendências fora do Brasil antes que todos comecem a postar aqui.",
  },
  {
    icon: Search,
    title: "Garimpo de Vídeos Virais",
    desc: "Como encontrar os melhores vídeos dos produtos minerados sem precisar gravar nada.",
  },
  {
    icon: Wand2,
    title: "Edição Magnética",
    desc: "O jeito certo de editar para o algoritmo do Shopee Vídeos entregar para milhares de pessoas.",
  },
  {
    icon: Layers,
    title: "Escala de Comissões",
    desc: "Estratégia para gerenciar múltiplas contas e multiplicar seu faturamento diário.",
  },
];

export function Ecosystem() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Por dentro do ecossistema
          </p>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">
            O passo a passo técnico que separa amadores dos{" "}
            <span className="text-primary">profissionais</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/60 hover:shadow-[var(--shadow-ruby)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-ruby)] text-primary-foreground shadow-[var(--shadow-ruby)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-xl font-bold uppercase">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
