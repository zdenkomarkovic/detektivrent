import Link from "next/link";
import { site, nav } from "@/lib/site";
import { services } from "@/lib/services";
import { locations, locationPath } from "@/lib/locations";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70 ink-grid">
      {/* Tanka traka: pokrivanje po gradovima */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-2 px-5 py-4 sm:px-6 lg:px-8">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold-bright">
            Pokrivamo:
          </span>
          <Link
            href="/kontakt"
            className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/85 transition-colors hover:bg-white/15"
          >
            Detektivska agencija Beograd
          </Link>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={locationPath(l.slug)}
              className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            >
              Detektivska agencija {l.name}
            </Link>
          ))}
          <Link
            href="/lokacije"
            className="px-1 text-xs font-semibold text-gold-bright hover:underline"
          >
            Sve lokacije →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-gold-bright">
                <Icon name="searchPerson" size={20} />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-[0.95rem] font-bold text-white">
                  Detektiv Marinković
                </span>
                <span className="block text-[0.7rem] uppercase tracking-[0.14em] text-white/50">
                  Privatni detektiv
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Licencirana detektivska agencija za bračne prevare, porodične i
              poslovne istrage. Diskrecija, zakonit rad i proverljivi dokazi za
              fizička i pravna lica u celoj Srbiji.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                <Icon name="phone" size={16} className="text-gold-bright" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                <Icon name="whatsapp" size={16} className="text-gold-bright" />
                WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Stranice">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Navigacija
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-gold-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Usluge">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Ključne usluge
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/detektiv-za-bracne-prevare"
                  className="font-semibold text-gold-bright hover:underline"
                >
                  Detektiv za bračne prevare
                </Link>
              </li>
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/usluge/${s.slug}`}
                    className="transition-colors hover:text-gold-bright"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-white">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Icon name="phone" size={16} className="mt-0.5 shrink-0 text-gold-bright" />
                <a href={`tel:${site.phoneHref}`} className="hover:text-gold-bright">
                  {site.phoneIntl}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="mail" size={16} className="mt-0.5 shrink-0 text-gold-bright" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-bright">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="map" size={16} className="mt-0.5 shrink-0 text-gold-bright" />
                <span>
                  {site.address.locality}, {site.address.countryName}
                  <br />
                  <span className="text-white/50">Rad na terenu u celoj Srbiji</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="clock" size={16} className="mt-0.5 shrink-0 text-gold-bright" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Sva prava zadržana. Rad u skladu sa Zakonom o
            detektivskoj delatnosti.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/cesta-pitanja" className="hover:text-gold-bright">
              Česta pitanja
            </Link>
            <Link href="/politika-privatnosti" className="hover:text-gold-bright">
              Politika privatnosti
            </Link>
            <span>
              Izrada sajta{" "}
              <a
                href="https://manikamwebsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-bright"
              >
                Manikam Web Solutions
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
