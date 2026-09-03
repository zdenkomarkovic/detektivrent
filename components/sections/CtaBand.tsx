import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";

export function CtaBand({
  title = "Imate sumnju? Razgovarajmo poverljivo.",
  text = "Prvi razgovor je bez obaveze i naplate. Opišite situaciju i dobićete iskrenu procenu da li i kako možemo da pomognemo, uz okvirnu cenu.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink ink-grid py-16 text-white sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
            <p className="mt-3 text-white/70">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="lg">
              <Icon name="phone" size={18} />
              {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="light" size="lg">
              Pošaljite upit
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
