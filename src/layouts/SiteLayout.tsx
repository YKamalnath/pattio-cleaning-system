import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "../components/WhatsAppButton";

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
  return (
    <div className="min-h-screen bg-transparent">
      <ScrollToTop />
      <Header />
      <main className="mx-auto min-h-[60vh] pt-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

