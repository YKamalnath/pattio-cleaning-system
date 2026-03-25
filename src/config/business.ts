export const business = {
  name: "NorthStar Patio Cleaning",
  brandTagline: "Patio cleaning and outdoor pressure washing",
  telephone: "+442012345678",
  telephoneDisplay: "020 1234 5678",
  whatsappNumberE164: "447001234567", // Placeholder UK mobile in international format (no '+')
  email: "bookings@northstarpatio.co.uk",
  addressLine1: "Service across Greater London & surrounding areas",
  addressLine2: "UK",
  mapEmbedUrl:
    "https://www.google.com/maps?q=London&output=embed",
  companyUrl: "https://example.com",
} as const;

export const waBaseUrl = (message: string) => {
  const text = encodeURIComponent(message);
  // `wa.me` expects number without '+' and without spaces.
  return `https://wa.me/${business.whatsappNumberE164}?text=${text}`;
};

