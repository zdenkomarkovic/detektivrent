import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { site } from "@/lib/site";
import { getService } from "@/lib/services";
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

const PATH = "/detektiv-za-bracne-prevare";

export const metadata = pageMeta({
  title:
    "Detektiv za bračne prevare | Provera neverstva i dokazi za razvod | Marinković",
  description:
    "Diskretna provera sumnje u bračnu prevaru: praćenje i opservacija, foto i video dokazi, identifikacija treće osobe i pisani izveštaj upotrebljiv u brakorazvodnoj parnici. Cela Srbija, 0–24h, prvi razgovor besplatan.",
  path: PATH,
  absoluteTitle: true,
});

const signs = [
  "Telefon je odjednom pod lozinkom, okrenut ekranom nadole i ide svuda sa partnerom",
  "Učestala „službena putovanja” i prekovremeni rad, nedostupnost u tačno određenim terminima",
  "Neobjašnjivi troškovi, gotovinska podizanja i nove navike u izgledu",
  "Emotivno udaljavanje, izbegavanje planova i svađe tik pred izlaske",
  "Priče koje se ne poklapaju iz dana u dan",
  "Nova kilometraža na autu, tuđi tragovi, promenjena podešavanja sedišta",
  "Sumnja u vezu sa konkretnom osobom koju želite da identifikujete",
  "Vaš instinkt mesecima ponavlja istu stvar, iako tražite racionalno objašnjenje",
];

const steps = [
  {
    t: "Poverljiv razgovor",
    d: "Besplatno i bez obaveze. Opisujete situaciju, termine i lica od interesa. Savetujemo šta ima smisla, a šta ne.",
  },
  {
    t: "Plan i ponuda",
    d: "Definišemo termine i lokacije koje treba pokriti, broj detektiva i vozila, i dobijate okvirnu cenu pre početka.",
  },
  {
    t: "Diskretno praćenje i opservacija",
    d: "Terenski rad uz rotaciju tima i vozila, foto i video dokumentovanje kretanja i kontakata. Radi se u okviru Zakona o detektivskoj delatnosti.",
  },
  {
    t: "Identifikacija treće osobe",
    d: "Kada se utvrdi kontakt, utvrđujemo ko je druga strana – ime, adresa i osnovne okolnosti.",
  },
  {
    t: "Izveštaj sa dokazima",
    d: "Pisani izveštaj sa hronologijom i priloženim materijalom, sačinjen tako da bude upotrebljiv kod advokata i na sudu.",
  },
];

const faqs = [
  {
    q: "Da li partner može da sazna da ga proveravam?",
    a: "Rad je osmišljen da bude potpuno neprimetan. Koristimo rotaciju tima i vozila i radije produžimo istragu nego što rizikujemo otkrivanje zarad bržeg rezultata.",
  },
  {
    q: "Koliko dana praćenja je potrebno da se otkrije prevara?",
    a: "Obrazac ponašanja se retko vidi u jednom izlasku. Najčešće je potrebno nekoliko dana do dve nedelje, u zavisnosti od navika lica i broja termina koje treba pokriti. Okvir dogovaramo unapred.",
  },
  {
    q: "Mogu li dokazi da se koriste u brakorazvodnoj parnici?",
    a: "Da, ako su pribavljeni zakonito. Pisani izveštaj, foto i video dokumentacija i, po potrebi, svedočenje detektiva o načinu pribavljanja koriste se u postupcima za razvod, deobu imovine i poveravanje dece. Konačnu ocenu dokaza daje sud.",
  },
  {
    q: "Šta ako je partner obrisao poruke i pozive?",
    a: "Digitalnom forenzikom se obrisani sadržaj često može povratiti, ali samo na uređaju za koji postoji zakonski osnov (vaš uređaj, zajednički uređaj, uređaj deteta). Ne pristupamo tuđim nalozima i ne presrećemo komunikaciju.",
  },
  {
    q: "Smem li sam da postavim GPS ili aplikaciju za praćenje partneru?",
    a: "Ne. Postavljanje uređaja ili aplikacija za praćenje na tuđi telefon ili automobil bez pravnog osnova je nezakonito i takav dokaz se okreće protiv vas. Zbog toga i zbog rizika od otkrivanja, taj posao treba da radi licencirani detektiv.",
  },
  {
    q: "Koliko košta provera neverstva?",
    a: "Obračunava se po danu ili satu angažovanja tima, a na cenu utiču broj detektiva i vozila, broj termina i lokacija. Okvirnu ponudu sa jasnim obimom dobijate pre nego što bilo šta počne, a prvi razgovor je besplatan.",
  },
];

export default function BracnePrevarePage() {
  const related = [
    getService("pracenje-i-opservacija"),
    getService("poligrafsko-testiranje"),
    getService("porodicne-i-partnerske-istrage"),
  ].filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Detektiv za bračne prevare i provera neverstva",
          description:
            "Diskretna provera sumnje u bračnu prevaru: praćenje i opservacija, foto i video dokazi, identifikacija treće osobe i pisani izveštaj upotrebljiv u brakorazvodnoj parnici.",
          path: PATH,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs
            items={[{ name: "Detektiv za bračne prevare", path: PATH }]}
          />
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
            <Icon name="family" size={15} />
            Najtraženija usluga agencije
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Detektiv za bračne prevare i proveru neverstva
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Sumnja u vernost partnera iscrpljuje san, posao i odnos sa decom, a
            odgovore je gotovo nemoguće dobiti sam. Najveći deo prakse agencije
            Marinković čine upravo bračne i partnerske istrage – znamo kako se do
            istine dolazi brzo, tiho i bez štete po porodicu.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="lg">
              <Icon name="phone" size={18} />
              Pozovite {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="light" size="lg">
              Pošaljite poverljiv upit
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/55">
            Prvi razgovor je besplatan i bez obaveze · {site.responseTime}
          </p>
        </Container>
      </section>

      {/* Uvod + znakovi */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rich max-w-xl">
            <h2>Cilj nije osveta, već jasna slika</h2>
            <p>
              Provera neverstva ne služi da nekoga „uhvatite” pod svaku cenu,
              nego da dobijete činjenice na osnovu kojih mirno odlučujete šta
              dalje – da li brak ima budućnost, da li idete na razvod i kako da
              zaštitite sebe i decu.
            </p>
            <p>
              Radimo za supružnike, verenike i partnere u vezi, kao i za
              roditelje koji strahuju za dete povezano sa nepoznatom osobom.
              Svaki korak je usklađen sa Zakonom o detektivskoj delatnosti, a vaš
              identitet i podaci o slučaju ostaju poverljivi.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold">
              Znakovi koji najčešće pokreću proveru
            </h2>
            <ul className="mt-4 space-y-3">
              {signs.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[0.95rem] text-ink-mute"
                >
                  <Icon
                    name="checkCircle"
                    size={20}
                    className="mt-0.5 shrink-0 text-gold"
                  />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">
              Nijedan znak sam po sebi nije dokaz. Ali kada se nekoliko njih
              pojavi zajedno i traje, vredi ih shvatiti ozbiljno.
            </p>
          </div>
        </div>
      </Section>

      {/* Kako teče */}
      <Section tone="paper">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Kako teče provera neverstva
        </h2>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.t}
              className="rounded-2xl border border-line bg-white p-6 shadow-soft"
            >
              <span className="font-display text-sm font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Dokazi */}
      <Section tone="white" containerSize="narrow">
        <div className="rich">
          <h2>Kakve dokaze dobijate i kako se koriste</h2>
          <p>
            Po završetku dobijate dosije koji advokat može odmah da koristi.
            Materijal se prikuplja i dokumentuje tako da izdrži proveru na sudu.
          </p>
          <ul>
            <li>Pisani izveštaj sa hronologijom događaja – datumi, vreme, lokacije</li>
            <li>Foto i video dokumentacija kretanja i kontakata sa vremenskim oznakama</li>
            <li>Identifikacija treće osobe – ime, adresa, osnovne okolnosti</li>
            <li>Procena učestalosti i obrasca kontakata</li>
            <li>Spremnost detektiva da svedoči o načinu pribavljanja dokaza</li>
          </ul>
          <p>
            Dokazi se koriste u brakorazvodnoj parnici, kod deobe zajedničke
            imovine i u postupku poveravanja dece. Kada drugih dokaza nema, a
            partner tvrdi da je nevin, koristi se i{" "}
            <Link href="/usluge/poligrafsko-testiranje">
              poligrafsko testiranje
            </Link>
            .
          </p>

          <h2>Diskrecija – partner neće znati</h2>
          <p>
            Rad je koncipiran tako da ostane potpuno neprimetan. Koristimo
            rotaciju tima i vozila, poznavanje terena i strpljenje. Radije ćemo
            produžiti istragu za dan-dva nego rizikovati otkrivanje – jer kada
            partner posumnja da ga pratite, istina se povlači dublje.
          </p>

          <h2>Koliko traje i koliko košta</h2>
          <p>
            Provera neverstva najčešće traje od nekoliko dana do dve nedelje.
            Obračun je po danu ili satu angažovanja tima; na cenu utiču broj
            detektiva i vozila, broj termina i lokacija, kao i putni trošak za
            rad van Beograda. Okvirnu ponudu dobijate pre početka, a prvi
            razgovor je besplatan i ni na šta vas ne obavezuje.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-line bg-ink p-6 text-white ink-grid sm:p-8">
          <h2 className="font-display text-xl font-bold text-white">
            Razgovarajmo poverljivo, bez obaveze
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Opišite situaciju u kratkom razgovoru. Dobijate iskrenu procenu da li
            i kako provera ima smisla u vašem slučaju i okvirnu cenu.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="md">
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </Button>
            <Button href={site.whatsappHref} variant="light" size="md">
              <Icon name="whatsapp" size={17} />
              WhatsApp poruka
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="paper" containerSize="narrow">
        <h2 className="font-display text-2xl font-bold sm:text-3xl">
          Česta pitanja – bračne prevare
        </h2>
        <div className="mt-6">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      {/* Povezano */}
      <Section tone="white">
        <h2 className="font-display text-2xl font-bold">Povezane usluge</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Pogledajte i vodič:{" "}
          <Link
            href="/blog/znakovi-da-vas-partner-vara"
            className="font-semibold text-gold underline underline-offset-4"
          >
            Kako prepoznati da vas partner vara — 12 znakova
          </Link>
        </p>
      </Section>

      <CtaBand
        title="Sumnjate u bračnu prevaru? Ne nosite neizvesnost sami."
        text="Prvi razgovor je besplatan i poverljiv. Dobijate procenu, plan i okvirnu cenu — bez pritiska da se odmah odlučite."
      />
    </>
  );
}
