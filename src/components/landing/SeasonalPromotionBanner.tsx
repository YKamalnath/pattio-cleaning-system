import React from "react";
import { Sparkles } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import Reveal from "../Reveal";
import Button from "../Button";

export default function SeasonalPromotionBanner() {
  return (
    <Section variant="light" className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white/70 p-6 shadow-soft backdrop-blur-xl sm:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(245,158,11,0.22),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(16,185,129,0.16),transparent_60%)] opacity-70"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-ink ring-1 ring-accent/20">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Seasonal promotion
                </div>
                <div className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950">
                  Patio refresh discount for new bookings
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Ask for the “Spring Glow” offer when you request your quote.
                  Limited availability each week.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button variant="primary" size="md" to="/#contact">
                  Request the offer
                </Button>
                <div className="rounded-2xl border border-slate-200/70 bg-white/60 px-4 py-3 text-sm font-bold text-slate-900">
                  Quick photos = faster quote
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

