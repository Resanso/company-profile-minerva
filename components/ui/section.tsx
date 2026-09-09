import { cn } from "@/lib/utils";

/**
 * Layout primitives for the Future Tech design system.
 *
 * Every page is built from horizontal bands. A band declares a `tone`, and
 * everything inside it — text colour, hairlines, action styling — follows from
 * that tone. Bands alternate light / alt / deep down the page.
 */

export type Tone = "light" | "alt" | "deep";

const toneSurface: Record<Tone, string> = {
  light: "bg-surface text-ink",
  alt: "bg-surface-alt text-ink",
  deep: "bg-deep text-on-deep",
};

export function Section({
  tone = "light",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        toneSurface[tone],
        "py-20 md:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">{children}</div>
    </section>
  );
}

/** Full-bleed band with no inner container — for edge-to-edge media. */
export function Band({
  tone = "light",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn(toneSurface[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({
  tone = "light",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={cn(
        "type-eyebrow",
        tone === "deep" ? "text-accent-on-deep" : "text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

/**
 * Centred section opener: eyebrow, light-weight headline, lead paragraph.
 * `align="start"` switches to the left-aligned variant used on denser pages.
 */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  align?: "center" | "start";
  className?: string;
}) {
  const centred = align === "center";

  return (
    <header
      className={cn(
        centred ? "mx-auto max-w-4xl text-center" : "max-w-4xl",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone} className={cn("mb-5", centred && "mx-auto")}>
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        className={cn(
          "type-headline",
          tone === "deep" ? "text-on-deep" : "text-ink-strong",
        )}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={cn(
            "type-lead mt-6",
            centred && "mx-auto",
            tone === "deep" ? "text-on-deep-muted" : "text-ink-muted",
          )}
        >
          {lead}
        </p>
      )}
    </header>
  );
}

/**
 * Hairline lattice. Children are laid on a 1px ruled grid with no gutters —
 * the enterprise alternative to floating cards.
 */
export function Lattice({
  cols = 3,
  tone = "light",
  className,
  children,
}: {
  cols?: 2 | 3 | 4;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  const colClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <div
      className={cn(
        "lattice grid-cols-1",
        colClass,
        tone === "deep" && "lattice-on-deep",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A single cell inside a Lattice. */
export function Cell({
  tone = "light",
  className,
  children,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        tone === "deep" ? "bg-deep" : "bg-surface",
        "px-6 py-10 md:px-8 md:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Proof figure: a large light numeral over a caption and supporting sentence.
 * Used only where the number is attributable — never for decoration.
 */
export function Stat({
  value,
  caption,
  description,
  source,
  tone = "deep",
  children,
}: {
  value: string;
  caption: string;
  description?: string;
  /** Where the figure comes from. Shown verbatim so a claim is checkable. */
  source?: string;
  tone?: Tone;
  children?: React.ReactNode;
}) {
  const isDeep = tone === "deep";

  return (
    <div className="flex flex-col">
      <p className={cn("type-stat", isDeep ? "text-on-deep" : "text-ink-strong")}>
        {value}
      </p>
      <p
        className={cn(
          "mt-4 text-base",
          isDeep ? "text-on-deep" : "text-ink-strong",
        )}
      >
        {caption}
      </p>
      {description && (
        <p
          className={cn(
            "mt-5 text-sm leading-relaxed",
            isDeep ? "text-on-deep-muted" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
      {source && (
        <p
          className={cn(
            "mt-4 text-xs leading-relaxed",
            isDeep ? "text-on-deep-muted/80" : "text-ink-subtle",
          )}
        >
          {source}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </div>
  );
}
