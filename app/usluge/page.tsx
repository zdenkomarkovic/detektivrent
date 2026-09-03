import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { services } from "@/lib/services";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMeta({
  title: "Detektivske usluge — bračne, porodične i poslovne istrage",
  description:
    "Kompletan spisak usluga detektivske agencije Marinković: provera neverstva, praćenje i opservacija, poligraf, poslovne provere, digitalna forenzika, detekcija prisluškivača i više. Za fizička i pravna lica.",
  path: "/usluge",
});

export default function UslugePage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Usluge", path: "/usluge" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Detektivske usluge za svaku situaciju
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Od diskretne provere partnera do zaštite firme od špijunaže. Svaka
            usluga ima jasno definisan obim, zakonit postupak i izveštaj sa
            dokazima. Izaberite oblast da vidite detalje i primere.
          </p>
        </Container>
      </section>

      <Section tone="white">
        <Link
          href="/detektiv-za-bracne-prevare"
          className="group flex flex-col gap-4 rounded-2xl border border-gold/30 bg-gold-tint p-6 transition-colors hover:border-gold/60 sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Najtraženija usluga
            </p>
            <h2 className="mt-1.5 font-display text-xl font-bold text-ink sm:text-2xl">
              Detektiv za bračne prevare i proveru neverstva
            </h2>
            <p className="mt-1 text-sm text-ink-mute">
              Diskretno praćenje, identifikacija treće osobe i dokazi za
              brakorazvodnu parnicu.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white">
            Otvorite stranicu
            <Icon
              name="arrowRight"
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </Link>

        <div className="mt-10">
          <SectionHeading
            eyebrow="Sve usluge"
            title="Izaberite oblast istrage"
            description="Ako niste sigurni šta vam tačno treba, pozovite nas — nakon kratkog razgovora predlažemo pravi pristup."
          />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
