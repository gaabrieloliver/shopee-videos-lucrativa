import { CTAButton } from "./CTAButton";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import m5dFundo from "../../assets/m5d/m5dFundo.png";
import m5dFundoMobile from "../../assets/m5d/m5dFundoMobile.png";
import casalResultado from "../../assets/casal/CasalResultadoNOVO.png";

export function Hero() {
  const highlights = [
    {
      title: "Sem tráfego pago",
      desc: "Idealizado e feito para você que está iniciando e não quer arriscar perder dinheiro investindo em anúncios.",
    },
    {
      title: "Sem packs de vídeos",
      desc: "Esqueça materiais saturados que todos usam. Te mostramos a forma correta de obter vídeos originais que realmente vendem.",
    },
    {
      title: "Sem grupos de ofertas",
      desc: "Você não precisará passar pelo processo demorado de atrair pessoas e validar um grupo do zero para colher seus resultados.",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-8 sm:pb-12 bg-background">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="staggered-reveal">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:items-center mx-auto">
            {/* Left Column: Text Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left z-20 pt-8 sm:pt-0">
              <h1 className="staggered-item font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase mb-6 text-white tracking-tighter italic leading-[1.05]">
                <span className="text-red-500">M5D:</span> O MÉTODO PARA
                <br />
                LUCRAR COM A <span className="text-red-500">SHOPEE VÍDEOS</span>
              </h1>

              {/* Mobile Image: Only visible on mobile, positioned after Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="lg:hidden w-full max-w-lg mb-12 mt-6 staggered-item scale-125 origin-center"
              >
                <img
                  src={casalResultado}
                  alt="Resultado Real"
                  className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,0,0,0.2)]"
                />
              </motion.div>

              <p className="staggered-item text-white text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed font-medium">
                O Método 5 Dígitos (M5D) te ensina a construir uma nova fonte de renda com a Shopee
                Vídeos, usando estratégias validadas — sem falsas promessas.
              </p>

              <div className="staggered-item w-full sm:w-auto mb-12 lg:mb-0">
                <CTAButton
                  href="#oferta"
                  className="w-full sm:w-auto text-xl sm:text-2xl py-7 px-12 shadow-[0_0_50px_rgba(255,0,0,0.3)]"
                >
                  QUERO COMEÇAR A LUCRAR HOJE
                </CTAButton>
              </div>
            </div>

            {/* Right Column: Social Proof Hero (Desktop Only) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hidden lg:flex staggered-item relative w-full justify-end z-10"
            >
              <img
                src={casalResultado}
                alt="Resultado Real"
                className="w-full h-auto relative z-10 drop-shadow-[0_40px_100px_rgba(255,0,0,0.25)] lg:scale-125 lg:origin-right lg:translate-x-12"
              />
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full mt-16 sm:mt-24 mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="staggered-item p-6 bg-zinc-900/40 border border-red-900/20 rounded-2xl relative overflow-hidden group hud-accent"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Star className="w-8 h-8 text-red-500" />
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                  ))}
                </div>
                <h3 className="text-base font-bold text-white mb-2 text-left">{item.title}</h3>
                <p className="text-sm text-zinc-400 font-medium leading-relaxed text-left">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
