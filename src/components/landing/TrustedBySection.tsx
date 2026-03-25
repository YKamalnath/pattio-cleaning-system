import React from "react";
import { ShieldCheck, Star } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const logoBadges = [
  { name: "Checkatrade", icon: ShieldCheck },
  { name: "Which? Trusted Traders", icon: Star },
  { name: "Local London Homes", icon: Star },
  { name: "Garden & Patio Society", icon: Star },
] as const;

export default function TrustedBySection() {
  return (
    <Section variant="light" className="py-16 sm:py-22">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Trusted by"
            title="Recognised for quality and care."
            description="Premium cleaning, transparent communication, and safe surface technique."
            tone="light"
            align="center"
            titleGradient
          />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {logoBadges.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 text-center shadow-soft backdrop-blur-xl"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 ring-1 ring-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="mt-4 text-sm font-extrabold text-slate-950">
                  {b.name}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-600">
                  Certification / Partner
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

