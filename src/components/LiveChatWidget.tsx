import React from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { business, waBaseUrl } from "../config/business";
import { AnimatePresence, motion } from "framer-motion";

export default function LiveChatWidget() {
  const [open, setOpen] = React.useState(false);

  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like to chat about patio cleaning.`,
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 left-5 z-50 hidden sm:inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/15 shadow-soft backdrop-blur-xl transition hover:bg-white/15"
        aria-label="Open live chat"
      >
        <MessageCircle className="h-5 w-5 text-accent" />
        Live chat
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/10 bg-primary/90 p-6 shadow-soft backdrop-blur-xl"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-white/90 ring-1 ring-accent/25">
                    <MessageCircle className="h-4 w-4 text-accent" />
                    Live chat
                  </div>
                  <div className="mt-3 text-xl font-extrabold text-white">
                    Premium support, fast replies
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Chat widget integration is optional. For now, we can route
                    your message through WhatsApp for the quickest response.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                  aria-label="Close chat"
                >
                  ×
                </button>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <a
                  href={callHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4 text-accent" />
                  Call now
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-amber-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

