import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Početna", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav aria-label="Putanja" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
          {full.map((crumb, i) => {
            const last = i === full.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-2">
                {last ? (
                  <span className="font-medium text-ink" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="transition-colors hover:text-gold"
                  >
                    {crumb.name}
                  </Link>
                )}
                {!last && <span className="text-line">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
