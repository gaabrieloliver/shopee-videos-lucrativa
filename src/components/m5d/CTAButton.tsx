import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "xl";
  pulse?: boolean;
  href?: string;
}

export function CTAButton({
  children,
  className,
  size = "default",
  pulse,
  href = "#oferta",
}: CTAButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl text-center font-display font-extrabold uppercase tracking-tighter italic text-primary-foreground transition-transform active:scale-[0.98] cursor-pointer",
        "bg-[image:var(--gradient-ruby-glow)] shadow-[var(--shadow-ruby)] hover:shadow-[var(--shadow-ruby-strong)]",
        size === "xl" ? "px-6 py-5 text-base sm:text-lg" : "px-5 py-4 text-sm sm:text-base",
        pulse && "animate-pulse-ruby",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2 leading-tight">
        {children}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </a>
  );
}
