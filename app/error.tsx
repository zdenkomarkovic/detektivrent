"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ink text-white ink-grid">
      <Container className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Došlo je do greške</h1>
        <p className="mt-3 max-w-md text-white/70">
          Nešto nije u redu na našoj strani. Pokušajte ponovo, a ako se problem
          ponavlja, pozovite nas telefonom.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#a5772f]"
          >
            Pokušajte ponovo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-tint"
          >
            Početna strana
          </Link>
        </div>
      </Container>
    </section>
  );
}
