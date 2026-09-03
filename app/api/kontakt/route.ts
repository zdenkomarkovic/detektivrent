import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

// Kontakt forma -> Mailjet Send API v3.1
// Env: MAILJET_API_KEY, MAILJET_SECRET_KEY, SITE_MAIL_SENDER, SITE_MAIL_RECEIVER

const schema = z.object({
  name: z.string().min(2, "Unesite ime i prezime").max(120),
  phone: z.string().min(6, "Unesite broj telefona").max(40),
  email: z.string().email("Unesite ispravnu e-mail adresu").optional().or(z.literal("")),
  service: z.string().max(120).optional(),
  message: z.string().min(10, "Ukratko opišite situaciju (min. 10 karaktera)").max(4000),
  // honeypot – bots popunjavaju, ljudi ne vide
  company: z.string().max(0).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Potrebna je saglasnost za obradu podataka" }),
  }),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Proverite unesene podatke.", fields: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, phone, email, service, message, company } = parsed.data;

  // Honeypot popunjen -> tiho "uspeh"
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER || site.email;

  if (!apiKey || !secretKey || !sender) {
    console.error("Mailjet env varijable nisu podešene.");
    return NextResponse.json(
      { error: "Slanje trenutno nije moguće. Pozovite nas telefonom." },
      { status: 500 }
    );
  }

  const textLines = [
    `Ime i prezime: ${name}`,
    `Telefon: ${phone}`,
    `E-mail: ${email || "—"}`,
    `Usluga: ${service || "—"}`,
    "",
    "Poruka:",
    message,
  ].join("\n");

  const htmlBody = `
    <h2 style="font-family:Arial,sans-serif;color:#0a1826">Novi upit sa sajta</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;color:#0a1826;border-collapse:collapse">
      <tr><td style="padding:4px 12px 4px 0"><strong>Ime i prezime</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Telefon</strong></td><td>${escapeHtml(phone)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>E-mail</strong></td><td>${escapeHtml(email || "—")}</td></tr>
      <tr><td style="padding:4px 12px 4px 0"><strong>Usluga</strong></td><td>${escapeHtml(service || "—")}</td></tr>
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#0a1826;white-space:pre-wrap;margin-top:16px">${escapeHtml(message)}</p>
  `;

  try {
    const res = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${apiKey}:${secretKey}`).toString("base64"),
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: sender.trim(), Name: "Sajt – Detektiv Marinković" },
            To: [{ Email: receiver.trim() }],
            ReplyTo: email ? { Email: email, Name: name } : undefined,
            Subject: `Upit sa sajta: ${service || "Detektivske usluge"} — ${name}`,
            TextPart: textLines,
            HTMLPart: htmlBody,
          },
        ],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Mailjet greška:", res.status, detail);
      return NextResponse.json(
        { error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mailjet fetch izuzetak:", err);
    return NextResponse.json(
      { error: "Slanje nije uspelo. Pokušajte ponovo ili nas pozovite." },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
