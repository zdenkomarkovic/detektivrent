import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { featuredServices } from "@/lib/services";
import { generalFaqs } from "@/lib/faqs";
import { sortedPosts } from "@/lib/posts";
import { trustPoints } from "@/lib/site";
import { locations, locationPath } from "@/lib/locations";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { formatDate } from "@/lib/utils";

const homeTitle =
  "Privatni detektiv Marinković | Detektivska agencija za bračne prevare i istrage";

export const metadata: Metadata = {
  title: homeTitle,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeTitle,
    description: site.description,
    url: "/",
    type: "website",
    locale: "sr_RS",
  },
  twitter: { card: "summary_large_image", title: homeTitle, description: site.description },
};

const IMG_PRACENJE =
  "/privatni-detektiv-detektivska-agencija-master-5425647138007-71815723337.jpg";
const IMG_VOZILO =
  "/privatni-detektiv-detektivska-agencija-master-5425647138007-71815723338.jpg";

const stats = [
  { value: "25+", label: "godina iskustva u bezbednosnim i istražnim poslovima" },
  { value: "0–24h", label: "dostupnost, svakog dana" },
  { value: "100%", label: "poverljivost slučaja" },
  { value: "17", label: "specijalizovanih usluga" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink text-white ink-grid">
        <Container className="relative z-10 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
                <Icon name="shield" size={15} />
                Licencirana detektivska agencija
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.35rem]">
                Privatni detektiv Marinković — istina koju možete{" "}
                <span className="text-gold-bright">da dokažete</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/75">
                Najveći deo prakse čine{" "}
                <strong className="font-semibold text-white">
                  bračne prevare i provera neverstva
                </strong>{" "}
                — diskretno praćenje, foto i video dokazi i izveštaj upotrebljiv u
                brakorazvodnoj parnici. Uz to, pun spektar usluga za fizička i
                pravna lica: opservacija, poligrafsko testiranje, poslovne
                provere, digitalna forenzika i detekcija prislušnih uređaja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${site.phoneHref}`} variant="gold" size="lg">
                  <Icon name="phone" size={18} />
                  Pozovite {site.phoneDisplay}
                </Button>
                <Button
                  href="/detektiv-za-bracne-prevare"
                  variant="light"
                  size="lg"
                >
                  Provera neverstva
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/55">
                Prvi razgovor je besplatan i bez obaveze · {site.responseTime}
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
              <Image
                src={IMG_PRACENJE}
                alt="Privatni detektiv Marinković prati par teleobjektivom tokom diskretne opservacije na terenu"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                Diskretna opservacija i foto-dokumentacija
              </span>
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-5 py-5">
                <dt className="font-display text-2xl font-bold text-gold-bright sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-white/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ─── Bračne prevare (izdvojena, glavna usluga) ────────────────────── */}
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Naša glavna usluga
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem]">
              Sumnjate u bračnu prevaru?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Neizvesnost troši više od svake istrage. Diskretna provera
              neverstva daje vam činjenice na osnovu kojih mirno odlučujete šta
              dalje — o braku, razvodu, imovini i deci. Radimo tiho, u okviru
              zakona i sa dokazima koji izdrže sud.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { icon: "eye" as const, t: "Diskretno praćenje", d: "Rotacija tima i vozila — partner ne primeti nadzor." },
                { icon: "family" as const, t: "Identifikacija osobe", d: "Ko je treća strana: ime, adresa, okolnosti." },
                { icon: "legal" as const, t: "Dokazi za razvod", d: "Izveštaj, foto i video za brakorazvodnu parnicu." },
              ].map((b) => (
                <div
                  key={b.t}
                  className="rounded-xl border border-line bg-white p-4"
                >
                  <Icon name={b.icon} size={22} className="text-gold" />
                  <h3 className="mt-2 font-display text-sm font-bold">{b.t}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{b.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/detektiv-za-bracne-prevare" variant="primary" size="md">
                Detektiv za bračne prevare
                <Icon name="arrowRight" size={16} />
              </Button>
              <Button href={`tel:${site.phoneHref}`} variant="gold" size="md">
                <Icon name="phone" size={17} />
                {site.phoneDisplay}
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line shadow-soft">
              <Image
                src={IMG_VOZILO}
                alt="Detektiv fotografiše iz vozila tokom diskretnog praćenja u istrazi bračne prevare"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
              <h3 className="font-display text-lg font-bold">
                Znakovi koje klijenti najčešće prijave
              </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                "Telefon pod lozinkom, okrenut ekranom nadole, ide svuda",
                "Učestala „službena putovanja” i neobjašnjivi troškovi",
                "Nedostupnost u tačno određenim terminima",
                "Naglo ulaganje u izgled, nove navike",
                "Emotivno udaljavanje i svađe pred izlaske",
                "Priče koje se iz dana u dan ne poklapaju",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-ink-mute"
                >
                  <Icon
                    name="checkCircle"
                    size={19}
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
              <Link
                href="/blog/znakovi-da-vas-partner-vara"
                className="mt-4 inline-block text-sm font-semibold text-gold underline underline-offset-4"
              >
                Svih 12 znakova i šta dalje
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Druge situacije ──────────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <SectionHeading
            eyebrow="I kada vam treba više od bračne istrage"
            title="Diskretna provera za svaku sumnju"
            description="Isti pristup — poverljivo, zakonito, sa dokazima — primenjujemo i na poslovne, bezbednosne i porodične slučajeve."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Sumnja u poslovnog partnera ili zaposlenog",
              "Curenje poslovnih informacija ka konkurenciji",
              "Uhođenje, pretnje i uznemiravajući pozivi",
              "Nestala osoba ili prekinut kontakt sa članom porodice",
              "Sumnja da ste pod nadzorom (prisluškivanje, GPS)",
              "Provera društva i aktivnosti deteta",
              "Provera imovine i vlasništva pre kupovine ili spora",
              "Podrška advokatu: svedoci, uručenja, dokazi",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm text-ink-mute"
              >
                <Icon
                  name="checkCircle"
                  size={20}
                  className="mt-0.5 shrink-0 text-gold"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ─── Usluge (izdvojeno) ───────────────────────────────────────────── */}
      <Section tone="white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Detektivske usluge"
            title="Najčešće angažovane usluge"
            description="Svaka istraga počinje razgovorom i planom. Pogledajte detaljno šta obuhvata i kako izgleda saradnja."
          />
          <Button href="/usluge" variant="outline" size="md" className="shrink-0">
            Sve usluge
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* ─── Zašto Marinković ─────────────────────────────────────────────── */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Zašto klijenti biraju nas"
          title="Diskrecija, zakonit rad i dokazi koji izdrže sud"
          tone="light"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {trustPoints.map((point, i) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className="font-display text-sm font-bold text-gold-bright">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-white">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Proces ───────────────────────────────────────────────────────── */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Kako radimo"
          title="Od prvog poziva do izveštaja sa dokazima"
          description="Transparentan postupak u šest koraka. U svakom trenutku znate gde je istraga i koliko košta."
        />
        <div className="mt-10">
          <ProcessSteps tone="dark" />
        </div>
        <div className="mt-8">
          <Button href="/kako-radimo" variant="primary" size="md">
            Detaljno o postupku
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
      </Section>

      {/* ─── Fizička i pravna lica ────────────────────────────────────────── */}
      <Section tone="white">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-tint text-gold">
              <Icon name="family" size={24} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">
              Za fizička lica
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Kada je u pitanju porodica, partner ili lična bezbednost. Radimo
              obazrivo i uvek na vašoj strani.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-mute">
              {[
                "Provera vernosti i bračne prevare",
                "Zaštita dece i starijih članova porodice",
                "Potraga za nestalim osobama",
                "Razotkrivanje uhođenja i pretnji",
                "Dokazi za brakorazvodnu parnicu i poveravanje dece",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8 shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-tint text-gold">
              <Icon name="briefcase" size={24} />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">
              Za pravna lica i advokate
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Smanjujemo poslovni rizik i pribavljamo dokaze u formi koju pravna
              služba i sud mogu odmah da koriste.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-ink-mute">
              {[
                "Provera partnera, kupaca i dobavljača (due diligence)",
                "Otkrivanje internih prevara i zloupotreba",
                "Tehnički kontra-nadzor i zaštita poverljivih podataka",
                "Digitalna forenzika i OSINT analiza",
                "Podrška advokatima: svedoci, uručenja, dokazi",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2.5">
                  <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── Gde radimo ───────────────────────────────────────────────────── */}
      <Section tone="ink">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Gde radimo"
            title="Sedište u Beogradu, teren u celoj Srbiji"
            description="Za Beograd smo na terenu istog dana. U ostale gradove tim izlazi u roku od 24–48 sati, uz putni trošak iskazan unapred."
            tone="light"
          />
          <Button href="/lokacije" variant="light" size="md" className="shrink-0">
            Sve lokacije
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          <span className="rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-sm font-semibold text-gold-bright">
            Detektivska agencija Beograd
          </span>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={locationPath(l.slug)}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-gold/40 hover:text-white"
            >
              Detektivska agencija {l.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <Section tone="paper" containerSize="narrow">
        <SectionHeading
          eyebrow="Česta pitanja"
          title="Ono što klijenti najčešće pitaju"
          align="center"
        />
        <div className="mt-10">
          <FaqAccordion items={generalFaqs.slice(0, 6)} />
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/cesta-pitanja"
            className="text-sm font-semibold text-gold underline underline-offset-4"
          >
            Sva pitanja i odgovori
          </Link>
        </div>
      </Section>

      {/* ─── Blog ─────────────────────────────────────────────────────────── */}
      <Section tone="white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Vodiči i saveti"
            title="Iz bloga"
            description="Praktični tekstovi o prepoznavanju prevare, ceni detektivskih usluga i tome šta je zakonito."
          />
          <Button href="/blog" variant="outline" size="md" className="shrink-0">
            Svi tekstovi
            <Icon name="arrowRight" size={16} />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {sortedPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
            >
              <time className="text-xs font-medium uppercase tracking-wide text-muted">
                {formatDate(post.date)} · {post.readingMinutes} min
              </time>
              <h3 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Pročitajte
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />

      {/* ─── Kontakt ──────────────────────────────────────────────────────── */}
      <Section tone="white" id="kontakt">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title="Recite nam šta vas brine"
              description="Svaki upit je poverljiv. Odgovaramo brzo i bez osuđivanja. Ako je hitno, pozovite direktno."
            />
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-tint text-gold">
                  <Icon name="phone" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    Telefon / Viber / WhatsApp
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {site.phoneIntl}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors hover:border-gold/40"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-tint text-gold">
                  <Icon name="mail" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    E-mail
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {site.email}
                  </span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-tint text-gold">
                  <Icon name="clock" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    Radno vreme
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {site.hours}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
