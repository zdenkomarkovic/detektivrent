# Detektiv Marinković — sajt detektivske agencije

Next.js 15 (App Router) + React 19 + Tailwind CSS v4. Sadržaj na srpskom (latinica),
optimizovan za organsku pretragu („privatni detektiv", „detektivska agencija",
„bračne prevare" i sl.).

## Pokretanje

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Konfiguracija (`.env.local`)

```env
NEXT_PUBLIC_SITE_URL=https://detektiv-marinkovic.rs   # ← promeniti na pravi domen
NEXT_PUBLIC_SITE_NAME=Detektiv Marinković

# Kontakt forma -> Mailjet Send API v3.1
MAILJET_API_KEY=...
MAILJET_SECRET_KEY=...
SITE_MAIL_SENDER=noreply@manikamwebsolutions.com     # verifikovan sender na Mailjet-u
SITE_MAIL_RECEIVER=mddetektiv@gmail.com               # gde stižu upiti sa sajta
```

> `SITE_MAIL_SENDER` mora biti verifikovana adresa/domen u Mailjet nalogu, inače slanje pada.

## Gde se menja sadržaj

| Fajl | Sadržaj |
|------|---------|
| `lib/site.ts` | NAP podaci (telefon, e-mail, grad), navigacija, „zašto mi" tačke |
| `lib/locations.ts` | Gradske (lokacijske) stranice — sedište je Beograd, ostali gradovi za lokalni SEO |
| `lib/services.ts` | Sve usluge — tekst, „kada angažovati", „šta dobijate", FAQ po usluzi |
| `lib/faqs.ts` | Opšta česta pitanja (stranica `/cesta-pitanja`) |
| `lib/posts.ts` | Blog tekstovi (`/blog`) |
| `lib/schema.ts` | JSON-LD (Organization/LocalBusiness, Service, FAQ, BreadcrumbList, BlogPosting) |
| `app/opengraph-image.tsx`, `app/icon.tsx` | Dinamička OG slika i favicon (bez asseta) |

Svaka usluga automatski dobija stranicu `/usluge/<slug>`, ulazi u `sitemap.xml`
i dobija Service + FAQ + Breadcrumb structured data.

### Glavna usluga — bračne prevare

Zbog obima pretraga, „bračne prevare / provera neverstva" ima **zasebnu landing
stranicu** `/detektiv-za-bracne-prevare` (nije `/usluge/...`), sadržaj je u samoj
`app/detektiv-za-bracne-prevare/page.tsx`. Istaknuta je: u glavnom meniju
(„Bračne prevare"), u hero sekciji i posebnoj sekciji na početnoj, kao baner na
`/usluge`, u footeru i sa `priority: 0.95` u sitemap-u. Opšta usluga
`/usluge/porodicne-i-partnerske-istrage` je preusmerena na širi porodični kontekst
da ne bi konkurisala istoj frazi.

### Gradske stranice (lokalni SEO)

Sedište je **Beograd** (naglašeno na početnoj, `/lokacije`, u schema podacima).
Ostali gradovi imaju zasebne stranice radi pretraga tipa „privatni detektiv Niš",
„detektivska agencija Novi Sad":

- URL: `/privatni-detektiv-<grad>` (npr. `/privatni-detektiv-nis`)
- Trenutno (20): Novi Sad, Niš, Kragujevac, Subotica, Pančevo, Čačak, Kraljevo, Novi Pazar, Zrenjanin, Smederevo, Leskovac, Kruševac, Vranje, Valjevo, Šabac, Užice, Sombor, Požarevac, Jagodina, Sremska Mitrovica
- Svaka ima jedinstven tekst, listu okolnih mesta, gradski FAQ i `LocalBusiness` + `FAQPage` + `Breadcrumb` schema
- **Dodavanje grada:** dopiši objekat u `locations` niz u `lib/locations.ts` — ruta, sitemap, footer i linkovi na početnoj se generišu automatski. Ne pravi thin/duplirane stranice: svaki grad treba stvarno drugačiji tekst (lokalni sudovi, privreda, okolna mesta).

## SEO — urađeno

- Jedinstveni `<title>` / meta description po stranici, canonical URL-ovi
- `robots.ts` + `sitemap.ts` (statične + dinamičke rute)
- JSON-LD: ProfessionalService/LocalBusiness, WebSite, Service, FAQPage, BreadcrumbList, BlogPosting
- Open Graph / Twitter kartice + dinamička OG slika
- Semantički HTML, jedan `<h1>` po stranici, interno povezivanje (povezane usluge, „nastavite čitanje")
- `manifest.webmanifest`, skip-link, `prefers-reduced-motion`

## Preostalo pre lansiranja

1. Postaviti pravi domen u `NEXT_PUBLIC_SITE_URL`.
2. Google Search Console — verifikacija (kod ide u `app/layout.tsx`, polje `verification.google`) + poslati sitemap.
3. Uneti tačnu adresu/lokaciju u `lib/site.ts` (`address`) i `lib/schema.ts` ako agencija ima kancelariju sa adresom.
4. Google Business Profile (isti NAP kao na sajtu) — presudno za lokalni rang.
5. Po želji dodati Google Analytics / Plausible u `app/layout.tsx`.
6. Zameniti okvirne podatke (godine iskustva, godina osnivanja) stvarnim.
