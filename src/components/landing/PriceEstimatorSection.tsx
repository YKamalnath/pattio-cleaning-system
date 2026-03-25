import React from "react";
import Section from "../Section";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import PriceEstimator from "../PriceEstimator";
import type { QuotePrefill } from "../InstantQuoteModal";

export default function PriceEstimatorSection({
  onInstantQuote,
}: {
  onInstantQuote: (prefill: QuotePrefill) => void;
}) {
  return (
    <Section id="pricing" variant="dark" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Instant pricing"
            title="Luxury results, priced for clarity."
            description="Use our estimator to get a premium quote range in seconds. Then we’ll confirm the details and book your visit."
            tone="dark"
            align="center"
            titleGradient
          />
        </Reveal>

        <div className="mt-12">
          <PriceEstimator onInstantQuote={onInstantQuote} />
        </div>
      </Container>
    </Section>
  );
}

