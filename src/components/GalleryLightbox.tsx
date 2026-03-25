import React from "react";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { cn } from "../utils/cn";

type GalleryLightboxItem = {
  id: string;
  title: string;
  subtitle?: string;
  afterUrl: string;
};

export default function GalleryLightbox({
  items,
  open,
  activeId,
  onClose,
  onPrev,
  onNext,
}: {
  items: readonly GalleryLightboxItem[];
  open: boolean;
  activeId: string | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  // `items` should always be non-empty; we keep this resilient in case an
  // integration passes an empty list.
  const active = (items.find((i) => i.id === activeId) ?? items[0]) as any;

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onNext, onPrev]);

  if (!open || !active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col px-4 py-8">
        <div className="flex items-center justify-between gap-3">
          <div className="rounded-2xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15">
            {active.subtitle ?? active.title}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10",
              "ring-1 ring-white/15 text-white/90 transition hover:bg-white/15",
            )}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex flex-1 items-center">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous image"
            className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/15 text-white/90 transition hover:bg-white/15"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="relative mx-auto w-full overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 shadow-soft">
            <img
              src={active.afterUrl}
              alt={active.title}
              className="h-[52vh] w-full object-cover sm:h-[65vh]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent p-5">
              <div className="text-lg font-bold text-white">
                {active.title}
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                <ImageIcon className="h-4 w-4" />
                After restoration sample
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 ring-1 ring-white/15 text-white/90 transition hover:bg-white/15"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 text-center text-sm text-white/60">
          Tip: use <span className="font-bold text-white/80">←</span> and{" "}
          <span className="font-bold text-white/80">→</span> keys.
        </div>
      </div>
    </div>
  );
}

