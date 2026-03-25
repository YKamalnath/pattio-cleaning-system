import React from "react";
import { Mail, MapPin, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import ContactForm from "../ContactForm";
import Reveal from "../Reveal";
import Button from "../Button";
import { business, waBaseUrl } from "../../config/business";
import { areas, areaBullets } from "../../data/areas";
import Card from "../Card";

export default function ContactSection() {
  const callHref = `tel:${business.telephone}`;
  const waHref = waBaseUrl(
    `Hi ${business.name.split(" ")[0]} team, I'd like a free quote for patio cleaning. My area is ${areas[0]}. Please can you contact me?`
  );

  return (
    <Section id="contact" variant="dark" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Get a free quote today."
                description="Send your details and we’ll recommend the best approach. Fast scheduling and clear next steps."
                tone="dark"
                align="left"
              />
            </Reveal>

            <Reveal delay={0.06}>
              <Card className="mt-8 rounded-[2rem] p-6" tone="dark">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-accent/10 p-3 ring-1 ring-accent/25">
                    <Sparkles className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold tracking-wide text-accent">
                      What happens next?
                    </div>
                    <div className="mt-2 text-xl font-extrabold text-white">
                      We respond quickly—often within 1 hour.
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  {areaBullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3">
                  <a
                    href={callHref}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                  >
                    <PhoneCall className="h-4 w-4 text-accent" />
                    Call {business.telephoneDisplay}
                  </a>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:bg-brandGreen2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp for photos
                  </a>
                </div>

                <div className="mt-5 flex items-center gap-3 text-xs text-white/60">
                  <Mail className="h-4 w-4 text-white/70" />
                  {business.email}
                </div>
              </Card>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur-xl sm:p-6">
              <ContactForm contextLabel="Request a Patio Cleaning Quote" />
            </div>

            <Reveal delay={0.08}>
              <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <div className="text-sm font-bold text-white/90">Service area</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/70">
                      Patios and outdoor cleaning across Greater London and nearby counties.
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 ring-1 ring-white/10">
                    <MapPin className="h-4 w-4 text-accent" />
                    <div className="text-sm font-bold text-white/80">{areas.length}+ locations</div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="secondary" size="md" to="/#gallery" className="w-full sm:w-auto">
                    View recent transformations
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

