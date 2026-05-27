import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Mail,
  Lock,
  ShieldCheck,
  HelpCircle,
  Activity,
  User,
  Flame,
  DollarSign,
  Target,
  Smartphone,
  Users,
  ThumbsUp,
  CheckCircle,
  TrendingUp,
  Clock,
  Video,
  ShoppingBag,
} from "lucide-react";
import questionsData from "../../data/questions.json";

interface QuizProps {
  onComplete: (answers: Record<string, string>) => void;
}

interface QuestionOption {
  label: string;
  value: string;
  icon: string;
}

interface Question {
  id: string;
  text: string;
  type: string;
  options: QuestionOption[];
}

interface Milestone {
  afterIndex: number;
  title: string;
  text: string;
  image?: string;
}

export function Quiz({ onComplete }: QuizProps) {
  const { questions, milestones } = questionsData as {
    questions: Question[];
    milestones: Milestone[];
  };

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [emailInput, setEmailInput] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [currentMilestone, setCurrentMilestone] = useState<Milestone | null>(null);

  // Resume state from localStorage on mount
  useEffect(() => {
    const savedAnswers = localStorage.getItem("shopee_videos_answers");
    const savedIndex = localStorage.getItem("shopee_videos_index");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedIndex) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  const saveState = (newAnswers: Record<string, string>, newIndex: number) => {
    localStorage.setItem("shopee_videos_answers", JSON.stringify(newAnswers));
    localStorage.setItem("shopee_videos_index", newIndex.toString());
  };

  const handleOptionSelect = (value: string) => {
    const updatedAnswers = { ...answers, [questions[currentIndex].id]: value };
    setAnswers(updatedAnswers);

    // Check if there is a milestone after this question index
    const milestone = milestones.find((m) => m.afterIndex === currentIndex);
    if (milestone) {
      setCurrentMilestone(milestone);
      saveState(updatedAnswers, currentIndex);
    } else {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        saveState(updatedAnswers, nextIndex);
      }
    }
  };

  const handleMilestoneContinue = () => {
    setCurrentMilestone(null);
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
      saveState(answers, nextIndex);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
      setEmailError("Por favor, insira um e-mail válido para liberar seu acesso.");
      return;
    }

    setEmailError("");
    const finalAnswers = { ...answers, email: emailInput };
    setAnswers(finalAnswers);
    localStorage.setItem("shopee_videos_answers", JSON.stringify(finalAnswers));

    // Complete the quiz
    onComplete(finalAnswers);
  };

  const handleBack = () => {
    if (currentMilestone) {
      setCurrentMilestone(null);
      return;
    }

    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;

      // If the previous question triggered a milestone, we show that milestone
      const prevMilestone = milestones.find((m) => m.afterIndex === prevIndex);
      if (prevMilestone) {
        setCurrentIndex(prevIndex);
        setCurrentMilestone(prevMilestone);
        saveState(answers, prevIndex);
      } else {
        setCurrentIndex(prevIndex);
        saveState(answers, prevIndex);
      }
    }
  };

  const resetQuiz = () => {
    if (window.confirm("Deseja reiniciar o quiz? Suas respostas serão limpas.")) {
      setAnswers({});
      setCurrentIndex(0);
      setEmailInput("");
      setCurrentMilestone(null);
      localStorage.removeItem("shopee_videos_answers");
      localStorage.removeItem("shopee_videos_index");
    }
  };

  // Helper to render Lucide Icons dynamically
  const renderIcon = (iconName: string) => {
    const components: Record<string, React.ComponentType<{ className?: string }>> = {
      User,
      RotateCcw,
      Activity,
      TrendingUp,
      Flame,
      DollarSign,
      Target,
      ShieldCheck,
      Clock,
      Lock,
      Video,
      ShoppingBag,
      Smartphone,
      Users,
      ThumbsUp,
      CheckCircle,
    };

    const IconComponent = components[iconName] || HelpCircle;
    return <IconComponent className="h-5 w-5" />;
  };

  const currentQuestion = questions[currentIndex];
  const progressPercentage = Math.round(((currentIndex + (currentMilestone ? 0.5 : 0)) / questions.length) * 100);

  // Render Milestone Screen
  if (currentMilestone) {
    return (
      <div className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} />
            <span>Voltar</span>
          </button>
          <div className="text-zinc-500 font-mono text-xs uppercase tracking-wider">
            Análise em andamento: {progressPercentage}%
          </div>
        </div>

        {/* Milestone Card */}
        <div className="bg-zinc-900/50 backdrop-blur-md border border-red-900/20 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(255,0,0,0.1)] relative overflow-hidden hud-accent">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 mb-6 border border-red-500/20">
            <Sparkles size={28} className="animate-pulse" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase italic tracking-tight text-white mb-4 leading-tight">
            {currentMilestone.title}
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            {currentMilestone.text}
          </p>

          <button
            onClick={handleMilestoneContinue}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-4 px-6 text-center font-display font-extrabold uppercase tracking-tighter italic text-white transition-transform active:scale-[0.98] cursor-pointer shadow-[0_4px_20px_rgba(239,68,68,0.2)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Continuar Análise
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>
      </div>
    );
  }

  // Render Quiz Question
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        {currentIndex > 0 ? (
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm font-medium"
          >
            <ChevronLeft size={16} />
            <span>Voltar</span>
          </button>
        ) : (
          <div style={{ width: "60px" }}></div>
        )}
        <div className="text-zinc-400 font-mono text-xs uppercase tracking-wider">
          Pergunta {currentIndex + 1} de {questions.length}
        </div>
        <button
          onClick={resetQuiz}
          className="text-zinc-500 hover:text-red-500 transition-colors p-1.5"
          title="Reiniciar quiz"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-zinc-900 rounded-full mb-8 overflow-hidden">
        <div
          className="h-full bg-red-600 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Main Question Card */}
      <div className="bg-zinc-900/30 border border-zinc-800/40 rounded-3xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-8 leading-tight tracking-tight">
          {currentQuestion.text}
        </h2>

        {currentQuestion.type === "single" ? (
          <div className="space-y-3.5">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all flex items-center justify-between group cursor-pointer active:scale-[0.99] ${
                  answers[currentQuestion.id] === option.value
                    ? "border-red-600 bg-red-950/15 text-white"
                    : "border-zinc-800/60 bg-zinc-950/40 hover:bg-zinc-900/60 hover:border-zinc-700 text-zinc-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      answers[currentQuestion.id] === option.value
                        ? "bg-red-600 text-white"
                        : "bg-zinc-900 text-zinc-400 group-hover:bg-zinc-850 group-hover:text-zinc-200"
                    }`}
                  >
                    {renderIcon(option.icon)}
                  </div>
                  <span className="font-semibold text-sm sm:text-base leading-snug">
                    {option.label}
                  </span>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                    answers[currentQuestion.id] === option.value
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-zinc-700 bg-transparent"
                  }`}
                >
                  {answers[currentQuestion.id] === option.value && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        ) : (
          // Email Screen
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                <Mail size={20} />
              </div>
              <input
                type="email"
                placeholder="Seu melhor e-mail aqui"
                value={emailInput}
                onChange={(e) => {
                  setEmailInput(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className={`w-full bg-zinc-950/80 border text-white pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all font-semibold placeholder:text-zinc-600 ${
                  emailError ? "border-red-600" : "border-zinc-800"
                }`}
                required
              />
            </div>
            {emailError && (
              <p className="text-red-500 text-xs font-semibold pl-1">
                {emailError}
              </p>
            )}

            <p className="text-zinc-500 text-[11px] leading-relaxed flex items-start gap-2">
              <Lock size={14} className="mt-0.5 flex-shrink-0 text-red-500" />
              <span>
                Respeitamos sua privacidade. Seus dados estão 100% seguros e usaremos seu e-mail para enviar seu diagnóstico e informações de acesso.
              </span>
            </p>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-red-600 to-red-800 py-4 px-6 text-center font-display font-extrabold uppercase tracking-tighter italic text-white transition-transform active:scale-[0.98] cursor-pointer shadow-[0_4px_20px_rgba(239,68,68,0.2)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                VER DIAGNÓSTICO E GERAR PLANO
                <ShieldCheck size={20} />
              </span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
