import React from "react";
import { cn } from "../utils/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "left" ? "text-left lg:mx-0" : "text-center",
      )}
    >
      {eyebrow ? (
        <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-4 text-4xl font-extrabold leading-tight sm:text-5xl",
          tone === "dark" ? "text-white" : "text-slate-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/75" : "text-slate-700",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

