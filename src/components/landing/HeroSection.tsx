import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { business, waBaseUrl } from "../../config/business";
import { gallery } from "../../data/gallery";
import Button from "../Button";
import Reveal from "../Reveal";
import TextReveal from "../luxury/TextReveal";
import Magnetic from "../luxury/Magnetic";
import AnimatedCounter from "../luxury/AnimatedCounter";
import type { QuotePrefill } from "../InstantQuoteModal";

const heroImage =
  gallery[0]?.afterUrl ??
  "https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=1400&q=80";

function StatCard({
  value,
  suffix,
  label,
  decimals,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-xl">
      <div className="text-2xl font-extrabold text-white">
        <AnimatedCounter value={value} suffix={suffix ?? ""} decimals={decimals ?? 0} />
      </div>
      <div className="mt-1 text-sm font-semibold text-white/70">{label}</div>
    </div>
  );
}

export default function HeroSection({
  onInstantQuote,
}: {
  onInstantQuote?: (prefill?: QuotePrefill) => void;
}) {
  const heroRef = React.useRef<HTMLElement | null>(null);
  const bgRef = React.useRef<HTMLDivElement | null>(null);
  const glowRef = React.useRef<HTMLDivElement | null>(null);
  const rightCardRef = React.useRef<HTMLDivElement | null>(null);

  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like a free quote for patio cleaning in my area.`,
  );

  React.useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const heroEl = heroRef.current;
    const bgEl = bgRef.current;
    if (!heroEl || !bgEl) return;

    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.to(bgEl, {
        yPercent: isMobile ? -6 : -12,
        ease: "none",
        scrollTrigger: {
          trigger: heroEl,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: isMobile ? 10 : 24,
          rotate: isMobile ? 0 : 3,
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (rightCardRef.current) {
        gsap.to(rightCardRef.current, {
          y: isMobile ? 8 : 18,
          ease: "none",
          scrollTrigger: {
            trigger: heroEl,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroEl);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const defaultQuotePrefill: QuotePrefill = {
    serviceRequired: "patio-cleaning",
    areaSizeSqm: 30,
    cleaningIntensity: "standard",
    urgent: false,
    estimateRange: undefined,
    message: "I’d like a free quote. Photos are available on WhatsApp.",
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-primary"
    >
      {/* Background image */}
      <div ref={bgRef} aria-hidden="true" className="absolute inset-0 will-change-transform">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover scale-[1.08]"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/60 to-primary/95" />
      </div>

      {/* Animated premium gradient overlay */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-[conic-gradient(from_210deg_at_60%_40%,rgba(245,158,11,0.22),transparent,rgba(16,185,129,0.22),transparent)] opacity-70 mix-blend-screen"
        animate={{ rotate: [0, 16, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating glow layer */}
      <motion.div
        ref={glowRef}
        aria-hidden="true"
        className="absolute left-[-170px] top-[-140px] h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-[1320px] px-4 pb-14 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" aria-hidden="true" />
                Premium outdoor cleaning
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl font-serif">
                <TextReveal
                  text="Patio cleaning that looks new again."
                  className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent"
                  stagger={0.01}
                />
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Surface-first pressure washing and moss/algae removal. Clear
                communication, careful finishes, and results you can see
                immediately.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => onInstantQuote?.(defaultQuotePrefill)}
                    className="w-full sm:w-auto"
                  >
                    <Sparkles className="h-4 w-4" />
                    Get Free Quote
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </Magnetic>

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
                  <MessageCircle className="h-4 w-4 text-accent" />
                  WhatsApp for fast estimates
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard value={4.9} decimals={1} suffix="★" label="Trusted results" />
                <StatCard value={12} suffix="+" label="Years of experience" />
                <StatCard value={1200} suffix="+" label="Patios restored" />
                <StatCard value={1} suffix=" hr" label="Typical response" />
              </div>
            </Reveal>

            {/* Floating trust badges */}
            <div className="pointer-events-none mt-8 hidden sm:block">
              <div className="relative h-32">
                <motion.div
                  className="absolute left-0 top-0 rounded-[2rem] border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs font-bold text-white/70">As seen in</div>
                  <div className="mt-1 text-sm font-extrabold text-white">Premium Homes</div>
                </motion.div>
                <motion.div
                  className="absolute right-0 top-8 rounded-[2rem] border border-accent/20 bg-white/5 px-4 py-3 backdrop-blur-xl"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs font-bold text-white/70">Certified process</div>
                  <div className="mt-1 text-sm font-extrabold text-white">Surface-first care</div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.12}>
              <motion.div
                ref={rightCardRef}
                initial={{ opacity: 0, y: 16, rotateX: 8 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-xl"
              >
                <div className="relative overflow-hidden rounded-[1.6rem] ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(245,158,11,0.22),transparent_55%)] opacity-90" />
                  <img
                    src={heroImage}
                    alt="Restored outdoor patio sample"
                    className="h-[320px] w-full object-cover sm:h-[390px] transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-2xl bg-black/30 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur ring-1 ring-white/10">
                    Before → After restoration
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-3xl bg-primary/70 p-4 ring-1 ring-white/15 backdrop-blur-xl">
                        <div className="text-xs font-bold text-white/70">
                          Quote details
                        </div>
                        <div className="mt-1 text-lg font-extrabold text-white">
                          Photos help
                        </div>
                      </div>
                      <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xl">
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
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-secondary"
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

