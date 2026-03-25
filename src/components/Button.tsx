import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold transition transform-gpu active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-70 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  to,
  href,
  target,
  rel,
  type,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const variantClass =
    variant === "primary"
      ? "bg-accent text-ink shadow-glow hover:bg-brandGreen2 hover:shadow-glow/80"
      : variant === "secondary"
        ? "bg-highlight/15 text-white ring-1 ring-highlight/30 hover:bg-highlight/20"
        : variant === "outline"
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "text-white/90 hover:text-white hover:bg-white/10";

  // Animated gradient sweep for primary buttons.
  const gradientSweep =
    variant === "primary"
      ? "relative overflow-hidden"
      : "relative overflow-hidden";

  const sweep =
    variant === "primary" ? (
      <>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-highlight/30 via-accent/15 to-highlight/30 opacity-0 blur-[6px] transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 translate-x-[-30%] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.22),transparent_55%)] opacity-60"
        />
      </>
    ) : null;

  const content = (
    <>
      {sweep}
      <span className="relative">{children}</span>
    </>
  );

  const classNames = cn(base, sizes[size], variantClass, gradientSweep, className);

  if (to) {
    return (
      <Link to={to} className={cn(classNames, "group")}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={cn(classNames, "group")}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      className={cn(classNames, "group")}
    >
      {content}
    </button>
  );
}
