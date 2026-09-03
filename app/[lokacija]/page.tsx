import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/metadata";
import {
  locations,
  getLocation,
  locationPath,
  LOCATION_PREFIX,
} from "@/lib/locations";
import { LocationTemplate } from "@/components/sections/LocationTemplate";

// Root dinamički segment koji služi ISKLJUČIVO gradske stranice
// oblika /privatni-detektiv-<grad>. Sve ostalo -> 404 (dynamicParams=false).
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ lokacija: `${LOCATION_PREFIX}${l.slug}` }));
}

function slugFromParam(param: string): string | null {
  if (!param.startsWith(LOCATION_PREFIX)) return null;
  return param.slice(LOCATION_PREFIX.length);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lokacija: string }>;
}): Promise<Metadata> {
  const { lokacija } = await params;
  const slug = slugFromParam(lokacija);
  const location = slug ? getLocation(slug) : undefined;
  if (!location) return {};

  return pageMeta({
    title: `Privatni detektiv ${location.name} | Detektivska agencija Marinković`,
    description: `Privatni detektiv ${location.name} – diskretne istrage bračnih prevara i neverstva, praćenje i opservacija lica, poligrafsko testiranje, poslovne provere i digitalna forenzika. Izlazak na teren ${location.inLoc} i okolini, za fizička i pravna lica.`,
    path: locationPath(location.slug),
    absoluteTitle: true,
  });
}

export default async function LokacijaPage({
  params,
}: {
  params: Promise<{ lokacija: string }>;
}) {
  const { lokacija } = await params;
  const slug = slugFromParam(lokacija);
  const location = slug ? getLocation(slug) : undefined;
  if (!location) notFound();

  return <LocationTemplate location={location} />;
}
