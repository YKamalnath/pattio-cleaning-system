import React from "react";
import Container from "../Container";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import TestimonialsCarousel from "../TestimonialsCarousel";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="light" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Customers notice the difference."
            description="Reliable communication, careful finishes, and results that stand out—every time."
            tone="light"
            align="center"
          />
        </Reveal>

        <div className="mt-10 rounded-[2rem] bg-primary/35 p-6 ring-1 ring-primary/10 backdrop-blur md:p-8">
          <TestimonialsCarousel items={testimonials} />
        </div>
      </Container>
    </Section>
  );
}

