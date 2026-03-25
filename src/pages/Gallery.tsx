import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import GalleryGrid from "../components/GalleryGrid";
import { gallery } from "../data/gallery";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery"
        description="Before and after patio cleaning and outdoor pressure washing results across London and the UK. View real restoration examples."
      />

      <PageHeader
        eyebrow="Gallery"
        title="Before and after patio restoration"
        description="Browse sample results from recent patio cleaning, driveway cleaning, decking cleaning, moss and algae removal, fence cleaning, and pressure washing jobs."
      />

      <main className="py-14 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <SectionHeading
              eyebrow="Restoration examples"
              title="Cinematic clean results"
              description="Tap any image to view it in an immersive lightbox with next/previous navigation."
            />
          </div>

          <div className="mt-10">
            <GalleryGrid items={gallery} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mt-14"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold text-brandGreen">
                    <Sparkles className="h-4 w-4" />
                    Looking for results like these?
                  </div>
                  <div className="mt-2 text-2xl font-bold text-white">
                    Request a free patio cleaning quote
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-white/70">
                    Send photos on WhatsApp for faster estimates.
                  </div>
                </div>
                <div className="md:w-[320px]">
                  <div className="rounded-3xl bg-brandGreen/10 p-5 ring-1 ring-brandGreen/25">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                        <Camera className="h-6 w-6 text-brandGreen" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          Typical response
                        </div>
                        <div className="text-sm text-white/70">
                          Within 1 hour during business hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-14">
            <ContactForm contextLabel="Request a Quote" />
          </div>
        </Container>
      </main>
    </>
  );
}

