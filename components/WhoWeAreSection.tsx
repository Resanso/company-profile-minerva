import { whoWeAre } from "@/data/profile";
import { Section, SectionHeader, Lattice, Cell } from "@/components/ui/section";

/**
 * Company profile page 02 — Who We Are. This page is about Future Tech the
 * company, not MINERVA the product: keep it on the company voice (Barlow,
 * accent blue), one screen, no technical depth yet.
 */
export function WhoWeAreSection() {
  return (
    <Section id="who-we-are" tone="light">
      <SectionHeader
        eyebrow="Who we are"
        title="Building intelligence for industrial operations"
        lead={whoWeAre.description}
      />

      <Lattice cols={3} className="mt-16">
        {whoWeAre.pillars.map((pillar) => (
          <Cell key={pillar.title}>
            <h3 className="text-xl">{pillar.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {pillar.description}
            </p>
          </Cell>
        ))}
      </Lattice>
    </Section>
  );
}
