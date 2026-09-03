import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { locations, locationPath } from "@/lib/locations";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMeta({
  title: "Gde radimo — privatni detektiv u gradovima Srbije",
  description:
    "Sedište detektivske agencije Marinković je u Beogradu, a na teren izlazimo u Novom Sadu, Nišu, Kragujevcu, Subotici i drugim gradovima Srbije. Pregled lokacija pokrivanja.",
  path: "/lokacije",
});

export default function LokacijePage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Lokacije", path: "/lokacije" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Privatni detektiv za celu Srbiju
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Sedište nam je u Beogradu, odakle tim izlazi na teren u svim većim
            gradovima. Rad van sedišta planiramo unapred, a putni trošak je uvek
            iskazan u ponudi pre početka.
          </p>
          <div className="mt-8">
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a5772f]"
            >
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </a>
          </div>
        </Container>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Sedište"
          title="Beograd"
          description="Najveći deo slučajeva vodi se u Beogradu i okolini – od provere neverstva i porodičnih sporova do poslovnih istraga, tehničkog kontra-nadzora i digitalne forenzike. Za Beograd tim je na terenu istog dana."
        />
        <div className="mt-6">
          <Link
            href="/kontakt"
            className="text-sm font-semibold text-gold underline underline-offset-4"
          >
            Kontakt i poverljiva konsultacija
          </Link>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Gradovi pokrivanja"
          title="Izaberite grad"
          description="Svaka stranica opisuje kako radimo u tom gradu, koje su usluge najtraženije i koja okolna mesta pokrivamo iz istog tima."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={locationPath(l.slug)}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-tint text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                <Icon name="map" size={22} />
              </span>
              <h2 className="mt-4 font-display text-lg font-bold text-ink">
                Privatni detektiv {l.name}
              </h2>
              <p className="mt-1 text-sm text-muted">
                {l.region} · ~{l.distanceKm} km od Beograda
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Pogledajte
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Ne vidite svoj grad? Radimo na celoj teritoriji Srbije, a po dogovoru i
          u regionu i inostranstvu. Pozovite i proverite dostupnost za vašu
          lokaciju.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
