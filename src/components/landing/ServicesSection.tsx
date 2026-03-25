import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { services } from "../../data/services";
import { business } from "../../config/business";
import Button from "../Button";
import Card from "../Card";
import Container from "../Container";
import Reveal from "../Reveal";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import ServiceIcon from "../ServiceIcon";
import TiltCard from "../luxury/TiltCard";
import type { QuotePrefill } from "../InstantQuoteModal";

export default function ServicesSection({
  onInstantQuote,
}: {
  onInstantQuote?: (prefill?: QuotePrefill) => void;
}) {
  const [coarsePointer, setCoarsePointer] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia?.("(pointer: coarse)");
    if (!mq) return;
    const update = () => setCoarsePointer(mq.matches);
    update();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <Section id="services" variant="dark" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything cleaned, from patios to fences"
          description="Pick the surfaces you want restored. We handle the full process—from pre-treatment to the final, careful rinse."
          tone="dark"
          align="center"
        />

        {/* Mobile: swipeable cards */}
        <div className="mt-12 sm:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 pl-1 pr-4 scroll-smooth snap-x snap-mandatory">
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.015 }}
                className="snap-start"
              >
                <div className="min-w-[84vw]">
                  <TiltCard disabled={coarsePointer}>
                    <Card
                      className="h-full rounded-3xl p-6 transition hover:border-accent/30"
                      tone="dark"
                    >
                      <div className="flex items-start gap-4">
                        <ServiceIcon name={s.icon} className="h-6 w-6" />
                        <div className="min-w-0">
                          <div className="text-lg font-extrabold text-white">
                            {s.title}
                          </div>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                            {s.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white/70 ring-1 ring-white/10">
                          <Sparkles className="h-3.5 w-3.5 text-highlight" />
                          Surface-first care
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            onInstantQuote?.({
                              serviceRequired: s.id,
                              areaSizeSqm: 30,
                              cleaningIntensity: "standard",
                              urgent: false,
                              message: `I’d like a free quote for ${s.title}. Photos are available on WhatsApp.`,
                            })
                          }
                          className="!px-4 !h-10 text-white/90 hover:text-white"
                        >
                          Quote
                        </Button>
                      </div>
                    </Card>
                  </TiltCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: premium grid */}
        <div className="mt-12 hidden grid-cols-1 gap-4 sm:grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
            >
              <TiltCard disabled={coarsePointer}>
                <Card
                  className="h-full rounded-3xl p-6 transition hover:border-accent/30"
                  tone="dark"
                >
                  <div className="flex items-start gap-4">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                    <div className="min-w-0">
                      <div className="text-lg font-extrabold text-white">
                        {s.title}
                      </div>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-bold text-white/70 ring-1 ring-white/10">
                      <Sparkles className="h-3.5 w-3.5 text-highlight" />
                      Surface-first care
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        onInstantQuote?.({
                          serviceRequired: s.id,
                          areaSizeSqm: 30,
                          cleaningIntensity: "standard",
                          urgent: false,
                          message: `I’d like a free quote for ${s.title}. Photos are available on WhatsApp.`,
                        })
                      }
                      className="!px-4 !h-10 text-white/90 hover:text-white"
                    >
                      Request a quote{" "}
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-bold tracking-wide text-accent">
                  Not sure which service fits?
                </div>
                <div className="mt-2 text-2xl font-extrabold text-white">
                  Tell us what you see—we’ll recommend the right approach.
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="primary" size="md" to="/#contact">
                  Get a fast recommendation
                </Button>
                <Button variant="outline" size="md" href={`tel:${business.telephone}`}>
                  Call now
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

