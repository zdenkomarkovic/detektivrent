import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

/**
 * Metadata helper usklađen sa title.template iz root layout-a (`%s | Detektiv Marinković`).
 * `title` prosleđujemo kao golu frazu – layout dodaje sufiks.
 * Za stranice bez sufiksa koristiti `absoluteTitle`.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  /** relativna putanja, npr. "/usluge/poligrafsko-testiranje" */
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  const images = [
    {
      url: `${SITE_URL}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: opts.title,
    },
  ];
  const openGraph: Metadata["openGraph"] =
    opts.type === "article"
      ? {
          title: opts.title,
          description: opts.description,
          url,
          siteName: SITE_NAME,
          locale: "sr_RS",
          type: "article",
          publishedTime: opts.publishedTime,
          images,
        }
      : {
          title: opts.title,
          description: opts.description,
          url,
          siteName: SITE_NAME,
          locale: "sr_RS",
          type: "website",
          images,
        };

  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/opengraph-image`],
    },
    ...(opts.noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Putanja do slike za OG (relativna od /public ili apsolutna URL) */
  image?: string;
  /** Canonical URL - ako nije naveden, koristi SITE_URL */
  url?: string;
  /** Da li da noindex ova stranica */
  noIndex?: boolean;
  /** Tip stranice za OG */
  type?: "website" | "article";
  /** Datum objave (za blog postove) */
  publishedTime?: string;
}

/**
 * Helper za generisanje Next.js Metadata objekta.
 * Koristiti u svakom page.tsx fajlu.
 *
 * @example
 * // U page.tsx:
 * export const metadata = buildMetadata({
 *   title: "O nama",
 *   description: "Kratki opis stranice",
 * });
 */
export function buildMetadata({
  title,
  description,
  image,
  url,
  noIndex = false,
  type = "website",
  publishedTime,
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = url ?? SITE_URL;
  const ogImage = image ?? `${SITE_URL}/og-image.png`; // Dodaj og-image.png u /public

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
