import React from "react";
import Seo from "../components/Seo";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import BeforeAfterSection from "../components/landing/BeforeAfterSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";
import PriceEstimatorSection from "../components/landing/PriceEstimatorSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import FAQSection from "../components/landing/FAQSection";
import TrustedBySection from "../components/landing/TrustedBySection";
import EmergencyCallout from "../components/landing/EmergencyCallout";
import SeasonalPromotionBanner from "../components/landing/SeasonalPromotionBanner";
import InstantQuoteModal, { type QuotePrefill } from "../components/InstantQuoteModal";
import LazyOnVisible from "../components/luxury/LazyOnVisible";
import { Skeleton } from "../components/luxury/Skeleton";

export default function Home() {
  const [quoteOpen, setQuoteOpen] = React.useState(false);
  const [quotePrefill, setQuotePrefill] = React.useState<QuotePrefill | undefined>(
    undefined,
  );

  const onInstantQuote = (prefill?: QuotePrefill) => {
    setQuotePrefill(prefill);
    setQuoteOpen(true);
  };

  React.useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      const id = hash.startsWith("#") ? hash.slice(1) : hash;
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      // The `anchor-offset` class provides sticky-header-safe spacing.
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <Seo
        title="Premium Patio Cleaning Services"
        description="Bring your patio back to life with premium pressure washing and moss/algae removal. Fast, free quotes across London and the UK."
      />
      <HeroSection onInstantQuote={onInstantQuote} />
      <ServicesSection onInstantQuote={onInstantQuote} />
      <BeforeAfterSection />
      <WhyChooseSection />
      <TrustedBySection />
      <EmergencyCallout />
      <SeasonalPromotionBanner />
      <PriceEstimatorSection onInstantQuote={onInstantQuote} />
      <HowItWorksSection />
      <LazyOnVisible
        fallback={<Skeleton className="h-[440px] bg-white/50" />}
      >
        <TestimonialsSection />
      </LazyOnVisible>

      <LazyOnVisible fallback={<Skeleton className="h-[520px]" />}>
        <ContactSection />
      </LazyOnVisible>

      <LazyOnVisible fallback={<Skeleton className="h-[420px]" />}>
        <FAQSection />
      </LazyOnVisible>

      <InstantQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        prefill={quotePrefill}
      />
    </>
  );
}

