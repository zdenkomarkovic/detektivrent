import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Stranica nije pronađena",
  robots: { index: false, follow: false },
};

export default function NotFoundPage() {
  return (
    <section className="bg-ink text-white ink-grid">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-6xl font-bold text-gold-bright">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          Ova stranica ne postoji
        </h1>
        <p className="mt-3 max-w-md text-white/70">
          Moguće je da je link zastareo ili pogrešno unet. Vratite se na početnu
          ili pogledajte spisak usluga.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="md">
            Početna strana
          </Button>
          <Button href="/usluge" variant="light" size="md">
            Sve usluge
          </Button>
        </div>
        <Link
          href="/kontakt"
          className="mt-6 text-sm font-semibold text-gold-bright underline underline-offset-4"
        >
          Kontaktirajte nas
        </Link>
      </Container>
    </section>
  );
}
