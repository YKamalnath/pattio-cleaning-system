import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Lenis from "@studio-freight/lenis";
import { usePrefersReducedMotion } from "../utils/usePrefersReducedMotion";
import MobileBottomNav from "../components/MobileBottomNav";
import LiveChatWidget from "../components/LiveChatWidget";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      // Keep it responsive for mobile/low-end devices.
      lerp: 0.08,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      // Some Lenis versions expose destroy; if not, this is harmless.
      try {
        (lenis as any).destroy?.();
      } catch {
        // no-op
      }
    };
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-transparent">
      <ScrollToTop />
      <Header />
      <main className="mx-auto min-h-[60vh] pt-0 pb-24 sm:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomNav />
      <LiveChatWidget />
    </div>
  );
}

