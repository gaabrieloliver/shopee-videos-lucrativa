import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect } from "react";
import { motion } from "framer-motion";

const baseTestimonials = [
  "/depoimentos/1.PNG",
  "/depoimentos/2.PNG",
  "/depoimentos/3.PNG",
  "/depoimentos/4.PNG",
  "/depoimentos/5.PNG",
];

const testimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      speed: 1.5,
    }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (autoScroll) autoScroll.play();
  }, [emblaApi]);

  return (
    <section className="py-10 sm:py-16 relative z-10 overflow-hidden bg-transparent">
      <div className="mx-auto max-w-7xl px-4 staggered-reveal">
        <div className="mb-16 text-center">
          <span className="staggered-item text-red-500 font-mono text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            Resultados reais
          </span>
          <h2 className="staggered-item font-display text-3xl sm:text-5xl font-black uppercase text-white italic tracking-tighter leading-tight max-w-3xl mx-auto">
            Não é teoria. Veja o que nossos <span className="text-red-500">alunos estão dizendo:</span>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto max-w-[100vw]">
        <div className="w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y ml-[-1rem]">
            {testimonials.map((text, i) => (
              <div
                key={i}
                className="flex-[0_0_auto] min-w-0 pl-6 w-[280px] sm:w-[320px] md:w-[360px]"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden border border-red-900/30 shadow-[0_20px_50px_rgba(255,0,0,0.15)] bg-zinc-950 hud-accent scanline"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
                  <img
                    src={text}
                    alt={`Depoimento M5D`}
                    className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
                    draggable="false"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-background to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-background to-transparent pointer-events-none z-20" />
      </div>
    </section>
  );
}
