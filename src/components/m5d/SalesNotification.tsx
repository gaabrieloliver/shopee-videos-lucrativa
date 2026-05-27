import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

// Fake data for sales notifications
const NOTIFICATIONS = [
  { name: "João Silva", location: "São Paulo, SP", avatar: "/avatars/avatar_m1.jpg" },
  { name: "Maria Oliveira", location: "Rio de Janeiro, RJ", avatar: "/avatars/avatar_w1.jpg" },
  { name: "Pedro Santos", location: "Belo Horizonte, MG", avatar: "/avatars/avatar_m2.jpg" },
  { name: "Ana Souza", location: "Porto Alegre, RS", avatar: "/avatars/avatar_w2.jpg" },
  { name: "Lucas Lima", location: "Curitiba, PR", avatar: "/avatars/avatar_m3.jpg" },
  { name: "Juliana Costa", location: "Fortaleza, CE", avatar: "/avatars/avatar_w3.jpg" },
  { name: "Gabriel Almeida", location: "Salvador, BA", avatar: "/avatars/avatar_m4.jpg" },
  { name: "Fernanda Rocha", location: "Brasília, DF", avatar: "/avatars/avatar_w4.jpg" },
  { name: "Carlos Pereira", location: "Recife, PE", avatar: "/avatars/avatar_m5.jpg" },
  { name: "Beatriz Gomes", location: "Manaus, AM", avatar: "/avatars/avatar_w5.jpg" },
  { name: "Roberto Martins", location: "Goiânia, GO", avatar: "/avatars/avatar_m6.jpg" },
  { name: "Camila Ferreira", location: "Campinas, SP", avatar: "/avatars/avatar_w6.jpg" },
  { name: "Rafael Ribeiro", location: "Vitória, ES", avatar: "/avatars/avatar_m7.jpg" },
  { name: "Letícia Carvalho", location: "Natal, RN", avatar: "/avatars/avatar_w7.jpg" },
  { name: "André Lopes", location: "Florianópolis, SC", avatar: "/avatars/avatar_m8.jpg" },
  { name: "Patrícia Mendes", location: "João Pessoa, PB", avatar: "/avatars/avatar_w8.jpg" },
  { name: "Tiago Castro", location: "Maceió, AL", avatar: "/avatars/avatar_m9.jpg" },
  { name: "Amanda Cardoso", location: "Teresina, PI", avatar: "/avatars/avatar_w9.jpg" },
  { name: "Marcelo Barbosa", location: "São Luís, MA", avatar: "/avatars/avatar_m10.jpg" },
  { name: "Isabela Fernandes", location: "Campo Grande, MS", avatar: "/avatars/avatar_w10.jpg" },
];

export function SalesNotification() {
  const [currentNotifIndex, setCurrentNotifIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before showing first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds after page load

    return () => clearTimeout(initialDelay);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;
    if (!isVisible) return;

    // Hide notification after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed]);

  useEffect(() => {
    if (isDismissed) return;
    if (isVisible) return; // Wait until it's hidden before scheduling the next one

    // Show next notification after random time (between 10 and 20 seconds)
    const nextTime = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;

    const nextTimer = setTimeout(() => {
      setCurrentNotifIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
      setIsVisible(true);
    }, nextTime);

    return () => clearTimeout(nextTimer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentNotif = NOTIFICATIONS[currentNotifIndex];

  return (
    <div
      className={`fixed bottom-4 left-4 z-[100] transition-[transform,opacity] duration-500 transform motion-safe:transition-[transform,opacity] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-zinc-950/90 backdrop-blur-md border border-red-900/40 p-3 rounded-lg shadow-2xl flex items-center gap-3 w-72 md:w-80 relative overflow-hidden group">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 to-transparent blur-xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-300 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex-shrink-0 relative z-10">
          <img
            src={currentNotif.avatar}
            alt={currentNotif.name}
            className="w-12 h-12 rounded-full object-cover border border-zinc-800"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border border-zinc-950 flex items-center justify-center">
            <CheckCircle className="w-3 h-3 text-zinc-950 fill-green-500" strokeWidth={3} />
          </div>
        </div>

        <div className="flex-1 min-w-0 z-10">
          <p className="text-sm font-semibold text-zinc-200 truncate">{currentNotif.name}</p>
          <p className="text-xs text-zinc-400">de {currentNotif.location}</p>
          <p className="text-xs font-medium text-red-500 mt-0.5">acabou de comprar o Shopee Vídeos Lucrativa!</p>
        </div>
      </div>
    </div>
  );
}
