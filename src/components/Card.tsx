import React from "react";
import { cn } from "../utils/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}

