// Sadržaj svih detektivskih usluga.
// Svaka usluga ima svoju stranicu /usluge/[slug] i učestvuje u sitemap-u i JSON-LD.

export type IconName =
  | "family"
  | "eye"
  | "polygraph"
  | "briefcase"
  | "scale"
  | "osint"
  | "bug"
  | "shieldFamily"
  | "searchPerson"
  | "dataRecovery"
  | "stalking"
  | "archive"
  | "car"
  | "idea"
  | "tscm"
  | "legal";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  /** Kratak naziv za kartice i navigaciju */
  name: string;
  /** H1 na stranici usluge */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Jedna rečenica – koristi se u listama i kao lead */
  summary: string;
  icon: IconName;
  featured?: boolean;
  /** Uvodni pasusi (2) */
  intro: string[];
  /** „Kada da nas angažujete” – bullet lista */
  when: string[];
  /** „Kako radimo” – 2 pasusa */
  approach: string[];
  /** „Šta dobijate” – isporučivi rezultati */
  deliverables: string[];
  faqs: ServiceFaq[];
  /** slugovi povezanih usluga */
  related: string[];
}

export const services: Service[] = [
  {
    slug: "porodicne-i-partnerske-istrage",
    name: "Porodične i partnerske istrage",
    title: "Porodične i partnerske istrage – vernost, starateljstvo i zaštita porodice",
    metaTitle: "Porodične i partnerske istrage | Detektiv Marinković",
    metaDescription:
      "Diskretne porodične i partnerske istrage: provera nove osobe u životu partnera ili roditelja, dokazi za spor o starateljstvu, zaštita dece i starijih članova porodice.",
    summary:
      "Diskretne provere u vezi, braku i porodici – od nove osobe u životu partnera do dokaza za spor o deci.",
    icon: "family",
    featured: true,
    intro: [
      "Porodični i partnerski odnosi rađaju najosetljivije sumnje: da li je nova osoba u životu partnera ono za šta se predstavlja, u kakvom je društvu dete, ko se približio roditelju koji živi sam. Detektivska agencija Marinković najveći deo prakse gradi na porodičnim slučajevima i pristupa im obazrivo, sa jasnim ciljem da zaštiti klijenta i njegovu porodicu.",
      "Cilj istrage nije osveta, već jasna slika na osnovu koje donosite mirnu odluku – o vezi, braku, imovini ili postupku poveravanja dece. Za fokusiranu proveru sumnje u bračnu prevaru pogledajte i stranicu posvećenu detektivskim uslugama za bračne prevare.",
    ],
    when: [
      "Partner naglo menja navike, radno vreme i lozinke, a telefon drži okrenut ekranom nadole",
      "Učestala „službena putovanja”, nedostupnost u određenim terminima i neobjašnjivi troškovi",
      "Sumnjate u emotivnu ili fizičku vezu sa konkretnom osobom koju želite da identifikujete",
      "Potrebni su vam dokazi pre pokretanja brakorazvodne parnice ili podele imovine",
    ],
    approach: [
      "Nakon poverljivog razgovora definišemo termine i lokacije od interesa, pa sprovodimo diskretno praćenje i opservaciju, foto i video dokumentovanje kretanja i kontakata, kao i proveru okolnosti koje ste naveli. Svaki korak je usklađen sa Zakonom o detektivskoj delatnosti.",
      "Po završetku dobijate pisani izveštaj sa hronologijom događaja i priloženim materijalom, sačinjen tako da bude upotrebljiv u razgovoru sa advokatom i, po potrebi, kao dokazno sredstvo u postupku.",
    ],
    deliverables: [
      "Pisani izveštaj sa datumima, vremenom i lokacijama",
      "Foto i video dokumentacija kretanja i kontakata",
      "Identifikacija trećeg lica (ime, adresa, osnovne okolnosti)",
      "Hronologija i procena učestalosti kontakata",
      "Usmena konsultacija o daljim koracima",
    ],
    faqs: [
      {
        q: "Da li partner može da sazna da ga pratimo?",
        a: "Rad je koncipiran tako da ostane potpuno neprimetan. Koristimo rotaciju tima i vozila i nikada ne rizikujemo otkrivanje zarad bržeg rezultata.",
      },
      {
        q: "Koliko traje ovakva istraga?",
        a: "Najčešće od nekoliko dana do dve nedelje, u zavisnosti od navika lica i broja termina koje treba pokriti. Okvir i cenu dogovaramo unapred.",
      },
      {
        q: "Mogu li dokazi da se koriste na sudu?",
        a: "Da. Izveštaj i materijal pribavljeni na zakonit način koriste se u brakorazvodnim i poveriteljskim postupcima. Konačnu ocenu dokaza uvek daje sud.",
      },
    ],
    related: ["pracenje-i-opservacija", "poligrafsko-testiranje", "zastita-i-pomoc-porodici"],
  },

  {
    slug: "pracenje-i-opservacija",
    name: "Praćenje i opservacija lica",
    title: "Praćenje i opservacija lica – diskretno terensko praćenje",
    metaTitle: "Praćenje i opservacija lica | Detektivsko praćenje | Marinković",
    metaDescription:
      "Profesionalno diskretno praćenje i opservacija lica na terenu. Rotacija tima i vozila, foto i video dokumentacija kretanja, precizna hronologija. Fizička i pravna lica.",
    summary:
      "Profesionalno terensko praćenje uz rotaciju tima i vozila i preciznu foto/video dokumentaciju kretanja.",
    icon: "eye",
    featured: true,
    intro: [
      "Praćenje i opservacija su temelj većine istraga – od provere neverstva do kontrole zaposlenih i partnera u poslu. Kvalitet rezultata direktno zavisi od discipline tima, poznavanja terena i sposobnosti da se lice prati satima, a da to niko ne primeti.",
      "Agencija Marinković praćenje sprovodi u skladu sa zakonom, sa jasno definisanim ciljem i vremenskim okvirom. Ne beležimo ništa što izlazi iz obima dogovorenog zadatka i ne ulazimo u privatne prostore bez zakonskog osnova.",
    ],
    when: [
      "Provera gde se, sa kim i kako partner ili član porodice zaista provodi vreme",
      "Kontrola zaposlenih na terenu, „bolovanja” i sumnje na rad za konkurenciju",
      "Provera poslovnog partnera, dobavljača ili potencijalnog saradnika",
      "Prikupljanje dokaza o obrascu ponašanja pre sudskog postupka",
    ],
    approach: [
      "Za svaki zadatak formiramo tim odgovarajuće veličine i planiramo pokrivanje ključnih termina i lokacija. Tokom praćenja beležimo vreme, adrese, kontakte i prevozna sredstva, uz diskretnu foto i video dokumentaciju.",
      "Nakon terena sređujemo materijal u pregledan izveštaj sa hronologijom i mapom kretanja. Po potrebi organizujemo dodatne dane praćenja dok se ne dobije jasan obrazac ponašanja.",
    ],
    deliverables: [
      "Detaljna hronologija kretanja po danima i satima",
      "Foto i video zapisi sa vremenskim oznakama",
      "Spisak posećenih lokacija i identifikovanih kontakata",
      "Zaključna procena obrasca ponašanja",
      "Mogućnost svedočenja detektiva u postupku",
    ],
    faqs: [
      {
        q: "Koliko osoba čini tim za praćenje?",
        a: "Od jednog do više detektiva i vozila, u zavisnosti od okruženja. U gradu i tržnim centrima potreban je veći tim nego u ruralnom području.",
      },
      {
        q: "Da li je praćenje legalno?",
        a: "Praćenje lica na javnim površinama, radi utvrđivanja činjenica za konkretnu svrhu, dozvoljeno je u okviru detektivske delatnosti. Ne primenjujemo metode koje zakon zabranjuje.",
      },
    ],
    related: ["porodicne-i-partnerske-istrage", "poslovne-istrage-i-provere", "sluzenje-u-pravnim-procesima"],
  },

  {
    slug: "poligrafsko-testiranje",
    name: "Poligrafsko testiranje",
    title: "Poligrafsko testiranje – ispitivanje na detektoru laži",
    metaTitle: "Poligrafsko testiranje (detektor laži) | Cena i termin | Marinković",
    metaDescription:
      "Poligrafsko testiranje kod iskusnog ispitivača – provera vernosti, krađe u firmi, provera zaposlenih i svedoka. Diskretno, po standardizovanoj metodologiji, sa pisanim nalazom.",
    summary:
      "Ispitivanje na poligrafu po standardizovanoj metodologiji – za privatne sumnje i za proveru u firmi.",
    icon: "polygraph",
    featured: true,
    intro: [
      "Poligraf meri fiziološke reakcije (disanje, provodljivost kože, puls i krvni pritisak) tokom pažljivo formulisanih pitanja. Kada je test vođen po pravilima struke, predstavlja snažan alat za razrešenje sumnji koje se drugačije ne mogu dokazati.",
      "Testiranje sprovodimo dobrovoljno i uz pismenu saglasnost ispitanika. Pre testa obavlja se detaljan pretest intervju kako bi pitanja bila jasna i nedvosmislena, a rezultat što pouzdaniji.",
    ],
    when: [
      "Provera sumnje u neverstvo kada nema drugih dokaza, a partner tvrdi da je nevin",
      "Krađa, curenje informacija ili prevara u firmi – sužavanje kruga osoba",
      "Provera kandidata za poverljiva radna mesta (uz saglasnost)",
      "Provera verodostojnosti iskaza svedoka ili poslovnog partnera",
    ],
    approach: [
      "Test se zakazuje u mirnom, kontrolisanom prostoru. Nakon pretest intervjua i upoznavanja sa pitanjima, sledi nekoliko merenja, a zatim analiza poligrama.",
      "Rezultat dobijate u formi pisanog nalaza sa mišljenjem ispitivača (indikacije obmane / nema indikacija obmane / neodlučan nalaz). Nalaz se može koristiti kao osnov za dalje korake ili kao prilog u postupku.",
    ],
    deliverables: [
      "Pretest intervju i usaglašavanje pitanja",
      "Poligrafsko merenje po standardizovanoj tehnici",
      "Pisani nalaz i mišljenje ispitivača",
      "Usmeno tumačenje rezultata",
      "Preporuka za dalje istražne radnje ako je potrebno",
    ],
    faqs: [
      {
        q: "Koliko traje poligrafsko testiranje?",
        a: "Ukupno oko 1,5 do 2,5 sata, od čega najveći deo otpada na pretest intervju. Sama merenja traju kraće.",
      },
      {
        q: "Da li je nalaz poligrafa dokaz na sudu?",
        a: "U našem pravu poligraf nema snagu veštačenja, ali se koristi kao pomoćno sredstvo, orijentir za istragu i element u vansudskim dogovorima. Sud ceni sve dokaze zajedno.",
      },
      {
        q: "Može li neko da „prevari” poligraf?",
        a: "Pokušaji kontramera se prepoznaju kroz metodologiju i ponašanje tokom testa. Zato je pretest intervju ključan deo postupka.",
      },
    ],
    related: ["porodicne-i-partnerske-istrage", "poslovne-istrage-i-provere", "digitalna-forenzika-i-osint"],
  },

  {
    slug: "poslovne-istrage-i-provere",
    name: "Poslovne istrage i provere",
    title: "Poslovne istrage i provere – due diligence i provera partnera",
    metaTitle: "Poslovne istrage i provere partnera | Due diligence | Marinković",
    metaDescription:
      "Provera poslovnih partnera, kupaca i dobavljača, otkrivanje prevara i zloupotreba u firmi, provera zaposlenih i konkurencije. Diskretno, sa jasnim izveštajem za odlučivanje.",
    summary:
      "Provera partnera, kupaca i zaposlenih, otkrivanje internih prevara i zaštita firme od rizika.",
    icon: "briefcase",
    featured: true,
    intro: [
      "Loša odluka o partneru, kupcu na odloženo plaćanje ili ključnom zaposlenom košta više od svake provere. Poslovne istrage smanjuju taj rizik – daju vam činjenice o poslovnoj reputaciji, vlasničkoj strukturi, sudskim sporovima i stvarnom stanju druge strane.",
      "Za domaće i strane klijente radimo provere pre potpisivanja ugovora, ali i istrage kada je šteta već nastala: manjak na zalihama, fiktivne fakture, curenje podataka ili sumnja na rad zaposlenih za konkurenciju.",
    ],
    when: [
      "Pre sklapanja ugovora, ulaska u zajedničko ulaganje ili odobravanja odloženog plaćanja",
      "Sumnja na internu prevaru, krađu, primanje provizija ili nameštanje nabavki",
      "Curenje poslovnih informacija i baze klijenata ka konkurenciji",
      "Provera biografije i integriteta kandidata za rukovodeća mesta",
    ],
    approach: [
      "Kombinujemo proveru javnih i službenih evidencija, terensku proveru poslovanja na licu mesta, analizu poslovnog okruženja i, po potrebi, praćenje i opservaciju odgovornih lica.",
      "Rezultate isporučujemo kao sažet izveštaj sa nalazima, procenom rizika i preporukom – u formatu koji menadžment i pravna služba mogu odmah da koriste.",
    ],
    deliverables: [
      "Izveštaj o statusu, vlasništvu i reputaciji privrednog subjekta",
      "Pregled blokada, sporova i registrovanih tereta",
      "Nalazi terenske provere (postojanje, kapaciteti, aktivnost)",
      "Procena rizika i preporuka za saradnju",
      "Dokazni materijal u slučaju utvrđene zloupotrebe",
    ],
    faqs: [
      {
        q: "Da li druga strana sazna da je proveravate?",
        a: "Standardna provera se sprovodi diskretno, iz otvorenih i službenih izvora i terenskim putem, bez kontakta sa proveravanim subjektom.",
      },
      {
        q: "Radite li provere firmi u inostranstvu?",
        a: "Da, kroz mrežu saradnika za osnovne korporativne provere u regionu i EU. Obim i rok zavise od jurisdikcije.",
      },
    ],
    related: ["digitalna-forenzika-i-osint", "provere-podataka-iz-arhiva", "zastita-intelektualne-svojine"],
  },

  {
    slug: "usluge-za-advokatske-kancelarije",
    name: "Usluge za advokatske kancelarije",
    title: "Detektivske usluge za advokatske kancelarije",
    metaTitle: "Detektiv za advokatske kancelarije | Prikupljanje dokaza | Marinković",
    metaDescription:
      "Podrška advokatima u parničnim, krivičnim i porodičnim postupcima: prikupljanje dokaza, pronalaženje i provera svedoka, uručenje pismena, provera navoda suprotne strane.",
    summary:
      "Terenska i istražna podrška advokatima – dokazi, svedoci, uručenja i provera navoda suprotne strane.",
    icon: "scale",
    intro: [
      "Advokat gradi strategiju, ali su joj potrebne činjenice sa terena. Agencija Marinković sarađuje sa advokatskim kancelarijama kao pouzdan partner koji dokaze prikuplja zakonito i u formi koja izdrži proveru na sudu.",
      "Radimo po nalogu i uputstvima kancelarije, uz punu poverljivost prema klijentu i predmetu. Sve radnje se dokumentuju tako da detektiv, po potrebi, može da svedoči o načinu pribavljanja dokaza.",
    ],
    when: [
      "Potrebni su dokazi o činjeničnom stanju u parničnom ili porodičnom sporu",
      "Treba pronaći, identifikovati ili proveriti svedoka i njegovu verodostojnost",
      "Neophodno je uredno uručenje pismena licu koje izbegava prijem",
      "Provera navoda i dokaza suprotne strane pre ročišta",
    ],
    approach: [
      "Na početku saradnje usaglašavamo obim, rokove i format izveštavanja. Tokom rada kancelarija dobija ažuriranja, a finalni izveštaj se priprema kao prilog podnesku.",
      "Kod uručenja pismena sačinjavamo zapisnik sa fotodokumentacijom i podacima o vremenu i mestu, čime se predupređuju opstrukcije postupka.",
    ],
    deliverables: [
      "Izveštaj sa dokazima u formi pogodnoj za podnesak",
      "Podaci i procena verodostojnosti svedoka",
      "Zapisnik i dokaz o uručenju pismena",
      "Foto/video dokumentacija sa vremenskim oznakama",
      "Spremnost detektiva da svedoči o pribavljanju dokaza",
    ],
    faqs: [
      {
        q: "Kome dostavljate izveštaj?",
        a: "Isključivo kancelariji koja nas je angažovala, u dogovorenom formatu i roku. Ne komuniciramo direktno sa strankom bez odobrenja advokata.",
      },
      {
        q: "Da li detektiv može da svedoči?",
        a: "Da. Detektiv može biti saslušan o načinu i okolnostima pribavljanja dokaza, što jača dokaznu vrednost materijala.",
      },
    ],
    related: ["sluzenje-u-pravnim-procesima", "pracenje-i-opservacija", "digitalna-forenzika-i-osint"],
  },

  {
    slug: "bezbednosni-konsalting",
    name: "Bezbednosni konsalting i analiza rizika",
    title: "Bezbednosni konsalting i analiza rizika",
    metaTitle: "Bezbednosni konsalting i analiza rizika | Procena pretnji | Marinković",
    metaDescription:
      "Procena bezbednosnih rizika za pojedince, porodice i firme: analiza pretnji, ranjivosti objekata i procesa, plan mera zaštite i provera sprovođenja.",
    summary:
      "Procena pretnji i ranjivosti za pojedince i firme, sa konkretnim planom mera zaštite.",
    icon: "shieldFamily",
    intro: [
      "Bezbednost nije uređaj koji se kupi, već proces koji se planira. Analiza rizika daje realnu sliku pretnji kojima ste izloženi – od provale i krađe podataka do ucene, uhođenja ili pretnji zaposlenima – i redosled mera koje zaista smanjuju izloženost.",
      "Konsalting radimo za privatne klijente sa povišenim rizikom (javne ličnosti, imućne porodice, osobe u sporu) i za firme koje žele nezavisnu proveru sopstvene zaštite.",
    ],
    when: [
      "Primili ste pretnje ili ste žrtva uhođenja i ucene",
      "Otvarate objekat, radnju ili kancelariju i planirate sistem zaštite",
      "Sumnjate da postojeći sistem obezbeđenja ima propuste",
      "Potrebna je nezavisna procena pre velikog ulaganja u bezbednost",
    ],
    approach: [
      "Obilaskom lokacije i razgovorom sa ključnim ljudima mapiramo imovinu, procese i tačke ranjivosti. Pretnje rangiramo po verovatnoći i mogućoj šteti.",
      "Isporučujemo pisani elaborat sa prioritizovanim merama – organizacionim, fizičkim i tehničkim – i, ako želite, nadgledamo njihovo uvođenje.",
    ],
    deliverables: [
      "Registar pretnji i ranjivosti sa procenom rizika",
      "Prioritizovan plan mera (kratkoročne i dugoročne)",
      "Preporuke za tehničku zaštitu i kontrolu pristupa",
      "Procedura postupanja u incidentu",
      "Naknadna provera sprovođenja mera",
    ],
    faqs: [
      {
        q: "Prodajete li i opremu za obezbeđenje?",
        a: "Ne. Konsalting je nezavisan od dobavljača opreme, pa preporuke nisu vođene prodajom, već stvarnom potrebom.",
      },
      {
        q: "Radite li procenu za manje firme?",
        a: "Da. Obim prilagođavamo veličini – i mala firma ima ključne rizike koje vredi pokriti pravim redosledom.",
      },
    ],
    related: ["tehnicki-kontra-nadzor", "detekcija-prisluskivaca-i-gps", "zastita-i-pomoc-porodici"],
  },

  {
    slug: "digitalna-forenzika-i-osint",
    name: "Digitalna forenzika i OSINT analiza",
    title: "Digitalna forenzika i OSINT analiza",
    metaTitle: "Digitalna forenzika i OSINT analiza | Dokazi sa uređaja | Marinković",
    metaDescription:
      "Forenzička analiza telefona i računara, izvlačenje i očuvanje digitalnih dokaza, OSINT analiza otvorenih izvora, povezivanje profila, brojeva i lokacija.",
    summary:
      "Forenzika telefona i računara plus OSINT analiza otvorenih izvora – digitalni tragovi pretvoreni u dokaze.",
    icon: "osint",
    featured: true,
    intro: [
      "Najveći deo istine danas živi u uređajima i na internetu: porukama, istoriji poziva, fotografijama, metapodacima i nalozima na društvenim mrežama. Digitalna forenzika te tragove izvlači na način koji čuva njihov integritet, a OSINT analiza ih povezuje u celinu.",
      "Radimo na uređajima za koje postoji zakonski osnov (vaš uređaj, uređaj maloletnog deteta, uređaj firme uz internu politiku) i iz javno dostupnih izvora. Ne upadamo u tuđe naloge i ne kršimo privatnost trećih lica.",
    ],
    when: [
      "Sumnjate da su poruke i pozivi obrisani da bi se sakrila prevara ili zloupotreba",
      "Potreban je pregled aktivnosti deteta na telefonu i mrežama",
      "Curenje podataka iz firme – treba utvrditi ko, kada i kako",
      "Treba identifikovati anonimni profil, broj ili pošiljaoca pretnji",
    ],
    approach: [
      "Pravimo forenzičku kopiju uređaja i radimo nad kopijom, uz evidenciju svakog koraka (chain of custody). Vraćamo obrisane poruke, pozive, slike i lokacije kada je to tehnički moguće.",
      "OSINT analizom povezujemo profile, brojeve telefona, e-mail adrese, fotografije i lokacije u dokumentovan izveštaj sa izvorima, tako da se svaki nalaz može proveriti.",
    ],
    deliverables: [
      "Forenzički izveštaj sa metodologijom i nalazima",
      "Povraćeni obrisani sadržaj (poruke, pozivi, mediji) kada je moguće",
      "OSINT profil lica ili subjekta sa navedenim izvorima",
      "Vremenska linija digitalne aktivnosti",
      "Očuvani dokazi u formi pogodnoj za postupak",
    ],
    faqs: [
      {
        q: "Možete li da uđete u partnerov telefon bez njegovog znanja?",
        a: "Ne. Analizu radimo samo na uređajima za koje postoji zakonski osnov. Nezakonito pribavljeni dokaz šteti postupku i vama.",
      },
      {
        q: "Da li se obrisane poruke uvek mogu vratiti?",
        a: "Ne uvek – zavisi od uređaja, vremena koje je proteklo i toga da li je prostor prepisan. Šanse su veće ako uređaj prestanete da koristite.",
      },
    ],
    related: ["povratak-izbrisanih-podataka", "poslovne-istrage-i-provere", "proganjanje-i-uhodjenje"],
  },

  {
    slug: "detekcija-prisluskivaca-i-gps",
    name: "Detekcija prislušnih i GPS uređaja",
    title: "Detekcija prislušnih uređaja i GPS lokatora (debagovanje)",
    metaTitle: "Detekcija prisluškivača i GPS uređaja | Debagovanje | Marinković",
    metaDescription:
      "Pretraga prostorija, vozila i uređaja na prisluškivače, skrivene kamere i GPS lokatore. Profesionalna oprema, RF analiza, fizički pregled i pisani nalaz.",
    summary:
      "Pretraga prostora, vozila i uređaja na prisluškivače, skrivene kamere i GPS lokatore.",
    icon: "bug",
    featured: true,
    intro: [
      "Ako vaše privatne razgovore ili poslovne planove „neko unapred zna”, moguće je da ste pod nadzorom. Skriveni mikrofoni, kamere i GPS lokatori danas su jeftini i mali, a postavljaju se za nekoliko minuta – u kancelariji, automobilu, spavaćoj sobi ili poklonu.",
      "Detekcija (debagovanje) je sistematska pretraga prostora i predmeta profesionalnom opremom, u tišini i bez najave, kako eventualni uređaj ne bi bio isključen pre pregleda.",
    ],
    when: [
      "Poverljive informacije iz firme ili porodice „procure” bez logičnog objašnjenja",
      "Partner ili treće lice zna detalje koje niste nikome rekli",
      "Pred važne pregovore, sastanke ili sudski postupak",
      "Nakon renoviranja, servisa vozila ili boravka nepoznatih lica u prostoru",
    ],
    approach: [
      "Kombinujemo analizu radiofrekventnog spektra, detekciju objektiva kamera, proveru instalacija, telefona i mrežne opreme i detaljan fizički pregled nameštaja, vozila i predmeta.",
      "Po završetku dobijate nalaz o pregledanim zonama i eventualnim nalazima, sa preporukama za dalje postupanje i, po želji, redovne kontrolne preglede.",
    ],
    deliverables: [
      "Sistematska pretraga prostorija i/ili vozila",
      "RF analiza i detekcija skrivenih kamera i mikrofona",
      "Provera GPS lokatora na vozilu",
      "Pisani nalaz sa listom pregledanih zona",
      "Preporuke za zaštitu i plan periodičnih provera",
    ],
    faqs: [
      {
        q: "Šta da radim ako sumnjam da sam prisluškivan?",
        a: "Ne pretražujte sami i ne pričajte o tome u prostoru pod sumnjom. Zakažite pregled sa neutralne lokacije ili telefonom koji nije kompromitovan.",
      },
      {
        q: "Uklanjate li pronađeni uređaj?",
        a: "Postupamo po vašem nalogu i uz savet advokata – ponekad je uređaj dokaz koji prvo treba dokumentovati.",
      },
    ],
    related: ["tehnicki-kontra-nadzor", "bezbednosni-konsalting", "digitalna-forenzika-i-osint"],
  },

  {
    slug: "zastita-i-pomoc-porodici",
    name: "Zaštita i pomoć porodici",
    title: "Zaštita i pomoć porodici – deca, tinejdžeri i ranjivi članovi",
    metaTitle: "Zaštita porodice | Provera društva deteta i tinejdžera | Marinković",
    metaDescription:
      "Diskretna pomoć porodici: provera društva i aktivnosti deteta, sumnja na drogu ili sektu, zaštita starijih od prevaranata, kontrola nege i staranja.",
    summary:
      "Diskretna podrška roditeljima i porodici – od provere društva deteta do zaštite starijih od prevara.",
    icon: "shieldFamily",
    intro: [
      "Kada je u pitanju dete ili stariji roditelj, sumnja ne sme da se ignoriše, ali ni da preraste u konflikt bez pokrića. Diskretna provera daje činjenice pre nego što se donese teška odluka – o zabranama, promeni sredine ili prijavi nadležnima.",
      "Radimo obazrivo, sa jasnim ciljem da zaštitimo člana porodice, a ne da narušimo poverenje. Sve nalaze delimo isključivo sa osobom koja nas je angažovala.",
    ],
    when: [
      "Sumnja da se dete druži sa problematičnim društvom, konzumira drogu ili je u sekti",
      "Tinejdžer beži sa časova, laže o kretanju ili je u vezi sa znatno starijom osobom",
      "Stariji član porodice je meta prevaranata, „lažnih rođaka” ili manipulativnog partnera",
      "Sumnja u kvalitet nege, staranja ili trošenja novca namenjenog članu porodice",
    ],
    approach: [
      "Uz vaše smernice pratimo dogovorene termine, proveravamo okruženje i kontakte i, kada je primereno, kombinujemo to sa OSINT proverom naloga na mrežama.",
      "Rezultat je smiren, činjenični pregled situacije sa preporukom kome se i kako obratiti – savetovalištu, školi, centru za socijalni rad ili policiji.",
    ],
    deliverables: [
      "Pregled društva, kretanja i aktivnosti člana porodice",
      "Foto/video potvrda ključnih nalaza",
      "Procena stepena rizika",
      "Preporuka nadležnih službi i sledećih koraka",
      "Diskretno praćenje situacije nakon prvog izveštaja",
    ],
    faqs: [
      {
        q: "Da li dete sme da zna da ga proveravamo?",
        a: "Cilj je da provera bude diskretna. O tome kako i kada razgovarati sa detetom savetujemo se sa vama, po pravilu tek kada imamo jasnu sliku.",
      },
      {
        q: "Možete li pomoći ako je dete već pobeglo od kuće?",
        a: "Da – to spada u potragu za nestalim licima i tada se reaguje hitno, paralelno sa prijavom policiji.",
      },
    ],
    related: ["potraga-za-nestalim-licima", "porodicne-i-partnerske-istrage", "proganjanje-i-uhodjenje"],
  },

  {
    slug: "potraga-za-nestalim-licima",
    name: "Potraga za nestalim licima",
    title: "Potraga za nestalim licima i pronalaženje osoba",
    metaTitle: "Potraga za nestalim licima | Pronalaženje osoba | Detektiv Marinković",
    metaDescription:
      "Pronalaženje nestalih i osoba sa kojima je prekinut kontakt: pobegli tinejdžeri, dužnici, biološki roditelji, izgubljeni srodnici i svedoci. Brza reakcija, rad uz policiju.",
    summary:
      "Pronalaženje nestalih osoba, dužnika i izgubljenih srodnika – brza reakcija i rad paralelno sa policijom.",
    icon: "searchPerson",
    intro: [
      "Ljudi nestaju iz najrazličitijih razloga – od porodične svađe i mentalne krize do bekstva od dugova ili namere da se izgube tragovi. Prvi sati i dani su najvažniji, a svaki podatak koji imate može da ubrza pronalaženje.",
      "Agencija Marinković radi potrage za nestalim članovima porodice, ali i pronalaženje dužnika, svedoka, bioloških roditelja i osoba sa kojima je davno prekinut kontakt. Kod nestanka gde postoji opasnost po život, rad se odvija paralelno sa policijom.",
    ],
    when: [
      "Član porodice je nestao ili se ne javlja, a ponašanje odstupa od uobičajenog",
      "Tinejdžer je pobegao od kuće ili iz ustanove",
      "Tražite dužnika, jemca ili osobu koja izbegava dostavu i postupak",
      "Želite da pronađete biološkog roditelja, srodnika ili staru vezu",
    ],
    approach: [
      "Uzimamo detaljan opis, poslednje poznate lokacije, navike, kontakte i digitalne tragove. Kombinujemo OSINT, proveru okruženja i teren na lokacijama od interesa.",
      "Kada lice pronađemo, poštujemo njegovu volju u pogledu kontakta: prenosimo poruku i posredujemo, a podatke o adresi otkrivamo u skladu sa zakonom i okolnostima slučaja.",
    ],
    deliverables: [
      "Plan potrage sa prioritetnim pravcima",
      "Provera digitalnih i terenskih tragova",
      "Utvrđivanje trenutne lokacije ili boravišta",
      "Posredovanje u uspostavljanju kontakta",
      "Izveštaj sa dokazima za dalji postupak (npr. naplatu potraživanja)",
    ],
    faqs: [
      {
        q: "Koliko brzo možete da počnete?",
        a: "Kod hitnih slučajeva istog dana. Prvo prikupljamo osnovne podatke telefonom, a teren organizujemo odmah po dogovoru.",
      },
      {
        q: "Hoćete li mi dati tačnu adresu pronađene osobe?",
        a: "Ako je osoba punoletna i ne želi kontakt, adresu ne prosleđujemo, ali potvrđujemo da je bezbedna i prenosimo vašu poruku. Kod dužnika i sudskih postupaka primenjuju se drugačija pravila.",
      },
    ],
    related: ["zastita-i-pomoc-porodici", "digitalna-forenzika-i-osint", "provere-podataka-iz-arhiva"],
  },

  {
    slug: "povratak-izbrisanih-podataka",
    name: "Povraćaj izbrisanih podataka",
    title: "Povraćaj izbrisanih podataka sa telefona, računara i medija",
    metaTitle: "Povraćaj izbrisanih podataka | Poruke, slike, dokumenti | Marinković",
    metaDescription:
      "Vraćanje obrisanih poruka, fotografija, poziva i dokumenata sa telefona, računara, memorijskih kartica i diskova. Forenzički pristup uz očuvanje dokazne vrednosti.",
    summary:
      "Vraćanje obrisanih poruka, slika, poziva i dokumenata uz očuvanje njihove dokazne vrednosti.",
    icon: "dataRecovery",
    intro: [
      "Brisanje sadržaja retko znači da je sadržaj zaista nestao. Do trenutka dok se prostor ne prepiše novim podacima, obrisane poruke, slike, pozivi i dokumenti se često mogu povratiti – uz pravu opremu i metodologiju.",
      "Ovu uslugu radimo i za privatne klijente (npr. slučajno obrisane uspomene) i kao deo istrage, kada druga strana pokušava da sakrije tragove. U svakom slučaju, rad se odvija nad forenzičkom kopijom, uz evidenciju koraka.",
    ],
    when: [
      "Partner je obrisao prepisku i pozive koje ste ranije videli",
      "Zaposleni je pri odlasku „očistio” računar, poštu i dokumentaciju",
      "Slučajno su obrisane fotografije, video zapisi ili važni dokumenti",
      "Memorijska kartica, USB ili disk se ne otvaraju ili traže formatiranje",
    ],
    approach: [
      "Prvo zaustavljamo dalju upotrebu uređaja da se prostor ne bi prepisao, pa pravimo sektorsku kopiju. Nad kopijom pokrećemo alate za rekonstrukciju obrisanih i oštećenih fajlova.",
      "Rezultate isporučujemo kao spisak i sadržaj povraćenih fajlova, a kada je reč o istrazi – i kao forenzički izveštaj sa opisom metode.",
    ],
    deliverables: [
      "Forenzička kopija uređaja ili medija",
      "Povraćeni fajlovi organizovani po tipu i datumu",
      "Izveštaj o obimu i ograničenjima povraćaja",
      "Očuvani metapodaci (vreme nastanka, izmene)",
      "Forenzički izveštaj za potrebe postupka (opciono)",
    ],
    faqs: [
      {
        q: "Kolika je šansa da se podaci vrate?",
        a: "Zavisi od uređaja, vremena i toga da li je prostor prepisan. Najbolje rezultate dobijamo ako uređaj odmah isključite iz upotrebe i donesete ga.",
      },
      {
        q: "Da li vidite šifrovan sadržaj?",
        a: "Šifrovane podatke bez ključa ili lozinke po pravilu nije moguće pročitati. Procenu radimo za svaki slučaj posebno.",
      },
    ],
    related: ["digitalna-forenzika-i-osint", "poslovne-istrage-i-provere", "usluge-za-advokatske-kancelarije"],
  },

  {
    slug: "proganjanje-i-uhodjenje",
    name: "Razotkrivanje proganjanja i uhođenja",
    title: "Razotkrivanje proganjanja i uhođenja (stalking)",
    metaTitle: "Uhođenje i proganjanje (stalking) | Identifikacija i dokazi | Marinković",
    metaDescription:
      "Identifikacija osobe koja vas uhodi, prati ili preti (uživo ili onlajn), prikupljanje dokaza o proganjanju i priprema materijala za policiju i sud.",
    summary:
      "Identifikacija onoga ko vas uhodi ili preti i prikupljanje dokaza za prijavu i meru zaštite.",
    icon: "stalking",
    intro: [
      "Proganjanje je krivično delo, ali ga je teško prijaviti bez dokaza i imena. Žrtve mesecima trpe praćenje, pozive sa skrivenih brojeva, poruke, pojavljivanje ispred kuće ili posla i onlajn zlostavljanje, a nadležni traže konkretne podatke.",
      "Agencija Marinković pomaže da se uhoda identifikuje i da se ponašanje dokumentuje na način koji je upotrebljiv za prijavu, meru zabrane prilaska i eventualni postupak.",
    ],
    when: [
      "Neko vas prati, čeka ispred kuće ili posla i pojavljuje se na istim mestima kao vi",
      "Primate uznemiravajuće pozive, poruke ili pretnje sa nepoznatih brojeva i profila",
      "Bivši partner ne prihvata prekid i kontroliše vaše kretanje",
      "Potrebni su vam dokazi za meru zaštite od nasilja u porodici ili prijavu",
    ],
    approach: [
      "Uz vašu bezbednost kao prioritet, sprovodimo kontra-opservaciju da utvrdimo ko i odakle prati, uz foto/video dokumentovanje. Paralelno radimo OSINT identifikaciju brojeva i profila i, po potrebi, proveru vozila i uređaja na lokatore.",
      "Sav materijal sređujemo u hronološki dosije koji predajete advokatu i policiji, sa jasnom vezom između pojedinačnih incidenata i identifikovane osobe.",
    ],
    deliverables: [
      "Identifikacija lica koje uhodi (kad je izvodljivo)",
      "Hronološki dosije incidenata sa dokazima",
      "Foto/video zapisi praćenja i pojavljivanja",
      "OSINT izveštaj o brojevima i profilima",
      "Materijal pripremljen za prijavu i meru zabrane prilaska",
    ],
    faqs: [
      {
        q: "Šta prvo da uradim ako me neko uhodi?",
        a: "Beležite svaki incident (datum, vreme, mesto, svedoci) i sačuvajte poruke i pozive. Ne brišite ništa. Zatim nas kontaktirajte da dokazivanje postavimo sistematski.",
      },
      {
        q: "Možete li da razgovarate sa tom osobom u moje ime?",
        a: "Ne preporučujemo direktan kontakt jer može da eskalira i oteža postupak. Fokus je na dokazima i institucijama.",
      },
    ],
    related: ["digitalna-forenzika-i-osint", "detekcija-prisluskivaca-i-gps", "zastita-i-pomoc-porodici"],
  },

  {
    slug: "provere-podataka-iz-arhiva",
    name: "Provere podataka iz arhiva i evidencija",
    title: "Provere podataka iz arhiva i službenih evidencija",
    metaTitle: "Provera podataka iz arhiva i evidencija | Detektiv Marinković",
    metaDescription:
      "Provera i prikupljanje podataka iz javnih knjiga, registara i arhiva: imovina, vlasništvo, tereti, sporovi, poslovna istorija i porodično-pravni podaci.",
    summary:
      "Prikupljanje činjenica iz javnih knjiga, registara i arhiva – imovina, vlasništvo, tereti, sporovi.",
    icon: "archive",
    intro: [
      "Mnogo toga što vam treba za odluku ili postupak već postoji u nekoj evidenciji – samo je razbacano po različitim izvorima i institucijama. Provera arhiva i registara te podatke prikuplja, upoređuje i sređuje u upotrebljiv pregled.",
      "Radimo provere za privatne klijente (npr. imovina i tereti pre kupovine ili nasleđivanja) i za firme (poslovna istorija, vlasnička struktura, blokade i sporovi), koristeći isključivo dozvoljene izvore i zakonit pristup.",
    ],
    when: [
      "Kupovina nekretnine, placa ili vozila – provera vlasništva i tereta",
      "Ostavinski i imovinski sporovi – utvrđivanje imovine i njenog statusa",
      "Provera poslovne istorije, vlasnika i povezanih lica firme",
      "Utvrđivanje činjenica pre pokretanja parnice ili izvršenja",
    ],
    approach: [
      "Definišemo koji podaci su vam potrebni i u kojim se izvorima nalaze, pa sprovodimo provere u odgovarajućim registrima i arhivama, uz terensku proveru kada je potrebno.",
      "Nalaze objedinjujemo u pregledan izveštaj sa navedenim izvorima i datumima provere, tako da svaki podatak može da se potvrdi.",
    ],
    deliverables: [
      "Objedinjen izveštaj sa svim prikupljenim podacima",
      "Pregled imovine, vlasništva i upisanih tereta",
      "Podaci o sporovima, blokadama i izvršenjima",
      "Navedeni izvori i datumi provere",
      "Preporuka za dalje pravne korake",
    ],
    faqs: [
      {
        q: "Da li je pribavljanje ovih podataka legalno?",
        a: "Da, kada se koriste javno dostupne knjige i registri i zakonom dozvoljeni izvori. Ne pristupamo evidencijama koje su zakonom zaštićene.",
      },
      {
        q: "Koliko traje provera?",
        a: "Osnovne provere najčešće 2–5 radnih dana, složenije sa više izvora i terenom duže. Rok potvrđujemo unapred.",
      },
    ],
    related: ["poslovne-istrage-i-provere", "potraga-za-vozilima-i-predmetima", "sluzenje-u-pravnim-procesima"],
  },

  {
    slug: "potraga-za-vozilima-i-predmetima",
    name: "Potraga za ukradenim vozilima i predmetima",
    title: "Potraga za ukradenim vozilima i vrednim predmetima",
    metaTitle: "Potraga za ukradenim vozilima i predmetima | Detektiv Marinković",
    metaDescription:
      "Pronalaženje ukradenih ili prisvojenih vozila, mašina, plovila i vrednih predmeta, provera VIN i porekla, dokazi za osiguranje i krivičnu prijavu.",
    summary:
      "Pronalaženje ukradenih vozila i vrednih predmeta, provera porekla i dokazi za osiguranje i prijavu.",
    icon: "car",
    intro: [
      "Ukradeno vozilo ili mašina retko „ispari” – najčešće menja tablice, dokumenta ili prelazi granicu, ali ostavlja trag. Isto važi za vredne predmete koji se pojave u oglasima, kod otkupljivača ili u posedu poznatih lica.",
      "Agencija Marinković radi potragu za vozilima, radnim mašinama, plovilima, umetninama i drugom vrednom imovinom, kao i proveru porekla vozila pre kupovine da ne biste kupili tuđ problem.",
    ],
    when: [
      "Vozilo ili mašina su ukradeni, a postupak po prijavi ne daje rezultat",
      "Sumnjate da je zakupac, „partner” ili bivši zaposleni prisvojio vozilo ili opremu",
      "Vredan predmet se pojavio u prodaji ili kod poznatog lica",
      "Kupujete polovno vozilo i želite proveru porekla i identiteta (VIN)",
    ],
    approach: [
      "Kombinujemo proveru oglasa i tržišta, OSINT, teren na lokacijama od interesa i proveru identifikacionih oznaka. Kada lociramo predmet, dokumentujemo stanje i okolnosti.",
      "Isporučujemo izveštaj sa dokazima o lokaciji i držaocu, upotrebljiv za krivičnu prijavu, prijavu osiguranju ili građansku tužbu za povraćaj.",
    ],
    deliverables: [
      "Utvrđivanje lokacije i držaoca predmeta (kad je izvodljivo)",
      "Foto/video dokumentacija stanja i okolnosti",
      "Provera identifikacionih oznaka i porekla",
      "Izveštaj za policiju, osiguranje ili sud",
      "Podrška u koordinaciji povraćaja imovine",
    ],
    faqs: [
      {
        q: "Vraćate li vi vozilo ili predmet?",
        a: "Povraćaj se sprovodi legalnim putem – preko policije, izvršitelja ili suda. Mi obezbeđujemo lokaciju i dokaze i koordinišemo korake sa vašim advokatom.",
      },
      {
        q: "Radite li proveru vozila iz inostranstva?",
        a: "Da, osnovnu proveru porekla i istorije vozila iz regiona i EU radimo pre kupovine.",
      },
    ],
    related: ["provere-podataka-iz-arhiva", "poslovne-istrage-i-provere", "pracenje-i-opservacija"],
  },

  {
    slug: "zastita-intelektualne-svojine",
    name: "Zaštita intelektualne i industrijske svojine",
    title: "Zaštita intelektualne i industrijske svojine",
    metaTitle: "Zaštita intelektualne svojine | Falsifikati i povrede žiga | Marinković",
    metaDescription:
      "Otkrivanje falsifikata, sive proizvodnje i povrede žiga, patenta i dizajna. Kontrolna kupovina, utvrđivanje izvora robe i dokazi za prekršajni i krivični postupak.",
    summary:
      "Otkrivanje falsifikata i povrede žiga i patenta – kontrolna kupovina, izvor robe i dokazi za postupak.",
    icon: "idea",
    intro: [
      "Falsifikati, „siva” serija iz iste fabrike i kopije proizvoda direktno smanjuju prihod i uništavaju reputaciju brenda. Da bi se povreda zaustavila, potrebni su dokazi: gde se roba proizvodi, ko je distribuira i kojim kanalima stiže do kupca.",
      "Agencija Marinković radi za nosioce prava i njihove zastupnike – od monitoringa tržišta i onlajn oglasa do kontrolne kupovine i utvrđivanja lanca snabdevanja, uz dokumentaciju koja izdrži prekršajni i krivični postupak.",
    ],
    when: [
      "Na tržištu ili onlajn se pojavljuju falsifikati vašeg proizvoda ili žiga",
      "Sumnja da proizvođač ili distributer pravi neprijavljenu („noćnu”) seriju",
      "Bivši zaposleni ili partner koristi vaš know-how, dizajn ili bazu kupaca",
      "Potrebni su dokazi za tužbu, prijavu inspekciji ili carini",
    ],
    approach: [
      "Sprovodimo monitoring prodajnih mesta i onlajn platformi, kontrolnu kupovinu sa dokumentovanjem, i teren radi utvrđivanja izvora i obima. Uzorke i dokaze čuvamo sa jasnom evidencijom.",
      "Izveštaj povezuje prodajno mesto, distributera i izvor u lanac, sa dokazima za svaki korak, i priprema se u saradnji sa vašim pravnim timom.",
    ],
    deliverables: [
      "Izveštaj o obimu i kanalima povrede prava",
      "Dokazi kontrolne kupovine (računi, uzorci, snimci)",
      "Utvrđen lanac snabdevanja i ključni akteri",
      "Materijal za tužbu, inspekciju ili carinu",
      "Predlog mera za suzbijanje ponavljanja",
    ],
    faqs: [
      {
        q: "Radite li i za strane kompanije?",
        a: "Da. Sarađujemo sa vlasnicima žigova i advokatskim kancelarijama iz inostranstva na zaštiti prava na tržištu Srbije i regiona.",
      },
      {
        q: "Da li je kontrolna kupovina dozvoljena?",
        a: "Da, kupovina proizvoda kao običan kupac radi utvrđivanja činjenica je legitiman metod i standardni deo ovakvih istraga.",
      },
    ],
    related: ["poslovne-istrage-i-provere", "digitalna-forenzika-i-osint", "usluge-za-advokatske-kancelarije"],
  },

  {
    slug: "tehnicki-kontra-nadzor",
    name: "Tehnički kontra-nadzor (TSCM)",
    title: "Zaštita od špijunaže i tehnički kontra-nadzor (TSCM)",
    metaTitle: "Tehnički kontra-nadzor TSCM | Zaštita od špijunaže | Marinković",
    metaDescription:
      "TSCM program za firme i pojedince: redovni pregledi prostorija, vozila i uređaja, kontrola pre sastanaka, procedure i obuka za zaštitu poverljivih informacija.",
    summary:
      "TSCM program zaštite od špijunaže – redovni pregledi, kontrola pre sastanaka i procedure za tim.",
    icon: "tscm",
    intro: [
      "Tehnički kontra-nadzor (TSCM) je više od jednog pregleda prostorije. To je program koji poverljive informacije štiti kontinuirano – kombinacijom redovnih tehničkih pregleda, kontrole pristupa i navika ljudi koji sa tim informacijama rukuju.",
      "Agencija Marinković postavlja TSCM za kompanije, advokatske kancelarije i pojedince sa povišenim rizikom, prilagođen stvarnim pretnjama i budžetu, bez nepotrebne dramatizacije.",
    ],
    when: [
      "Redovna zaštita sala za sastanke, kancelarija uprave i vozila rukovodstva",
      "Kontrola „čiste sobe” neposredno pre osetljivih pregovora i sednica",
      "Sumnja na industrijsku špijunažu i curenje ka konkurenciji",
      "Potreba za pisanim procedurama i obukom tima za rukovanje poverljivim podacima",
    ],
    approach: [
      "Nakon procene rizika definišemo dinamiku pregleda (npr. kvartalno + pre ključnih događaja) i standard za svaku zonu. Pregledi obuhvataju RF analizu, detekciju kamera i mikrofona, proveru instalacija, telefonije i mrežne opreme i fizički pregled.",
      "Uz preglede isporučujemo procedure (kontrola poseta, uređaja, servisa i poklona) i kratku obuku zaposlenih, jer se najviše informacija gubi kroz propuste u ponašanju, a ne kroz uređaje.",
    ],
    deliverables: [
      "Plan TSCM pregleda po zonama i terminima",
      "Nalaz svakog pregleda sa listom pregledanih zona",
      "Procedure za kontrolu pristupa i uređaja",
      "Obuka zaposlenih za zaštitu poverljivih informacija",
      "Podrška u incidentu i vanredni pregledi",
    ],
    faqs: [
      {
        q: "Koliko često treba raditi TSCM pregled?",
        a: "Za većinu firmi kvartalno, uz obavezan pregled pre najosetljivijih sastanaka. Dinamiku prilagođavamo nivou rizika.",
      },
      {
        q: "Da li pregled ometa rad firme?",
        a: "Pregledi se najčešće rade van radnog vremena ili vikendom, tako da poslovanje ne trpi.",
      },
    ],
    related: ["detekcija-prisluskivaca-i-gps", "bezbednosni-konsalting", "poslovne-istrage-i-provere"],
  },

  {
    slug: "sluzenje-u-pravnim-procesima",
    name: "Podrška u pravnim procesima",
    title: "Služenje i podrška u pravnim procesima",
    metaTitle: "Detektivska podrška u sudskim postupcima | Dokazi i svedoci | Marinković",
    metaDescription:
      "Podrška strankama i advokatima tokom postupka: prikupljanje i dokumentovanje dokaza, pronalaženje i priprema svedoka, uručenje pismena, provera imovine pre izvršenja.",
    summary:
      "Podrška tokom postupka – dokazi, svedoci, uručenja pismena i provera imovine pre izvršenja.",
    icon: "legal",
    intro: [
      "Ishod spora često zavisi od toga koliko je činjenično stanje potkrepljeno dokazima i da li su ključni svedoci dostupni. Detektiv u ovoj fazi radi ono za šta stranka i advokat nemaju vremena ni ovlašćenja da urade sami – na terenu, uredno i dokumentovano.",
      "Agencija Marinković pruža podršku u parničnim, porodičnim, radnim i izvršnim postupcima, uz punu poverljivost i format izveštavanja usklađen sa potrebama predmeta.",
    ],
    when: [
      "Treba dokumentovati činjenično stanje (kretanje, kontakte, uslove stanovanja, rad „na crno”)",
      "Ključni svedok se ne odaziva ili ga treba pronaći i identifikovati",
      "Protivna stranka izbegava prijem tužbe, poziva ili drugih pismena",
      "Pred izvršenje – provera imovine, računa, vozila i primanja dužnika",
    ],
    approach: [
      "Radimo po nalogu advokata ili stranke, sa jasno definisanim zadatkom. Svaku radnju dokumentujemo (foto, video, zapisnik, vreme i mesto) tako da dokaz ima težinu na sudu.",
      "Kod uručenja pismena sačinjavamo zapisnik sa fotodokumentacijom, a kod provere imovine izveštaj koji izvršitelj može odmah da iskoristi.",
    ],
    deliverables: [
      "Dokazi o činjeničnom stanju u formi za podnesak",
      "Pronalaženje i podaci o svedocima",
      "Zapisnik i dokaz o uručenju pismena",
      "Izveštaj o imovini dužnika pre izvršenja",
      "Svedočenje detektiva o pribavljanju dokaza",
    ],
    faqs: [
      {
        q: "Da li dokazi koje pribavite mogu da se ospore?",
        a: "Svaki dokaz može biti osporen, zato ga pribavljamo zakonito i temeljno dokumentujemo. Detektiv može da svedoči o načinu pribavljanja, što jača njegovu vrednost.",
      },
      {
        q: "Sarađujete li direktno sa izvršiteljima?",
        a: "Sarađujemo sa vašim advokatom i, po potrebi, pripremamo izveštaj u formi koju izvršitelj može direktno da primeni.",
      },
    ],
    related: ["usluge-za-advokatske-kancelarije", "provere-podataka-iz-arhiva", "pracenje-i-opservacija"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string): Service[] {
  const svc = getService(slug);
  if (!svc) return [];
  return svc.related
    .map((rs) => getService(rs))
    .filter((s): s is Service => Boolean(s));
}

export const featuredServices = services.filter((s) => s.featured);
