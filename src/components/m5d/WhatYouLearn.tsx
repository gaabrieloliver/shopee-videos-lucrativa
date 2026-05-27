import { motion } from "framer-motion";
import garimpoDeProdutos from "../../assets/roadmap/GarimpoDeProdutos.png";
import garimpoDeVideos from "../../assets/roadmap/GarimpoDeVideos.png";
import editandoVideos from "../../assets/roadmap/EditandoVideos.png";
import postagem from "../../assets/roadmap/Postagem.png";
import analise from "../../assets/roadmap/Analise.png";

export function WhatYouLearn() {
  const steps = [
    {
      image: garimpoDeProdutos,
      title: "01. Garimpo de Produtos",
      desc: "A estratégia para encontrar produtos que vendem sozinhos.",
    },
    {
      image: garimpoDeVideos,
      title: "02. Garimpo de Vídeos",
      desc: "Como localizar o material viral que já funciona no mundo.",
    },
    {
      image: editandoVideos,
      title: "03. Edição de Vídeos",
      desc: "Transformação do conteúdo bruto em uma oferta magnética.",
    },
    {
      image: postagem,
      title: "04. Postagem Estratégica",
      desc: "O segredo para o algoritmo entregar seu vídeo para milhares.",
    },
    {
      image: analise,
      title: "05. Análise de Métricas",
      desc: "Entender os números para escalar e repetir o ciclo.",
    },
  ];

  return (
    <section className="px-4 py-10 sm:py-16 relative overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="text-center mb-16">
          <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
            O MÉTODO DEFINITIVO
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white italic tracking-tighter leading-tight mb-6">
            O QUE VOCÊ VAI <span className="text-red-500">APRENDER</span>
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto font-medium">
            Um ciclo contínuo de escala. Não é uma linha reta, é um motor que, uma vez ligado, não
            para de girar.
          </p>
        </div>

        {/* Roadmap Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[160px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent hidden lg:block" />

          {/* Connector Line (Mobile) */}
          <div className="absolute top-[100px] bottom-[200px] left-1/2 w-px bg-gradient-to-b from-transparent via-red-600/30 to-transparent block lg:hidden -translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Image Container */}
              <div className="relative aspect-[9/16] w-full max-w-[180px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-white/5 mb-6 shadow-2xl group-hover:border-red-500/50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Text Info */}
              <div className="px-2">
                <h3 className="text-white font-black uppercase tracking-tighter text-lg mb-2 leading-none">
                  {step.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
