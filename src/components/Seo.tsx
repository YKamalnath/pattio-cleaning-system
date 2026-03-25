import React from "react";
import { Helmet } from "react-helmet-async";

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
    </Helmet>
  );
}

