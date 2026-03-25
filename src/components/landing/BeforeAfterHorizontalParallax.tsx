import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { GalleryItem } from "../../data/gallery";

export default function BeforeAfterHorizontalParallax({
  items,
}: {
  items: readonly GalleryItem[];
}) {
  const outerRef = React.useRef<HTMLDivElement | null>(null);
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const isMobile = window.innerWidth < 768;

    const maxX = () => {
      const overflow = inner.scrollWidth - outer.clientWidth;
      return Math.max(0, overflow);
    };

    const ctx = gsap.context(() => {
      gsap.to(inner, {
        x: () => -maxX(),
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "top bottom",
          end: isMobile ? "+=420" : "+=720",
          scrub: true,
        },
      });
    }, outer);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [items]);

  return (
    <div ref={outerRef} className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/60 backdrop-blur-xl">
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold tracking-wide text-accent">
              Transformations in motion
            </div>
            <div className="mt-2 text-2xl font-extrabold text-slate-950">
              Scroll to reveal the glow
            </div>
          </div>
          <div className="rounded-3xl bg-accent/15 px-4 py-3 text-sm font-extrabold text-slate-950 ring-1 ring-accent/20">
            Before / After
          </div>
        </div>

        <div className="mt-6">
          <div ref={innerRef} className="flex gap-4 pb-2">
            {items.map((it, idx) => (
              <motion.div
                key={it.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                className="w-[320px] shrink-0"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-slate-200/70 bg-white/70"
                >
                  <img
                    src={it.afterUrl}
                    alt={it.title}
                    className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-black/30 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-2xl bg-black/35 px-3 py-2 text-xs font-extrabold text-white ring-1 ring-white/10 backdrop-blur">
                    After
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-white/90 backdrop-blur">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-extrabold text-slate-950">
                          {it.title}
                        </div>
                        <div className="mt-1 line-clamp-1 text-xs font-bold text-slate-600">
                          {it.subtitle}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-accent/15 px-3 py-2 text-xs font-extrabold text-ink ring-1 ring-accent/20">
                        Before
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

