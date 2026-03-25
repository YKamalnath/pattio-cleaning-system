import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MessageCircle, PhoneCall } from "lucide-react";
import { business, waBaseUrl } from "../config/business";
import { cn } from "../utils/cn";

const navItems: Array<{ to: string; label: string }> = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/areas-we-cover", label: "Areas We Cover" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

function NavItem({
  to,
  label,
  onNavigate,
}: {
  to: string;
  label: string;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "rounded-full px-3 py-2 text-sm font-semibold transition",
          isActive
            ? "bg-white/10 text-white shadow-glow"
            : "text-white/80 hover:bg-white/10 hover:text-white",
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brandBlue/80 backdrop-blur-xl">
        <div className="anchor-offset relative border-b border-white/10">
          <div className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <Link to="/" className="group flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition group-hover:bg-white/15">
                  <div className="h-5 w-5 rounded-full bg-brandGreen shadow-glow" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-white sm:text-base">
                    {business.name}
                  </div>
                  <div className="hidden text-xs text-white/70 sm:block">
                    Patio Cleaning UK
                  </div>
                </div>
              </Link>
            </div>

            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
              {navItems.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${business.telephone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4 text-brandGreen" />
                <span className="hidden xl:inline">
                  {business.telephoneDisplay}
                </span>
              </a>
              <a
                href={waBaseUrl("Hi! I’d like a free quote.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brandGreen px-4 py-2 text-sm font-bold text-ink shadow-glow hover:bg-brandGreen2"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandGreen px-4 py-2 text-sm font-semibold text-ink shadow-glow transition hover:bg-brandGreen2 hover:shadow-glow/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandGreen/40 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Free Quote
              </Link>
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
        </div>

        <div
          className={cn(
            "lg:hidden",
            open
              ? "block border-t border-white/10 bg-brandBlue/80"
              : "hidden",
          )}
        >
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`tel:${business.telephone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 text-base font-bold text-white ring-1 ring-white/15"
              >
                <PhoneCall className="h-5 w-5 text-brandGreen" />
                Call {business.telephoneDisplay}
              </a>
              <a
                href={waBaseUrl("Hi! I’d like a free quote.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandGreen px-5 py-3 text-base font-bold text-ink shadow-glow"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

