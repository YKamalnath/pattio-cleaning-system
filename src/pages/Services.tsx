import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Card from "../components/Card";
import ServiceIcon from "../components/ServiceIcon";
import { services } from "../data/services";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Droplets, Wrench } from "lucide-react";

const detailsById: Record<string, string[]> = {
  "patio-cleaning": [
    "Pre-treatment for embedded grime",
    "Targeted pressure washing for a safe clean",
    "Optional protection advice to help reduce re-soiling",
  ],
  "driveway-cleaning": [
    "We remove staining and weed growth buildup",
    "Careful pressure settings to protect surfaces",
    "A cleaner finish that boosts curb appeal",
  ],
  "pressure-washing": [
    "Tailored pressure for different outdoor materials",
    "Efficient cleaning for hard-to-reach areas",
    "A practical, professional final rinse",
  ],
  "decking-cleaning": [
    "Lift algae and grime without over-aggressive cleaning",
    "Clean plank by plank for an even restoration",
    "Practical rinse to leave decking looking refreshed",
  ],
  "pathway-cleaning": [
    "Remove slick moss/algae for safer pathways",
    "Reduce stains and discolouration",
    "A tidy, tidy finish with clear next steps",
  ],
  "fence-cleaning": [
    "Refresh faded fences and remove outdoor marks",
    "Gentle approach to preserve the material",
    "Improved garden boundary appearance",
  ],
  "moss-algae-removal": [
    "Break down moss and algae buildup on hard surfaces",
    "Focus on the “green” areas that cause slipperiness",
    "Help make outdoor spaces cleaner and safer",
  ],
};

function IconBadge({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="rounded-3xl p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
          {icon}
        </div>
        <div>
          <div className="text-base font-bold text-white">{title}</div>
          <div className="mt-1 text-sm leading-relaxed text-white/70">{desc}</div>
        </div>
      </div>
    </Card>
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Services"
        description="Professional patio cleaning, driveway cleaning, pressure washing, decking cleaning, moss and algae removal, fence cleaning and more across the UK."
      />

      <PageHeader
        eyebrow="Services"
        title="Professional Outdoor Cleaning"
        description="Choose your service and we’ll handle the rest. Our approach is surface-first, careful, and built for long-lasting results."
      />

      <main className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Popular services"
            title="Cleaning that restores, not just removes"
            description="We tailor the pressure, agents, and rinse process to the material so you get a deep clean with a controlled finish."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, idx) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
              >
                <Card className="h-full rounded-3xl p-6">
                  <div className="flex items-start gap-4">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                    <div className="min-w-0">
                      <div className="text-lg font-bold text-white">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/70">
                        {s.description}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {(detailsById[s.id] ?? []).map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brandGreen" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <Link
                      to="/contact#quote"
                      className="inline-flex items-center gap-2 font-bold text-brandGreen hover:text-brandGreen2"
                    >
                      Request a quote for {s.title} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <IconBadge
              icon={<ShieldCheck className="h-6 w-6 text-brandGreen" />}
              title="Surface protection"
              desc="We adjust methods and rinse for the material you’re cleaning."
            />
            <IconBadge
              icon={<Droplets className="h-6 w-6 text-brandGreen" />}
              title="Targeted deep rinse"
              desc="We focus on grime lift without leaving residue."
            />
            <IconBadge
              icon={<Wrench className="h-6 w-6 text-brandGreen" />}
              title="Clear process"
              desc="You’ll know what’s happening and what to expect next."
            />
          </div>

          <div className="mt-14" id="contact">
            <ContactForm contextLabel="Request a Service Quote" />
          </div>
        </Container>
      </main>
    </>
  );
}

