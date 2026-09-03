// Generatori JSON-LD structured data objekata (schema.org).
// Koriste se preko <JsonLd data={...} /> komponente.

import { SITE_URL } from "@/lib/constants";
import { site } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organizacija`;
const WEBSITE_ID = `${SITE_URL}/#sajt`;

/** Osnovni podaci o firmi – ProfessionalService (detektivska agencija). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": ORG_ID,
    name: site.name,
    alternateName: [site.shortName, site.legalName],
    description: site.description,
    url: SITE_URL,
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "$$",
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/icon`,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    knowsLanguage: ["sr", "en"],
    ...(site.social.length > 0 ? { sameAs: site.social } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    inLanguage: "sr-RS",
    publisher: { "@id": ORG_ID },
  };
}

/** Lista breadcrumb-ova. items: [{name, path}] – path je relativan (npr. "/usluge"). */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Srbija" },
    audience: {
      "@type": "Audience",
      audienceType: "Fizička i pravna lica",
    },
  };
}

/** LocalBusiness varijanta za gradsku stranicu – isto preduzeće, naglašeno područje rada. */
export function locationBusinessSchema(input: {
  cityName: string;
  path: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: `${site.name} – ${input.cityName}`,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    parentOrganization: { "@id": ORG_ID },
    telephone: site.phoneHref,
    email: site.email,
    priceRange: "$$",
    image: `${SITE_URL}/opengraph-image`,
    areaServed: { "@type": "City", name: input.cityName },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressCountry: site.address.country,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    mainEntityOfPage: `${SITE_URL}${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: "sr-RS",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}/opengraph-image`,
  };
}
