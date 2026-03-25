import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Card from "../components/Card";
import { motion } from "framer-motion";
import { ShieldCheck, PhoneCall, MapPin, Sparkles, Wrench } from "lucide-react";
import ContactForm from "../components/ContactForm";

function StepCard({
  step,
  title,
  desc,
  icon,
}: {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="rounded-3xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
          {icon}
        </div>
        <div className="text-2xl font-black text-white/20">{step}</div>
      </div>
      <div className="mt-4 text-lg font-bold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{desc}</div>
    </Card>
  );
}

export default function About() {
  return (
    <>
      <Seo
        title="About"
        description="Learn about our patio cleaning and outdoor pressure washing process. Surface-first cleaning, reliable communication, and results you can see."
      />

      <PageHeader
        eyebrow="About"
        title="Surface-first patio cleaning, built for real results"
        description="We’re an outdoor cleaning team serving patios, driveways, decking, pathways, fences, and moss/algae removal across London and nearby counties."
      />

      <main className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our promise"
            title="Clean, careful, and transparent"
            description="From the first message to the final rinse, we focus on the details that make your outdoor space look restored and feel safer."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-brandGreen" />
                <div className="text-lg font-bold text-white">No guesswork</div>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">
                We assess the surface and tailor the approach for a controlled finish.
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <Wrench className="h-6 w-6 text-brandGreen" />
                <div className="text-lg font-bold text-white">Careful equipment</div>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">
                Professional cleaning tools and pre-treatment for embedded grime and biology.
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-brandGreen" />
                <div className="text-lg font-bold text-white">Cinematic results</div>
              </div>
              <div className="mt-3 text-sm leading-relaxed text-white/70">
                Before/after improvements you can clearly see—right away.
              </div>
            </Card>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="How it works"
              title="A simple, professional process"
              description="We keep things straightforward so you know what to expect at every stage."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
              >
                <StepCard
                  step="01"
                  title="Tell us what you need cleaned"
                  desc="Send details via the quote form, call us, or message on WhatsApp—include photos for faster estimates."
                  icon={<PhoneCall className="h-6 w-6 text-brandGreen" />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.05 }}
              >
                <StepCard
                  step="02"
                  title="We confirm surface + schedule"
                  desc="We discuss the area, assess the build-up, and confirm a visit time that fits your schedule."
                  icon={<MapPin className="h-6 w-6 text-brandGreen" />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.1 }}
              >
                <StepCard
                  step="03"
                  title="Deep clean + final rinse"
                  desc="We treat the area, pressure wash carefully, and finish with a clean rinse so your outdoor space looks new."
                  icon={<ShieldCheck className="h-6 w-6 text-brandGreen" />}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-bold tracking-wide text-brandGreen/90">
                  Reliability
                </div>
                <div className="mt-2 text-2xl font-bold text-white">
                  Friendly communication from start to finish
                </div>
                <div className="mt-2 text-sm leading-relaxed text-white/70">
                  You’ll know what’s happening, when it’s happening, and the outcome you should expect.
                </div>
              </div>
              <div className="md:w-[320px]">
                <div className="rounded-3xl bg-brandGreen/10 p-5 ring-1 ring-brandGreen/25">
                  <div className="text-sm font-bold text-white">
                    Ready for a cleaner patio?
                  </div>
                  <div className="mt-2 text-sm text-white/70">
                    Request a free quote in minutes.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <ContactForm contextLabel="Request a Free Quote" />
          </div>
        </Container>
      </main>
    </>
  );
}

