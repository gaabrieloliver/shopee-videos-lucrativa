import { CTAButton } from "./CTAButton";

export function FinalCTA() {
  return (
    <section className="px-4 py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="mx-auto max-w-4xl text-center border border-red-500/20 bg-zinc-950/80 backdrop-blur-md p-8 sm:p-16 rounded-[2rem] shadow-2xl relative hud-accent scanline">
        <h2 className="font-display text-4xl sm:text-7xl font-black uppercase leading-[0.8] text-white tracking-tighter italic mb-8">
          AGORA A <span className="text-red-500">DECISÃO</span>
          <br /> É SUA:
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400 text-lg sm:text-xl leading-relaxed mb-12 font-medium">
          A janela está se fechando. O algoritmo muda, e o preço do M5D também. Não deixe para
          amanhã a mudança de vida que você pode começar hoje pelo valor promocional.
        </p>

        <div className="mb-12 flex flex-col items-center">
          <p className="text-zinc-600 text-sm sm:text-base line-through decoration-red-500/30 font-mono mb-2">
            VALOR_ANTIGO: R$ 197,00
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-zinc-500 text-xl sm:text-2xl font-black italic">POR_SÓ</span>
            <span className="text-white text-5xl sm:text-7xl font-display font-black italic tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.3)]">
              R$ 97,00
            </span>
          </div>
        </div>

        <div className="mx-auto max-w-md">
          <CTAButton
            size="xl"
            pulse
            href="https://pay.kiwify.com.br/o9rWn8L"
            className="w-full py-8 text-2xl font-black italic tracking-tighter"
          >
            🟢 GARANTIR MINHA VAGA AGORA
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-red-900/50 px-4 py-8 relative z-10 bg-transparent">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>© 2026 M5D · Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="transition-colors hover:text-red-500">
            Termos de Uso
          </a>
          <a href="#" className="transition-colors hover:text-red-500">
            Políticas de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
