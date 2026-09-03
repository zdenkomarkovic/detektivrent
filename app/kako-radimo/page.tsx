import { pageMeta } from "@/lib/metadata";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMeta({
  title: "Kako radimo — postupak detektivske istrage korak po korak",
  description:
    "Transparentan postupak: besplatna konsultacija, ponuda sa cenom, ugovor, istraga na terenu, pisani izveštaj sa dokazima i konsultacija o daljim koracima.",
  path: "/kako-radimo",
});

const principles = [
  {
    icon: "lock" as const,
    title: "Poverljivost pre svega",
    text: "Komuniciramo kanalom koji vama odgovara. Podaci o slučaju se čuvaju odvojeno i ne dele se ni sa kim.",
  },
  {
    icon: "scale" as const,
    title: "Samo zakoniti dokazi",
    text: "Ne pristupamo tuđim nalozima, ne prisluškujemo i ne postavljamo uređaje bez pravnog osnova. Takav dokaz ruši slučaj.",
  },
  {
    icon: "checkCircle" as const,
    title: "Cena poznata unapred",
    text: "Dobijate okvirnu ponudu sa obimom pre početka. Putni troškovi i eventualni dodaci su posebno navedeni.",
  },
];

export default function KakoRadimoPage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Kako radimo", path: "/kako-radimo" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Jasan postupak, bez iznenađenja
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Istraga je stresna i bez nepoznanica u saradnji. Zato je ceo proces
            unapred definisan — od prvog poziva do izveštaja sa dokazima znate
            šta se dešava i koliko košta.
          </p>
        </Container>
      </section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Postupak"
          title="Šest koraka od poziva do rešenja"
        />
        <div className="mt-10">
          <ProcessSteps tone="dark" />
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Principi rada"
          title="Na čemu ne pravimo kompromis"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-tint text-gold">
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="white" containerSize="narrow">
        <div className="rich">
          <h2>Šta nam je potrebno da bismo počeli</h2>
          <p>
            Što više podataka imate na početku, brže i jeftinije dolazimo do
            rezultata. Korisno je da pripremite:
          </p>
          <ul>
            <li>ime i prezime, opis i po mogućstvu fotografiju lica od interesa;</li>
            <li>adresu stanovanja i posla, kao i mesta koja to lice često posećuje;</li>
            <li>podatke o vozilu (marka, boja, registracija) ako je poznato;</li>
            <li>termine u kojima je ponašanje najsumnjivije (npr. određeni dani, večeri);</li>
            <li>kratak opis situacije i cilj koji želite da postignete.</li>
          </ul>
          <p>
            Ne treba da nosite nikakve dokaze pribavljene na nezakonit način.
            Sve što ste zakonito videli ili čuli je dovoljno da krenemo, ostalo
            je naš posao.
          </p>

          <h2>Koliko traje istraga</h2>
          <p>
            Provera neverstva najčešće traje od nekoliko dana do dve nedelje,
            poslovne provere 3–10 radnih dana, a potrage i forenzika zavise od
            raspoloživih podataka. Realan rok dogovaramo unapred i redovno vas
            obaveštavamo o napretku.
          </p>

          <h2>Šta dobijate na kraju</h2>
          <p>
            Pisani izveštaj sa hronologijom događaja, foto i video
            dokumentacijom i jasnim zaključkom. Izveštaj je sačinjen tako da bude
            upotrebljiv u razgovoru sa advokatom i, po potrebi, kao dokazno
            sredstvo u postupku. Uz izveštaj ide i usmena konsultacija o
            mogućim koracima.
          </p>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
