import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata = pageMeta({
  title: "Politika privatnosti",
  description:
    "Kako detektivska agencija Marinković prikuplja, koristi i štiti podatke poslate preko sajta i kontakt forme.",
  path: "/politika-privatnosti",
});

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container size="narrow" className="py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { name: "Politika privatnosti", path: "/politika-privatnosti" },
            ]}
          />
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            Politika privatnosti
          </h1>
        </Container>
      </section>

      <Section tone="white" containerSize="narrow">
        <div className="rich">
          <p>
            Ova politika opisuje kako {site.name} („mi”) postupa sa podacima o
            ličnosti koje korisnici pošalju putem ovog sajta. Poverljivost je
            osnovni princip našeg rada, kako u istragama, tako i u obradi vaših
            podataka.
          </p>

          <h2>Koje podatke prikupljamo</h2>
          <ul>
            <li>
              Podatke koje sami unesete u kontakt formu: ime i prezime, broj
              telefona, e-mail adresu (opciono), izabranu uslugu i tekst poruke.
            </li>
            <li>
              Tehničke podatke koje pregledač automatski šalje (npr. tip uređaja
              i pregledača), u meri neophodnoj za bezbedan rad sajta.
            </li>
          </ul>

          <h2>Svrha obrade</h2>
          <p>
            Podatke iz kontakt forme koristimo isključivo da odgovorimo na vaš
            upit, pripremimo ponudu i, ako do saradnje dođe, izvršimo ugovorene
            poslove. Ne koristimo ih za marketing i ne prosleđujemo ih trećim
            licima, osim ako to zakon izričito ne nalaže.
          </p>

          <h2>Pravni osnov</h2>
          <p>
            Obrada se zasniva na vašoj saglasnosti datoj slanjem upita, odnosno
            na preduzimanju radnji pre zaključenja ugovora na vaš zahtev.
          </p>

          <h2>Čuvanje i bezbednost</h2>
          <p>
            Podatke čuvamo samo onoliko dugo koliko je potrebno za navedenu
            svrhu i u skladu sa zakonskim rokovima. Primenjujemo organizacione i
            tehničke mere zaštite od neovlašćenog pristupa. Poruke poslate preko
            forme dostavljaju se na našu e-mail adresu putem servisa za slanje
            pošte.
          </p>

          <h2>Vaša prava</h2>
          <p>
            Imate pravo da zatražite pristup svojim podacima, ispravku, brisanje
            ili ograničenje obrade, kao i da povučete saglasnost. Zahtev možete
            poslati na{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> ili pozivom na{" "}
            <a href={`tel:${site.phoneHref}`}>{site.phoneIntl}</a>.
          </p>

          <h2>Kolačići</h2>
          <p>
            Sajt koristi samo tehnički neophodne kolačiće za osnovne funkcije.
            Ako se u budućnosti uvedu analitički ili marketinški kolačići, o
            tome ćete biti obavešteni i zatražićemo vašu saglasnost.
          </p>

          <h2>Izmene</h2>
          <p>
            Politiku možemo povremeno ažurirati. Važeća verzija je uvek
            objavljena na ovoj stranici.
          </p>
        </div>
      </Section>
    </>
  );
}
