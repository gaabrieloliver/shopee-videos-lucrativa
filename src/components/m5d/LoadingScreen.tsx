import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const statusMessages = [
  "Analisando suas respostas e traçando perfil de afiliado...",
  "Cruzando dados com nosso banco de afiliados bem-sucedidos...",
  "Ajustando técnicas de edição antirruído para seu perfil...",
  "Calculando estimativa de ganho com tráfego 100% orgânico...",
  "Verificando a disponibilidade de vagas promocionais...",
  "Tudo pronto! Gerando seu diagnóstico personalizado...",
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const totalDuration = 5000; // 5 seconds
    const intervalTime = 50; // update progress every 50ms
    const totalSteps = totalDuration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const currentProgress = Math.min((step / totalSteps) * 100, 100);
      setProgress(currentProgress);

      // Determine message index based on progress
      const messageIndex = Math.min(
        Math.floor((currentProgress / 100) * statusMessages.length),
        statusMessages.length - 1
      );
      setCurrentMessageIndex(messageIndex);

      if (step >= totalSteps) {
        clearInterval(timer);
        onComplete();
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="w-full bg-zinc-900/50 backdrop-blur-md border border-red-900/20 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(255,0,0,0.15)] text-center relative overflow-hidden hud-accent">
        {/* Animated Circular Spinner */}
        <div className="relative w-36 h-36 mx-auto mb-8 flex items-center justify-center">
          {/* Outer glowing border */}
          <div className="absolute inset-0 rounded-full border border-red-950/40"></div>

          {/* SVG Progress Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="72"
              cy="72"
              r="64"
              stroke="rgba(220, 38, 38, 0.1)"
              strokeWidth="6"
              fill="transparent"
            />
            <motion.circle
              cx="72"
              cy="72"
              r="64"
              stroke="#dc2626"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray={402} // 2 * Math.PI * r (approx 402.1)
              strokeDashoffset={402 - (402 * progress) / 100}
              className="drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-display font-extrabold italic text-white leading-none">
              {Math.round(progress)}%
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mt-1">
              Processando
            </span>
          </div>
        </div>

        <h2 className="font-display text-2xl font-black uppercase italic tracking-tight text-white mb-3">
          Cruzando Respostas
        </h2>

        {/* Dynamic status message */}
        <div className="h-14 mb-8 flex items-center justify-center">
          <motion.p
            key={currentMessageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-sm font-medium"
          >
            {statusMessages[currentMessageIndex]}
          </motion.p>
        </div>

        {/* Linear progress bar backup */}
        <div className="w-full h-1 bg-zinc-950 rounded-full mb-6 overflow-hidden">
          <div
            className="h-full bg-red-600 transition-all duration-100 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex items-center justify-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
          <ShieldCheck size={14} className="text-red-500" />
          <span>Segurança SSL ativa • Conexão criptografada</span>
        </div>
      </div>
    </div>
  );
}
