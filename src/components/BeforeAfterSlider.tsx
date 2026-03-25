import React from "react";
import { Minus, Plus, ChevronLeft } from "lucide-react";
import { cn } from "../utils/cn";

export default function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const [value, setValue] = React.useState(52); // percent shown of `after`

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5",
        className,
      )}
    >
      <div className="relative h-[320px] w-full sm:h-[400px]">
        {/* After (bottom) */}
        <div className="absolute inset-0">
          <img
            src={afterUrl}
            alt={afterLabel}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-black/10 to-transparent" />
        </div>

        {/* Before (top) clipped */}
        <div className="absolute inset-0">
          <div
            className="h-full overflow-hidden"
            style={{ width: `${value}%` }}
          >
            <img
              src={beforeUrl}
              alt={beforeLabel}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_0_60px_rgba(56,189,248,0.15)]"
          style={{ left: `${value}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `calc(${value}% - 20px)` }}
        >
          <div className="flex items-center gap-2 rounded-full bg-primary/85 px-3 py-2 ring-1 ring-white/15 backdrop-blur">
            <span className="flex items-center text-xs font-bold text-white/90">
              <Minus className="h-4 w-4 text-accent" />
              <span className="ml-1 hidden sm:inline">{beforeLabel}</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_1px_rgba(34,197,94,0.35),0_0_30px_rgba(34,197,94,0.35)]" />
            <span className="flex items-center text-xs font-bold text-white/90">
              <Plus className="h-4 w-4 text-highlight" />
              <span className="ml-1 hidden sm:inline">{afterLabel}</span>
            </span>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute left-4 top-4 rounded-2xl bg-black/35 px-3 py-2 text-xs font-bold text-white/90 backdrop-blur ring-1 ring-white/10">
          {beforeLabel}
        </div>
        <div className="absolute right-4 top-4 rounded-2xl bg-accent/20 px-3 py-2 text-xs font-bold text-white/90 backdrop-blur ring-1 ring-accent/25">
          {afterLabel}
        </div>

        {/* Slider input */}
        <input
          aria-label="Before and after comparison slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className={cn(
            "absolute inset-0 cursor-ew-resize bg-transparent opacity-0",
            "focus:opacity-0",
          )}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-white/60">
        <div className="flex items-center gap-2">
          <ChevronLeft className="h-4 w-4 text-white/50" />
          Drag to compare
        </div>
        <div className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
          Move: {value}%
        </div>
      </div>
    </div>
  );
}

