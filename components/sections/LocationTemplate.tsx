import Link from "next/link";
import type { Location } from "@/lib/locations";
import { locations, locationPath } from "@/lib/locations";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { locationBusinessSchema, faqSchema } from "@/lib/schema";

export function LocationTemplate({ location }: { location: Location }) {
  const path = locationPath(location.slug);
  const highlight = location.highlightServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s));
  const others = locations.filter((l) => l.slug !== location.slug);

  const metaDesc = `Privatni detektiv ${location.name}: diskretne istrage bračnih prevara i neverstva, praćenje i opservacija, poligraf i poslovne provere. Izlazak na teren ${location.inLoc} i okolini.`;

  return (
    <>
      <JsonLd
        data={locationBusinessSchema({
          cityName: location.name,
          path,
          description: metaDesc,
        })}
      />
      <JsonLd data={faqSchema(location.faqs)} />

      {/* Hero */}
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { name: "Lokacije", path: "/lokacije" },
              { name: location.name, path },
            ]}
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            <Icon name="map" size={15} />
            {location.region} · sedište Beograd
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Privatni detektiv {location.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Detektivska agencija Marinković radi {location.inLoc} i okolini –
            diskretne istrage bračnih prevara, praćenje i opservacija lica,
            poligrafsko testiranje i poslovne provere, za fizička i pravna lica.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="lg">
              <Icon name="phone" size={18} />
              {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="light" size="lg">
              Poverljiv upit
            </Button>
          </div>
        </Container>
      </section>

      {/* Uvod + info */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_18rem] lg:items-start">
          <div className="rich max-w-2xl">
            <h2>Detektiv {location.inLoc} – kada i zašto se angažuje</h2>
            {location.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-line bg-paper p-6 shadow-soft">
            <h2 className="font-display text-base font-bold">Ukratko</h2>
            <dl className="mt-3 space-y-3 text-sm">
              <div>
                <dt className="text-muted">Područje rada</dt>
                <dd className="font-semibold text-ink">
                  {location.name} i {location.region}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Od Beograda</dt>
                <dd className="font-semibold text-ink">
                  ~{location.distanceKm} km · izlazak na teren 24–48h
                </dd>
              </div>
              <div>
                <dt className="text-muted">Dokazi za sud</dt>
                <dd className="font-semibold text-ink">{location.courts}</dd>
              </div>
              <div>
                <dt className="text-muted">Dostupnost</dt>
                <dd className="font-semibold text-ink">{site.hours}</dd>
              </div>
            </dl>
            <Button
              href={`tel:${site.phoneHref}`}
              variant="gold"
              size="sm"
              className="mt-5 w-full"
            >
              <Icon name="phone" size={16} />
              {site.phoneDisplay}
            </Button>
          </aside>
        </div>
      </Section>

      {/* Usluge u gradu */}
      <Section tone="paper">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Detektivske usluge {location.inLoc}
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Najčešće tražene usluge u {location.ofCity}. Ceo spektar dostupan je i
          na ovoj lokaciji.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlight.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/usluge"
            className="text-sm font-semibold text-gold underline underline-offset-4"
          >
            Sve detektivske usluge
          </Link>
        </div>
      </Section>

      {/* Pokrivanje terena */}
      <Section tone="white" containerSize="narrow">
        <div className="rich">
          <h2>Kako pokrivamo {location.name} i okolinu</h2>
          {location.coverage.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-line bg-paper p-6">
          <h3 className="font-display text-base font-bold">
            Mesta koja pokrivamo iz istog tima
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {location.nearby.map((town) => (
              <li
                key={town}
                className="rounded-full bg-white px-3 py-1 text-sm text-ink-mute shadow-soft"
              >
                {town}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper" containerSize="narrow">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Česta pitanja – detektiv {location.name}
        </h2>
        <div className="mt-6">
          <FaqAccordion items={location.faqs} />
        </div>
      </Section>

      {/* Druge lokacije */}
      <Section tone="white">
        <h2 className="font-display text-2xl font-bold">Ostali gradovi</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {others.map((l) => (
            <Link
              key={l.slug}
              href={locationPath(l.slug)}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-mute shadow-soft transition-colors hover:border-gold/40 hover:text-ink"
            >
              Privatni detektiv {l.name}
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Detektiv za ${location.name} — pozovite bez obaveze`}
        text="Opišite situaciju u kratkom razgovoru. Dobijate iskrenu procenu, plan i okvirnu cenu, sa jasno iskazanim putnim troškom pre početka."
      />
    </>
  );
}
