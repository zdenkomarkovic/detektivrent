// Lokacijske (gradske) stranice za lokalni SEO: „privatni detektiv <grad>",
// „detektivska agencija <grad>". Sedište je Beograd; ovo su gradovi pokrivanja.
//
// URL: /privatni-detektiv-<slug>  (npr. /privatni-detektiv-nis)
// Ruta: app/[lokacija]/page.tsx

export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  /** slug bez prefiksa; puni URL je /privatni-detektiv-<slug> */
  slug: string;
  /** Nominativ: „Niš" */
  name: string;
  /** Lokativ sa predlogom: „u Nišu" */
  inLoc: string;
  /** Genitiv: „Niša" */
  ofCity: string;
  /** Okrug / region radi konteksta */
  region: string;
  /** Približna udaljenost od Beograda u km */
  distanceKm: number;
  /** Nadležni sudovi (za kontekst dokaza) */
  courts: string;
  /** Prioritetne usluge za taj grad (slugovi iz lib/services.ts) */
  highlightServices: string[];
  /** 2 uvodna pasusa, jedinstvena po gradu */
  intro: string[];
  /** 1–2 pasusa o pokrivanju terena u tom gradu */
  coverage: string[];
  /** Manja mesta koja se pokrivaju iz istog čvorišta */
  nearby: string[];
  faqs: LocationFaq[];
}

export const locations: Location[] = [
  {
    slug: "novi-sad",
    name: "Novi Sad",
    inLoc: "u Novom Sadu",
    ofCity: "Novog Sada",
    region: "Južna Bačka",
    distanceKm: 80,
    courts: "Osnovni i Viši sud u Novom Sadu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "poligrafsko-testiranje",
    ],
    intro: [
      "Novi Sad je zbog blizine Beograda i guste saobraćajne povezanosti jedan od gradova u kojima najčešće radimo van sedišta. Tim izlazi na teren istog ili narednog dana, a kratka razdaljina znači da praćenje i opservacija u Novom Sadu ne poskupljuju značajno zbog putnih troškova.",
      "Najveći broj upita iz Novog Sada odnosi se na sumnju u neverstvo i porodične sporove, potom na poslovne provere – grad ima jaku IT i preduzetničku scenu, pa su provera partnera pre ugovora, zaštita poslovnih podataka i kontrola zaposlenih česti razlozi za angažovanje.",
    ],
    coverage: [
      "Novi Sad pokrivamo timom sa lokalnim poznavanjem terena – od Limana, Grbavice i Detelinare do Petrovaradina, Sremske Kamenice i poslovnih zona. Za praćenje u širem centru i tržnim centrima formiramo veći tim i koristimo rotaciju vozila kako lice ne bi primetilo nadzor.",
      "Iz Novog Sada kao čvorišta radimo i celu Bačku i Srem. Dokazi se pripremaju tako da budu upotrebljivi pred sudovima u Novom Sadu, kao i u postupcima koji se vode u Beogradu.",
    ],
    nearby: ["Petrovaradin", "Sremska Kamenica", "Beočin", "Temerin", "Žabalj", "Bačka Palanka", "Sremski Karlovci"],
    faqs: [
      {
        q: "Koliko brzo možete da izađete na teren u Novom Sadu?",
        a: "Po pravilu istog dana za hitne slučajeve, inače u roku od 24–48 sati, kada uskladimo termine sa navikama lica koje se prati.",
      },
      {
        q: "Da li se putni troškovi iz Beograda posebno naplaćuju?",
        a: "Zbog male udaljenosti (oko 80 km) putni trošak za Novi Sad je minimalan i unapred je iskazan u ponudi, bez naknadnih iznenađenja.",
      },
      {
        q: "Radite li i mesta oko Novog Sada?",
        a: "Da – celu Južnu Bačku i Srem: Bačku Palanku, Temerin, Beočin, Sremske Karlovce, Žabalj i druga mesta pokrivamo iz istog tima.",
      },
    ],
  },

  {
    slug: "nis",
    name: "Niš",
    inLoc: "u Nišu",
    ofCity: "Niša",
    region: "Nišavski okrug",
    distanceKm: 240,
    courts: "Osnovni i Viši sud u Nišu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "potraga-za-nestalim-licima",
      "digitalna-forenzika-i-osint",
    ],
    intro: [
      "Niš je najveći grad na jugu Srbije i prirodno središte za rad na celom jugoistoku zemlje. Za angažman u Nišu tim se raspoređuje unapred, uz plan koji pokriva ključne termine, tako da jedna poseta terenu bude maksimalno iskorišćena.",
      "Iz Niša dobijamo najviše upita za provere neverstva i porodične istrage, ali i za potrage za licima i digitalnu forenziku – kada je kontakt sa članom porodice prekinut ili kada treba identifikovati anonimne pošiljaoce pretnji i profile na mrežama.",
    ],
    coverage: [
      "U Nišu radimo na širem gradskom području – Medijana, Palilula, Crveni krst, Pantelej – kao i u prigradskim naseljima i duž koridora prema Leskovcu i Pirotu. Za praćenje se koristi lokalna baza tačaka i tim koji ne odudara od okruženja.",
      "Niš nam je i baza za jugoistok Srbije: Leskovac, Pirot, Prokuplje i okolna mesta. Izveštaji i dokazi se pripremaju za sudove u Nišu i za postupke koji se vode drugde.",
    ],
    nearby: ["Niška Banja", "Leskovac", "Pirot", "Prokuplje", "Aleksinac", "Bela Palanka", "Doljevac"],
    faqs: [
      {
        q: "Dolazite li iz Beograda u Niš?",
        a: "Da. Za angažmane u Nišu planiramo teren unapred i pokrivamo ga u kontinuitetu dok se ne dobije jasan rezultat, umesto pojedinačnih kratkih dolazaka.",
      },
      {
        q: "Da li je istraga u Nišu skuplja zbog udaljenosti?",
        a: "Sam rad se ne naplaćuje drugačije. Putni trošak i, kod višednevnog rada, smeštaj iskazuju se posebno u ponudi i unapred ih odobravate.",
      },
      {
        q: "Pokrivate li i jug Srbije oko Niša?",
        a: "Da – Leskovac, Pirot, Prokuplje, Aleksinac i druga mesta na jugoistoku radimo iz niškog tima.",
      },
    ],
  },

  {
    slug: "kragujevac",
    name: "Kragujevac",
    inLoc: "u Kragujevcu",
    ofCity: "Kragujevca",
    region: "Šumadijski okrug",
    distanceKm: 140,
    courts: "Osnovni i Viši sud u Kragujevcu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "poslovne-istrage-i-provere",
      "pracenje-i-opservacija",
      "detekcija-prisluskivaca-i-gps",
    ],
    intro: [
      "Kragujevac je centar Šumadije i važno industrijsko središte, pa se uz porodične istrage ovde često radi na poslovnim proverama, kontroli zaposlenih i zaštiti poslovnih tajni u proizvodnji i kod dobavljača.",
      "Za privatne klijente iz Kragujevca najčešći razlog angažovanja je sumnja u vernost partnera i priprema dokaza pre brakorazvodne parnice ili spora o poveravanju dece.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Aerodroma do Stanova, Pivare i industrijske zone, kao i prigradskih naselja. Za rad u proizvodnim pogonima i oko njih koristimo diskretne metode koje ne remete poslovanje.",
      "Iz Kragujevca radimo celu Šumadiju i Pomoravlje – Aranđelovac, Topolu, Batočinu, Lapovo i okolna mesta.",
    ],
    nearby: ["Aranđelovac", "Topola", "Batočina", "Lapovo", "Rača", "Knić"],
    faqs: [
      {
        q: "Radite li poslovne provere za firme iz Kragujevca?",
        a: "Da – provera partnera i dobavljača pre ugovora, istrage internih prevara, kontrola zaposlenih na terenu i tehnički kontra-nadzor poslovnih prostorija.",
      },
      {
        q: "Koliko unapred treba zakazati istragu u Kragujevcu?",
        a: "Za planiran rad dovoljno je nekoliko dana. Kod hitnih situacija reagujemo odmah po prikupljanju osnovnih podataka.",
      },
    ],
  },

  {
    slug: "subotica",
    name: "Subotica",
    inLoc: "u Subotici",
    ofCity: "Subotice",
    region: "Severna Bačka",
    distanceKm: 180,
    courts: "Osnovni i Viši sud u Subotici",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "poslovne-istrage-i-provere",
      "provere-podataka-iz-arhiva",
      "pracenje-i-opservacija",
    ],
    intro: [
      "Subotica je zbog blizine granice sa Mađarskom specifična: čest je rad na proverama koje se tiču prekograničnog kretanja lica, imovine u dve države i poslovnih partnera koji posluju sa inostranstvom.",
      "Uz porodične istrage, iz Subotice dobijamo upite za provere porekla i vlasništva imovine, kao i za utvrđivanje činjenica pre nasledničkih i imovinskih sporova.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Paliča do Kelebije, Bajmoka i prigradskih naselja, uz tim koji poznaje lokalne rute i granični režim. Za prekogranične provere sarađujemo sa proverenim saradnicima u regionu.",
      "Iz Subotice radimo celu Severnu Bačku i Banat – Sombor, Kanjižu, Sentu, Bačku Topolu i okolna mesta.",
    ],
    nearby: ["Palić", "Kelebija", "Bajmok", "Kanjiža", "Senta", "Bačka Topola", "Sombor"],
    faqs: [
      {
        q: "Radite li provere koje uključuju Mađarsku i region?",
        a: "Osnovne prekogranične provere lica i firmi radimo preko mreže saradnika. Obim i rok zavise od jurisdikcije i unapred se definišu.",
      },
      {
        q: "Možete li da proverite imovinu i vlasništvo za spor u Subotici?",
        a: "Da – prikupljanje podataka iz javnih knjiga i evidencija o imovini, teretima i vlasničkoj strukturi standardni je deo naših provera iz arhiva.",
      },
    ],
  },

  {
    slug: "pancevo",
    name: "Pančevo",
    inLoc: "u Pančevu",
    ofCity: "Pančeva",
    region: "Južni Banat",
    distanceKm: 20,
    courts: "Osnovni sud u Pančevu, Viši sud u Pančevu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "digitalna-forenzika-i-osint",
    ],
    intro: [
      "Pančevo je praktično predgrađe Beograda, pa je pokrivanje brzo i troškovno povoljno – tim je na terenu za manje od sat vremena, a mnogi klijenti iz Pančeva sastanak obave u Beogradu.",
      "Zbog velike industrijske zone, uz porodične istrage često se radi na kontroli zaposlenih, proverama u lancu snabdevanja i zaštiti poslovnih prostorija od prisluškivanja.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Strelišta do Tesle, Koteža i industrijske zone, kao i naselja Starčevo, Kačarevo i Jabuka. Blizina Beograda omogućava brzu rotaciju tima i vozila.",
      "Iz Pančeva radimo i Južni Banat – Kovin, Alibunar, Kovačicu i okolna mesta.",
    ],
    nearby: ["Starčevo", "Kačarevo", "Jabuka", "Kovin", "Alibunar", "Kovačica", "Opovo"],
    faqs: [
      {
        q: "Koliko brzo ste na terenu u Pančevu?",
        a: "Zbog blizine Beograda najčešće u roku od sat vremena za hitne situacije, uz prethodni kratak telefonski razgovor.",
      },
      {
        q: "Mogu li sastanak da obavim u Beogradu, a istraga da bude u Pančevu?",
        a: "Da, to je čest slučaj. Sastanak zakazujemo na lokaciji koja vama odgovara, a teren organizujemo u Pančevu i okolini.",
      },
    ],
  },

  {
    slug: "cacak",
    name: "Čačak",
    inLoc: "u Čačku",
    ofCity: "Čačka",
    region: "Moravički okrug",
    distanceKm: 140,
    courts: "Osnovni i Viši sud u Čačku",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "poslovne-istrage-i-provere",
      "potraga-za-vozilima-i-predmetima",
      "pracenje-i-opservacija",
    ],
    intro: [
      "Čačak je jako preduzetničko središte zapadne Srbije sa razvijenom metalskom i trgovinskom privredom, pa se uz porodične istrage ovde često radi na proverama poslovnih partnera i na potragama za vozilima i opremom.",
      "Privatni klijenti iz Čačka najčešće nas angažuju zbog sumnje u neverstvo i radi pripreme dokaza za sudske postupke pred sudovima u Čačku.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Ljubića do Atenice, Kulinovaca i prigradskih naselja, kao i duž koridora prema Kraljevu i Užicu. Za rad na buvljim pijacama i kod otkupljivača, kada se traži ukradena roba, koristimo diskretnu kontrolnu kupovinu.",
      "Iz Čačka radimo Moravički okrug i deo zapadne Srbije – Gornji Milanovac, Lučane, Guču i okolna mesta.",
    ],
    nearby: ["Gornji Milanovac", "Lučani", "Guča", "Mrčajevci", "Ovčar Banja"],
    faqs: [
      {
        q: "Možete li da pronađete ukradeno vozilo ili mašinu iz Čačka?",
        a: "Da – kombinujemo proveru oglasa i tržišta, OSINT i teren na lokacijama od interesa, a nalaz pripremamo za policiju, osiguranje ili tužbu.",
      },
      {
        q: "Radite li provere firmi iz čačanskog kraja?",
        a: "Da – provera reputacije, vlasništva, blokada i sporova, kao i terenska provera stvarnog poslovanja subjekta.",
      },
    ],
  },

  {
    slug: "kraljevo",
    name: "Kraljevo",
    inLoc: "u Kraljevu",
    ofCity: "Kraljeva",
    region: "Raški okrug",
    distanceKm: 170,
    courts: "Osnovni i Viši sud u Kraljevu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "zastita-i-pomoc-porodici",
      "provere-podataka-iz-arhiva",
    ],
    intro: [
      "Kraljevo je saobraćajno čvorište centralne Srbije i kapija prema Kopaoniku i jugozapadu, pa se rad često odnosi na lica koja se kreću između više mesta i na proveru okolnosti tokom putovanja i boravaka van kuće.",
      "Najčešći razlozi angažovanja iz Kraljeva su sumnja u vernost partnera, zaštita dece i starijih članova porodice i priprema dokaza za porodične sporove.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Čibukovca do Ribnice, Jarčujka i prigradskih naselja, kao i duž puteva prema Vrnjačkoj Banji, Raški i Čačku. Za praćenje na dužim relacijama koristimo tim sa više vozila.",
      "Iz Kraljeva radimo Raški okrug i okolinu – Vrnjačku Banju, Rašku, Novi Pazar i mesta duž Ibarske magistrale.",
    ],
    nearby: ["Vrnjačka Banja", "Raška", "Mataruška Banja", "Ušće", "Rudnica"],
    faqs: [
      {
        q: "Pratite li lice koje putuje iz Kraljeva u druga mesta?",
        a: "Da – praćenje na relaciji je uobičajeno; planiramo tim i vozila tako da lice ostane pod nadzorom i van gradskog područja.",
      },
      {
        q: "Radite li i Vrnjačku Banju i Rašku?",
        a: "Da, ta mesta i celu okolinu pokrivamo iz kraljevačkog tima.",
      },
    ],
  },

  {
    slug: "novi-pazar",
    name: "Novi Pazar",
    inLoc: "u Novom Pazaru",
    ofCity: "Novog Pazara",
    region: "Raški okrug",
    distanceKm: 290,
    courts: "Osnovni i Viši sud u Novom Pazaru",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "poslovne-istrage-i-provere",
      "zastita-intelektualne-svojine",
      "pracenje-i-opservacija",
    ],
    intro: [
      "Novi Pazar je najveći grad jugozapadne Srbije sa izuzetno razvijenom tekstilnom i trgovinskom privredom, pa se uz porodične istrage ovde često radi na zaštiti brendova, otkrivanju sive proizvodnje i proverama poslovnih partnera.",
      "Za privatne klijente iz Novog Pazara najčešći povod je sumnja u neverstvo i priprema dokaza za postupke pred lokalnim sudovima.",
    ],
    coverage: [
      "Grad pokrivamo timom sa lokalnim poznavanjem terena i običaja, uz diskreciju prilagođenu sredini u kojoj se ljudi poznaju. Za rad u proizvodnim i trgovinskim zonama koristimo kontrolnu kupovinu i praćenje lanca snabdevanja.",
      "Iz Novog Pazara radimo jugozapad Srbije – Tutin, Sjenicu, Rašku i okolna mesta.",
    ],
    nearby: ["Tutin", "Sjenica", "Raška", "Ribariće"],
    faqs: [
      {
        q: "Radite li zaštitu brendova i otkrivanje falsifikata u Novom Pazaru?",
        a: "Da – monitoring tržišta, kontrolnu kupovinu i utvrđivanje izvora robe radimo za nosioce prava i njihove zastupnike.",
      },
      {
        q: "Kako obezbeđujete diskreciju u sredini gde se svi poznaju?",
        a: "Radom van uočljivih obrazaca, timom koji ne odudara od okruženja i, po potrebi, angažovanjem lica koja nisu lokalno prepoznatljiva.",
      },
    ],
  },

  {
    slug: "zrenjanin",
    name: "Zrenjanin",
    inLoc: "u Zrenjaninu",
    ofCity: "Zrenjanina",
    region: "Srednji Banat",
    distanceKm: 75,
    courts: "Osnovni i Viši sud u Zrenjaninu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "potraga-za-nestalim-licima",
    ],
    intro: [
      "Zrenjanin je centar Srednjeg Banata i, zbog blizine Beograda, jedan od gradova koje pokrivamo brzo i bez velikih putnih troškova. Tim izlazi na teren istog ili narednog dana.",
      "Najčešći razlozi angažovanja iz Zrenjanina su provera neverstva, porodični sporovi i poslovne provere u poljoprivredi i prehrambenoj industriji koje su okosnica lokalne privrede.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Bagljaša do Mužlje, Zelenog polja i prigradskih naselja, kao i salaša i poljoprivrednih gazdinstava u okolini. Ravničarski teren zahteva praćenje sa više vozila i veće odstojanje.",
      "Iz Zrenjanina radimo ceo Srednji Banat – Kikindu, Novi Bečej, Sečanj, Žitište i okolna mesta.",
    ],
    nearby: ["Kikinda", "Novi Bečej", "Sečanj", "Žitište", "Zeleno polje", "Ečka"],
    faqs: [
      {
        q: "Kako pratite lice u ravničarskom, slabo naseljenom terenu?",
        a: "Otvoreni teren oko Zrenjanina zahteva veći tim, više vozila i praćenje sa distance uz optiku, kako lice ne bi primetilo nadzor.",
      },
      {
        q: "Da li je istraga u Zrenjaninu skupa zbog dolaska iz Beograda?",
        a: "Nije – udaljenost je oko 75 km, pa je putni trošak mali i unapred iskazan u ponudi.",
      },
    ],
  },

  {
    slug: "smederevo",
    name: "Smederevo",
    inLoc: "u Smederevu",
    ofCity: "Smedereva",
    region: "Podunavski okrug",
    distanceKm: 45,
    courts: "Osnovni sud u Smederevu, Viši sud u Smederevu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "detekcija-prisluskivaca-i-gps",
    ],
    intro: [
      "Smederevo je zbog blizine Beograda i velike industrije (železara, luka) grad u kome brzo izlazimo na teren, a uz porodične istrage često se radi na kontroli zaposlenih i zaštiti poslovnih tajni.",
      "Privatni klijenti iz Smedereva najčešće nas angažuju zbog sumnje u vernost partnera i radi pripreme dokaza za brakorazvodne i poverilačke postupke.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Carine do Papazovca, Plavinca i prigradskih naselja, kao i industrijske i lučke zone. Blizina Beograda omogućava brzu i troškovno povoljnu rotaciju tima.",
      "Iz Smedereva radimo Podunavlje – Smederevsku Palanku, Veliku Planu, Kovin i okolna mesta.",
    ],
    nearby: ["Smederevska Palanka", "Velika Plana", "Kovin", "Osipaonica", "Kolari"],
    faqs: [
      {
        q: "Koliko brzo ste na terenu u Smederevu?",
        a: "Najčešće istog dana zbog male udaljenosti od Beograda (oko 45 km).",
      },
      {
        q: "Radite li kontra-nadzor poslovnih prostorija u Smederevu?",
        a: "Da – pretragu kancelarija, sala za sastanke i vozila na prisluškivače, skrivene kamere i GPS lokatore, sa pisanim nalazom.",
      },
    ],
  },

  {
    slug: "leskovac",
    name: "Leskovac",
    inLoc: "u Leskovcu",
    ofCity: "Leskovca",
    region: "Jablanički okrug",
    distanceKm: 280,
    courts: "Osnovni i Viši sud u Leskovcu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "potraga-za-nestalim-licima",
      "digitalna-forenzika-i-osint",
    ],
    intro: [
      "Leskovac je najveći grad Jablaničkog okruga i središte tekstilne i prehrambene industrije juga Srbije. Uz porodične istrage, ovde se često radi na kontroli zaposlenih u proizvodnji i na proverama poslovnih partnera u trgovini i poljoprivredi.",
      "Za privatne klijente iz Leskovca najčešći povod je sumnja u vernost partnera i priprema dokaza za brakorazvodne i poverilačke postupke pred sudovima u Leskovcu.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Dubočice do Hisara, Podvorca i prigradskih naselja, kao i duž koridora prema Nišu i Vranju. Za praćenje koristimo tim koji se ne izdvaja u sredini i rotaciju vozila.",
      "Iz Leskovca radimo ceo Jablanički okrug i deo juga – Vlasotince, Lebane, Bojnik, Grdelicu i okolna mesta.",
    ],
    nearby: ["Vlasotince", "Lebane", "Bojnik", "Grdelica", "Vučje", "Brestovac"],
    faqs: [
      {
        q: "Dolazite li iz Beograda u Leskovac?",
        a: "Da. Za angažmane na jugu Srbije teren planiramo unapred i pokrivamo ga u kontinuitetu, umesto kratkih pojedinačnih dolazaka.",
      },
      {
        q: "Radite li i mesta oko Leskovca?",
        a: "Da – Vlasotince, Lebane, Bojnik, Grdelicu i celu okolinu pokrivamo iz istog tima.",
      },
    ],
  },

  {
    slug: "krusevac",
    name: "Kruševac",
    inLoc: "u Kruševcu",
    ofCity: "Kruševca",
    region: "Rasinski okrug",
    distanceKm: 195,
    courts: "Osnovni i Viši sud u Kruševcu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "detekcija-prisluskivaca-i-gps",
    ],
    intro: [
      "Kruševac je centar Rasinskog okruga sa jakom hemijskom, metalskom i prehrambenom industrijom, pa se uz porodične istrage često radi na zaštiti poslovnih tajni, kontroli zaposlenih i proverama u lancu nabavke.",
      "Privatni klijenti iz Kruševca najčešće nas angažuju zbog sumnje u neverstvo i radi pripreme dokaza za sudske postupke.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Bagdale do Rasadnika, Pejtona i prigradskih naselja, kao i duž puteva prema Kraljevu, Trsteniku i Aleksandrovcu. Za rad u industrijskoj zoni koristimo diskretne metode koje ne remete poslovanje.",
      "Iz Kruševca radimo ceo Rasinski okrug – Trstenik, Aleksandrovac, Varvarin, Ćićevac i okolna mesta.",
    ],
    nearby: ["Trstenik", "Aleksandrovac", "Varvarin", "Ćićevac", "Brus", "Ražanj"],
    faqs: [
      {
        q: "Radite li kontra-nadzor poslovnih prostorija u Kruševcu?",
        a: "Da – pretragu kancelarija, sala za sastanke i vozila na prisluškivače, skrivene kamere i GPS lokatore, uz pisani nalaz.",
      },
      {
        q: "Koliko unapred treba zakazati istragu?",
        a: "Za planiran rad dovoljno je nekoliko dana; kod hitnih situacija reagujemo odmah po prikupljanju osnovnih podataka.",
      },
    ],
  },

  {
    slug: "vranje",
    name: "Vranje",
    inLoc: "u Vranju",
    ofCity: "Vranja",
    region: "Pčinjski okrug",
    distanceKm: 345,
    courts: "Osnovni i Viši sud u Vranju",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "potraga-za-nestalim-licima",
      "provere-podataka-iz-arhiva",
    ],
    intro: [
      "Vranje je najjužniji veći grad Srbije i središte Pčinjskog okruga, blizu granice sa Severnom Makedonijom. Čest je rad na proverama koje uključuju prekogranično kretanje lica i imovinu u dve države.",
      "Uz porodične istrage, iz Vranja dobijamo upite za potrage za licima sa kojima je prekinut kontakt i za provere porekla imovine pre nasledničkih i imovinskih sporova.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Sobine do Ćele Kule, Bunuševca i prigradskih naselja, kao i duž koridora prema Bujanovcu i Preševu. Tim poznaje lokalni teren i granični režim.",
      "Iz Vranja radimo ceo Pčinjski okrug – Bujanovac, Preševo, Vladičin Han, Surdulicu i okolna mesta.",
    ],
    nearby: ["Vranjska Banja", "Bujanovac", "Preševo", "Vladičin Han", "Surdulica", "Bosilegrad"],
    faqs: [
      {
        q: "Radite li provere koje uključuju Severnu Makedoniju?",
        a: "Osnovne prekogranične provere lica i firmi radimo preko mreže saradnika; obim i rok zavise od jurisdikcije.",
      },
      {
        q: "Da li je istraga u Vranju skuplja zbog udaljenosti?",
        a: "Sam rad se ne naplaćuje drugačije. Putni trošak i, kod višednevnog rada, smeštaj iskazuju se posebno u ponudi i unapred ih odobravate.",
      },
    ],
  },

  {
    slug: "valjevo",
    name: "Valjevo",
    inLoc: "u Valjevu",
    ofCity: "Valjeva",
    region: "Kolubarski okrug",
    distanceKm: 95,
    courts: "Osnovni i Viši sud u Valjevu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "zastita-i-pomoc-porodici",
    ],
    intro: [
      "Valjevo je centar Kolubarskog okruga, a zbog blizine Beograda (oko 95 km) pokrivamo ga brzo i bez velikih putnih troškova. Tim izlazi na teren istog ili narednog dana.",
      "Najčešći razlozi angažovanja iz Valjeva su provera neverstva, porodični sporovi i zaštita dece i starijih članova porodice.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Tešnjara do Kolubare, Popara i prigradskih naselja, kao i duž puteva prema Lajkovcu, Mionici i Ubu. Brdovit teren u okolini zahteva praćenje sa više vozila.",
      "Iz Valjeva radimo ceo Kolubarski okrug – Lajkovac, Mionicu, Ub, Ljig i okolna mesta.",
    ],
    nearby: ["Lajkovac", "Mionica", "Ub", "Ljig", "Osečina", "Divčibare"],
    faqs: [
      {
        q: "Koliko brzo ste na terenu u Valjevu?",
        a: "Zbog blizine Beograda najčešće istog ili narednog dana, uz prethodni kratak telefonski razgovor.",
      },
      {
        q: "Radite li i Divčibare i planinska mesta u okolini?",
        a: "Da – celu Kolubaru, uključujući Divčibare i okolna sela, pokrivamo iz valjevskog tima.",
      },
    ],
  },

  {
    slug: "sabac",
    name: "Šabac",
    inLoc: "u Šapcu",
    ofCity: "Šapca",
    region: "Mačvanski okrug",
    distanceKm: 80,
    courts: "Osnovni i Viši sud u Šapcu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "potraga-za-vozilima-i-predmetima",
    ],
    intro: [
      "Šabac je centar Mačvanskog okruga, jako poljoprivredno i trgovinsko središte zapadne Srbije, blizu Beograda. Uz porodične istrage, često se radi na proverama poslovnih partnera i na potragama za vozilima i mehanizacijom.",
      "Privatni klijenti iz Šapca najčešće nas angažuju zbog sumnje u vernost partnera i radi pripreme dokaza za brakorazvodne postupke.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Benske Bare do Letnjikovca, Jevremovca i prigradskih naselja, kao i salaša i gazdinstava u Mačvi. Ravničarski teren zahteva praćenje sa distance i više vozila.",
      "Iz Šapca radimo ceo Mačvanski okrug – Bogatić, Vladimirce, Koceljevu, Loznicu i okolna mesta.",
    ],
    nearby: ["Bogatić", "Vladimirci", "Koceljeva", "Loznica", "Prnjavor", "Mačvanska Mitrovica"],
    faqs: [
      {
        q: "Možete li da pronađete ukradeno vozilo ili mašinu iz Šapca?",
        a: "Da – kombinujemo proveru oglasa i tržišta, OSINT i teren, a nalaz pripremamo za policiju, osiguranje ili tužbu.",
      },
      {
        q: "Da li je istraga u Šapcu skupa zbog dolaska iz Beograda?",
        a: "Nije – udaljenost je oko 80 km, pa je putni trošak mali i unapred iskazan u ponudi.",
      },
    ],
  },

  {
    slug: "uzice",
    name: "Užice",
    inLoc: "u Užicu",
    ofCity: "Užica",
    region: "Zlatiborski okrug",
    distanceKm: 190,
    courts: "Osnovni i Viši sud u Užicu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "potraga-za-nestalim-licima",
      "zastita-i-pomoc-porodici",
    ],
    intro: [
      "Užice je centar Zlatiborskog okruga i kapija prema Zlatiboru, Tari i jugozapadu Srbije. Zbog brdsko-planinskog terena i turističkog prometa, rad se često odnosi na lica koja se kreću između više mesta i borave van kuće.",
      "Najčešći razlozi angažovanja iz Užica su sumnja u vernost partnera, zaštita dece i priprema dokaza za porodične sporove.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Carine do Krčagova, Sevojna i prigradskih naselja, kao i turističkih zona na Zlatiboru i Tari. Planinski teren i serpentine zahtevaju praćenje sa više vozila i iskustvo u vožnji na takvim putevima.",
      "Iz Užica radimo ceo Zlatiborski okrug – Požegu, Bajinu Baštu, Čajetinu sa Zlatiborom, Priboj i Prijepolje.",
    ],
    nearby: ["Zlatibor", "Čajetina", "Sevojno", "Požega", "Bajina Bašta", "Priboj", "Prijepolje"],
    faqs: [
      {
        q: "Pratite li lice koje iz Užica putuje na Zlatibor ili Taru?",
        a: "Da – praćenje na planinskim relacijama je uobičajeno; planiramo tim i vozila tako da lice ostane pod nadzorom i van grada.",
      },
      {
        q: "Radite li turističke zone Zlatibor i Tara?",
        a: "Da, te lokacije i celu okolinu pokrivamo iz užičkog tima.",
      },
    ],
  },

  {
    slug: "sombor",
    name: "Sombor",
    inLoc: "u Somboru",
    ofCity: "Sombora",
    region: "Zapadna Bačka",
    distanceKm: 180,
    courts: "Osnovni i Viši sud u Somboru",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "provere-podataka-iz-arhiva",
      "poslovne-istrage-i-provere",
    ],
    intro: [
      "Sombor je centar Zapadne Bačke, poljoprivredno središte blizu granica sa Hrvatskom i Mađarskom. Čest je rad na proverama koje se tiču prekograničnog kretanja i imovine u više država, kao i vlasništva nad poljoprivrednim zemljištem.",
      "Uz porodične istrage, iz Sombora dobijamo upite za provere porekla i tereta imovine pre kupovine, nasleđivanja i imovinskih sporova.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Selenče do Gornje Varoši, Nenadića i prigradskih naselja, kao i salaša u okolini. Za prekogranične provere sarađujemo sa proverenim saradnicima u regionu.",
      "Iz Sombora radimo celu Zapadnu Bačku – Apatin, Odžake, Kulu, Bač i okolna mesta.",
    ],
    nearby: ["Apatin", "Odžaci", "Kula", "Bač", "Stanišić", "Bezdan"],
    faqs: [
      {
        q: "Radite li provere imovine i vlasništva za spor u Somboru?",
        a: "Da – prikupljanje podataka iz javnih knjiga o imovini, teretima i vlasničkoj strukturi standardni je deo naših provera iz arhiva.",
      },
      {
        q: "Radite li provere koje uključuju Hrvatsku i Mađarsku?",
        a: "Osnovne prekogranične provere radimo preko mreže saradnika; obim i rok zavise od jurisdikcije.",
      },
    ],
  },

  {
    slug: "pozarevac",
    name: "Požarevac",
    inLoc: "u Požarevcu",
    ofCity: "Požarevca",
    region: "Braničevski okrug",
    distanceKm: 85,
    courts: "Osnovni i Viši sud u Požarevcu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "detekcija-prisluskivaca-i-gps",
    ],
    intro: [
      "Požarevac je centar Braničevskog okruga, blizu Beograda i velikih energetskih i rudarskih kapaciteta (Kostolac). Uz porodične istrage, često se radi na kontroli zaposlenih i zaštiti poslovnih prostorija od prisluškivanja.",
      "Privatni klijenti iz Požarevca najčešće nas angažuju zbog sumnje u vernost partnera i radi pripreme dokaza za sudske postupke.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Čačalice do Burjana, Kostolca i prigradskih naselja, kao i industrijske zone. Blizina Beograda omogućava brzu rotaciju tima i vozila.",
      "Iz Požarevca radimo ceo Braničevski okrug – Kostolac, Veliko Gradište, Malo Crniće, Žabari i Petrovac na Mlavi.",
    ],
    nearby: ["Kostolac", "Veliko Gradište", "Malo Crniće", "Žabari", "Petrovac na Mlavi"],
    faqs: [
      {
        q: "Koliko brzo ste na terenu u Požarevcu?",
        a: "Najčešće istog dana zbog male udaljenosti od Beograda (oko 85 km).",
      },
      {
        q: "Radite li kontra-nadzor poslovnih prostorija u Požarevcu?",
        a: "Da – pretragu kancelarija, sala za sastanke i vozila na prisluškivače, skrivene kamere i GPS lokatore, sa pisanim nalazom.",
      },
    ],
  },

  {
    slug: "jagodina",
    name: "Jagodina",
    inLoc: "u Jagodini",
    ofCity: "Jagodine",
    region: "Pomoravski okrug",
    distanceKm: 135,
    courts: "Osnovni sud u Jagodini, Viši sud u Jagodini",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "zastita-i-pomoc-porodici",
      "poslovne-istrage-i-provere",
    ],
    intro: [
      "Jagodina je centar Pomoravskog okruga, na koridoru Beograd–Niš, sa razvijenom prehrambenom industrijom i turizmom. Dobra povezanost znači brz izlazak na teren i povoljan putni trošak.",
      "Najčešći razlozi angažovanja iz Jagodine su provera neverstva, porodični sporovi i zaštita dece i starijih članova porodice.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Đurđevog brda do Ribara, Majura i prigradskih naselja, kao i duž autoputa prema Ćupriji i Paraćinu. Za praćenje na koridoru koristimo tim sa više vozila.",
      "Iz Jagodine radimo ceo Pomoravski okrug – Ćupriju, Paraćin, Svilajnac, Rekovac i Despotovac.",
    ],
    nearby: ["Ćuprija", "Paraćin", "Svilajnac", "Rekovac", "Despotovac"],
    faqs: [
      {
        q: "Da li je istraga u Jagodini skupa zbog dolaska iz Beograda?",
        a: "Nije – grad je na autoputu, oko 135 km od Beograda, pa je putni trošak mali i unapred iskazan.",
      },
      {
        q: "Pokrivate li Ćupriju i Paraćin?",
        a: "Da, ta mesta i ceo Pomoravski okrug radimo iz jagodinskog tima.",
      },
    ],
  },

  {
    slug: "pirot",
    name: "Pirot",
    inLoc: "u Pirotu",
    ofCity: "Pirota",
    region: "Pirotski okrug",
    distanceKm: 310,
    courts: "Osnovni sud u Pirotu, Viši sud u Pirotu",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "potraga-za-nestalim-licima",
    ],
    intro: [
      "Pirot je centar Pirotskog okruga, na koridoru Niš–Sofija, nadomak granice sa Bugarskom. Grad ima razvijenu industriju i trgovinu, a mnogo porodica ima članove koji rade ili žive u inostranstvu, što stvara specifične potrebe za diskretnom proverom.",
      "Najčešći razlozi angažovanja iz Pirota su provera neverstva i bračnih prevara, porodični sporovi, poslovne provere partnera i pronalaženje osoba sa kojima je prekinut kontakt.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Tijabare do prigradskih naselja, kao i duž puta ka Nišu, Babušnici i graničnom prelazu. Za praćenje na otvorenom terenu i regionalnim putevima koristimo tim sa više vozila i rotaciju.",
      "Iz Pirota radimo ceo Pirotski okrug – Dimitrovgrad, Babušnicu i Belu Palanku, a po potrebi i susedne okruge.",
    ],
    nearby: ["Dimitrovgrad", "Babušnica", "Bela Palanka"],
    faqs: [
      {
        q: "Da li je istraga u Pirotu skuplja zbog udaljenosti od Beograda?",
        a: "Pirot je oko 310 km od Beograda, a putni trošak određujemo unapred i iskazujemo transparentno. Prema potrebi angažujemo tim iz Niša, čime se trošak smanjuje.",
      },
      {
        q: "Pokrivate li Dimitrovgrad i Babušnicu?",
        a: "Da, ta mesta i ceo Pirotski okrug radimo iz pirotskog tima.",
      },
      {
        q: "Radite li slučajeve bračnih prevara u Pirotu?",
        a: "Da, provera neverstva i prikupljanje dokaza za razvod jedan su od najčešćih razloga angažovanja i u Pirotu, uz punu diskreciju.",
      },
    ],
  },

  {
    slug: "sremska-mitrovica",
    name: "Sremska Mitrovica",
    inLoc: "u Sremskoj Mitrovici",
    ofCity: "Sremske Mitrovice",
    region: "Sremski okrug",
    distanceKm: 75,
    courts: "Osnovni i Viši sud u Sremskoj Mitrovici",
    highlightServices: [
      "porodicne-i-partnerske-istrage",
      "pracenje-i-opservacija",
      "poslovne-istrage-i-provere",
      "provere-podataka-iz-arhiva",
    ],
    intro: [
      "Sremska Mitrovica je centar Sremskog okruga, na pola puta između Beograda i Novog Sada, sa razvijenom poljoprivredom i prehrambenom industrijom. Blizina oba velika grada znači brzo pokrivanje terena.",
      "Uz porodične istrage, iz Sremske Mitrovice dobijamo upite za provere poslovnih partnera i za utvrđivanje činjenica o imovini i zemljištu pre kupovine i sporova.",
    ],
    coverage: [
      "Grad pokrivamo od centra i Male Bosne do Laćarka, Mačvanske Mitrovice i prigradskih naselja, kao i salaša u Sremu. Ravničarski teren zahteva praćenje sa distance i više vozila.",
      "Iz Sremske Mitrovice radimo ceo Sremski okrug – Rumu, Šid, Inđiju, Staru Pazovu i Irig.",
    ],
    nearby: ["Ruma", "Šid", "Inđija", "Stara Pazova", "Irig", "Laćarak"],
    faqs: [
      {
        q: "Koliko brzo ste na terenu u Sremskoj Mitrovici?",
        a: "Najčešće istog ili narednog dana – grad je blizu i Beograda i Novog Sada.",
      },
      {
        q: "Radite li Rumu, Šid i Inđiju?",
        a: "Da, ceo Sremski okrug pokrivamo iz istog tima.",
      },
    ],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export const LOCATION_PREFIX = "privatni-detektiv-";

/** Puni URL putanja, npr. "/privatni-detektiv-nis" */
export function locationPath(slug: string): string {
  return `/${LOCATION_PREFIX}${slug}`;
}
