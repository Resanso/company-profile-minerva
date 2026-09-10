import { industries } from "@/data/profile";
import { Section, SectionHeader, Lattice, Cell } from "@/components/ui/section";

/**
 * Company profile page 10 — Industries & Use Cases. One platform, six
 * operating environments. Each cell follows Industry → Problem → Capability
 * rather than a logo wall, per the brief's design principle for this page.
 */
export function IndustriesSection() {
  return (
    <Section id="industries" tone="alt">
      <SectionHeader
        eyebrow="Industries & use cases"
        title="Applied across industrial environments"
        lead="One industrial intelligence platform, adaptable across different physical operating environments."
      />

      <Lattice cols={3} className="mt-16">
        {industries.map((industry) => (
          <Cell key={industry.index}>
            <p className="type-eyebrow text-accent">{industry.index}</p>
            <h3 className="mt-5 text-xl">{industry.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {industry.problem}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6">
              {industry.capability.map((cap) => (
                <li
                  key={cap}
                  className="border border-line px-2.5 py-1 text-xs text-ink"
                >
                  {cap}
                </li>
              ))}
            </ul>
          </Cell>
        ))}
      </Lattice>
    </Section>
  );
}
