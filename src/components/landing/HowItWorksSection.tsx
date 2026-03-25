import React from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function HowItWorksSection() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const steps = [
    {
      n: "01",
      title: "Send a quick request",
      desc: "Choose the service and share area size. Photos on WhatsApp speed everything up.",
    },
    {
      n: "02",
      title: "We confirm details",
      desc: "We respond quickly with the right approach and clear booking times for your visit.",
    },
    {
      n: "03",
      title: "Premium surface-first finish",
      desc: "Pre-treatment, careful pressure washing, and a final rinse. Results you can see immediately.",
    },
  ] as const;

  return (
    <Section variant="dark" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A luxury process from quote to finish."
            description="Built for clarity, surface safety, and transformations that feel intentional."
            tone="dark"
            align="center"
            titleGradient
          />
        </Reveal>

        <div ref={ref} className="relative mt-14">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-6 h-1 w-[calc(100%-3rem)] -translate-x-1/2 rounded-full bg-white/10"
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-6 h-1 w-[calc(100%-3rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent via-secondary to-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: inView ? 1 : 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            style={{ transformOrigin: "center" }}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map((s) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-sm font-extrabold tracking-wide text-accent">
                    Step {s.n}
                  </div>
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-3 text-xl font-extrabold text-white">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

