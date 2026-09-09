import { cn } from "@/lib/utils";

export interface TimelineEntry {
  /** Marker text — a year, phase or status label. */
  title: string;
  content: React.ReactNode;
}

/**
 * Ruled roadmap. A single hairline runs the full height with square nodes on
 * it; each entry is a row, not a floating card. No scroll-driven beam, no
 * gradient — the rule is the structure.
 */
export function Timeline({
  data,
  className,
}: {
  data: TimelineEntry[];
  className?: string;
}) {
  return (
    <ol className={cn("relative", className)}>
      {/* Spine */}
      <span
        aria-hidden
        className="absolute left-[3px] top-2 bottom-2 w-px bg-line md:left-[calc(9rem+3px)]"
      />

      {data.map((item, index) => (
        <li
          key={`${item.title}-${index}`}
          className="relative grid grid-cols-1 gap-y-4 pb-16 pl-8 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-x-12 md:pl-0"
        >
          {/* Marker */}
          <div className="md:text-right">
            <span
              aria-hidden
              className="absolute left-0 top-[0.55rem] h-[7px] w-[7px] bg-accent md:left-[9rem]"
            />
            <p className="type-eyebrow text-ink-subtle md:pr-8">{item.title}</p>
          </div>

          <div className="md:pl-8">{item.content}</div>
        </li>
      ))}
    </ol>
  );
}
