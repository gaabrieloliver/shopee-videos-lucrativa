import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    img: "https://placehold.co/800x500/1a0808/ff3b3b?text=%C3%81rea+de+Membros",
    caption: "Interface da área de membros organizada",
  },
  {
    img: "https://placehold.co/800x500/1a0808/ff3b3b?text=Ferramenta+Gringa",
    caption: "Ferramenta gringa localizando produtos vencedores",
  },
  {
    img: "https://placehold.co/800x500/1a0808/ff3b3b?text=M%C3%A9tricas+Virais",
    caption: "Métricas de um vídeo que viralizou seguindo o método",
  },
  {
    img: "https://placehold.co/800x500/1a0808/ff3b3b?text=Comunidade+VIP",
    caption: "Suporte e comunidade ativa",
  },
  {
    img: "https://placehold.co/800x500/1a0808/ff3b3b?text=R%24+9.9k+%2Fm%C3%AAs",
    caption: "Painel de R$ 9.9k de faturamento do último mês",
  },
];

export function MaterialCarousel() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Por dentro
          </p>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-5xl">
            O que <span className="text-primary">espera por você</span> lá dentro
          </h2>
        </div>

        <Carousel opts={{ loop: true }} className="px-8 sm:px-12">
          <CarouselContent>
            {slides.map((s, i) => (
              <CarouselItem key={i} className="sm:basis-4/5">
                <div className="overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[var(--shadow-ruby)]">
                  <img src={s.img} alt={s.caption} className="aspect-video w-full object-cover" />
                  <p className="p-4 text-center text-sm font-medium text-muted-foreground">
                    {s.caption}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-primary/60 bg-card text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="border-primary/60 bg-card text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
