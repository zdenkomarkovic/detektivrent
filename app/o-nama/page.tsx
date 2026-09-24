import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMeta({
  title: "O nama — detektivska agencija Marinković",
  description:
    "Privatni detektiv Marinković: 25+ godina iskustva u bezbednosnim i istražnim poslovima, bračne prevare, poslovne istrage i OSINT. Licenca, diskrecija i zakonit pristup.",
  path: "/o-nama",
});

const values = [
  {
    icon: "lock" as const,
    title: "Diskrecija bez izuzetka",
    text: "Od prvog poziva do arhiviranja predmeta. Ne potvrđujemo ni da ste nam se javili.",
  },
  {
    icon: "scale" as const,
    title: "Zakonit rad",
    text: "Postupamo u okviru Zakona o detektivskoj delatnosti. Nezakonit dokaz šteti klijentu i zato ga ne pribavljamo.",
  },
  {
    icon: "checkCircle" as const,
    title: "Realne procene",
    text: "Ako slučaj nema rešenje ili nije isplativ, reći ćemo vam to odmah, a ne posle tri meseca.",
  },
  {
    icon: "shield" as const,
    title: "Odgovornost za rezultat",
    text: "Radimo dok ne dobijemo jasan nalaz ili dok ne iscrpimo sve zakonite mogućnosti.",
  },
];

export default function ONamaPage() {
  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "O nama", path: "/o-nama" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Detektivska agencija koja radi tiho, a govori činjenicama
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Agenciju vodi privatni detektiv Marinković, sa više od 25 godina
            iskustva u ozbiljnim bezbednosnim i istražnim poslovima – od
            istraga bračnih prevara i porodičnih sporova do poslovnih provera.
            Radimo na celoj teritoriji Srbije, a po dogovoru i u regionu.
          </p>
        </Container>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div className="rich max-w-2xl">
            <h2>Zašto baš bračne i porodične istrage</h2>
            <p>
              Kroz praksu se pokazalo da je najveći broj ljudi koji potraže
              detektiva u situaciji koju ne mogu sami da razreše: sumnjaju da ih
              partner vara, a nemaju ni dokaz ni mir. Zato smo najviše iskustva i
              rutine izgradili upravo u toj oblasti — u diskretnom praćenju,
              identifikaciji treće osobe i pripremi dokaza koji izdrže sud.
            </p>
            <p>
              To ne znači da radimo samo bračne slučajeve. Poslovne provere,
              digitalna forenzika, potrage za nestalim licima, tehnički
              kontra-nadzor i podrška advokatskim kancelarijama redovan su deo
              posla. Ali svaki slučaj, bez obzira na veličinu, dobija istu pažnju
              i istu diskreciju.
            </p>

            <h2>Preko 25 godina iskustva u bezbednosnim poslovima</h2>
            <p>
              Detektiv Marinković je istražitelj i obaveštajni profesionalac sa
              dugogodišnjim operativnim iskustvom u kriminalističkim istragama,
              obaveštajnoj analizi, istragama organizovanog kriminala i
              strateškim bezbednosnim poslovima. Kao nekadašnji visoki
              funkcioner Ministarstva unutrašnjih poslova Republike Srbije
              vodio je složene istrage, koordinaciju obaveštajnog rada,
              operativno planiranje i analitički menadžment.
            </p>
            <p>
              Taj profesionalni nivo prenosimo i na svakodnevni rad za
              privatne klijente. Isti metod – planiranje, disciplinovano
              praćenje, analiza i dokumentovanje – koristi se kada proveravamo
              sumnju u bračnu prevaru, kao i kada radimo složene poslovne
              istrage za firme i advokatske kancelarije. Rezultat je
              preciznost, diskrecija i izveštaj koji je razumljiv i upotrebljiv.
            </p>
            <p>Posebne oblasti rada:</p>
            <ul>
              <li>Bračne prevare, provera neverstva i porodične istrage</li>
              <li>Korporativne i interne istrage</li>
              <li>Istrage prevara i finansijskih zloupotreba</li>
              <li>OSINT i obaveštajna analiza</li>
              <li>Due diligence i provera biografije (background provere)</li>
              <li>Otkrivanje skrivenih poslovnih veza i mreža</li>
              <li>Istrage povrede intelektualne svojine</li>
              <li>Koordinacija praćenja i operativna podrška</li>
              <li>Strateška procena rizika</li>
            </ul>
            <p>
              Za domaće i međunarodne klijente dostupni smo za saradnju u
              osetljivim slučajevima visokog rizika.
            </p>

            <h2>Kako pristupamo svakom slučaju</h2>
            <p>
              Prvo saslušamo. Bez naplate i bez pritiska da se odmah odlučite.
              Kada razumemo šta vam je zaista potrebno, predlažemo pristup i
              kažemo okvirnu cenu. Tek ako vam to odgovara, potpisuje se ugovor i
              počinje rad. Tokom istrage dobijate obaveštenja o napretku, a na
              kraju pisani izveštaj sa dokazima i razgovor o mogućim koracima.
            </p>

            <h2>Licenca i pravni okvir</h2>
            <p>
              Detektivsku delatnost u Srbiji uređuje Zakon o detektivskoj
              delatnosti, a obavljaju je lica sa licencom nadležnog ministarstva.
              Radimo isključivo u tom okviru: prikupljamo podatke za opravdanu
              svrhu, poštujemo privatnost trećih lica i ne primenjujemo metode
              koje zakon zabranjuje. Na zahtev klijenta dajemo na uvid dokaz o
              licenci i potpisujemo ugovor o poslovnoj saradnji.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-paper p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-lg font-bold">Ukratko</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Sedište</dt>
                <dd className="font-semibold text-ink">
                  {site.address.locality}, {site.address.countryName}
                </dd>
              </div>
              <div>
                <dt className="text-muted">Područje rada</dt>
                <dd className="font-semibold text-ink">
                  Cela Srbija · region i inostranstvo po dogovoru
                </dd>
              </div>
              <div>
                <dt className="text-muted">Dostupnost</dt>
                <dd className="font-semibold text-ink">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-muted">Telefon</dt>
                <dd>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="font-semibold text-ink hover:text-gold"
                  >
                    {site.phoneIntl}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">E-mail</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-semibold text-ink hover:text-gold"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="Naše vrednosti"
          title="Četiri pravila kojih se držimo"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-tint text-gold">
                <Icon name={v.icon} size={24} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
