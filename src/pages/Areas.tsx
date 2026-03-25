import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Card from "../components/Card";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { areas, areaBullets } from "../data/areas";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function AreaCard({ area }: { area: string }) {
  return (
    <Card className="rounded-3xl p-5 transition hover:ring-1 hover:ring-brandGreen/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-base font-bold text-white">{area}</div>
          <div className="mt-1 text-sm leading-relaxed text-white/70">
            Patio cleaning, driveway cleaning, and outdoor pressure washing.
          </div>
        </div>
        <MapPin className="h-5 w-5 text-brandGreen" />
      </div>
      <div className="mt-4 rounded-2xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
        <div className="text-xs font-bold text-brandGreen">Available</div>
      </div>
    </Card>
  );
}

export default function Areas() {
  return (
    <>
      <Seo
        title="Areas We Cover"
        description="UK patio cleaning and outdoor pressure washing across London and nearby counties. Fast scheduling and free, no-obligation quotes."
      />

      <PageHeader
        eyebrow="Areas We Cover"
        title="Serving Greater London and surrounding counties"
        description="If you’re within our local coverage, we’ll help you restore your patio and outdoor surfaces with a clean, professional finish."
      />

      <main className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Coverage"
            title="Where we clean"
            description="Choose your area to see examples of the services we provide and request a tailored quote."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a, idx) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
              >
                <AreaCard area={a} />
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
                  <ShieldCheck className="h-6 w-6 text-brandGreen" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    Reliable local visits
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Clear timings and consistent results across our service areas.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
                  <Clock className="h-6 w-6 text-brandGreen" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    Fast quotes
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    Send photos on WhatsApp for quick, practical estimates.
                  </div>
                </div>
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
                  <MapPin className="h-6 w-6 text-brandGreen" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    Nearby coverage
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    If you’re just outside the list, message us—sometimes we can still help.
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-bold text-white">
                  What we cover on most jobs
                </div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  {areaBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brandGreen" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 md:mt-0">
                <Link
                  to="/contact#quote"
                  className="inline-flex items-center justify-center rounded-full bg-brandGreen px-6 py-3 text-base font-bold text-ink shadow-glow transition hover:bg-brandGreen2"
                >
                  Get a Free Quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <ContactForm contextLabel="Request a Coverage Quote" />
          </div>
        </Container>
      </main>
    </>
  );
}

