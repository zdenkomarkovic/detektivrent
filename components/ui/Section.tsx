import { cn } from "@/lib/utils";
import { Container } from "./Container";

type Tone = "white" | "paper" | "ink";

const tones: Record<Tone, string> = {
  white: "bg-white text-ink",
  paper: "bg-paper text-ink",
  ink: "bg-ink text-white ink-grid",
};

export function Section({
  tone = "white",
  className,
  containerSize = "default",
  id,
  children,
}: {
  tone?: Tone;
  className?: string;
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-24", tones[tone], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            tone === "dark" ? "text-gold" : "text-gold-bright"
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.6rem]",
          tone === "light" && "text-white"
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "dark" ? "text-muted" : "text-white/70"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
