import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, PhoneCall, MessageCircle } from "lucide-react";
import { business, waBaseUrl } from "../config/business";
import SectionHeading from "./SectionHeading";

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm font-semibold text-white/65">
        {label}
      </div>
    </div>
  );
}

const heroImage =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80";

export default function CinematicHero({
  headline,
  subheadline,
}: {
  headline: string;
  subheadline: string;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, -7]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 65]);
  const cardRotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);
  const cardRotateZ = useTransform(scrollYProgress, [0, 1], [-6, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  const quoteHref = "/contact#quote";
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    "Hi! I’d like a free quote for patio cleaning in my area. Please message me with next steps.",
  );

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Cinematic background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          rotate: bgRotate,
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(27,170,107,0.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.08),transparent_60%),linear-gradient(180deg,#050a13,rgba(5,10,19,0))]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_210deg_at_60%_50%,rgba(27,170,107,0.18),transparent,rgba(11,43,75,0.35))]" />
      </motion.div>

      <div className="absolute -top-24 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-brandGreen/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Patio cleaning and outdoor pressure washing across the UK"
              title={headline}
              description={subheadline}
            />

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to={quoteHref}
                className="anchor-offset inline-flex items-center justify-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-base font-bold text-ink shadow-glow transition hover:bg-brandGreen2 hover:shadow-glow/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Free Quote
              </Link>

              <a
                href={callHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-bold text-white/90 shadow-soft transition hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5 text-brandGreen" />
                Call Now
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandGreen px-6 py-3 text-base font-bold text-ink shadow-glow transition hover:bg-brandGreen2 hover:shadow-glow/80"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <HeroStat value="Fast" label="Quotes and scheduling" />
              <HeroStat value="Care" label="Surface-first cleaning" />
              <HeroStat value="Cleaner" label="Moss + algae removal" />
              <HeroStat value="Trust" label="Transparent, local service" />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
              <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-white/5 ring-1 ring-white/10">
                <div className="h-2.5 w-2.5 rounded-full bg-brandGreen shadow-glow" />
              </div>
              <div>
                <div className="font-bold text-white/85">
                  Free, no-obligation quote
                </div>
                <div className="mt-0.5">
                  Send photos on WhatsApp for quicker estimates.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative perspective-[900px]">
              <motion.div
                style={{
                  y: fgY,
                  opacity: cardOpacity,
                  transformStyle: "preserve-3d",
                  rotateX: cardRotateX,
                  rotateZ: cardRotateZ,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur"
              >
                <div className="rounded-[1.6rem] overflow-hidden ring-1 ring-white/10">
                  <div className="relative h-[320px] sm:h-[380px]">
                    <img
                      src={heroImage}
                      alt="Restored patio results sample"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-3xl bg-brandBlue/70 backdrop-blur p-4 ring-1 ring-white/15">
                        <div className="text-sm font-bold text-white">
                          Before → After Results
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85 ring-1 ring-white/15">
                            Pressure washing
                          </span>
                          <span className="rounded-full bg-brandGreen/20 px-3 py-1 text-xs font-bold text-white/85 ring-1 ring-brandGreen/25">
                            Moss + algae removal
                          </span>
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/85 ring-1 ring-white/15">
                            Safe finish
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="text-2xl font-bold text-white">1–2</div>
                    <div className="mt-1 text-xs font-semibold text-white/60">
                      Weeks average time saved
                    </div>
                  </div>
                  <div className="rounded-3xl bg-brandGreen/10 p-4 ring-1 ring-brandGreen/25">
                    <div className="text-2xl font-bold text-white">UK</div>
                    <div className="mt-1 text-xs font-semibold text-white/60">
                      Local coverage and friendly service
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="pointer-events-none absolute -bottom-12 left-4 rounded-3xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-center gap-2 text-sm font-bold text-white/85">
                  <ChevronDown className="h-4 w-4 text-brandGreen" />
                  Scroll for results
                </div>
                <div className="mt-0.5 text-xs text-white/60">
                  Cinematic sections + interactive gallery
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

