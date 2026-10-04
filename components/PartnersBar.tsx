import { partners } from "@/data/partners";

/**
 * Partner logo strip placed right after the cover section.
 */
export function PartnersBar() {
  return (
    <div className="border-b border-line bg-surface py-10 md:py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-center md:gap-16 lg:px-10">
        <p className="type-eyebrow text-ink-subtle">In partnership with</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {partners.map((partner) => (
            <li key={partner.name} title={partner.role}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={partner.logo}
                alt={partner.name}
                className={`${partner.heightClass} w-auto grayscale`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
