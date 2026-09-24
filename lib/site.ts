// Centralna konfiguracija sajta – NAP podaci, navigacija, kontakt.
// Ove vrednosti se koriste za SEO, structured data i kontakt sekcije.

export const site = {
  name: "Detektivska agencija Marinković",
  shortName: "Detektiv Marinković",
  legalName: "Privatni detektiv Marinković",
  // Kratki slogan koji se pojavljuje u hero sekciji i meta opisima
  tagline: "Privatni detektiv za bračne prevare, porodične i poslovne istrage",
  description:
    "Licencirani privatni detektiv Marinković sa 25+ godina iskustva u bezbednosnim i istražnim poslovima. Diskretne istrage bračnih prevara i neverstva, praćenje i opservacija lica, poligrafsko testiranje, poslovne provere i digitalna forenzika. Rad za fizička i pravna lica u celoj Srbiji.",

  // ─── Kontakt (NAP – Name, Address, Phone) ──────────────────────────────────
  phoneHref: "+381648925000",
  phoneDisplay: "064 892 5000",
  phoneIntl: "+381 64 892 5000",
  email: "mddetektiv@gmail.com",
  whatsappHref: "https://wa.me/381648925000",
  viberHref: "viber://chat?number=%2B381648925000",

  // Napomena: precizna adresa nije javno objavljena zbog prirode posla.
  // Ako postoji kancelarija sa adresom, dopuniti addressLocality/streetAddress.
  address: {
    locality: "Beograd",
    region: "Beograd",
    country: "RS",
    countryName: "Srbija",
  },

  areaServed: [
    "Beograd",
    "Novi Sad",
    "Niš",
    "Kragujevac",
    "Subotica",
    "Čačak",
    "cela Srbija",
    "region",
  ],

  hours: "0–24h, svakog dana u nedelji",
  responseTime: "Odgovor na upit u roku od nekoliko sati",
  founded: "2009",

  // Koristi se u structured data (sameAs) – dopuniti stvarnim profilima
  social: [] as string[],
} as const;

// ─── Glavna navigacija ──────────────────────────────────────────────────────
export const nav = [
  { label: "Početna", href: "/" },
  { label: "Bračne prevare", href: "/detektiv-za-bracne-prevare" },
  { label: "Usluge", href: "/usluge" },
  { label: "Lokacije", href: "/lokacije" },
  { label: "Kako radimo", href: "/kako-radimo" },
  { label: "O nama", href: "/o-nama" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

// Skraćena lista poverenja / prednosti (koristi se na više mesta)
export const trustPoints = [
  {
    title: "Licencirani rad",
    text: "Postupamo u skladu sa Zakonom o detektivskoj delatnosti, uz važeću licencu i legalne metode prikupljanja podataka.",
  },
  {
    title: "Potpuna diskrecija",
    text: "Vaš upit i identitet su poverljivi. Podaci o slučaju se ne dele ni sa kim osim sa vama.",
  },
  {
    title: "Proverljivi dokazi",
    text: "Foto i video dokumentacija, pisani izveštaji i hronologija upotrebljivi u pravnim postupcima.",
  },
  {
    title: "Iskustvo u bračnim istragama",
    text: "Najveći deo prakse čine slučajevi neverstva i porodičnih sporova – znamo kako da se do istine dođe brzo i tiho.",
  },
] as const;
