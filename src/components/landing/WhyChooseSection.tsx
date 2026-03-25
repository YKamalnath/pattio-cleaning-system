import React from "react";
import { motion } from "framer-motion";
import { Droplets, ShieldCheck, Timer, Sparkles } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import Card from "../Card";
import Button from "../Button";

const features = [
  {
    icon: ShieldCheck,
    title: "Surface-first technique",
    desc: "We tailor pressure and rinse for paving, decking, and fencing—clean deep without unnecessary risk.",
  },
  {
    icon: Timer,
    title: "Fast scheduling + clear updates",
    desc: "We confirm details, arrive on time, and keep you in the loop from quote to finish.",
  },
  {
    icon: Droplets,
    title: "Targeted moss + algae removal",
    desc: "Pre-treatment helps break down embedded biology so surfaces look brighter and feel safer.",
  },
  {
    icon: Sparkles,
    title: "Cinematic before/after results",
    desc: "The transformation is immediate—clean, crisp, and professionally finished.",
  },
];

export default function WhyChooseSection() {
  return (
    <Section
      id="why-choose-us"
      variant="dark"
      className="py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Premium results. Professional communication."
            description="We built our process for real outdoor restorations—clean, careful, and consistent across every surface type."
            tone="dark"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
              >
                <Card className="h-full rounded-3xl p-6" tone="dark">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-accent/10 p-3 ring-1 ring-accent/25">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-lg font-extrabold text-white">{f.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">{f.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-soft backdrop-blur">
                <div className="text-sm font-bold tracking-wide text-accent">
                  Conversion-friendly promise
                </div>
                <div className="mt-2 text-3xl font-extrabold text-white">
                  Fast, free quotes with photos on WhatsApp.
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Send your postcode and a couple of images. We’ll recommend the
                  right service and next steps quickly.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-bold text-white/80">
                  <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                  Typical response within 1 hour
                </div>
                <div className="mt-5">
                  <Button variant="primary" size="lg" to="/#contact" className="w-full">
                    Get your free quote
                  </Button>
                </div>
                <div className="mt-3 text-xs text-white/60">
                  No obligation. No pushy sales.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

