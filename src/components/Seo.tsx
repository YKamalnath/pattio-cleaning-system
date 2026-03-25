import React from "react";
import { Helmet } from "react-helmet-async";
import { business } from "../config/business";
import { services } from "../data/services";
import { faqs } from "../data/faqs";

export default function Seo({
  title,
  description,
  canonical,
  keywords,
}: {
  title: string;
  description?: string;
  canonical?: string;
  keywords?: string;
}) {
  const siteName = "Patio Cleaning UK";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const ogImage =
    "https://images.unsplash.com/photo-1600566752355-35792bedc2b7?auto=format&fit=crop&w=1200&q=80";

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: description ?? business.brandTagline,
    telephone: business.telephone,
    email: business.email,
    url: business.companyUrl,
    areaServed: "Greater London",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
  );
}

