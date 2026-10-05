import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionTone = "light" | "muted" | "dark" | "green-50" | "sand-200" | "forest-gradient";

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}

export function Section({
  id,
  tone = "light",
  className,
  children,
  "aria-labelledby": ariaLabelledBy,
}: SectionProps) {
  const toneClasses: Record<SectionTone, string> = {
    light: "bg-[var(--color-green-50)] text-[var(--color-ink-900)] border-t border-[var(--color-green-200)]/70",
    muted: "bg-[var(--color-green-100)]/70 text-[var(--color-ink-900)] border-t border-[var(--color-green-200)]",
    "green-50": "bg-gradient-to-b from-[var(--color-green-100)]/40 to-[var(--color-green-50)] text-[var(--color-ink-900)] border-t border-[var(--color-green-200)]/80",
    "sand-200": "bg-[var(--color-green-100)]/60 text-[var(--color-ink-900)] border-t border-[var(--color-green-200)]",
    dark: "bg-gradient-to-b from-[var(--color-green-900)] to-[var(--color-green-950)] text-[var(--color-sand-100)] border-t border-[var(--border-inverse)]",
    "forest-gradient": "bg-gradient-to-br from-[var(--color-green-700)] via-[var(--color-green-800)] to-[var(--color-green-950)] text-[var(--color-sand-100)] border-t border-[var(--border-inverse)]",
  };

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("py-20 md:py-28 lg:py-32", toneClasses[tone], className)}
    >
      {children}
    </section>
  );
}
