import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { testimonials } from "../data/testimonials";
import { motion } from "framer-motion";
import Card from "../components/Card";
import { Star } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Reviews() {
  const avg = 4.9;

  return (
    <>
      <Seo
        title="Customer Reviews"
        description="Read real customer reviews for patio cleaning and outdoor pressure washing across London and the UK."
      />

      <PageHeader
        eyebrow="Reviews"
        title="Trusted results, proven locally"
        description="See what customers say about our patio cleaning, driveway cleaning, decking cleaning, and moss/algae removal."
        rightBadge={
          <div className="rounded-3xl bg-brandGreen/10 p-5 ring-1 ring-brandGreen/25 backdrop-blur">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-white">{avg.toFixed(1)}</div>
              <div className="text-sm font-bold text-white/70">Average</div>
            </div>
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-brandGreen text-brandGreen"
                />
              ))}
            </div>
            <div className="mt-2 text-xs text-white/60">
              Based on recent customer feedback
            </div>
          </div>
        }
      />

      <main className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="What customers love about our service"
            description="From quick scheduling to a careful finish—customers consistently mention reliable communication and impressive results."
          />

          <div className="mt-10">
            <TestimonialsCarousel items={testimonials} />
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Card className="rounded-3xl p-6">
              <div className="text-sm font-bold text-brandGreen">Punctual</div>
              <div className="mt-2 text-xl font-bold text-white">On-time visits</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                Clear scheduling with a professional arrival.
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="text-sm font-bold text-brandGreen">Quality</div>
              <div className="mt-2 text-xl font-bold text-white">Surface-first cleaning</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                We clean deep without unnecessary damage.
              </div>
            </Card>
            <Card className="rounded-3xl p-6">
              <div className="text-sm font-bold text-brandGreen">Results</div>
              <div className="mt-2 text-xl font-bold text-white">Clear before/after</div>
              <div className="mt-2 text-sm leading-relaxed text-white/70">
                Moss, algae and stains lifted for a brighter finish.
              </div>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-14"
          >
            <ContactForm contextLabel="Request a Free Patio Cleaning Quote" />
          </motion.div>
        </Container>
      </main>
    </>
  );
}

