import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  text: string;
}

export const processSteps: Step[] = [
  {
    title: "Poverljiv razgovor",
    text: "Besplatna i neobavezujuća konsultacija telefonom ili uživo. Slušamo situaciju, ciljeve i rok, i kažemo iskreno da li i kako možemo da pomognemo.",
  },
  {
    title: "Ponuda i plan",
    text: "Dobijate jasan predlog obima, metoda i okvirnu cenu. Bez otvorenog računa — znate šta je uključeno pre nego što bilo šta počne.",
  },
  {
    title: "Ugovor i diskrecija",
    text: "Potpisuje se ugovor o poslovnoj saradnji sa definisanom svrhom istrage. Vaš identitet i podaci o slučaju ostaju poverljivi.",
  },
  {
    title: "Istraga na terenu",
    text: "Praćenje, opservacija, provere i forenzika u skladu sa zakonom. Dobijate periodična obaveštavanja o napretku.",
  },
  {
    title: "Izveštaj i dokazi",
    text: "Pisani izveštaj sa hronologijom, foto i video dokumentacijom, upotrebljiv u razgovoru sa advokatom i kao dokaz u postupku.",
  },
  {
    title: "Konsultacija o koracima",
    text: "Zajedno prolazimo kroz nalaze i moguće opcije — pravne, poslovne ili lične — i po potrebi nastavljamo saradnju.",
  },
];

export function ProcessSteps({
  steps = processSteps,
  tone = "dark",
}: {
  steps?: Step[];
  tone?: "dark" | "light";
}) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className={cn(
            "relative rounded-2xl border p-6",
            tone === "dark"
              ? "border-line bg-white shadow-soft"
              : "border-white/10 bg-white/5"
          )}
        >
          <span
            className={cn(
              "font-display text-sm font-bold",
              tone === "dark" ? "text-gold" : "text-gold-bright"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "mt-2 font-display text-lg font-bold",
              tone === "light" && "text-white"
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              tone === "dark" ? "text-muted" : "text-white/70"
            )}
          >
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
