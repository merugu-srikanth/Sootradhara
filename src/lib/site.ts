/**
 * Company details used across the site (header, footer, contact page, schema).
 *
 * Fill in the empty values before going live. Anything left empty is
 * hidden automatically, so nothing fake or half-filled shows on the site.
 */
export const site = {
  name: "Sootradhara",
  legalName: "Sootradhara Ventures Pvt Ltd",
  url: "https://sootradhara.com",
  email: "info@sootradhara.com",

  // Phone in international format, e.g. "+91 98XXX XXXXX". Leave "" to hide.
  phone: "+91 91105 72323",
  // WhatsApp number, digits only with country code, e.g. "9198XXXXXXXX".
  // The floating WhatsApp button only appears once this is filled.
  whatsapp: "919110572323",

  address: {
    // Street address of the Hyderabad office. Leave "" to show only the city.
    street: "7th Floor, 806, Vasavi MPM Mall, Ameerpet",
    locality: "Hyderabad",
    region: "Telangana",
    postalCode: "500016",
    country: "IN",
  },

  hours: "Mon to Fri, 11:00 AM to 7:00 PM IST",

  // Where the contact form posts enquiries (JSON). Can be overridden with
  // NEXT_PUBLIC_CONTACT_API in .env.local.
  contactApi: process.env.NEXT_PUBLIC_CONTACT_API || "https://www.careermitra.in/api/sootradhara/contact",

  // Full profile URLs. Empty ones are hidden.
  socials: {
    linkedin: "",
    instagram: "",
    facebook: "",
    x: "",
    youtube: "",
  },
};

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function whatsappHref(message = "Hi Sootradhara, I'd like to discuss a project.") {
  if (!site.whatsapp) return "";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function addressLine() {
  const a = site.address;
  const line = [a.street, a.locality, a.region].filter(Boolean).join(", ");
  return a.postalCode ? `${line} – ${a.postalCode}` : line;
}

export const socialLinks = (
  [
    ["LinkedIn", site.socials.linkedin],
    ["Instagram", site.socials.instagram],
    ["Facebook", site.socials.facebook],
    ["X", site.socials.x],
    ["YouTube", site.socials.youtube],
  ] as const
).filter(([, href]) => Boolean(href));

/** Google Maps search for the office (no API key needed). */
const mapsQuery = encodeURIComponent(`Vasavi MPM Mall, Ameerpet, Hyderabad ${site.address.postalCode}`);
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
