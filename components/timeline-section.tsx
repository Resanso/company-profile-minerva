import { Timeline } from "@/components/ui/timeline";
import { timelineData } from "@/data/timeline";
import { Section, SectionHeader } from "@/components/ui/section";

export function TimelineSection() {
  const data = timelineData.map((entry, idx) => ({
    title: entry.year,
    content: (
      <div>
        <h3 className="text-xl">{entry.title}</h3>

        <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
          {entry.description}
        </p>

        <ul className="mt-6 space-y-3">
          {entry.items.map((item, index) => (
            <li
              key={`item-${idx}-${index}`}
              className="flex gap-3 text-sm leading-relaxed text-ink-muted"
            >
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line-strong" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {entry.images ? (
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3">
            <div className="row-span-2 overflow-hidden bg-surface-sunken">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.images.main}
                alt={entry.title}
                className="h-full w-full object-cover"
              />
            </div>
            {entry.images.grid?.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className="aspect-[4/3] overflow-hidden bg-surface-sunken"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${entry.title} — ${imgIdx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : entry.image ? (
          <div className="mt-8 max-w-2xl overflow-hidden bg-surface-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={entry.image}
              alt={entry.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    ),
  }));

  return (
    <Section id="timeline" tone="light">
      <SectionHeader
        eyebrow="Roadmap"
        title="From pilot to deployment"
        lead="Where the platform is today, and the sequence we are building toward."
        align="start"
      />

      <div className="mt-16">
        <Timeline data={data} />
      </div>
    </Section>
  );
}
