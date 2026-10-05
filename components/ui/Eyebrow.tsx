import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  tone?: "on-light" | "on-dark";
  className?: string;
}

export function Eyebrow({ children, tone = "on-light", className }: EyebrowProps) {
  const toneClasses = {
    "on-light":
      "text-[var(--color-green-700)] bg-[var(--color-green-100)] border-[var(--color-green-200)]",
    "on-dark":
      "text-[var(--color-lime-500)] bg-[var(--color-lime-500)]/10 border-[var(--color-lime-500)]/25",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs uppercase tracking-[0.14em] font-mono-data border mb-4",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </div>
  );
}
