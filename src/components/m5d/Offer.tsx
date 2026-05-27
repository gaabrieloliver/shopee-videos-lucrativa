import { Check, ShieldCheck, Clock, Zap, Lock, CreditCard } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { motion } from "framer-motion";

export function Offer() {
  const items = [
    { name: "Método M5D Completo", value: "R$ 497,00" },
    { name: "Suporte Direto com Mentores", value: "R$ 297,00" },
    {
      name: "Acesso à Comunidade de Alunos",
      value: "R$ 197,00",
      subtext: "Acesso liberado após 7 dias de garantia",
    },
    { name: "Bônus: Ferramentas de Garimpo e IA", value: "R$ 147,00" },
  ];

  return (
    <section id="oferta" className="w-full bg-background py-10 sm:py-16 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 relative z-10 staggered-reveal">
        <div className="text-center mb-12">
          <h2 className="staggered-item font-display text-3xl sm:text-5xl font-extrabold uppercase mb-4 leading-tight text-white tracking-tighter">
            SUA <span className="text-red-500 italic">OPORTUNIDADE</span> TERMINA AQUI
          </h2>
          <p className="staggered-item text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            O M5D está recebendo novos módulos com estratégias agressivas de escala. Garanta o valor
            promocional antes que o sistema atualize o preço.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="staggered-item relative max-w-2xl mx-auto">
          {/* Subtle glow behind card */}
          <div className="absolute -inset-0.5 bg-red-600/20 rounded-3xl blur-xl" />

          <div className="relative bg-zinc-950 border border-red-900/40 rounded-3xl overflow-hidden shadow-2xl scanline hud-accent">
            {/* Value Stack Header */}
            <div className="p-6 sm:p-10 border-b border-white/5 relative">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6 uppercase flex items-center gap-2 italic">
                <Zap className="w-6 h-6 text-red-500 fill-red-500/20" />
                CONTEÚDO DESBLOQUEADO:
              </h3>

              <ul className="space-y-4">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-red-500" strokeWidth={3} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-zinc-300 text-sm sm:text-base font-medium">
                          {item.name}
                        </span>
                        {item.subtext && (
                          <span className="text-zinc-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider mt-1 italic">
                            {item.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-zinc-600 text-xs font-mono line-through decoration-red-500/30 whitespace-nowrap">
                      {item.value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Price Section */}
            <div className="p-8 sm:p-12 bg-gradient-to-b from-transparent to-red-950/10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 text-red-500 text-[10px] font-black uppercase tracking-widest mb-8">
                <Clock className="w-4 h-4" />
                ÚLTIMAS VAGAS NO LOTE ATUAL
              </div>

              <p className="text-zinc-400 text-xs sm:text-base mb-4 uppercase font-mono tracking-[0.2em]">
                INVESTIMENTO TOTAL:
              </p>

              <div className="flex flex-col items-center mb-10">
                <div className="flex items-baseline gap-2">
                  <span className="text-zinc-500 text-2xl sm:text-3xl font-black italic">12x</span>
                  <motion.span
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="font-display text-7xl sm:text-9xl font-black text-white tracking-tighter drop-shadow-[0_0_30px_rgba(255,0,0,0.4)] italic leading-none"
                  >
                    R$9,74
                  </motion.span>
                </div>
                <p className="text-zinc-500 text-sm sm:text-lg mt-6 font-mono font-bold">
                  ou <span className="text-white">R$ 97,00</span> à vista no PIX
                </p>
              </div>

              <div className="space-y-6">
                <CTAButton
                  href="https://pay.kiwify.com.br/o9rWn8L"
                  size="xl"
                  pulse
                  className="w-full py-10 text-2xl sm:text-3xl font-black italic tracking-tighter uppercase min-h-[80px]"
                >
                  ATIVAR ACESSO IMEDIATO
                </CTAButton>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-6 border-t border-white/5">
                  <span className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-red-500" /> AMBIENTE SEGURO
                  </span>
                  <span className="hidden sm:block text-zinc-800">|</span>
                  <span className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-red-500" /> LIBERAÇÃO INSTANTÂNEA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post-Offer Trust Indicators */}
        <div className="staggered-item mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/20 border border-white/5 rounded-3xl">
            <ShieldCheck className="w-10 h-10 text-red-500" />
            <div className="text-center">
              <span className="block text-sm text-white uppercase font-black tracking-widest">
                Garantia de 7 Dias
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/20 border border-white/5 rounded-3xl">
            <CreditCard className="w-10 h-10 text-red-500" />
            <div className="text-center">
              <span className="block text-sm text-white uppercase font-black tracking-widest">
                Acesso Imediato
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 bg-zinc-900/20 border border-white/5 rounded-3xl">
            <Zap className="w-10 h-10 text-red-500" />
            <div className="text-center">
              <span className="block text-sm text-white uppercase font-black tracking-widest">
                Metodologia 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
