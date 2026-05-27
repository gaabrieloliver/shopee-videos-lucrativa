import { motion } from "framer-motion";
import casalCel from "../../assets/casal/casalCel.png";

export function AboutUs() {
  return (
    <section className="px-4 py-8 sm:py-12 relative z-10 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl staggered-reveal">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Main Content Side: Title, Mobile Image, and Description */}
          <div className="w-full lg:w-[55%] relative z-20 order-1">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
                OS ESTRATEGISTAS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white italic tracking-tighter leading-tight">
                QUEM SERÃO SEUS <br />
                <span className="text-red-500">MENTORES?</span>
              </h2>
            </div>

            {/* Mobile Image Side (Visible only on mobile/tablet) */}
            <div className="lg:hidden w-full relative flex justify-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[420px] aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-red-600/5 blur-[80px] rounded-full" />
                <img
                  src={casalCel}
                  alt="Gabriel e esposa - Criadores do M5D"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(255,0,0,0.2)]"
                />
              </motion.div>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative p-8 sm:p-10 bg-zinc-900/40 border-l-4 border-red-500 rounded-r-[2rem] backdrop-blur-md"
              >
                <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-medium">
                  <span className="text-white text-2xl sm:text-3xl font-black italic uppercase tracking-tighter block mb-6">
                    "Somos um <span className="text-red-500">casal real</span> que vive do digital,
                    não gurus."
                  </span>
                  O <span className="text-white font-bold">M5D</span> é o mapa exato do que fazemos
                  todos os dias para faturar alto na Shopee sem aparecer e sem estoque. Sem teorias,
                  apenas o caminho que mudou nossa vida, pronto para você aplicar e escalar.{" "}
                  <span className="text-red-500 font-black uppercase tracking-tighter italic">
                    <br />
                    Vamos juntos?
                  </span>
                </p>
              </motion.div>
            </div>
          </div>

          {/* Desktop Image Side (Visible only on Desktop) */}
          <div className="hidden lg:flex w-full lg:w-[45%] relative justify-center order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full"
            >
              <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
              <img
                src={casalCel}
                alt="Gabriel e esposa - Criadores do M5D"
                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(255,0,0,0.2)] lg:scale-95 lg:origin-bottom-right"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
