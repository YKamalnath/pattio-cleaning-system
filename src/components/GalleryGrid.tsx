import React from "react";
import { motion } from "framer-motion";
import { PlusSquare, Sparkles } from "lucide-react";
import Card from "./Card";
import { cn } from "../utils/cn";
import type { GalleryItem } from "../data/gallery";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid({
  items,
  className,
}: {
  items: readonly GalleryItem[];
  className?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const activeIndex = React.useMemo(() => {
    if (!activeId) return 0;
    const idx = items.findIndex((i) => i.id === activeId);
    return idx === -1 ? 0 : idx;
  }, [activeId, items]);

  const openItem = (id: string) => {
    setActiveId(id);
    setOpen(true);
  };

  const onPrev = () => {
    const prev = (activeIndex - 1 + items.length) % items.length;
    setActiveId(items[prev].id);
  };

  const onNext = () => {
    const next = (activeIndex + 1) % items.length;
    setActiveId(items[next].id);
  };

  return (
    <>
      <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
        {items.map((item, idx) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => openItem(item.id)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: idx * 0.02 }}
            className="group text-left"
          >
            <Card className="p-0 overflow-hidden transition group-hover:ring-1 group-hover:ring-brandGreen/40">
              <div className="relative h-56">
                <img
                  src={item.afterUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-2xl bg-white/10 px-3 py-2 text-xs font-bold text-white/90 ring-1 ring-white/15 backdrop-blur">
                  Before/After Fix
                </div>
                <div className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-brandGreen px-3 py-2 text-xs font-bold text-ink shadow-glow opacity-90 transition group-hover:opacity-100">
                  <PlusSquare className="h-4 w-4" />
                  View
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-base font-bold text-white">
                      {item.title}
                    </div>
                    <div className="mt-1 line-clamp-2 text-sm text-white/70">
                      {item.subtitle}
                    </div>
                  </div>
                  <div className="hidden sm:block rounded-2xl bg-brandGreen/15 px-3 py-2 ring-1 ring-brandGreen/25">
                    <Sparkles className="h-5 w-5 text-brandGreen" />
                  </div>
                </div>
              </div>
            </Card>
          </motion.button>
        ))}
      </div>

      <GalleryLightbox
        items={items}
        open={open}
        activeId={activeId}
        onClose={() => setOpen(false)}
        onPrev={onPrev}
        onNext={onNext}
      />
    </>
  );
}

