import { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Video, Info, Zap } from "lucide-react";

export function EarningsCalculator() {
  const [videosPerDay, setVideosPerDay] = useState(12);
  const [phase, setPhase] = useState<"starter" | "scale">("starter");

  const earnings = useMemo(() => {
    // Logic based on real user data provided:
    // October (Starter): R$ 324,82 with 12 videos/day (~R$ 27,07 per video/day unit)
    // November (Scale): R$ 1.285,31 with 12 videos/day (~R$ 107,11 per video/day unit)
    const baseStarter = 324.82 / 12;
    const baseScale = 1285.31 / 12;

    const base = phase === "starter" ? baseStarter : baseScale;
    return videosPerDay * base;
  }, [videosPerDay, phase]);

  return (
    <section className="py-10 sm:py-16 relative overflow-hidden bg-zinc-950/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 relative z-10 staggered-reveal">
        <div className="text-center mb-12">
          <h2 className="staggered-item font-display text-3xl sm:text-5xl font-extrabold uppercase mb-4 text-white tracking-tighter">
            SIMULADOR DE <span className="text-red-500 italic">RESULTADOS</span>
          </h2>
          <p className="staggered-item text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Ajuste os parâmetros abaixo para projetar seus ganhos baseados em dados reais de quem já
            executa o método.
          </p>
        </div>

        <div className="staggered-item bg-zinc-900/40 border border-red-900/20 rounded-[2.5rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden hud-accent scanline">
          {/* Header info */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 mb-12 pb-8 border-b border-white/5">
            <div>
              <p className="text-sm text-zinc-500 font-mono uppercase tracking-widest">
                DADOS BASEADOS EM RESULTADOS REAIS
              </p>
            </div>

            {/* Phase Switcher */}
            <div className="flex bg-zinc-950 p-1.5 rounded-2xl border border-white/5 w-full sm:w-auto">
              <button
                onClick={() => setPhase("starter")}
                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black uppercase tracking-tighter transition-all ${
                  phase === "starter"
                    ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                1º MÊS (INÍCIO)
              </button>
              <button
                onClick={() => setPhase("scale")}
                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl text-xs font-black uppercase tracking-tighter transition-all ${
                  phase === "scale"
                    ? "bg-red-600 text-white shadow-lg shadow-red-900/40"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                2º MÊS+ (ESCALA)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {/* Controls */}
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-zinc-300 font-bold uppercase tracking-tighter flex items-center gap-2 text-sm sm:text-base">
                    <Video className="w-5 h-5 text-red-500" /> VÍDEOS POR DIA
                  </span>
                  <span className="text-red-500 font-mono font-black text-3xl">{videosPerDay}</span>
                </div>
                <div className="py-4">
                  <Slider
                    defaultValue={[videosPerDay]}
                    max={24}
                    min={1}
                    step={1}
                    onValueChange={(val) => setVideosPerDay(val[0])}
                    className="[&_[role=slider]]:h-8 [&_[role=slider]]:w-8 [&_[role=slider]]:bg-red-600 [&_[role=slider]]:border-red-400 [&_.relative]:bg-zinc-800"
                  />
                </div>
                <div className="mt-4 flex justify-between text-[10px] font-mono text-zinc-600 font-bold">
                  <span>MÍN: 01</span>
                  <span>META: 12</span>
                  <span>MÁX: 24</span>
                </div>
              </div>

              {/* Time Info */}
              <div className="bg-zinc-950/50 rounded-3xl p-6 border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 group hover:border-red-500/20 transition-colors text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1">
                    TEMPO DIÁRIO ESTIMADO
                  </p>
                  <p className="text-3xl font-black text-white italic tracking-tighter">
                    ~{Math.round((videosPerDay * 20) / 60)} HORAS
                  </p>
                </div>
              </div>
            </div>

            {/* Result Display */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-zinc-950 rounded-[2rem] p-10 sm:p-12 border-2 border-red-900/40 shadow-[0_0_50px_rgba(255,0,0,0.1)] flex flex-col justify-center items-center text-center h-full relative overflow-hidden group min-h-[300px]">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-red-600/20" />

                <TrendingUp className="w-16 h-16 text-red-500/20 mb-6 animate-pulse" />

                <h4 className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
                  ESTIMATIVA MENSAL
                </h4>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-zinc-500 text-3xl font-black italic">R$</span>
                  <motion.span
                    key={earnings}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-7xl sm:text-8xl font-display font-black text-white italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]"
                  >
                    {earnings.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </motion.span>
                </div>

                <div className="mt-8 flex items-center gap-3 text-zinc-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                  <Info className="w-4 h-4 text-red-500" />
                  <p className="text-[10px] uppercase font-mono font-bold tracking-tight">
                    Cálculo verificado por Gabriel Oliveira
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-red-600/5 rounded-xl border border-red-500/10">
            <p className="text-[10px] text-zinc-500 leading-relaxed text-center italic">
              *Nota: Este simulador é uma ferramenta de projeção. Os ganhos reais dependem da sua
              consistência e aplicação correta das estratégias. Resultados passados não garantem
              ganhos futuros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
