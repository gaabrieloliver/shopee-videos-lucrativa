import { motion } from "framer-motion";
import { Zap, Target, RefreshCw } from "lucide-react";
import introShopee from "../../assets/roadmap/IntroShopee.png";
import garimpoDeProdutos from "../../assets/roadmap/GarimpoDeProdutos.png";
import reciclagemDeVideo from "../../assets/roadmap/ReciclagemDeVideo.png";

export function ModulesGrid() {
  const modules = [
    {
      title: "INTRODUÇÃO A SHOPEE",
      description:
        "Entenda como o ecossistema da Shopee funciona para afiliados e como o sistema de comissões é processado.",
      image: introShopee,
      icon: Zap,
    },
    {
      title: "GARIMPO DE PRODUTOS",
      description:
        "A inteligência por trás da seleção de itens com alto potencial de viralização e conversão.",
      image: garimpoDeProdutos,
      icon: Target,
    },
    {
      title: "RECICLAGEM DE VÍDEO",
      description:
        "A técnica de transformar conteúdos existentes em novos ativos de venda sem precisar gravar.",
      image: reciclagemDeVideo,
      icon: RefreshCw,
    },
  ];

  return (
    <section className="px-4 py-8 sm:py-16 relative z-10 bg-background/50 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-24 staggered-reveal">
          <h2 className="staggered-item font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white italic leading-none">
            OS PILARES DA <span className="text-red-500">ESCALA</span>
          </h2>
          <p className="staggered-item mt-6 text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Domine os três pilares fundamentais para transformar seu celular em uma máquina de
            vendas automática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {modules.map((module, i) => {
            const Icon = module.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col group"
              >
                {/* Image Card Container */}
                <div className="relative mb-8 group max-w-[280px] md:max-w-none mx-auto w-full">
                  {/* Glow Surge Effect (Outside clipping) */}
                  <div className="absolute -inset-10 bg-red-600/20 opacity-0 group-hover:opacity-100 blur-[80px] transition-all duration-700 scale-50 group-hover:scale-110 z-0 pointer-events-none" />

                  <div className="relative aspect-[4/5] md:aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-red-900/30 hud-accent shadow-2xl z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-20 pointer-events-none" />
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 z-30">
                      <div className="w-12 h-12 rounded-2xl bg-red-600/20 backdrop-blur-md border border-red-500/30 flex items-center justify-center text-red-500">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center md:text-left px-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                    {module.title}
                  </h3>

                  <div className="relative p-6 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-sm hud-accent scanline">
                    <p className="text-zinc-400 text-base leading-relaxed font-medium">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
