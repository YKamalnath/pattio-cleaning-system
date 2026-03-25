import React from "react";
import { cn } from "../utils/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export default function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-brandGreen text-ink shadow-glow hover:bg-brandGreen2 hover:shadow-glow/80",
    secondary: "bg-brandBlue text-white hover:bg-brandBlue/90",
    outline:
      "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    ghost: "bg-transparent text-white/90 hover:bg-white/10",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm sm:text-base",
    lg: "px-7 py-3 text-base sm:text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

