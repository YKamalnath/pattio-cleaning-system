import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { business, waBaseUrl } from "../../config/business";
import { gallery } from "../../data/gallery";
import Button from "../Button";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const heroImage =
  gallery[0]?.afterUrl ??
  "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1400&q=80";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur">
      <div className="text-2xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-sm font-semibold text-white/70">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like a free quote for patio cleaning in my area.`
  );

  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-primary"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(34,197,94,0.18),transparent_60%),linear-gradient(180deg,#020617,rgba(2,6,23,0.6))]"
      />

      <motion.div
        aria-hidden="true"
        className="absolute left-[-140px] top-[-140px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-180px] bottom-[-180px] h-[520px] w-[520px] rounded-full bg-highlight/10 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Premium outdoor cleaning"
                title="Patio cleaning that looks new again."
                description="Surface-first pressure washing and moss/algae removal. Clear communication, careful finishes, and results you can see immediately."
                tone="dark"
                align="left"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  variant="primary"
                  size="lg"
                  to="/#contact"
                  className="w-full sm:w-auto"
                >
                  <Sparkles className="h-4 w-4" />
                  Get Free Quote
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  to="/#gallery"
                  className="w-full sm:w-auto"
                >
                  See Before/After
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/70">
                <a
                  href={callHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white/85 transition hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4 text-accent" />
                  Call {business.telephoneDisplay}
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-semibold text-white/85 transition hover:bg-white/10"
                >
                  <MessageCircle className="h-4 w-4 text-highlight" />
                  WhatsApp for fast estimates
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Stat value="4.9★" label="Trusted local results" />
                <Stat value="1 hour" label="Typical quote response" />
                <Stat value="Care" label="Surface-first technique" />
                <Stat value="Clean" label="Moss + algae removal" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <motion.div
                initial={{ opacity: 0, y: 16, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[1.6rem] ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.25),transparent_55%)] opacity-90" />
                  <img
                    src={heroImage}
                    alt="Restored outdoor patio sample"
                    className="h-[320px] w-full object-cover sm:h-[390px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-2xl bg-black/30 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur ring-1 ring-white/10">
                    Before → After restoration
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-3xl bg-brandBlue/70 p-4 ring-1 ring-white/15 backdrop-blur">
                        <div className="text-xs font-bold text-white/70">
                          Quote details
                        </div>
                        <div className="mt-1 text-lg font-extrabold text-white">
                          Photos help
                        </div>
                      </div>
                      <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
                        <div className="text-xs font-bold text-white/70">
                          Typical timeline
                        </div>
                        <div className="mt-1 text-lg font-extrabold text-white">
                          Fast booking
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                  <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                    <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
                    Clear steps from day one
                  </div>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-brandGreen2"
                  >
                    Get started <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

