import { motion } from "framer-motion";
import { Sparkles, BarChart3, MessageCircle, Gift } from "lucide-react";

const bonuses = [
  {
    title: "Introdução à I.A: Sua Influencer Virtual",
    desc: "Aprenda a criar uma influencer digital do zero usando inteligência artificial. Ela vai trabalhar e vender para você 24h por dia, sem que você precise aparecer.",
    icon: <Sparkles className="w-8 h-8 text-red-500" />,
    tag: "EXCLUSIVO",
    img: "https://images.unsplash.com/photo-1675244419745-a8383f9324aa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dashboard: Ferramenta de Garimpo",
    desc: "Acesso a uma ferramenta poderosa para encontrar produtos em alta e tendências antes de todo mundo. Pare de tentar adivinhar o que vende.",
    icon: <BarChart3 className="w-8 h-8 text-red-500" />,
    tag: "FERRAMENTA",
    img: "https://images.unsplash.com/photo-1551288049-bb138a5ad730?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Suporte VIP no Telegram",
    desc: "Você não estará sozinho. Tenha acesso ao nosso grupo exclusivo onde eu e minha esposa tiramos dúvidas e acompanhamos sua evolução de perto.",
    icon: <MessageCircle className="w-8 h-8 text-red-500" />,
    tag: "SUPORTE",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
  },
];

export function Bonuses() {
  return (
    <section className="px-4 py-20 sm:py-32 relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl relative z-10 staggered-reveal">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6 staggered-item">
            <Gift className="w-4 h-4" />
            BÔNUS ESPECIAIS
          </div>
          <h2 className="staggered-item font-display text-4xl sm:text-6xl font-black uppercase mb-6 text-white tracking-tighter italic leading-none">
            PRESENTES <span className="text-red-500">EXCLUSIVOS</span> <br />
            PARA VOCÊ
          </h2>
          <p className="staggered-item text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Ao entrar para o M5D hoje, você não leva apenas o treinamento, mas todo o ecossistema
            que usamos para lucrar todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="staggered-item group flex flex-col bg-zinc-900/20 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-red-500/20 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                <img
                  src={bonus.img}
                  alt={bonus.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-red-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl shadow-red-900/40">
                  {bonus.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1 relative bg-zinc-950/50 backdrop-blur-sm">
                <div className="mb-6 w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {bonus.icon}
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-4 italic uppercase tracking-tighter leading-tight group-hover:text-red-500 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed mb-8 flex-1 font-medium">
                  {bonus.desc}
                </p>
                <div className="pt-6 border-t border-white/5 flex items-center gap-3 text-red-500 font-black text-xs uppercase tracking-[0.2em]">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                  LIBERADO AGORA
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
