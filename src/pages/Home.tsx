import React from "react";
import Seo from "../components/Seo";
import HeroSection from "../components/landing/HeroSection";
import ServicesSection from "../components/landing/ServicesSection";
import BeforeAfterSection from "../components/landing/BeforeAfterSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";

export default function Home() {
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
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

