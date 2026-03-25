import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import BeforeAfterSlider from "../BeforeAfterSlider";
import GalleryGrid from "../GalleryGrid";
import Reveal from "../Reveal";
import Button from "../Button";
import { gallery } from "../../data/gallery";

export default function BeforeAfterSection() {
  const g0 = gallery[0];

  return (
    <Section id="gallery" variant="light" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <BeforeAfterSlider
                beforeUrl={g0.beforeUrl}
                afterUrl={g0.afterUrl}
                beforeLabel="Before"
                afterLabel="After"
                className="shadow-[0_0_0_1px_rgba(56,189,248,0.12)]"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.06} className="lg:sticky lg:top-[96px]">
              <SectionHeading
                eyebrow="Before / After"
                title="The transformation is instant."
                description="Drag the split comparison to see how moss, algae and embedded grime lift away—without harsh damage."
                tone="light"
                align="left"
              />

              <div className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white/70 p-6 backdrop-blur">
                <div className="text-sm font-bold text-accent">
                  What we focus on
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                    Moss + algae breakdown for safer surfaces
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-highlight" />
                    Embedded grime lift with pre-treatment
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                    Careful final rinse for a clean, bright finish
                  </li>
                </ul>

                <div className="mt-6">
                  <Button variant="primary" size="md" to="/#contact">
                    Request your free quote <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-12">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold tracking-wide text-accent">
                  Clean image grid
                </div>
                <div className="mt-2 text-2xl font-extrabold text-slate-950">
                  Tap any job to view restored results
                </div>
              </div>
              <Button variant="outline" size="md" to="/#contact" className="hidden sm:inline-flex">
                Book a visit
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <GalleryGrid items={gallery} />
        </div>
      </Container>
    </Section>
  );
}

