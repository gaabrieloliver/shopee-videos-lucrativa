import garantia7 from "../../assets/mockups/garantia7.png";

export function Guarantee() {
  return (
    <section className="w-full bg-transparent border-y border-white/5 py-16 sm:py-20 relative z-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Text */}
          <div className="w-full md:w-[60%] text-center md:text-left">
            <span className="text-red-500 font-mono text-sm font-black uppercase tracking-[0.3em] mb-4 block">
              COMPRA 100% SEGURA
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-white italic tracking-tighter leading-tight mb-8">
              RISCO ZERO POR <br />
              <span className="text-red-500">7 DIAS INTEIROS</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium max-w-xl">
              <p>
                Se por qualquer motivo você achar que esse método não é para você, basta pedir o
                reembolso. Devolvemos{" "}
                <span className="text-white font-bold">100% do seu investimento</span> sem perguntas
                e sem burocracia.
              </p>
            </div>
          </div>

          {/* Right Side: Badge (Desktop & Mobile) */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 drop-shadow-[0_0_50px_rgba(255,0,0,0.2)]">
              <img
                src={garantia7}
                alt="Garantia de 7 Dias"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
