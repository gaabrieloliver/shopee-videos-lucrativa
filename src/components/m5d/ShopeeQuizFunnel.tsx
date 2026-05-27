import { useState, useEffect } from "react";
import { Quiz } from "./Quiz";
import { LoadingScreen } from "./LoadingScreen";
import { SalesPage } from "./SalesPage";

type ScreenState = "quiz" | "loading" | "sales";

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
