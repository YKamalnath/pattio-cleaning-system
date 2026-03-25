import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import { business, waBaseUrl } from "../config/business";
import { cn } from "../utils/cn";
import Button from "../components/Button";

const navItems: Array<{ to: string; label: string }> = [
  { to: "/#services", label: "Services" },
  { to: "/#gallery", label: "Before/After" },
  { to: "/#why-choose-us", label: "Why Us" },
  { to: "/#testimonials", label: "Testimonials" },
  { to: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10",
        "bg-primary/70 backdrop-blur-xl",
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-highlight/0 via-highlight/40 to-accent/0" />

      <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/#top" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:bg-white/15">
            <div className="h-5 w-5 rounded-full bg-accent shadow-glow" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-white sm:text-base">
              {business.name}
            </div>
            <div className="hidden text-xs text-white/70 sm:block">
              Patio Cleaning & Outdoor Cleaning
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.telephone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            <PhoneCall className="h-4 w-4 text-accent" />
            <span className="hidden xl:inline">{business.telephoneDisplay}</span>
          </a>

          <Button
            variant="outline"
            size="md"
            href={waBaseUrl("Hi! I’d like a free quote.")}
            target="_blank"
            rel="noreferrer"
            className="px-4"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>

          <Button
            variant="primary"
            size="md"
            to="/#contact"
            className="px-5"
          >
            <Sparkles className="h-4 w-4" />
            Get Free Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-5 w-6">
              <span
                className={cn(
                  "absolute left-0 top-1 h-0.5 w-6 bg-white transition",
                  open ? "rotate-45 translate-y-2" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-2.5 h-0.5 w-6 bg-white/90 transition",
                  open ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-4 h-0.5 w-6 bg-white transition",
                  open ? "-rotate-45 -translate-y-2" : "",
                )}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden",
          open ? "block border-t border-white/10 bg-primary/80" : "hidden",
        )}
      >
        <div className="mx-auto max-w-[1320px] px-4 py-4 sm:px-6">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:${business.telephone}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-3 py-3 text-sm font-bold text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <PhoneCall className="h-4 w-4 text-accent" />
              Call
            </a>
            <Button
              variant="primary"
              size="md"
              to="/#contact"
              className="h-full"
            >
              Get Quote
            </Button>
          </div>

          <div className="mt-3">
            <Button
              variant="outline"
              size="md"
              href={waBaseUrl("Hi! I’d like a free quote.")}
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

