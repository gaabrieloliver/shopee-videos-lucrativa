export function IntermediateCTA() {
  return (
    <section className="relative z-10 w-full bg-gradient-to-r from-red-950 via-red-900 to-red-950 border-y border-red-500/30 py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-red-600/20 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase mb-4 text-white drop-shadow-lg">
          Você está a um passo de começar a lucrar
        </h2>
        <p className="text-zinc-200 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
          Não perca a oportunidade de aprender essas estratégias que irão te fazer acumular
          resultados de maneira simples, rápida e 100% validada.
        </p>

        <a
          href="#oferta"
          className="inline-flex items-center justify-center rounded-md bg-zinc-900 border border-red-500/30 px-10 py-4 text-base font-bold text-white shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-all hover:bg-zinc-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)]"
        >
          Clique aqui
        </a>
      </div>
    </section>
  );
}
