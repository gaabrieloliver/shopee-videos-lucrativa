import { useState, useEffect } from "react";
import { Quiz } from "./Quiz";
import { LoadingScreen } from "./LoadingScreen";
import { SalesPage } from "./SalesPage";

type ScreenState = "quiz" | "loading" | "sales";

// CONFIGURAÇÃO DO WEBHOOK (ZAPIER / MAKE / CRMs):
// Cole a URL do seu webhook abaixo para enviar leads automaticamente (ex: "https://hook.us1.make.com/xxxxxx")
const WEBHOOK_URL = "";

async function sendLeadToWebhook(answers: Record<string, string>) {
  if (!WEBHOOK_URL) return;
  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: answers.email,
        timestamp: new Date().toISOString(),
        quiz_answers: answers,
      }),
    });
  } catch (error) {
    console.error("Erro ao enviar lead para o webhook:", error);
  }
}

export function ShopeeQuizFunnel() {
  const [screen, setScreen] = useState<ScreenState>("quiz");
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Check if user already completed the quiz and has an email saved
  useEffect(() => {
    const savedAnswers = localStorage.getItem("shopee_videos_answers");
    if (savedAnswers) {
      const parsed = JSON.parse(savedAnswers);
      setAnswers(parsed);
      if (parsed.email) {
        setScreen("sales");
      }
    }
  }, []);

  const handleQuizComplete = (finalAnswers: Record<string, string>) => {
    setAnswers(finalAnswers);
    setScreen("loading");
    sendLeadToWebhook(finalAnswers);
  };

  const handleLoadingComplete = () => {
    setScreen("sales");
  };

  return (
    <div className="w-full min-h-screen bg-[#0b0b0c] text-white">
      {screen === "quiz" && (
        <div className="min-h-screen flex items-center justify-center">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      )}

      {screen === "loading" && (
        <div className="min-h-screen flex items-center justify-center">
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}

      {screen === "sales" && <SalesPage answers={answers} />}
    </div>
  );
}
export default ShopeeQuizFunnel;
