import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Card from "./Card";
import { cn } from "../utils/cn";
import type { Testimonial } from "../data/testimonials";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} star rating`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < rating;
        return (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              filled ? "fill-accent text-accent" : "text-white/25",
            )}
          />
        );
      })}
    </div>
  );
}

export default function TestimonialsCarousel({
  items,
  className,
}: {
  items: readonly Testimonial[];
  className?: string;
}) {
  const [index, setIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const next = React.useCallback(() => {
    setIndex((v) => (v + 1) % items.length);
  }, [items.length]);

  const prev = React.useCallback(() => {
    setIndex((v) => (v - 1 + items.length) % items.length);
  }, [items.length]);

  React.useEffect(() => {
    if (isPaused) return;
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [isPaused, next]);

  const shown = React.useMemo(() => {
    const first = items[index];
    const second = items[(index + 1) % items.length];
    return [first, second];
  }, [index, items]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-white/70">
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          Customer feedback
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-white/80 transition hover:bg-white/10"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-white/80 transition hover:bg-white/10"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={shown[0].id}
            initial={{ opacity: 0, y: 14, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="h-full"
          >
            <Card className="h-full">
              <div className="flex items-start justify-between gap-3">
                <Stars rating={shown[0].rating} />
                <div className="rounded-2xl bg-brandGreen/15 px-3 py-1 text-xs font-bold text-white/85 ring-1 ring-brandGreen/25">
                  {shown[0].area}
                </div>
              </div>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                “{shown[0].quote}”
              </p>
              <div className="mt-5 text-sm font-bold text-white">
                {shown[0].name}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="hidden lg:block">
          <Card className="h-full">
            <div className="flex items-start justify-between gap-3">
              <Stars rating={shown[1].rating} />
              <div className="rounded-2xl bg-brandGreen/15 px-3 py-1 text-xs font-bold text-white/85 ring-1 ring-brandGreen/25">
                {shown[1].area}
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              “{shown[1].quote}”
            </p>
            <div className="mt-5 text-sm font-bold text-white">
              {shown[1].name}
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((t, i) => {
          const active = i === index;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                  active ? "bg-accent shadow-glow" : "bg-white/20 hover:bg-white/30",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}

