import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/ContactForm";

export const metadata = pageMeta({
  title: "Kontakt — poverljiva konsultacija sa detektivom",
  description:
    "Pozovite privatnog detektiva Marinkovića ili pošaljite upit preko forme. Prvi razgovor je besplatan i bez obaveze. Dostupnost 0–24h, cela Srbija.",
  path: "/kontakt",
});

const channels = [
  {
    icon: "phone" as const,
    label: "Telefon",
    value: site.phoneIntl,
    href: `tel:${site.phoneHref}`,
    note: "Poziv, Viber ili WhatsApp — najbrži način",
  },
  {
    icon: "mail" as const,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Za detaljnije upite i dokumentaciju",
  },
  {
    icon: "whatsapp" as const,
    label: "WhatsApp",
    value: "Pošaljite poruku",
    href: site.whatsappHref,
    note: "Ako vam ne odgovara poziv",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Razgovarajmo — poverljivo i bez obaveze
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Opišite ukratko situaciju. Dobićete iskrenu procenu da li i kako
            možemo da pomognemo i okvirnu cenu. Ništa ne plaćate za prvi
            razgovor.
          </p>
        </Container>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Kontakt podaci"
              title="Kako da nas dobijete"
            />
            <div className="mt-8 space-y-4">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors hover:border-gold/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-tint text-gold">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-muted">
                      {c.label}
                    </span>
                    <span className="font-display text-lg font-bold text-ink">
                      {c.value}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {c.note}
                    </span>
                  </span>
                </a>
              ))}

              <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-tint text-gold">
                  <Icon name="clock" size={22} />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    Dostupnost i područje rada
                  </span>
                  <span className="font-display text-lg font-bold text-ink">
                    {site.hours}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted">
                    {site.address.locality} i cela Srbija · region po dogovoru
                  </span>
                </span>
              </div>
            </div>

            <p className="mt-6 rounded-xl border border-line bg-white p-4 text-sm text-muted">
              <Icon
                name="lock"
                size={16}
                className="mr-1.5 inline align-[-3px] text-gold"
              />
              Vaš upit tretiramo kao poverljiv. U prvoj poruci ne šaljite
              osetljive detalje — dovoljan je kratak opis, ostalo dogovaramo u
              razgovoru.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-xl font-bold">Pošaljite upit</h2>
            <p className="mt-1 text-sm text-muted">
              Polja označena zvezdicom su obavezna.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
