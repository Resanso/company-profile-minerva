import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  oneLiner: string;
  keyFeatures: string[];
  useCases: string[];
  /** Present in the data but unused: the source icons are dark-theme raster
   *  assets that read as blue tiles on a light surface. The numbered index
   *  below carries the same ordering without importing a foreign style. */
  icon?: string;
}

/**
 * Capability card. Square, hairline-bordered, no elevation and no scaling —
 * state is carried by the border and the arrow alone.
 */
export function ProductCard({
  id,
  title,
  oneLiner,
  keyFeatures,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="group flex h-full flex-col bg-surface p-8 transition-colors hover:bg-surface-alt"
    >
      <p className="type-eyebrow text-accent">
        {String(id).padStart(2, "0")}
      </p>

      <h3 className="mt-6 text-xl">{title}</h3>

      <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
        {oneLiner}
      </p>

      <ul className="mt-7 space-y-3 border-t border-line pt-7">
        {keyFeatures.slice(0, 3).map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-sm leading-relaxed text-ink-muted"
          >
            <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <span className="mt-auto flex items-center gap-2 pt-8 text-[0.9375rem] font-semibold text-accent">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
