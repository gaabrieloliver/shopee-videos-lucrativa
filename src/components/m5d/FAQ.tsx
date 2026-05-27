import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Isso é só mais um cursinho com promessa milagrosa?",
    a: "Não. Não prometemos que você fará rios de dinheiro amanhã. Ensinamos a trabalhar de verdade, começar buscando metas diárias alcançáveis e escalar mês a mês. Se você quer dinheiro fácil sem esforço, não compre.",
  },
  {
    q: "Preciso investir em tráfego pago, packs de vídeos ou grupos de ofertas?",
    a: "Absolutamente não. O M5D é focado 100% no tráfego orgânico através da Shopee Vídeos. Você aprenderá a minerar, editar e postar seus próprios vídeos estratégicos. É perfeitamente possível chegar aos 5 dígitos mensais apenas com o orgânico, basta aplicar exatamente o que ensinamos dentro do M5D.",
  },
  {
    q: "E se eu comprar só para copiar as estratégias e pedir reembolso?",
    a: "Temos um filtro rigoroso. Muitos entram achando que 'já sabem de tudo', pedem o dinheiro de volta após 7 dias e perdem nosso maior ativo: a Comunidade M5D. Nós queremos apenas pessoas focadas e que valorizam o networking. Curiosos não são bem-vindos.",
  },
  {
    q: "O mercado da Shopee não está saturado?",
    a: "O algoritmo está em constante atualização. A cada dia que passa, fica mais difícil para quem tenta fazer de qualquer jeito. O nosso garimpo por métricas te coloca à frente de 90% dos afiliados que só postam contando com a sorte.",
  },
  {
    q: "Preciso de um computador?",
    a: "Não. Todo o processo de garimpo, uso da ferramenta gringa e edição pode ser feito 100% pelo celular.",
  },
  {
    q: "Tenho garantia?",
    a: "Sim. Você tem 7 dias. Assista às aulas e conheça o método. Se você aplicar e perceber que nossa comunidade não é para você, devolvemos 100% do seu investimento.",
  },
];

export function FAQ() {
  return (
    <section className="px-4 py-16 sm:py-20 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left Column: Title */}
          <div className="w-full lg:w-1/3 relative flex flex-col justify-center">
            <span className="relative text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block text-center lg:text-left">
              DÚVIDAS COMUNS
            </span>
            <h2 className="relative font-display text-4xl sm:text-6xl font-black uppercase text-white italic tracking-tighter leading-tight text-center lg:text-left">
              PERGUNTAS <br />
              <span className="text-red-500 text-5xl sm:text-7xl">FREQUENTES</span>
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-2/3 relative z-10">
            <Accordion type="single" collapsible className="w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {faqs.map((f, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    <AccordionItem
                      value={`item-${i}`}
                      className="border-b border-white/5 mb-2 px-4 rounded-2xl bg-zinc-900/20"
                    >
                      <AccordionTrigger className="py-6 text-left font-display text-lg sm:text-xl font-black uppercase tracking-tighter text-zinc-100 hover:no-underline hover:text-red-500 transition-colors">
                        <span className="flex items-center gap-3">
                          <span className="text-red-500 text-xs">/</span> {f.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-sm sm:text-base leading-relaxed text-zinc-400 font-medium">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </motion.div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
