import { motion } from "framer-motion";
import { CTAButton } from "./CTAButton";
import { CheckCircle2 } from "lucide-react";
import emptyWallet from "../../assets/m5d/empty-wallet.png";

export function NewReality() {
  const points = [
    {
      title: "A feira do mês sem sufoco",
      desc: "Vá ao mercado ou saia com a família sem o peso na consciência de cada centavo gasto. Construa a tranquilidade financeira que você merece.",
    },
    {
      title: "Conta blindada contra o 'Flop'",
      desc: "Pare de seguir dicas de gurus que estragam seu engajamento. Aprenda a ler dados reais para postar o produto certo, do jeito certo.",
    },
    {
      title: "O fim da corrida dos ratos",
      desc: "Construa uma fonte de renda previsível para deixar de depender exclusivamente de um salário que acaba antes do mês terminar.",
    },
    {
      title: "Comunidade de Elite",
      desc: "Você não estará sozinho. O acesso ao M5D te coloca dentro de um ecossistema ativo de alunos que lucram todos os dias.",
    },
  ];

  return (
    <section className="px-4 py-10 sm:py-16 relative z-10 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="staggered-item font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white italic tracking-tighter leading-none">
            RELAXA! VOCÊ NÃO PRECISA{" "}
            <span className="text-red-500 underline underline-offset-8 decoration-red-500/30">
              INVESTIR RIOS DE DINHEIRO
            </span>{" "}
            PARA TER RESULTADOS.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Column: Image/Visual (Second on Mobile, Left on Desktop) */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-red-600/5 blur-[120px] rounded-full" />
              <div className="relative w-full h-full p-8">
                <div className="absolute inset-0 border border-red-500/10 rounded-full animate-pulse" />
                <div
                  className="absolute inset-4 border border-red-500/5 rounded-full animate-reverse-spin"
                  style={{ animationDuration: "20s" }}
                />
                <img
                  src={emptyWallet}
                  alt="Nova Realidade"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,0,0,0.2)] scale-[2]"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text Content (Third on Mobile, Right on Desktop) */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="grid gap-8 mb-12">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-tighter text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed font-medium">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="staggered-item">
              <CTAButton
                href="#oferta"
                className="w-full sm:w-auto px-12 py-6 text-2xl sm:text-3xl"
              >
                QUERO ESSA NOVA REALIDADE
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
