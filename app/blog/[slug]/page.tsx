import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/metadata";
import { posts, getPost, sortedPosts } from "@/lib/posts";
import type { Block } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { site } from "@/lib/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    absoluteTitle: true,
    type: "article",
    publishedTime: post.date,
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i}>
          {block.items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    default:
      return <p key={i}>{block.text}</p>;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const more = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          path,
          datePublished: post.date,
          dateModified: post.updated,
        })}
      />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd data={faqSchema(post.faqs)} />
      )}

      <section className="bg-ink text-white ink-grid">
        <Container size="narrow" className="py-14 lg:py-20">
          <Breadcrumbs
            items={[
              { name: "Blog", path: "/blog" },
              { name: post.title, path },
            ]}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gold-bright"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.6rem]">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/60">
            {formatDate(post.date)} · {post.readingMinutes} min čitanja
          </p>
        </Container>
      </section>

      <Section tone="white" containerSize="narrow">
        <article className="rich">
          {post.body.map((block, i) => renderBlock(block, i))}
        </article>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold">Kratka pitanja</h2>
            <div className="mt-5">
              <FaqAccordion items={post.faqs} />
            </div>
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-line bg-ink p-6 text-white ink-grid sm:p-8">
          <h2 className="font-display text-xl font-bold text-white">
            Imate konkretnu situaciju?
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Tekstovi daju okvir, ali svaki slučaj je drugačiji. Pozovite za
            besplatnu procenu baš vaše situacije.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href={`tel:${site.phoneHref}`} variant="gold" size="md">
              <Icon name="phone" size={17} />
              {site.phoneDisplay}
            </Button>
            <Button href="/kontakt" variant="light" size="md">
              Pošaljite upit
            </Button>
          </div>
        </div>
      </Section>

      {more.length > 0 && (
        <Section tone="paper" containerSize="narrow">
          <h2 className="font-display text-2xl font-bold">Nastavite čitanje</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-card"
              >
                <h3 className="font-display text-base font-bold leading-snug text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {p.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Pročitajte
                  <Icon
                    name="arrowRight"
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}
