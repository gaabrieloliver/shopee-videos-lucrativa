import { X } from "lucide-react";
import { motion } from "framer-motion";

export function PainPoints() {
  const painPoints = [
    "Quer começar do zero (ou escalar seus ganhos), mas tem pouco tempo livre no dia?",
    "Tem vergonha de gravar vídeos e não tem dinheiro para investir em estoque?",
    "Sente que está ficando para trás porque as melhores ferramentas de I.A. cobram caro e em dólar?",
  ];

  return (
    <section className="px-4 py-10 sm:py-16 relative z-10 bg-zinc-950/30">
      <div className="mx-auto max-w-4xl staggered-reveal">
        <div className="text-center mb-12">
          <h2 className="staggered-item font-display text-3xl sm:text-5xl font-black uppercase leading-tight tracking-tighter text-white mb-6 italic">
            SEU SALÁRIO <span className="text-red-500">NÃO FECHA A CONTA</span>{" "}
            <br className="hidden sm:block" /> OU SUAS VENDAS ESTÃO ESTAGNADAS?
          </h2>

          <div className="staggered-item p-6 sm:p-10 bg-zinc-900/30 border border-red-900/10 rounded-[2rem] hud-accent scanline relative overflow-hidden group">
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed font-medium">
              Eu sei como é: ou você trabalha o mês todo e não sobra nada no final, ou você até já
              faz umas "vendinhas pingadas" na internet, mas passa horas no celular, o dinheiro não
              escala e o trabalho braçal te esgota.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 mb-12">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-5 bg-zinc-900/20 border border-white/5 rounded-2xl group hover:border-red-500/20 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center">
                <X className="h-6 w-6 text-red-500" strokeWidth={3} />
              </div>
              <p className="text-base sm:text-lg text-zinc-300 font-bold tracking-tight">{point}</p>
            </motion.div>
          ))}
        </div>

        <div className="staggered-item text-center">
          <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto italic">
            Foi exatamente para resolver isso que o ecossistema M5D nasceu. Ele é o{" "}
            <strong className="text-white font-black uppercase tracking-tighter italic">
              treinamento definitivo
            </strong>{" "}
            que entrega a estrutura exata para escalar até os 5 dígitos mensais usando I.A. para
            fazer o trabalho pesado.
          </p>
        </div>
      </div>
    </section>
  );
}
