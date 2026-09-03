// Opšta česta pitanja – koristi se na /cesta-pitanja i za FAQPage structured data.

export interface Faq {
  q: string;
  a: string;
}

export const generalFaqs: Faq[] = [
  {
    q: "Da li je angažovanje privatnog detektiva legalno u Srbiji?",
    a: "Jeste. Detektivsku delatnost uređuje Zakon o detektivskoj delatnosti, a rad obavljaju lica sa licencom Ministarstva unutrašnjih poslova. Detektiv sme da prikuplja podatke za konkretnu, opravdanu svrhu i uz poštovanje privatnosti trećih lica. Agencija Marinković radi isključivo u tom okviru.",
  },
  {
    q: "Koliko košta privatni detektiv?",
    a: "Cena zavisi od vrste posla, broja detektiva i vozila, trajanja i lokacije. Praćenje se najčešće obračunava po danu ili po satu angažovanja tima, a provere i forenzika po obimu posla. Nakon kratkog razgovora dobijate okvirnu ponudu i procenu troška pre nego što bilo šta počne.",
  },
  {
    q: "Da li je moj upit poverljiv?",
    a: "U potpunosti. Već prvi kontakt tretiramo kao poverljiv. Podatke o vama i slučaju ne delimo ni sa kim, a komunikaciju vodimo kanalom koji vama najviše odgovara (telefon, WhatsApp, Viber, e-mail, sastanak na neutralnom mestu).",
  },
  {
    q: "Koliko traje istraga?",
    a: "Provera neverstva najčešće traje od nekoliko dana do dve nedelje, poslovne provere 3–10 radnih dana, a potrage i forenzika zavise od podataka kojima se raspolaže. Realan rok dogovaramo unapred i redovno vas izveštavamo o napretku.",
  },
  {
    q: "Mogu li dokazi da se koriste na sudu?",
    a: "Da, ako su pribavljeni zakonito. Pisani izveštaj, foto i video dokumentacija i, po potrebi, svedočenje detektiva o načinu pribavljanja dokaza koriste se u brakorazvodnim, poveriteljskim, radnim, izvršnim i drugim postupcima. Konačnu ocenu dokaza uvek daje sud.",
  },
  {
    q: "Radite li samo u Beogradu?",
    a: "Radimo na celoj teritoriji Srbije, a po dogovoru i u regionu i inostranstvu preko mreže saradnika. Za rad van mesta sedišta obračunava se putni trošak, o čemu vas obaveštavamo unapred.",
  },
  {
    q: "Šta vam je potrebno da biste počeli?",
    a: "Osnovni podaci o licu ili subjektu (ime, opis, vozilo, adresa ili mesta koja posećuje), opis situacije i cilj koji želite da postignete. Što više detalja imate, brže i jeftinije dolazimo do rezultata. Sve dalje planiramo zajedno.",
  },
  {
    q: "Kako izgleda saradnja korak po korak?",
    a: "Prvo obavljamo poverljiv razgovor i procenu, zatim dobijate ponudu sa obimom i cenom. Nakon dogovora potpisuje se ugovor o poslovnoj saradnji, sprovodi se istraga uz periodična obaveštavanja, a na kraju dobijate pisani izveštaj sa dokazima i usmenu konsultaciju o daljim koracima.",
  },
  {
    q: "Da li lice koje se proverava može da sazna za istragu?",
    a: "Rad je osmišljen da bude potpuno diskretan. Koristimo rotaciju tima i vozila i radije produžimo istragu nego što rizikujemo otkrivanje. Kod provera iz evidencija i OSINT analize nema nikakvog kontakta sa proveravanim licem.",
  },
  {
    q: "Da li mogu anonimno da se raspitam pre nego što se odlučim?",
    a: "Možete. Prvi razgovor je bez obaveze i naplate. Objasnite situaciju, dobićete iskrenu procenu da li i kako možemo da pomognemo i okvirnu cenu, pa tek onda odlučujete.",
  },
];
