import { motion } from "framer-motion";
import { Newspaper, TrendingUp, Globe, ArrowUpRight } from "lucide-react";

export function MarketAuthority() {
  const news = [
    {
      source: "Forbes Brasil",
      title: "Shopee quer tornar afiliados milionários com vídeos online",
      desc: "Gigante do varejo aposta no 'Shoppertainment' para transformar criadores de conteúdo em máquinas de vendas.",
      icon: Newspaper,
      trend: "Destaque Forbes",
      link: "https://forbes.com.br/forbes-mkt/2025/10/shopee-quer-tornar-afiliados-milionarios-com-videos-online/",
    },
    {
      source: "Portal E-commerce",
      title: "Shopee Vídeo: A nova aposta para bater TikTok e Instagram no Brasil em 2026",
      desc: "Plataforma consolida o 'Shoppertainment' como pilar central de crescimento, focando em vídeos curtos para conversão orgânica.",
      icon: TrendingUp,
      trend: "+400% de engajamento",
    },
    {
      source: "Globo Economia",
      title: "Vídeos curtos dominam 70% das decisões de compra no e-commerce atual",
      desc: "Relatório aponta que consumidores preferem ver demonstrações reais de produtos antes de finalizar o carrinho na Shopee.",
      icon: Globe,
      trend: "Tendência Global",
    },
  ];

  return (
    <section className="px-4 py-6 sm:py-10 relative z-10 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="text-center mb-16">
          <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
            MERCADO EM EXPLOSÃO
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white italic tracking-tighter leading-tight mb-6">
            O QUE A MÍDIA DIZ SOBRE A <br />
            <span className="text-red-500">OPORTUNIDADE DO MOMENTO</span>
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto font-medium">
            Você não precisa acreditar apenas em nós. O mercado de Shopee Vídeos é a maior tendência
            de escala dos últimos anos.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-6 py-4"
          >
            {[...news, ...news, ...news].map((item, i) => (
              <div
                key={i}
                className="inline-flex flex-col min-w-[350px] sm:min-w-[450px] bg-zinc-900/40 border border-white/5 p-8 rounded-[2rem] backdrop-blur-sm relative group overflow-hidden"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col">
                    <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-1">
                      {item.source}
                    </span>
                    <span className="text-red-500 font-mono text-[9px] font-black uppercase tracking-widest bg-red-500/5 px-2 py-0.5 rounded-full border border-red-500/10 w-fit">
                      {item.trend}
                    </span>
                  </div>
                  <div className="p-2 bg-red-600/5 rounded-xl">
                    <item.icon className="w-5 h-5 text-red-500/60" />
                  </div>
                </div>

                <p className="text-white font-black text-lg sm:text-xl leading-tight whitespace-normal mb-4 group-hover:text-red-500 transition-colors">
                  "{item.title}"
                </p>

                <p className="text-zinc-500 text-xs leading-relaxed whitespace-normal line-clamp-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Gradients for smooth fade at edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
