import { implementationStages } from "@/data/profile";
import { Section, SectionHeader } from "@/components/ui/section";
import { MinervaMark } from "@/components/brand/MinervaMark";

/**
 * Company profile page 08 — Industrial Implementation. Shows the real
 * deployment architecture end to end, paired with an actual photograph from
 * the pilot site (not a 3D illustration) — the brief is explicit that this
 * page should prove the technology exists beyond the lab.
 */
export function ImplementationSection() {
  return (
    <Section id="implementation" tone="light">
      <SectionHeader
        eyebrow="Industrial implementation"
        title="Built around real industrial systems"
        align="start"
      />

      <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Architecture chain */}
        <ol className="relative">
          {implementationStages.map((stage, i) => {
            const isLast = i === implementationStages.length - 1;
            const isMinerva = stage.label === "MINERVA";

            return (
              <li key={stage.label} className="relative pl-11">
                {!isLast && (
                  <span
                    aria-hidden
                    className="absolute left-[0.6rem] top-8 h-[calc(100%-0.5rem)] w-px bg-line"
                  />
                )}
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 h-[1.15rem] w-[1.15rem] border ${
                    isMinerva
                      ? "border-accent bg-accent"
                      : "border-line-strong bg-surface"
                  }`}
                />
                <div className="pb-8">
                  {isMinerva ? (
                    <MinervaMark size="sm" />
                  ) : (
                    <p className="text-[0.9375rem] text-ink">{stage.label}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        {/* Real documentation */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 aspect-[16/10] overflow-hidden bg-surface-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pilot/Pilot.jpeg"
              alt="MINERVA pilot deployment on the production floor"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square overflow-hidden bg-surface-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pilot/Pilot2.jpeg"
              alt="MINERVA pilot deployment — plant floor detail"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex aspect-square flex-col justify-center border border-line px-6">
            <p className="type-eyebrow text-ink-subtle">Status</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink">
              Pilot implementation, national manufacturing facility
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
