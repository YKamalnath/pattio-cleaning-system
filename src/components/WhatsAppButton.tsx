import React from "react";
import { MessageCircle } from "lucide-react";
import { business, waBaseUrl } from "../config/business";

export default function WhatsAppButton() {
  const prefill = `Hi ${business.name.split(" ")[0]} team, I'd like a free quote for patio cleaning and pressure washing in my area.`;

  return (
    <a
      href={waBaseUrl(prefill)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-2xl bg-brandGreen px-4 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-brandGreen2 sm:px-5"
    >
      <span className="rounded-full bg-white/15 p-2">
        <MessageCircle className="h-5 w-5 text-white" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}

