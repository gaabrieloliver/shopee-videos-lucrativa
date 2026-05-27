import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";
import rubiM5D from "../../assets/mockups/rubiM5D.png";

export function MethodRuby() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="px-4 py-10 sm:py-16 relative z-10 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="mb-10 text-center lg:text-left">
          <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
            A JÓIA DA COROA
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white italic tracking-tighter leading-none mb-6">
            M5D: O MÉTODO <span className="text-red-500">RUBI</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side (Desktop Only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center order-1 lg:order-2">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-md aspect-square flex items-center justify-center group select-none transition-transform"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Glow that follows/reacts */}
                <div className="absolute inset-0 bg-red-600/10 blur-[120px] rounded-full group-hover:bg-red-500/20 transition-colors duration-500" />

                <img
                  src={rubiM5D}
                  alt="Ruby M5D"
                  className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(255,0,0,0.4)] pointer-events-none"
                  style={{ transform: "translateZ(50px)" }}
                />
              </motion.div>

              {/* HUD Elements around the ruby */}
              <div className="absolute inset-0 border border-red-500/10 rounded-full scale-110 pointer-events-none" />
              <div
                className="absolute inset-0 border border-red-500/5 rounded-full scale-125 animate-reverse-spin pointer-events-none"
                style={{ animationDuration: "30s" }}
              />
            </div>
          </div>

          {/* Text Side: Third on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed font-medium mb-10">
              Mais do que um treinamento, este é o seu atalho definitivo para parar de perder tempo
              e começar a aplicar uma estrutura validada.
            </p>

            {/* Mobile Ruby (Visible only on mobile/tablet) */}
            <div className="lg:hidden w-full flex flex-col items-center justify-center mb-12">
              <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center group select-none transition-transform">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-red-600/10 blur-[80px] rounded-full" />
                  <img
                    src={rubiM5D}
                    alt="Ruby M5D"
                    className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,0,0,0.4)] pointer-events-none"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "Raridade",
                  desc: "Uma estratégia que foge do comum e das 'dicas' saturadas da internet.",
                },
                {
                  title: "Valor",
                  desc: "Construído para gerar lucro real e consistente, focado em alta conversão.",
                },
                {
                  title: "Resistência",
                  desc: "Um método à prova de atualizações, baseado em fundamentos sólidos de venda.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-zinc-900/40 border border-white/5 rounded-3xl hud-accent"
                >
                  <h3 className="text-white font-black uppercase tracking-tighter text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-base font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
