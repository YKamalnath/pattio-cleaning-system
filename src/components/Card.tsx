import React from "react";
import { cn } from "../utils/cn";

export default function Card({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border p-5 shadow-soft backdrop-blur-xl transition",
        tone === "dark"
          ? "border-white/10 bg-white/5 text-white hover:border-white/15"
          : "border-slate-200/70 bg-white/80 text-slate-950 hover:border-slate-200/90",
        className,
      )}
    >
      {children}
    </div>
  );
}

