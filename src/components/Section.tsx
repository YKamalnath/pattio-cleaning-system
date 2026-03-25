import React from "react";
import { cn } from "../utils/cn";

type Variant = "dark" | "light";

export default function Section({
  id,
  variant = "dark",
  children,
  className,
}: {
  id?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        id ? "anchor-offset" : "",
        variant === "dark"
          ? "bg-primary"
          : "bg-gradient-to-b from-white/90 via-slate-50/80 to-white/75",
        className,
      )}
    >
      {/* Subtle glow + texture separation */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          variant === "dark"
            ? "bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.14),transparent_60%)]"
            : "bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.16),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.10),transparent_60%)]",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 opacity-70",
          variant === "dark"
            ? "bg-[repeating-linear-gradient(135deg,rgba(245,158,11,0.04)_0,rgba(245,158,11,0.04)_1px,transparent_1px,transparent_10px)]"
            : "bg-[repeating-linear-gradient(135deg,rgba(2,6,23,0.03)_0,rgba(2,6,23,0.03)_1px,transparent_1px,transparent_10px)]",
        )}
      />

      <div className={cn("relative", variant === "light" ? "text-slate-950" : "text-white")}>
        {children}
      </div>
    </section>
  );
}

