import { useCase2 } from "@/data/use-case-2";
import { Section, SectionHeader, Lattice, Cell } from "@/components/ui/section";

/**
 * Use Case 02 — Forklift Safety Monitoring & Geofencing (Project IntegrateX).
 * Placed after Industrial Implementation as the second use case beyond the
 * aluminium processing pilot.
 */
export function UseCase2Section() {
  return (
    <Section id="use-case-2" tone="deep">
      <SectionHeader
        eyebrow={useCase2.eyebrow}
        title={useCase2.title}
        lead={useCase2.subtitle}
        tone="deep"
        align="start"
      />

      {/* PoC facts */}
      <dl className="mt-12 grid grid-cols-1 gap-px bg-line-strong sm:grid-cols-3">
        {useCase2.meta.map((item) => (
          <div key={item.label} className="bg-deep p-6">
            <dt className="type-eyebrow text-minerva-slate-3">{item.label}</dt>
            <dd className="mt-2 text-lg text-on-deep">{item.value}</dd>
          </div>
        ))}
      </dl>

      {/* Challenge → Objective */}
      <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="type-eyebrow text-minerva-slate-3">The challenge</p>
          <ol className="mt-6 space-y-6">
            {useCase2.challenges.map((item, i) => (
              <li key={item.title} className="flex gap-4">
                <span className="type-eyebrow mt-1 text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-on-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-deep-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="type-eyebrow text-accent">PoC objective</p>
          <ul className="mt-6 space-y-6">
            {useCase2.objectives.map((item) => (
              <li key={item.title} className="border-l border-accent pl-4">
                <h3 className="text-on-deep">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-on-deep-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pipeline flow */}
      <div className="mt-16">
        <p className="type-eyebrow text-minerva-slate-3">5G usage story</p>
        <Lattice cols={3} tone="deep" className="mt-8">
          {useCase2.pipeline.map((stage) => (
            <Cell key={stage.step} tone="deep">
              <p className="type-eyebrow text-accent">{stage.step}</p>
              <h3 className="mt-4 text-lg text-on-deep">{stage.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-on-deep-muted">
                {stage.description}
              </p>
            </Cell>
          ))}
        </Lattice>
      </div>

      {/* Why 5G + Tech Stack */}
      <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <p className="type-eyebrow text-minerva-slate-3">Why 5G matters</p>
          <ul className="mt-6 space-y-3">
            {useCase2.why5G.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-on-deep-muted"
              >
                <span
                  aria-hidden
                  className="mt-2 h-px w-3 shrink-0 bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="type-eyebrow text-minerva-slate-3">Technology stack</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {useCase2.techStack.map((tech) => (
              <li
                key={tech}
                className="border border-line-strong px-3 py-1.5 text-xs text-on-deep-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
