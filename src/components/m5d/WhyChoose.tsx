import { Target, Wrench, Flame, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: 'Fim do "Achismo"',
    desc: "Aqui você não conta com a sorte. Aprende a usar métricas e dados para escolher o que postar.",
  },
  {
    icon: Wrench,
    title: "Ferramentas Exclusivas",
    desc: "Estratégias de busca em plataformas estrangeiras que os grandes players usam para dominar o mercado.",
  },
  {
    icon: Flame,
    title: "Foco em Resultado Real",
    desc: "Gabriel Oliveira vive disso e fatura +R$ 400/dia. Você aprende com quem está no campo de batalha.",
  },
  {
    icon: Rocket,
    title: "Do Zero à Escala",
    desc: "Não importa se você nunca vendeu. O método ensina a base e o próximo nível para faturar 10k.",
  },
];

export function WhyChoose() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            O diferencial
          </p>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">
            Por que o M5D não é <span className="text-primary">"mais um curso"</span> de renda
            extra?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/40 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-display text-lg font-bold uppercase leading-tight">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
