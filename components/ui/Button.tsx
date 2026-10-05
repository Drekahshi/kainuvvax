import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonTone = "on-light" | "on-dark";

interface BaseButtonProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps & {
  href: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  tone = "on-light",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-full cursor-pointer select-none text-center";

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5 min-h-[38px]",
    md: "px-6 py-3 text-sm gap-2 min-h-[44px]",
    lg: "px-8 py-4 text-base gap-2.5 min-h-[52px]",
  };

  const variantToneClasses: Record<ButtonVariant, Record<ButtonTone, string>> = {
    primary: {
      "on-light":
        "bg-[var(--color-green-700)] text-[var(--color-sand-100)] hover:bg-[var(--color-green-800)] shadow-sm hover:-translate-y-0.5 active:translate-y-0",
      "on-dark":
        "bg-[var(--color-lime-500)] text-[var(--color-green-900)] font-semibold hover:bg-[var(--color-lime-400)] shadow-md hover:-translate-y-0.5 active:translate-y-0",
    },
    secondary: {
      "on-light":
        "bg-transparent border-[1.5px] border-[var(--color-green-700)] text-[var(--color-green-700)] hover:bg-[var(--color-green-700)] hover:text-[var(--color-sand-100)] active:translate-y-0",
      "on-dark":
        "bg-transparent border-[1.5px] border-[var(--color-sand-100)] text-[var(--color-sand-100)] hover:bg-[var(--color-sand-100)] hover:text-[var(--color-green-900)] active:translate-y-0",
    },
    ghost: {
      "on-light":
        "bg-transparent text-[var(--color-ink-900)] hover:bg-[var(--color-sand-200)]",
      "on-dark":
        "bg-transparent text-[var(--color-sand-100)] hover:bg-[var(--color-green-800)]",
    },
  };

  const combinedClasses = cn(
    baseClasses,
    sizeClasses[size],
    variantToneClasses[variant][tone],
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
