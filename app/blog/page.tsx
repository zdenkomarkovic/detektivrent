import Link from "next/link";
import { pageMeta } from "@/lib/metadata";
import { sortedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata = pageMeta({
  title: "Blog — vodiči o detektivskim istragama, prevarama i pravu",
  description:
    "Praktični tekstovi: znakovi da vas partner vara, koliko košta privatni detektiv, da li je legalno pratiti supružnika i kako izgleda poligrafsko testiranje.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  return (
    <>
      <section className="bg-ink text-white ink-grid">
        <Container className="py-14 lg:py-20">
          <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold sm:text-5xl">
            Vodiči i saveti
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75">
            Bez senzacija — konkretne informacije koje vam pomažu da donesete
            odluku pre nego što nekoga angažujete.
          </p>
        </Container>
      </section>

      <Section tone="white">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all hover:border-gold/40 hover:shadow-card lg:grid-cols-[1.1fr_1fr]"
          >
            <div className="bg-ink ink-grid p-8 text-white sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-bright">
                Izdvojeno
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-white/70">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-bright">
                Pročitajte tekst
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
            <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
              <time className="text-xs font-medium uppercase tracking-wide text-muted">
                {formatDate(featured.date)} · {featured.readingMinutes} min čitanja
              </time>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-gold-tint px-3 py-1 text-xs font-medium text-gold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
            >
              <time className="text-xs font-medium uppercase tracking-wide text-muted">
                {formatDate(post.date)} · {post.readingMinutes} min
              </time>
              <h2 className="mt-2 font-display text-lg font-bold leading-snug text-ink">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                Pročitajte
                <Icon
                  name="arrowRight"
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
