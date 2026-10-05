import { cn } from "@/lib/utils";

interface LifecycleStripProps {
  stages: string[];
  currentStageIndex?: number;
  className?: string;
}

export function LifecycleStrip({
  stages,
  currentStageIndex = 4,
  className,
}: LifecycleStripProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[16px] bg-[var(--color-green-950)]/60 border border-[var(--border-inverse)] p-4 md:p-6",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="text-xs uppercase tracking-[0.14em] font-mono-data text-[var(--color-lime-500)]">
          Tree Lifecycle Journey
        </span>
        <span className="text-xs font-mono-data text-[var(--color-sand-100)]/60">
          5 Verified Stages
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {stages.map((stage, idx) => {
          const isCompleted = idx <= currentStageIndex;
          const isCurrent = idx === currentStageIndex;

          return (
            <div key={stage} className="flex items-center gap-2 md:gap-3">
              <div
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-data transition-all",
                  isCompleted
                    ? "bg-[var(--color-green-800)] text-[var(--color-sand-100)] border border-[var(--color-lime-500)]/40"
                    : "bg-[var(--color-green-950)] text-[var(--color-sand-100)]/40 border border-transparent",
                  isCurrent && "ring-2 ring-[var(--color-lime-500)] ring-offset-2 ring-offset-[var(--color-green-950)]"
                )}
              >
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    isCompleted ? "bg-[var(--color-lime-500)]" : "bg-white/20"
                  )}
                />
                <span>{stage}</span>
              </div>

              {idx < stages.length - 1 && (
                <span className="text-[var(--color-lime-500)]/40 text-xs font-mono-data select-none">
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
