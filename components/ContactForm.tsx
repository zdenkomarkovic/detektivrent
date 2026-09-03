"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "ok" | "error";

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const payload = {
      name: String(data.name || ""),
      phone: String(data.phone || ""),
      email: String(data.email || ""),
      service: String(data.service || ""),
      message: String(data.message || ""),
      company: String(data.company || ""),
      consent: data.consent === "on",
    };

    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(json.error || "Došlo je do greške. Pokušajte ponovo.");
        return;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError("Nema veze sa serverom. Pokušajte ponovo ili nas pozovite.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold-tint p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-white">
          <Icon name="check" size={28} />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">
          Upit je poslat
        </h3>
        <p className="mt-2 text-sm text-ink-mute">
          Javljamo se u najkraćem roku, obično u toku istog dana. Ako je hitno,
          slobodno pozovite direktno.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-gold underline underline-offset-4"
        >
          Pošaljite još jedan upit
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Ime i prezime <span className="text-gold">*</span>
          </label>
          <input id="name" name="name" required className={inputCls} placeholder="npr. Ana Jović" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon <span className="text-gold">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            required
            inputMode="tel"
            className={inputCls}
            placeholder="06x xxx xxxx"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className={inputCls}
            placeholder="opciono"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Usluga
          </label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService || ""}
            className={cn(inputCls, "appearance-none bg-[length:1rem] pr-10")}
          >
            <option value="">Nisam siguran/na — posavetujte me</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Kratak opis situacije <span className="text-gold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputCls}
          placeholder="Šta vas brine, šta biste želeli da saznate i do kada. Bez osetljivih detalja u prvoj poruci — ostalo dogovaramo u razgovoru."
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-mute">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-line text-gold focus:ring-gold/30"
        />
        <span>
          Saglasan/na sam da se moji podaci koriste isključivo radi odgovora na
          ovaj upit. Podaci se ne prosleđuju trećim licima.
        </span>
      </label>

      {status === "error" && error && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#a5772f] disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Slanje…" : "Pošaljite poverljiv upit"}
        {status !== "sending" && <Icon name="arrowRight" size={18} />}
      </button>

      <p className="text-xs text-muted">
        Slanjem upita ne nastaje nikakva obaveza. Prvi razgovor je besplatan.
      </p>
    </form>
  );
}
