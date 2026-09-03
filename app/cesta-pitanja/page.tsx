import { pageMeta } from "@/lib/metadata";
import { generalFaqs } from "@/lib/faqs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata = pageMeta({
  title: "Česta pitanja o angažovanju privatnog detektiva",
  description:
    "Da li je legalno, koliko košta, koliko traje istraga, da li se dokazi koriste na sudu i kako izgleda saradnja — odgovori na najčešća pitanja klijenata.",
  path: "/cesta-pitanja",
});

export default function CestaPitanjaPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />

      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs
            items={[{ name: "Česta pitanja", path: "/cesta-pitanja" }]}
          />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Česta pitanja
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Kratki i konkretni odgovori na ono što klijente najviše zanima pre
            nego što se odluče. Ako ne pronađete odgovor, pozovite — prvi
            razgovor je besplatan.
          </p>
        </Container>
      </section>

      <Section tone="white" containerSize="narrow">
        <SectionHeading eyebrow="Pitanja i odgovori" title="Sve na jednom mestu" />
        <div className="mt-10">
          <FaqAccordion items={generalFaqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
