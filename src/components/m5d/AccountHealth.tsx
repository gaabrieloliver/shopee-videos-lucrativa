import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, Zap } from "lucide-react";
import mockupIrrelevantes from "../../assets/mockups/mockupIrrelevantes.png";

export function AccountHealth() {
  return (
    <section className="px-4 py-8 sm:py-12 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side: User's Mockup Image (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-[65%] relative order-2 lg:order-1 justify-center items-center py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full z-10"
            >
              <img
                src={mockupIrrelevantes}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,0,0,0.15)]"
                alt="Blindagem contra Irrelevantes"
              />

              {/* Ambient Glow behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/10 blur-[100px] -z-10" />
            </motion.div>
          </div>

          {/* Text Side: The Strategy */}
          <div className="w-full lg:w-[35%] order-1 lg:order-2">
            <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              SEGURANÇA E SUPORTE
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white italic tracking-tighter leading-none mb-8">
              PARE DE SER <span className="text-red-500">BANIDO</span> E LEVAR PENALIDADES
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                Muitos afiliados estão perdendo contas valiosas por postarem vídeos que o algoritmo
                marca como "irrelevantes". No M5D, nós não apenas te ensinamos a vender, nós te
                entregamos a <strong className="text-white">estratégia de blindagem</strong>.
              </p>

              {/* Mobile Image Side (Visible only on mobile/tablet) */}
              <div className="lg:hidden w-full relative flex justify-center items-center py-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1.1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-full z-10"
                >
                  <img
                    src={mockupIrrelevantes}
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,0,0,0.15)]"
                    alt="Blindagem contra Irrelevantes"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/10 blur-[100px] -z-10" />
                </motion.div>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Proteção contra Irrelevantes",
                    desc: "Aprenda a técnica correta de edição que passa ilesa pelo filtro de spam da Shopee.",
                    color: "text-red-500",
                  },
                  {
                    icon: Zap,
                    title: "Suporte Anti-Ban",
                    desc: "Temos um canal direto para te ajudar a manter a saúde da sua conta sempre no topo.",
                    color: "text-red-500",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Recuperação de Pontos",
                    desc: "Sua conta já está com pontos? Te mostramos o caminho para limpar o histórico.",
                    color: "text-red-500",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 bg-zinc-900/40 border border-white/5 rounded-3xl group hover:border-red-500/20 hover:bg-red-500/5 transition-all"
                  >
                    <div
                      className={`p-3 rounded-2xl bg-zinc-950 border border-white/5 ${item.color}`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase italic tracking-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
