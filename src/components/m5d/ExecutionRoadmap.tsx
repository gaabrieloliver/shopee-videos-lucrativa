import { motion } from "framer-motion";
import { Settings, Zap, TrendingUp, ChevronRight } from "lucide-react";

export function ExecutionRoadmap() {
  const phases = [
    {
      number: "01",
      title: "Setup & Lapidação",
      time: "Dias 1 a 7",
      desc: "Onde você prepara o terreno. Escolha do nicho lucrativo, configuração da conta e aprendizado do 'Garimpo' de elite.",
      icon: Settings,
      status: "Fundamentos",
    },
    {
      number: "02",
      title: "Ativação & Constância",
      time: "Dias 8 a 30",
      desc: "Hora de colocar a I.A. para trabalhar. Criação do fluxo de vídeos e as primeiras notificações de comissão caindo no celular.",
      icon: Zap,
      status: "Em Execução",
    },
    {
      number: "03",
      title: "Escala & 5 Dígitos",
      time: "Mês 2 em diante",
      desc: "Otimização total. Aumento de volume de postagens e aplicação das estratégias de escala para buscar o faturamento de 5 dígitos mensais.",
      icon: TrendingUp,
      status: "Alta Performance",
    },
  ];

  return (
    <section className="px-4 py-10 sm:py-16 relative z-10 overflow-hidden bg-zinc-950/40">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="text-center mb-16">
          <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
            A JORNADA REAL
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white italic tracking-tighter leading-none mb-6">
            O SEU CAMINHO ATÉ OS <br />
            <span className="text-red-500">5 DÍGITOS MENSAIS</span>
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto font-medium">
            Esqueça promessas de ganhos fáceis. O M5D é um processo de construção. Aqui está o que
            esperar da sua evolução:
          </p>
        </div>

        <div className="relative">
          {/* Vertical/Horizontal Line */}
          <div className="absolute top-0 bottom-0 left-8 lg:left-0 lg:right-0 lg:top-12 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-red-600/0 via-red-600/50 to-red-600/0 hidden sm:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col group"
              >
                {/* Number Header */}
                <div className="flex items-center gap-6 lg:flex-col lg:items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-red-600/20 flex items-center justify-center text-red-500 font-display text-2xl font-black italic shadow-[0_0_30px_rgba(255,0,0,0.1)] group-hover:border-red-600/50 transition-colors">
                    {phase.number}
                  </div>
                  <div className="lg:mt-4">
                    <span className="text-red-500 font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-red-600/10 rounded-full border border-red-600/20">
                      {phase.time}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hud-accent scanline relative overflow-hidden flex-grow group-hover:border-red-500/20 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-red-600/10 rounded-2xl">
                      <phase.icon className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-500">
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-white font-black text-xl lg:text-2xl uppercase italic tracking-tighter mb-4 leading-none">
                    {phase.title}
                  </h3>

                  <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">
                    {phase.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-red-500/40 group-hover:text-red-500 transition-colors text-[10px] font-mono font-black uppercase tracking-widest">
                    PRÓXIMA ETAPA <ChevronRight className="w-3 h-3" />
                  </div>

                  {/* Decor */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    <phase.icon className="w-32 h-32 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-red-600/5 rounded-3xl border border-red-500/10 text-center">
          <p className="text-zinc-500 text-sm italic max-w-4xl mx-auto">
            "O resultado não é fruto da sorte, é fruto de um método aplicado com constância. Nós te
            damos o mapa, as ferramentas e a comunidade. O ritmo da caminhada quem dita é você."
          </p>
        </div>
      </div>
    </section>
  );
}
