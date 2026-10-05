import { StatusTag } from "@/types/content";
import { cn } from "@/lib/utils";

interface TagProps {
  status: StatusTag;
  className?: string;
}

export function Tag({ status, className }: TagProps) {
  const statusConfig: Record<
    StatusTag,
    { label: string; classes: string }
  > = {
    building: {
      label: "Building",
      classes:
        "bg-[var(--color-green-100)] text-[var(--color-green-800)] border border-[var(--color-green-200)]",
    },
    pilot: {
      label: "Pilot",
      classes:
        "bg-[var(--color-lime-500)] text-[var(--color-green-900)] border border-[var(--color-green-900)]/30 font-semibold",
    },
    later: {
      label: "Later",
      classes:
        "bg-[var(--color-gold-100)] text-[var(--color-gold-700)] border border-dashed border-[var(--color-gold-500)]",
    },
    future: {
      label: "Future",
      classes:
        "bg-[var(--color-gold-100)] text-[var(--color-gold-700)] border border-dashed border-[var(--color-gold-500)] font-semibold",
    },
  };

  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono-data tracking-wide uppercase",
        config.classes,
        className
      )}
    >
      {config.label}
    </span>
  );
}
