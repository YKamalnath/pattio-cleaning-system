import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { faqs } from "../../data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(faqs[0]?.id ?? null);

  return (
    <Section id="faq" variant="light" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers, without the fluff."
            description="Everything you need to feel confident about your patio restoration."
            tone="light"
            align="center"
            titleGradient
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="grid gap-3">
            {faqs.map((f) => {
              const open = f.id === openId;
              return (
                <div
                  key={f.id}
                  className="rounded-[2rem] border border-slate-200/70 bg-white/70 backdrop-blur p-5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : f.id)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                    aria-expanded={open}
                  >
                    <div className="min-w-0">
                      <div className="text-base font-extrabold text-slate-950">
                        {f.question}
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-accent" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <p className="mt-3 text-sm leading-relaxed text-slate-700">
                          {f.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

