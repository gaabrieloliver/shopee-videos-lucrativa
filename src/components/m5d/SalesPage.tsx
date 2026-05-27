import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Clock,
  Zap,
  Lock,
  CreditCard,
  ChevronDown,
  Info,
  Award,
  ChevronRight,
  TrendingUp,
  Flame,
  Smartphone,
  BookOpen,
  CalendarCheck,
  ShoppingBag,
  BarChart2,
} from "lucide-react";
import { CTAButton } from "./CTAButton";
import { Testimonials } from "./Testimonials";
import { SalesNotification } from "./SalesNotification";
import casalCel from "../../assets/casal/casalCel.png";
import CasalResultadoNOVO from "../../assets/casal/CasalResultadoNOVO.png";

interface SalesPageProps {
  answers: Record<string, string>;
}

export function SalesPage({ answers }: SalesPageProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const email = answers?.email || "";
  const checkoutUrl = email
    ? `https://pay.kiwify.com.br/6jSKNRV?email=${encodeURIComponent(email)}`
    : "https://pay.kiwify.com.br/6jSKNRV";

  const getPersonalizedDiagnostic = () => {
    const nicho = answers.q6 === "achadinhos" 
      ? "Achadinhos e Utilidades" 
      : answers.q6 === "tecnologia" 
        ? "Tecnologia e Gadgets" 
        : answers.q6 === "moda" 
          ? "Moda e Maquiagem" 
          : "Brinquedos e Decoração";

    const objetivo = answers.q2 === "renda_extra" 
      ? "R$ 2 mil a R$ 5 mil/mês extra" 
      : answers.q2 === "viver_internet" 
        ? "viver 100% de comissões online" 
        : "comissões rápidas orgânicas";

    return (
      <div className="bg-red-500/10 border-b border-red-500/25 py-3 px-4 text-center text-xs sm:text-sm text-red-500 font-semibold tracking-wide flex items-center justify-center gap-2">
        <Info size={16} className="animate-pulse" />
        <span>
          <strong>Diagnóstico Gerado:</strong> Perfil qualificado para <strong>Contas Faceless (Sem Aparecer)</strong> no nicho de <u>{nicho}</u> com foco em <u>{objetivo}</u>.
        </span>
      </div>
    );
  };

  const painPoints = [
    "Gasta horas postando vídeos e terminando com ZERO visualizações.",
    "Está cansado de usar packs de vídeos prontos e saturados que a Shopee bloqueia por direitos autorais.",
    "Não sabe como criar copys e títulos persuasivos para fazer as pessoas clicarem no link.",
    "Tem receio de começar sem seguidores e sem saber por onde divulgar.",
    "Se sente perdido com as regras e com o risco de perder a conta de afiliado do nada."
  ];

  const modules = [
    {
      title: "Configuração do Zero",
      desc: "Passo a passo prático para criar e estruturar sua conta de afiliado de alto desempenho.",
      icon: Smartphone,
    },
    {
      title: "Garimpo Estrangeiro",
      desc: "Como encontrar os melhores vídeos de produtos virais de alta conversão em sites fora do Brasil.",
      icon: ShoppingBag,
    },
    {
      title: "Análise de Métricas",
      desc: "Saiba exatamente o que cada número significa e como agir.",
      icon: BarChart2,
    },
    {
      title: "Algoritmo Shopee",
      desc: "Os melhores horários, técnicas de engajamento e hashtags para forçar a viralização na aba de Vídeos.",
      icon: TrendingUp,
    },
    {
      title: "CTA Magnético",
      desc: "A arte de direcionar milhares de visualizações curiosas diretamente para o seu link afiliado.",
      icon: Lock,
    },
    {
      title: "Proteção contra Irrelevantes",
      desc: "Aprenda a técnica correta de edição que passa ilesa pelo filtro de spam da Shopee.",
      icon: ShieldCheck,
    },
  ];

  const faqItems = [
    {
      q: "O que é o Shopee Vídeos Lucrativa?",
      a: "É um treinamento passo a passo em vídeo aulas gravadas focado em ensinar iniciantes a lucrar como afiliados promovendo produtos da Shopee através da ferramenta Shopee Vídeos, de forma totalmente orgânica (sem gastar com anúncios) e sem precisar aparecer nos vídeos."
    },
    {
      q: "Como recebo o acesso?",
      a: "O acesso ao método é 100% digital. Imediatamente após a confirmação do pagamento (que leva menos de 1 minuto via PIX ou Cartão), você receberá os dados de acesso à plataforma de aulas diretamente no seu e-mail cadastrado."
    },
    {
      q: "Preciso aparecer nos vídeos?",
      a: "Absolutamente não! O treinamento é focado em estratégias de Contas Faceless (Sem Aparecer). Ensinamos você a usar vídeos de produtos inovadores que já existem, editando de forma única para que gerem vendas sem precisar expor seu rosto."
    },
    {
      q: "Preciso investir dinheiro em anúncios?",
      a: "Não! O método ensinado foca inteiramente no tráfego orgânico da própria aba oficial de vídeos da Shopee. Você não precisará investir nenhum centavo em anúncios patrocinados no Facebook, Instagram ou Google."
    },
    {
      q: "Funciona mesmo para quem tem zero seguidores?",
      a: "Sim! Você não precisa de uma conta de influenciador com seguidores para começar a vender. Ensinamos como criar contas profissionais do zero absoluto e obter milhares de visualizações usando o algoritmo de recomendação orgânica."
    },
    {
      q: "Como funciona a garantia?",
      a: "Oferecemos uma garantia incondicional de 7 dias. Você pode se inscrever, assistir às aulas e testar as técnicas. Se por qualquer motivo você decidir que o treinamento não é para você, basta enviar um e-mail em até 7 dias e devolveremos 100% do seu dinheiro de forma imediata."
    }
  ];

  return (
    <div className="w-full bg-background text-white pb-24 relative overflow-hidden">
      {/* Top Banner Diagnostic */}
      {getPersonalizedDiagnostic()}

      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] sm:text-xs font-black uppercase tracking-widest mb-6">
            ✓ LOTE PROMOCIONAL • VAGAS LIMITADAS
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase italic tracking-tighter leading-[1.05] text-white mb-6">
            DOMINE A <span className="text-red-500">SHOPEE VÍDEOS</span> <br />
            E FATURE ALTO COMO <span className="text-red-500">AFILIADO</span>
          </h1>

          {/* Subheadline */}
          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-3xl mb-10 leading-relaxed font-medium">
            Descubra o método exato para garimpar, editar de forma única e viralizar vídeos de produtos no automático. Venda todos os dias sem investir em anúncios e sem precisar expor sua imagem.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-12">
            <div className="p-5 bg-zinc-900/30 border border-red-900/10 rounded-2xl flex flex-col items-center justify-center hud-accent">
              <span className="text-xl sm:text-2xl font-display font-extrabold italic text-red-500 uppercase leading-none mb-1">
                R$ 60 MIL+
              </span>
              <span className="text-zinc-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                Faturados como Afiliado
              </span>
            </div>
            <div className="p-5 bg-zinc-900/30 border border-red-900/10 rounded-2xl flex flex-col items-center justify-center hud-accent">
              <span className="text-xl sm:text-2xl font-display font-extrabold italic text-red-500 uppercase leading-none mb-1">
                2 MILHÕES+
              </span>
              <span className="text-zinc-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                Visualizações Orgânicas
              </span>
            </div>
            <div className="p-5 bg-zinc-900/30 border border-red-900/10 rounded-2xl flex flex-col items-center justify-center hud-accent">
              <span className="text-xl sm:text-2xl font-display font-extrabold italic text-red-500 uppercase leading-none mb-1">
                PASSO A PASSO
              </span>
              <span className="text-zinc-500 text-[10px] sm:text-xs font-mono uppercase tracking-wider">
                Do Absoluto Zero ao Avançado
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 sm:py-20 bg-zinc-950/40 border-y border-zinc-900/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase italic text-white tracking-tight leading-tight">
              ISSO TE PARECE <span className="text-red-500">FAMILIAR?</span>
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base mt-2">
              A maioria dos afiliados tenta vender na internet fazendo isso:
            </p>
          </div>

          <div className="space-y-3.5 max-w-2xl mx-auto">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl border border-red-950/20 bg-zinc-950/80 hover:border-red-950/40 transition-colors"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5 text-red-500 font-bold text-xs">
                  ✕
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Will Master Section */}
      <section className="py-12 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase italic tracking-tight leading-tight text-white">
            O QUE VOCÊ VAI <span className="text-red-500">DOMINAR</span>
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base mt-2">
            Do primeiro vídeo de produto até a comissão caindo na conta — tudo de forma prática.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-zinc-900/20 border border-red-900/10 rounded-2xl relative overflow-hidden group hover:border-red-600/30 transition-all duration-300 hud-accent"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/5 text-red-500 flex items-center justify-center mb-5 border border-red-500/10 group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Real Results Section */}
      <Testimonials />

      {/* Pricing / Offer Box Section */}
      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Glow backdrop */}
        <div className="absolute -inset-4 bg-red-600/5 rounded-3xl blur-2xl pointer-events-none" />

        <div className="relative bg-zinc-950 border border-red-900/30 rounded-3xl overflow-hidden shadow-2xl scanline hud-accent text-center max-w-xl mx-auto">
          {/* Header */}
          <div className="p-6 sm:p-10 border-b border-white/5 bg-zinc-900/10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              Oferta Especial Expira em: {formatTime(timeLeft)}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase italic tracking-tight text-white mb-2 leading-tight">
              COMECE A FATURAR <br />
              HOJE MESMO
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto font-medium leading-relaxed">
              Acesso imediato e completo às aulas, ferramentas gratuitas e estratégias de garimpo.
            </p>
          </div>

          {/* Pricing Details */}
          <div className="p-8 sm:p-10 bg-gradient-to-b from-transparent to-red-950/5">
            <p className="text-zinc-500 text-xs sm:text-sm font-mono tracking-widest uppercase mb-3">
              INVESTIMENTO TOTAL:
            </p>

            <div className="flex flex-col items-center mb-2">
              <div className="flex items-baseline gap-1.5">
                <span className="text-zinc-500 text-xl sm:text-2xl font-black italic">12x</span>
                <span className="font-display text-6xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,0,0,0.3)] italic leading-none">
                  R$ 7,02
                </span>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm font-mono mt-4 font-bold">
                ou <span className="text-white">R$ 67,90</span> à vista no PIX
              </p>
            </div>

            {/* Micro-Copy Cost Persuasion */}
            <div className="text-red-500 text-xs sm:text-sm font-semibold italic uppercase tracking-wider mb-8">
              ★ Menos de R$ 0,24 por dia! ★
            </div>

            <div className="space-y-6">
              <CTAButton
                href={checkoutUrl}
                size="xl"
                pulse
                className="w-full py-7 text-xl font-black italic tracking-tighter uppercase min-h-[64px]"
              >
                QUERO FATURAR COM VÍDEOS AGORA
              </CTAButton>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-widest pt-5 border-t border-white/5">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-red-500" /> COMPRA 100% SEGURA
                </span>
                <span className="hidden sm:block text-zinc-800">|</span>
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-red-500" /> ACESSO IMEDIATO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-zinc-900/10 border border-zinc-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
            <Award size={48} className="animate-pulse" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold uppercase italic tracking-tight text-white mb-2 leading-tight">
              GARANTIA BLINDADA DE 7 DIAS
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-medium">
              Queremos que você tome sua decisão sem nenhuma preocupação. Inscreva-se no Shopee Vídeos Lucrativa, assista ao método e comece a criar suas primeiras contas. Se em até 7 dias você achar que o método não serve para você, basta enviar um e-mail. Devolvemos 100% do seu dinheiro, sem burocracia ou complicações.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase italic text-center text-white tracking-tight mb-12">
          PERGUNTAS <span className="text-red-500">FREQUENTES</span>
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/10 border border-zinc-850 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm sm:text-base text-white focus:outline-none hover:bg-zinc-900/20 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-red-500 transition-transform duration-300 ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeFaq === index ? "max-h-60 border-t border-white/5" : "max-h-0"
                }`}
              >
                <div className="p-5 text-zinc-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 inset-x-0 bg-zinc-950/90 backdrop-blur-md border-t border-red-900/20 py-4 px-6 flex items-center justify-between gap-4 z-40 md:hidden animate-fade-in shadow-[0_-5px_25px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Acesso Imediato
          </span>
          <span className="font-display text-lg font-bold text-white italic">
            12x R$ 7,02
          </span>
        </div>
        <a
          href={checkoutUrl}
          className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-display font-extrabold uppercase italic tracking-tighter text-xs px-4 py-3.5 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.3)] cursor-pointer active:scale-95"
        >
          <span>QUERO FATURAR</span>
          <ChevronRight size={14} />
        </a>
      </div>
      <SalesNotification />
    </div>
  );
}
