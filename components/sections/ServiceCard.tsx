import Link from "next/link";
import type { Service } from "@/lib/services";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  return (
    <Link
      href={`/usluge/${service.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card",
        className
      )}
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-tint text-gold transition-colors group-hover:bg-gold group-hover:text-white">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-ink">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
        Saznajte više
        <Icon
          name="arrowRight"
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
