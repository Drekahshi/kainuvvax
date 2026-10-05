"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProvenanceLineProps {
  className?: string;
  variant?: "hero" | "connector";
}

export function ProvenanceLine({ className, variant = "hero" }: ProvenanceLineProps) {
  const shouldReduceMotion = useReducedMotion();

  if (variant === "connector") {
    return (
      <div className={cn("w-full h-4 relative flex items-center", className)} aria-hidden="true">
        <svg className="w-full h-2 overflow-visible" preserveAspectRatio="none">
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="var(--color-lime-500)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.4"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={cn("w-full h-16 relative overflow-hidden pointer-events-none", className)} aria-hidden="true">
      <svg viewBox="0 0 800 60" fill="none" className="w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M 10 30 Q 200 5, 400 30 T 790 30"
          stroke="var(--color-lime-500)"
          strokeWidth="1.5"
          fill="none"
          initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.85 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <circle cx="10" cy="30" r="3" fill="var(--color-lime-500)" />
        <circle cx="400" cy="30" r="3" fill="var(--color-lime-500)" />
        <circle cx="790" cy="30" r="3" fill="var(--color-lime-500)" />
      </svg>
    </div>
  );
}
