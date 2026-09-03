// Blog / vodiči – ciljano na pretrage sa visokom namerom.
// Svaki tekst ima svoju stranicu /blog/[slug], učestvuje u sitemap-u i JSON-LD (BlogPosting).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string; // ISO
  updated?: string;
  readingMinutes: number;
  tags: string[];
  body: Block[];
  faqs?: { q: string; a: string }[];
}

export const posts: Post[] = [
  {
    slug: "znakovi-da-vas-partner-vara",
    title: "Kako prepoznati da vas partner vara: 12 znakova i šta dalje",
    metaTitle: "12 znakova da vas partner vara – i šta da uradite | Detektiv Marinković",
    metaDescription:
      "Konkretni znakovi neverstva, greške koje ljudi prave dok sami pokušavaju da provere partnera i kako doći do proverljivih dokaza bez svađe i bez rizika.",
    excerpt:
      "Promena navika, telefon pod ključem, novi troškovi i „službena putovanja” – koji signali zaista nešto znače, a koji vas samo iscrpljuju, i kako doći do sigurnog odgovora.",
    date: "2026-02-10",
    readingMinutes: 8,
    tags: ["bračne prevare", "porodične istrage"],
    body: [
      { type: "p", text: "Sumnja u vernost partnera retko počinje od jednog velikog otkrića. Češće je to niz sitnica koje se tokom nedelja slože u osećaj da nešto nije u redu. Problem je što taj osećaj ne možete da odnesete advokatu, a direktno pitanje najčešće dobije odgovor koji ništa ne rešava." },
      { type: "p", text: "U nastavku je lista znakova koje u praksi najčešće prijavljuju klijenti pre nego što se pokaže da je sumnja bila osnovana. Nijedan pojedinačno nije dokaz. Ali kada se nekoliko njih pojavi zajedno i traje, vredi ih shvatiti ozbiljno." },

      { type: "h2", text: "12 znakova koji se najčešće ponavljaju" },
      { type: "ol", items: [
        "Telefon odjednom postaje privatna teritorija: nove lozinke, okrenut ekran nadole, nošenje u kupatilo, brisanje obaveštenja.",
        "Radno vreme se „razvlači” bez objašnjenja, a broj službenih putovanja i sastanaka naglo raste.",
        "Pojavljuju se novi troškovi na računu ili gotovinska podizanja koja ranije nisu postojala.",
        "Menja se briga o izgledu: nova garderoba, teretana, parfem – bez povoda koji vam je poznat.",
        "Emotivno se udaljava: manje zajedničkih planova, više razdražljivosti, „nisi ti kriva” bez konteksta.",
        "Priče se ne poklapaju – ono što je rekao u ponedeljak ne stoji uz ono što je rekao u petak.",
        "Insistira na svađi pred izlaske, kao da mu treba izgovor da ode iz kuće.",
        "Telefon je „bio na tihom” ili „ostao u kolima” baš u terminima kada je bio nedostupan.",
        "Društvene mreže: novi kontakti, tajni razgovori, lajkovanje istog profila u čudnim satima.",
        "Pojačana ljubomora prema vama – onaj ko vara često projektuje sopstveno ponašanje.",
        "Automobil: nova kilometraža koja se ne poklapa sa ispričanim, tuđi tragovi, promena podešavanja sedišta.",
        "Vaš instinkt uporno ponavlja istu stvar mesecima, iako racionalno tražite objašnjenje.",
      ]},

      { type: "h2", text: "Greške koje ljudi prave dok sami pokušavaju da provere partnera" },
      { type: "p", text: "Kada sumnja naraste, prva reakcija je da se proveri na svoju ruku. Tu nastaju problemi koji kasnije koštaju – i emotivno i pravno." },
      { type: "ul", items: [
        "Provaljivanje u tuđi telefon, e-mail ili naloge. Ovako pribavljen sadržaj je nezakonit dokaz i može da se okrene protiv vas.",
        "Postavljanje GPS uređaja ili aplikacija za praćenje na tuđi telefon ili automobil bez pravnog osnova.",
        "Direktna konfrontacija bez ijednog dokaza – partner tada samo postane oprezniji i bolje sakrije tragove.",
        "Deljenje sumnje sa zajedničkim prijateljima, koji to (namerno ili slučajno) prenesu dalje.",
        "Brisanje sopstvenih poruka, snimaka i mejlova „da se ne vidi da sam gledala” – time uništavate i ono što bi vama išlo u prilog.",
      ]},

      { type: "h2", text: "Šta zaista pomaže" },
      { type: "p", text: "Cilj nije da „uhvatite” partnera pod svaku cenu, već da dobijete jasnu sliku na osnovu koje mirno odlučujete šta dalje – da li brak ima budućnost, da li idete na razvod i kako da zaštitite sebe i decu." },
      { type: "ul", items: [
        "Zapišite konkretne datume, vreme i mesta uz svaki sumnjiv događaj. Hronologija je osnova svake istrage.",
        "Sačuvajte ono što ste zakonito videli (npr. poruku na zajedničkom tabletu), ali ništa ne pribavljajte na nezakonit način.",
        "Ne menjajte naglo svoje ponašanje – ako partner primeti da sumnjate, istina se povlači dublje.",
        "Konsultujte se sa detektivom pre nego što bilo šta preduzmete. Besplatan prvi razgovor često uštedi nedelje pogrešnih poteza.",
      ]},

      { type: "h2", text: "Kako izgleda diskretna provera preko detektivske agencije" },
      { type: "p", text: "Nakon poverljivog razgovora definišu se termini i lokacije od interesa. Sledi diskretno praćenje i opservacija, uz foto i video dokumentovanje kretanja i kontakata, i po potrebi identifikacija treće osobe. Sve se radi u okviru Zakona o detektivskoj delatnosti." },
      { type: "p", text: "Na kraju dobijate pisani izveštaj sa hronologijom i priloženim materijalom, sačinjen tako da bude upotrebljiv u razgovoru sa advokatom i, ako do toga dođe, kao dokaz u brakorazvodnoj parnici. Poligrafsko testiranje se koristi kada nema drugih dokaza, a partner tvrdi da je nevin." },
      { type: "p", text: "Ako prepoznajete više znakova sa ove liste, ne morate sami da nosite neizvesnost. Pozovite i opišite situaciju – dobićete iskrenu procenu da li i kako provera ima smisla u vašem slučaju." },
    ],
    faqs: [
      { q: "Da li smem sam da pratim partnera?", a: "Praćenje na javnim površinama nije zabranjeno, ali postavljanje uređaja za praćenje na tuđi telefon ili automobil i pristup tuđim nalozima jesu. Zbog toga i zbog rizika od otkrivanja, bolje je da to radi licencirani detektiv." },
      { q: "Koliko brzo se vidi rezultat?", a: "Kod izraženog obrasca ponašanja prve potvrde stižu za nekoliko dana. Uobičajen okvir provere neverstva je od nekoliko dana do dve nedelje." },
    ],
  },

  {
    slug: "koliko-kosta-privatni-detektiv-u-srbiji",
    title: "Koliko košta privatni detektiv u Srbiji (2026)",
    metaTitle: "Cena privatnog detektiva u Srbiji 2026 – od čega zavisi | Marinković",
    metaDescription:
      "Kako se formira cena detektivskih usluga: praćenje po danu ili satu, poslovne provere, poligraf, forenzika i debagovanje. Šta utiče na cenu i kako izbeći skrivene troškove.",
    excerpt:
      "Zašto ne postoji jedna cena za „detektiva”, kako se obračunava praćenje, koliko koštaju provere, poligraf i debagovanje i na šta da obratite pažnju u ponudi.",
    date: "2026-02-18",
    readingMinutes: 7,
    tags: ["cene", "saveti"],
    body: [
      { type: "p", text: "Prvo pitanje koje klijenti postave je „koliko to košta”. Pošten odgovor je: zavisi od posla. „Detektiv” nije jedna usluga – praćenje partnera, provera firme pre ugovora, poligraf i pretraga kancelarije na prisluškivače su potpuno različiti zadaci, sa različitom cenom." },
      { type: "p", text: "Ono što možete da očekujete je da pre početka dobijete okvirnu ponudu sa jasnim obimom, a ne otvoreni račun. U nastavku je kako se cena obično formira po vrsti posla." },

      { type: "h2", text: "Praćenje i opservacija" },
      { type: "p", text: "Ovo je najčešća usluga kod sumnje u neverstvo i kod kontrole zaposlenih. Obračunava se po danu ili po satu angažovanja tima, a na cenu utiču:" },
      { type: "ul", items: [
        "Broj detektiva i vozila – u gradu i tržnim centrima potreban je veći tim da lice ne bi „pobeglo” iz vidokruga.",
        "Trajanje i broj termina koje treba pokriti (npr. samo večeri i vikendi, ili ceo dan).",
        "Lokacija – rad van mesta sedišta nosi putni trošak i dnevnice.",
        "Hitnost i rad noću, praznikom ili u kratkom roku.",
      ]},
      { type: "p", text: "Realan budžet za proveru neverstva najčešće se planira za nekoliko dana praćenja, jer se obrazac ponašanja retko pokaže u jednom izlasku." },

      { type: "h2", text: "Poslovne istrage i provere" },
      { type: "p", text: "Provera poslovnog partnera, kupca na odloženo plaćanje ili kandidata za rukovodeće mesto obračunava se po obimu: koliko subjekata, koliko izvora, da li je potrebna terenska provera i provera u inostranstvu. Osnovna provera jednog subjekta je znatno jeftinija od istrage interne prevare koja uključuje forenziku i praćenje." },

      { type: "h2", text: "Poligrafsko testiranje" },
      { type: "p", text: "Cena se određuje po testiranju (jedno lice, dogovoren broj pitanja). Uključuje pretest intervju, merenje i pisani nalaz. Dodatna lica ili proširen set pitanja povećavaju cenu." },

      { type: "h2", text: "Digitalna forenzika i povraćaj podataka" },
      { type: "p", text: "Zavisi od uređaja i cilja: povraćaj obrisanih poruka i slika sa jednog telefona je jedan nivo, a forenzička analiza više uređaja sa izradom izveštaja za sud drugi. Cena se potvrđuje nakon inicijalne procene izvodljivosti." },

      { type: "h2", text: "Detekcija prisluškivača i tehnički kontra-nadzor" },
      { type: "p", text: "Pregled se obračunava po broju i veličini prostorija, odnosno vozila. Redovan TSCM program (npr. kvartalni pregledi) ugovara se paušalno i po pravilu je povoljniji po pregledu od jednokratnog dolaska." },

      { type: "h2", text: "Na šta da obratite pažnju u ponudi" },
      { type: "ul", items: [
        "Da li je jasno definisan obim – broj dana, broj ljudi, šta je uključeno, a šta se dodatno naplaćuje.",
        "Da li su putni troškovi i dnevnice posebno navedeni.",
        "Šta tačno dobijate na kraju (pisani izveštaj, foto/video, konsultacija).",
        "Da li se potpisuje ugovor o poslovnoj saradnji – to je i vaša zaštita.",
        "Izbegavajte ponude „fiksno i vrlo jeftino bez pitanja” – ozbiljna procena zahteva da se prvo čuje slučaj.",
      ]},
      { type: "p", text: "Najbolji način da dobijete tačnu cenu je kratak poverljiv razgovor u kojem opišete situaciju i cilj. Na osnovu toga dobijate okvirnu ponudu pre nego što se bilo šta pokrene." },
    ],
    faqs: [
      { q: "Da li prvi razgovor i procena koštaju?", a: "Ne. Prvi razgovor je bez obaveze i naplate. Naplaćuje se tek ugovoreni posao." },
      { q: "Da li se plaća unapred?", a: "Uobičajeno je plaćanje avansa pri potpisivanju ugovora, a ostatak po dinamici koja se dogovori. Sve je definisano ugovorom." },
    ],
  },

  {
    slug: "da-li-je-legalno-angazovati-privatnog-detektiva",
    title: "Da li je legalno angažovati privatnog detektiva i pratiti supružnika",
    metaTitle: "Da li je legalno angažovati detektiva i pratiti supružnika | Marinković",
    metaDescription:
      "Šta detektiv sme, a šta ne sme po Zakonu o detektivskoj delatnosti, koji dokazi su upotrebljivi na sudu i kako ne napraviti nezakonit dokaz koji šteti vašem slučaju.",
    excerpt:
      "Detektivska delatnost je u Srbiji zakonom uređena. Objašnjavamo šta je dozvoljeno, gde su granice i zašto nezakonito pribavljen dokaz može da naškodi baš vama.",
    date: "2026-02-25",
    readingMinutes: 6,
    tags: ["pravo", "dokazi"],
    body: [
      { type: "p", text: "Kratak odgovor: da, angažovanje privatnog detektiva je legalno. Detektivsku delatnost u Srbiji uređuje Zakon o detektivskoj delatnosti, a poslove obavljaju pravna lica i preduzetnici sa licencom, odnosno detektivi sa položenim stručnim ispitom i licencom Ministarstva unutrašnjih poslova." },
      { type: "p", text: "Duži odgovor tiče se granica: detektiv sme mnogo toga što građanin ne bi smeo da radi na svoju ruku, ali ne sme sve. Te granice su ujedno i razlog zašto se isplati posao poveriti profesionalcu." },

      { type: "h2", text: "Šta detektiv sme" },
      { type: "ul", items: [
        "Da prikuplja podatke o licima, predmetima i okolnostima kada za to postoji opravdan interes klijenta (npr. brakorazvodni spor, poslovna provera, nestalo lice).",
        "Da obavlja praćenje i opservaciju na javnim površinama radi utvrđivanja činjenica.",
        "Da prikuplja podatke iz javno dostupnih izvora, registara i evidencija kojima je pristup dozvoljen.",
        "Da pravi foto i video zabeleške kretanja i kontakata na javnom mestu.",
        "Da o svemu sačini pisani izveštaj i, po potrebi, svedoči o načinu pribavljanja dokaza.",
      ]},

      { type: "h2", text: "Šta detektiv ne sme" },
      { type: "ul", items: [
        "Da pristupa tuđim nalozima, e-pošti i porukama bez pravnog osnova.",
        "Da presreće telefonske razgovore i komunikaciju (to je u nadležnosti državnih organa po sudskom nalogu).",
        "Da postavlja prisluškivače ili skrivene kamere u tuđi privatni prostor.",
        "Da prikuplja podatke o nacionalnosti, zdravlju, seksualnom životu i sličnim osetljivim kategorijama mimo zakonom dozvoljene svrhe.",
        "Da se predstavlja kao službeno lice ili primenjuje prinudu.",
      ]},

      { type: "h2", text: "A praćenje supružnika?" },
      { type: "p", text: "Praćenje supružnika radi utvrđivanja činjenica bitnih za brakorazvodni ili poveriteljski postupak spada u dozvoljene poslove detektiva. Ključ je u tome kako se dokazi pribavljaju. Snimak sa javne površine i izveštaj o kretanju su jedno; sadržaj izvučen iz partnerovog zaključanog telefona je nešto sasvim drugo i predstavlja nezakonit dokaz." },

      { type: "h2", text: "Zašto je nezakonit dokaz opasan za vas" },
      { type: "p", text: "Sud po pravilu ne prihvata dokaz pribavljen povredom zakona, a osoba koja ga je pribavila može da odgovara – prekršajno ili krivično. Drugim rečima, prisluškivanjem ili provaljivanjem u telefon ne dobijate adut, nego rizik. Zato ozbiljna agencija radije produži istragu nego što pribegne prečici koja ruši ceo slučaj." },

      { type: "h2", text: "Kako da budete na sigurnoj strani" },
      { type: "ol", items: [
        "Ne pribavljajte dokaze na nezakonit način i ne tražite to od detektiva.",
        "Tražite da se potpiše ugovor o poslovnoj saradnji sa jasnom svrhom istrage.",
        "Proverite da agencija posluje sa licencom.",
        "Sve što zakonito imate (poruke na zajedničkom uređaju, računi) sačuvajte, ništa ne brišite.",
        "Dokaze koristite kroz advokata i sud, a ne za javno objavljivanje i pritisak.",
      ]},
      { type: "p", text: "Ako niste sigurni da li je nešto u vašem slučaju dozvoljeno, pitajte pre nego što uradite. Bolje je pet minuta razgovora nego mesecima obarati sopstvene dokaze." },
    ],
    faqs: [
      { q: "Da li detektiv mora da ima licencu?", a: "Da. Detektivsku delatnost mogu da obavljaju samo lica i firme sa licencom nadležnog ministarstva. Uvek možete da tražite na uvid dokaz o licenci." },
      { q: "Može li izveštaj detektiva da se koristi u brakorazvodnoj parnici?", a: "Može, ako je pribavljen zakonito. Uz izveštaj i priloženi materijal, detektiv može biti saslušan kao svedok o načinu pribavljanja dokaza." },
    ],
  },

  {
    slug: "poligrafsko-testiranje-kako-izgleda",
    title: "Poligrafsko testiranje: kako izgleda, koliko traje i da li je pouzdano",
    metaTitle: "Poligrafsko testiranje – kako izgleda i da li je pouzdano | Marinković",
    metaDescription:
      "Kako teče ispitivanje na poligrafu korak po korak, zašto je pretest intervju najvažniji deo, kolika je pouzdanost i kakvu težinu nalaz ima u postupku.",
    excerpt:
      "Poligraf nije čitanje misli, nego merenje fizioloških reakcija na precizno formulisana pitanja. Evo kako izgleda testiranje od dolaska do nalaza.",
    date: "2026-03-04",
    readingMinutes: 6,
    tags: ["poligraf", "postupak"],
    body: [
      { type: "p", text: "Poligraf se u javnosti zove „detektor laži”, što je pomalo pogrešno. Uređaj ne otkriva laž direktno – on meri fiziološke reakcije tela (disanje, provodljivost kože, puls i krvni pritisak) dok ispitanik odgovara na pažljivo pripremljena pitanja. Posao ispitivača je da te reakcije protumači po standardizovanoj metodologiji." },
      { type: "p", text: "Kod nas se poligraf najčešće koristi u dve situacije: privatno, kada partner tvrdi da je nevin a drugih dokaza nema, i u firmama, kod krađe, curenja informacija ili provere poverljivih radnih mesta." },

      { type: "h2", text: "Korak 1: Dogovor i uslovi" },
      { type: "p", text: "Testiranje je dobrovoljno i sprovodi se uz pisanu saglasnost ispitanika. Zakazuje se u mirnoj, kontrolisanoj prostoriji, bez buke i ometanja. Ispitanik treba da bude naspavan, bez alkohola i bez teških lekova koji utiču na reakcije." },

      { type: "h2", text: "Korak 2: Pretest intervju (najvažniji deo)" },
      { type: "p", text: "Pre bilo kakvog merenja, ispitivač sa ispitanikom detaljno prolazi kroz temu i kroz svako pitanje. Cilj je da nijedno pitanje ne bude dvosmisleno i da ispitanik unapred zna šta će biti pitan – iznenađenja nisu deo metode. Ovaj razgovor traje najduže i često sam po sebi razjasni mnogo toga." },

      { type: "h2", text: "Korak 3: Merenja" },
      { type: "p", text: "Nakon što se senzori postave, sledi nekoliko prolazaka kroz isti set pitanja. Pitanja su kratka, a odgovori su „da” ili „ne”. Ponavljanje služi da se vidi da li je reakcija dosledna. Sam ovaj deo traje relativno kratko." },

      { type: "h2", text: "Korak 4: Analiza i nalaz" },
      { type: "p", text: "Ispitivač analizira poligrame i izdaje pisani nalaz sa jednim od zaključaka: nema indikacija obmane, indikacije obmane, ili neodlučan nalaz. Uz nalaz ide usmeno tumačenje. Ceo proces, sa pretest intervjuom, obično traje od sat i po do dva i po sata." },

      { type: "h2", text: "Koliko je poligraf pouzdan" },
      { type: "p", text: "Uz iskusnog ispitivača, kvalitetan pretest intervju i saradnju ispitanika, pouzdanost je visoka, ali nije stopostotna. Zato se rezultat tumači zajedno sa ostalim okolnostima slučaja, a ne izolovano. Pokušaji „kontramera” se u praksi prepoznaju kroz metodologiju i ponašanje tokom testa." },

      { type: "h2", text: "Kakvu težinu nalaz ima" },
      { type: "p", text: "U našem pravu poligraf nema snagu sudskog veštačenja. Ali je vrlo koristan kao: orijentir za dalju istragu (koga proveravati, a koga skinuti sa liste), sredstvo pritiska u vansudskim dogovorima i element koji, uz druge dokaze, gradi ukupnu sliku. U mnogim porodičnim situacijama nalaz je presudan za ličnu odluku, nezavisno od suda." },
      { type: "p", text: "Ako razmišljate o testiranju – za sebe, partnera ili zaposlenog – javite se da prođemo kroz vašu situaciju i vidimo da li poligraf ima smisla i kako da pitanja postavimo da rezultat bude jasan." },
    ],
    faqs: [
      { q: "Može li testiranje da se sprovede bez pristanka osobe?", a: "Ne. Poligrafsko testiranje je isključivo dobrovoljno i uz pisanu saglasnost. Odbijanje testa nije dokaz krivice, ali je često samo po sebi informacija." },
      { q: "Da li anksioznost kvari rezultat?", a: "Nervoza je očekivana i metodologija je uzima u obzir kroz kontrolna pitanja i ponavljanja. Zato je pretest intervju važan – da se ispitanik smiri i zna šta ga čeka." },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
