import type { CSSProperties } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { MinervaMark } from "@/components/brand/MinervaMark";

/**
 * Company profile page 06 — MINERVA. Deliberately its own sub-brand zone:
 * MINERVA's navy/red/green identity replaces Future Tech's blue for the
 * width of this section only, via a local --color-accent override that
 * ProductCard and its "Learn more" links inherit through the cascade.
 *
 * This is the direct answer to "explain the flagship product separately" —
 * crossing into this section should read as entering the product, not just
 * a different content block under the same visual system.
 */
export function MinervaFlagshipSection() {
  const accentOverride = {
    "--color-accent": "var(--color-minerva-red)",
    "--color-accent-hover": "var(--color-minerva-red-dark)",
  } as CSSProperties;

  return (
    <section
      id="product"
      className="relative isolate scroll-mt-32 overflow-hidden bg-deep py-20 md:py-28"
    >
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/video-dashboard.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-deep/75" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <p className="type-eyebrow text-minerva-slate-3">Flagship product</p>

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <MinervaMark tone="dark" size="lg" showTagline />
          <p className="max-w-sm text-sm leading-relaxed text-minerva-slate-3">
            MINERVA is Future Tech&apos;s flagship platform — the product the
            technology foundation on this page is built to run.
          </p>
        </div>

        <p className="type-lead mt-12 max-w-2xl text-minerva-slate-3">
          MINERVA connects industrial data, digital twins, analytics and AI
          into a single intelligence layer for industrial operations.
        </p>

        <div style={accentOverride}>
          <div className="mt-16 hidden gap-px bg-minerva-slate-1 md:grid md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Mobile: horizontal snap rail */}
          <div className="mt-12 md:hidden">
            <div className="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
              {products.map((product) => (
                <div key={product.id} className="w-[85vw] shrink-0 snap-center">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
