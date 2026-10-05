import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  tone?: "white" | "muted" | "dark" | "green-50";
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  tone = "white",
  hoverEffect = true,
}: CardProps) {
  const toneClasses = {
    white: "bg-white text-[var(--color-ink-900)] border border-[var(--color-green-200)]",
    muted: "bg-[var(--color-green-100)]/70 text-[var(--color-ink-900)] border border-[var(--color-green-200)]",
    "green-50": "bg-[var(--color-green-50)] text-[var(--color-ink-900)] border border-[var(--color-green-200)]",
    dark: "bg-[var(--color-green-950)] text-[var(--color-sand-100)] border border-[var(--border-inverse)]",
  };

  return (
    <div
      className={cn(
        "rounded-[20px] p-6 md:p-8 transition-all duration-200 shadow-[0_2px_8px_rgba(12,40,24,0.04),0_12px_28px_rgba(12,40,24,0.04)]",
        toneClasses[tone],
        hoverEffect && "hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(12,40,24,0.08),0_16px_36px_rgba(12,40,24,0.08)] hover:border-[var(--color-green-600)]/50",
        className
      )}
    >
      {children}
    </div>
  );
}
