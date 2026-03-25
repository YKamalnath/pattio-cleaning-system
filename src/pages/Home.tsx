import React from "react";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import CinematicHero from "../components/CinematicHero";
import Container from "../components/Container";
import Card from "../components/Card";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../data/services";
import { gallery } from "../data/gallery";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { testimonials } from "../data/testimonials";
import { areas } from "../data/areas";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import { Link } from "react-router-dom";
import { Sparkles, ShieldCheck, Clock, Droplets } from "lucide-react";

function TrustBadge({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
          {icon}
        </div>
        <div>
          <div className="text-base font-bold text-white">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-white/70">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const g0 = gallery[0];

  return (
    <>
      <Seo
        title="Professional Patio Cleaning Services"
        description="Bring your patio back to life with expert pressure washing and deep outdoor cleaning. Fast, affordable and reliable service across London and the UK."
      />

      <CinematicHero
        headline="Professional Patio Cleaning Services"
        subheadline="Bring your patio back to life with expert pressure washing and deep outdoor cleaning. Fast, affordable, and reliable service."
      />

      <main>
        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Services"
              title="Everything cleaned, from patios to fences"
              description="Choose the service you need and we’ll handle the rest—professional cleaning, careful finishes, and clear communication."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    to="/services"
                    className="block h-full"
                    aria-label={`Learn more about ${s.title}`}
                  >
                    <Card className="h-full p-5 transition hover:ring-1 hover:ring-brandGreen/30">
                      <div className="flex items-start gap-4">
                        <ServiceIcon name={s.icon} className="h-6 w-6" />
                        <div className="min-w-0">
                          <div className="text-lg font-bold text-white">
                            {s.title}
                          </div>
                          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                            {s.short}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brandGreen">
                        View details <span aria-hidden="true">→</span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Why choose us"
              title="Trusted outdoor cleaning, done properly"
              description="Your surfaces are important. We clean with care, remove moss and algae safely, and leave your outdoor space looking truly restored."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <TrustBadge
                icon={<Clock className="h-6 w-6 text-brandGreen" />}
                title="Fast scheduling"
                desc="Most areas are booked quickly with clear updates from the start."
              />
              <TrustBadge
                icon={<ShieldCheck className="h-6 w-6 text-brandGreen" />}
                title="Surface-first technique"
                desc="We adjust pressure and cleaning approach to protect your paving, decking, and fencing."
              />
              <TrustBadge
                icon={<Droplets className="h-6 w-6 text-brandGreen" />}
                title="Deep outdoor results"
                desc="Pre-treatment and targeted cleaning lift embedded grime, moss, and algae."
              />
              <TrustBadge
                icon={<Sparkles className="h-6 w-6 text-brandGreen" />}
                title="Cinematic before/after"
                desc="You’ll see the difference immediately—cleaner, brighter, and safer to use."
              />
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <SectionHeading
                  eyebrow="Before and after"
                  title="See the transformation"
                  description="Drag the slider to compare how our cleaning restores patios and outdoor paving."
                />

                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-white/90">
                    What we focus on
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Moss and algae breakdown</li>
                    <li>• Stain removal and surface lift</li>
                    <li>• Careful rinse for a clean finish</li>
                  </ul>
                  <div className="mt-5">
                    <Link
                      to="/gallery"
                      className="inline-flex items-center gap-2 font-bold text-brandGreen"
                    >
                      Explore Gallery <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="mt-4 sm:mt-0">
                  <BeforeAfterSlider
                    beforeUrl={g0.beforeUrl}
                    afterUrl={g0.afterUrl}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Customer testimonials"
              title="Real feedback from local customers"
              description="We’re proud of consistent, reliable results—here’s what customers say after their patio and outdoor pressure washing."
            />

            <div className="mt-10">
              <TestimonialsCarousel items={testimonials} />
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Areas covered"
              title="Patio cleaning across London and the UK"
              description="From small residential gardens to larger outdoor spaces—our team cleans patios, driveways, decking, and more across surrounding counties."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <Card
                  key={area}
                  className="flex items-center justify-between rounded-3xl p-5 transition hover:ring-1 hover:ring-brandGreen/30"
                >
                  <div className="text-sm font-bold text-white">{area}</div>
                  <div className="text-xs font-bold text-brandGreen">Available</div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20" id="quote">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <SectionHeading
                  eyebrow="Contact"
                  title="Get a free quote today"
                  description="Send your details and we’ll help you choose the right cleaning service. Prefer phone or WhatsApp? It’s quick."
                />
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
                  <div className="text-sm font-bold text-white/90">
                    Lead-focused options
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>• Call for immediate scheduling</li>
                    <li>• WhatsApp for fast photo estimates</li>
                    <li>• Quote request for a written response</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ContactForm contextLabel="Request a Patio Cleaning Quote" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

