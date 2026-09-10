import { whyFutureTech, whyFutureTechPositioning } from "@/data/profile";
import { Section, SectionHeader, Lattice, Cell } from "@/components/ui/section";

/**
 * Company profile page 12 — Why Future Tech. Four differentiators plus a
 * single positioning line. Deliberately makes no comparative claim against
 * named competitors (Siemens, AVEVA, Schneider Electric) — the brief is
 * explicit that any such claim needs evidence this profile doesn't carry.
 */
export function WhyFutureTechSection() {
  return (
    <Section id="why-us" tone="alt">
      <SectionHeader
        eyebrow="Why Future Tech"
        title="Built for complex industrial environments"
        align="start"
      />

      <Lattice cols={4} className="mt-16">
        {whyFutureTech.map((item) => (
          <Cell key={item.index}>
            <p className="type-eyebrow text-accent">{item.index}</p>
            <h3 className="mt-5 text-lg">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {item.description}
            </p>
          </Cell>
        ))}
      </Lattice>

      <p className="type-title mx-auto mt-16 max-w-3xl text-center font-light leading-snug text-ink-strong">
        {whyFutureTechPositioning}
      </p>
    </Section>
  );
}
