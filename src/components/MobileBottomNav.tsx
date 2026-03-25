import React from "react";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { business, waBaseUrl } from "../config/business";

export default function MobileBottomNav() {
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like a free quote for patio cleaning in my area.`,
  );

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto flex items-center justify-between gap-2 px-3 py-2">
        <a
          href={callHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/5 px-3 py-3 text-xs font-bold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
        >
          <PhoneCall className="h-4 w-4 text-accent" />
          Call
        </a>
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-accent px-3 py-3 text-xs font-bold text-ink shadow-glow transition hover:bg-brandGreen2"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href="/#contact"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white/5 px-3 py-3 text-xs font-bold text-white/90 ring-1 ring-white/10 transition hover:bg-white/10"
          aria-label="Get a quote"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          Quote
        </a>
      </div>
    </div>
  );
}

