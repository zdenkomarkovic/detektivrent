import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/metadata";
import {
  services,
  getService,
  getRelatedServices,
} from "@/lib/services";
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
import { serviceSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/usluge/${service.slug}`,
    absoluteTitle: true,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const path = `/usluge/${service.slug}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.metaDescription,
          path,
        })}
      />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}

      {/* Hero */}
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { name: "Usluge", path: "/usluge" },
              { name: service.name, path },
            ]}
          />
          <div className="mt-6 flex items-start gap-4">
            <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 text-gold-bright sm:grid">
              <Icon name={service.icon} size={28} />
            </span>
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
                {service.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/75">
                {service.summary}
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="lg">
              <Icon name="phone" size={18} />
              {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="light" size="lg">
              Pošaljite upit za ovu uslugu
            </Button>
          </div>
        </Container>
      </section>

      {/* Sadržaj */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="rich max-w-2xl">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold">
                Kada da nas angažujete
              </h2>
              <ul className="mt-4 space-y-3">
                {service.when.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-mute">
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

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold">Kako radimo</h2>
              <div className="rich mt-3 max-w-2xl">
                {service.approach.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-xl font-bold">Šta dobijate</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-line bg-white p-4 text-sm text-ink-mute shadow-soft"
                  >
                    <Icon name="check" size={18} className="mt-0.5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {service.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="font-display text-2xl font-bold">
                  Česta pitanja — {service.name.toLowerCase()}
                </h2>
                <div className="mt-5">
                  <FaqAccordion items={service.faqs} />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-ink p-6 text-white ink-grid">
              <h2 className="font-display text-lg font-bold text-white">
                Poverljiva konsultacija
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Opišite situaciju i dobićete iskrenu procenu i okvirnu cenu. Bez
                obaveze.
              </p>
              <div className="mt-5 space-y-2.5">
                <Button
                  href={`tel:${site.phoneHref}`}
                  variant="gold"
                  size="md"
                  className="w-full"
                >
                  <Icon name="phone" size={17} />
                  {site.phoneDisplay}
                </Button>
                <Button
                  href={site.whatsappHref}
                  variant="light"
                  size="md"
                  className="w-full"
                >
                  <Icon name="whatsapp" size={17} />
                  WhatsApp poruka
                </Button>
                <Button
                  href="/kontakt"
                  variant="ghost"
                  size="md"
                  className="w-full text-white hover:bg-white/10"
                >
                  Kontakt forma
                </Button>
              </div>
              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/60">
                <p className="flex items-center gap-2">
                  <Icon name="lock" size={14} className="text-gold-bright" />
                  Zakonit rad i puna diskrecija
                </p>
                <p className="mt-2 flex items-center gap-2">
                  <Icon name="clock" size={14} className="text-gold-bright" />
                  {site.hours}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="paper">
          <h2 className="font-display text-2xl font-bold">Povezane usluge</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/usluge"
              className="text-sm font-semibold text-gold underline underline-offset-4"
            >
              Pogledajte sve usluge
            </Link>
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
