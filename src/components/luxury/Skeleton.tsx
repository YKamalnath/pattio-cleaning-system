import React from "react";
import { cn } from "../../utils/cn";

export function Skeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl bg-slate-200/60",
        className,
      )}
    >
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[skeletonSweep_1.2s_ease-in-out_infinite]" />
      <style>{`
        @keyframes skeletonSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

