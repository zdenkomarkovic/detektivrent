"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${site.shortName} – početna`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-gold-bright">
            <Icon name="searchPerson" size={20} />
          </span>
          <span className="leading-tight whitespace-nowrap">
            <span className="block font-display text-[0.95rem] font-bold tracking-tight text-ink">
              Detektiv Marinković
            </span>
            <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
              Privatni detektiv
            </span>
          </span>
        </Link>

        <nav className="hidden items-center xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-2 text-[0.9rem] font-medium transition-colors",
                isActive(item.href)
                  ? "text-gold"
                  : "text-ink-mute hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 xl:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-gold"
          >
            <Icon name="phone" size={17} className="text-gold" />
            {site.phoneDisplay}
          </a>
          <Button href="/kontakt" variant="gold" size="sm">
            Konsultacija
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink xl:hidden"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>
      </div>

      {/* Mobilni meni */}
      <div
        className={cn(
          "xl:hidden overflow-hidden border-t border-line bg-white transition-[max-height] duration-300 ease-out",
          open ? "max-h-[36rem]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2.5 text-[0.95rem] font-medium",
                isActive(item.href)
                  ? "bg-gold-tint text-gold"
                  : "text-ink-mute hover:bg-paper"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2 border-t border-line pt-4">
            <Button href={`tel:${site.phoneHref}`} variant="primary" size="md">
              <Icon name="phone" size={17} /> {site.phoneDisplay}
            </Button>
            <Button href={site.whatsappHref} variant="outline" size="md">
              <Icon name="whatsapp" size={17} /> WhatsApp poruka
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
