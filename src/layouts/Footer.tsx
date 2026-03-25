import React from "react";
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { business } from "../config/business";
import Container from "../components/Container";

const footerLinks: Array<{ to: string; label: string }> = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/areas-we-cover", label: "Areas We Cover" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-white/85 transition hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brandBlue/40">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <div className="h-5 w-5 rounded-full bg-brandGreen shadow-glow" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">
                  {business.name}
                </div>
                <div className="text-sm text-white/70">
                  Patio cleaning and outdoor pressure washing
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Fast, affordable, and reliable patio cleaning in the UK. We remove
              dirt, moss, and algae, so your outdoor spaces look fresh again.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${business.telephone}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                <PhoneCall className="h-4 w-4 text-brandGreen" />
                {business.telephoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-brandGreen" />
                {business.email}
              </a>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-white/75">
              <MapPin className="mt-1 h-4 w-4 text-brandGreen" />
              <div>
                {business.addressLine1}
                <div className="text-white/60">{business.addressLine2}</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-bold text-white">Quick Links</div>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm font-semibold text-white/75 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-bold text-white">Service Area</div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Covering patios, driveways, decking, and outdoor pressure washing
              across Greater London and nearby counties.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              <SocialLink href="https://instagram.com" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://facebook.com" label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialLink>
              <SocialLink href="https://linkedin.com" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </div>
          <div className="text-sm text-white/60">
            <a className="hover:text-white" href={business.companyUrl} target="_blank" rel="noreferrer">
              Privacy & Cookies
            </a>
            {" · "}
            <a className="hover:text-white" href={business.companyUrl} target="_blank" rel="noreferrer">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

