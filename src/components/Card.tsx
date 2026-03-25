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
        "rounded-3xl border p-5 shadow-soft backdrop-blur-xl transition transform-gpu hover:-translate-y-0.5",
        tone === "dark"
          ? "border-white/10 bg-white/5 text-white hover:border-white/15 hover:shadow-highlight"
          : "border-slate-200/70 bg-white/80 text-slate-950 hover:border-slate-200/90",
        className,
      )}
    >
      {children}
    </div>
  );
}

