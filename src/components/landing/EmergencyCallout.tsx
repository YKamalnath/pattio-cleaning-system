import React from "react";
import { MessageCircle, PhoneCall, Timer } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import Reveal from "../Reveal";
import Button from "../Button";
import { business, waBaseUrl } from "../../config/business";

export default function EmergencyCallout() {
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I need an urgent patio cleaning visit. My postcode is...`,
  );

  return (
    <Section variant="dark" className="py-10 sm:py-16">
      <Container>
        <Reveal>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-white/90 ring-1 ring-accent/25">
                  <Timer className="h-4 w-4 text-accent" />
                  Emergency / urgent requests
                </div>
                <div className="mt-4 text-2xl font-extrabold text-white lg:text-3xl">
                  Need it cleared quickly? We’ll try to fit you in.
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Select “urgent” in the quote flow and we’ll respond with
                  the soonest available visit window.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={callHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4 text-accent" />
                  Tap-to-call
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-amber-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp urgent
                </a>
                <Button
                  variant="outline"
                  size="md"
                  to="/#contact"
                  className="sm:!px-6"
                >
                  Book in advance
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

