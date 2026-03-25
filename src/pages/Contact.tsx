import React from "react";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import GoogleMapsEmbed from "../components/GoogleMapsEmbed";
import { business, waBaseUrl } from "../config/business";
import Card from "../components/Card";
import { PhoneCall, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Contact() {
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I’d like a free quote. My address/postcode is: `
  );

  return (
    <>
      <Seo
        title="Contact"
        description="Request a free quote for patio cleaning and outdoor pressure washing across London and surrounding UK areas. Call or WhatsApp for fast scheduling."
      />

      <PageHeader
        eyebrow="Contact"
        title="Free quotes for patios, driveways & outdoor cleaning"
        description="Call or WhatsApp for fast estimates, or fill in the quote request form for a written response."
        rightBadge={
          <div className="rounded-3xl bg-brandGreen/10 p-5 ring-1 ring-brandGreen/25 backdrop-blur">
            <div className="text-sm font-bold text-white">Instant lead capture</div>
            <div className="mt-2 text-sm leading-relaxed text-white/70">
              Phone, WhatsApp, and a quote request form—no waiting around.
            </div>
          </div>
        }
      />

      <main className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How to reach us"
            title="We respond quickly"
            description="For fastest service, send a couple of photos with your postcode via WhatsApp."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="rounded-3xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
                      <PhoneCall className="h-6 w-6 text-brandGreen" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Click to call</div>
                      <a
                        href={callHref}
                        className="mt-2 inline-block text-xl font-bold text-white hover:text-brandGreen"
                      >
                        {business.telephoneDisplay}
                      </a>
                      <div className="mt-1 text-sm text-white/70">
                        Fast scheduling during business hours.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="rounded-3xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-brandGreen/15 p-3 ring-1 ring-brandGreen/25">
                      <MessageCircle className="h-6 w-6 text-brandGreen" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">WhatsApp for photos</div>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-brandGreen px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-brandGreen2"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp us
                      </a>
                      <div className="mt-1 text-sm text-white/70">
                        Tell us your postcode for quicker estimates.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="rounded-3xl p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                      <Mail className="h-6 w-6 text-brandGreen" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Email</div>
                      <a
                        href={`mailto:${business.email}`}
                        className="mt-2 inline-block text-xl font-bold text-white hover:text-brandGreen"
                      >
                        {business.email}
                      </a>
                      <div className="mt-1 text-sm text-white/70">
                        For larger projects and scheduled visits.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
                <div className="text-sm font-bold text-brandGreen/90">Quote tips</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brandGreen" />
                    Add your postcode so we can check availability.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brandGreen" />
                    Mention if it’s moss, algae, staining, or weeds.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brandGreen" />
                    Share photos when possible for quicker quotes.
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div id="quote" className="anchor-offset">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <ContactForm contextLabel="Request a Quote" />
                </motion.div>
              </div>

              <div className="mt-6">
                <GoogleMapsEmbed />
              </div>

              <div className="mt-6 rounded-3xl bg-brandBlue/40 p-6 ring-1 ring-white/10 backdrop-blur">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-lg font-bold text-white">
                      Prefer quick booking?
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-white/70">
                      Call or WhatsApp and we’ll discuss your patio, driveway,
                      decking, or pathways.
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={callHref}
                      className="inline-flex items-center justify-center rounded-2xl bg-white/5 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/10 hover:bg-white/10"
                    >
                      Call
                    </a>
                    <Link
                      to="/gallery"
                      className="inline-flex items-center justify-center rounded-2xl bg-brandGreen px-5 py-3 text-sm font-bold text-ink shadow-glow hover:bg-brandGreen2"
                    >
                      View results
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}

