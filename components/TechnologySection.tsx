"use client";

import { useState } from "react";
import {
  flowStages,
  foundationLayers,
  technologyPrinciples,
} from "@/data/technology";
import {
  Section,
  SectionHeader,
  Lattice,
  Cell,
  Eyebrow,
} from "@/components/ui/section";

/**
 * Technology — company profile pages 04 and 05.
 *
 *   04  Our Technology Approach — the physical → digital → action chain
 *   05  Technology Foundation   — the six capability layers underneath it
 */
export function TechnologySection() {
  const [activeStage, setActiveStage] = useState(flowStages[0].id);
  const stage = flowStages.find((s) => s.id === activeStage) ?? flowStages[0];

  return (
    <>
      {/* ── Approach ────────────────────────────────────────────────── */}
      <Section id="technology" tone="light">
        <SectionHeader
          eyebrow="Technology"
          title="Connecting the physical and digital worlds"
          lead="By connecting physical assets to their digital representation, Future Tech enables industrial systems to move from monitoring and reactive operations toward prediction, optimisation and intelligent decision-making."
        />

        <Lattice cols={3} className="mt-16">
          {technologyPrinciples.map((principle) => (
            <Cell key={principle.title}>
              <h3 className="text-xl">{principle.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {principle.description}
              </p>
            </Cell>
          ))}
        </Lattice>
      </Section>

      {/* ── The chain ───────────────────────────────────────────────── */}
      <Section tone="alt">
        <SectionHeader
          eyebrow="The industrial intelligence chain"
          title="From a machine on the floor to a decision an operator can act on"
          lead="Seven stages, each dependent on the one before it. Select a stage to see what it consists of."
        />

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-[minmax(0,26rem)_1fr]">
          {/* Rail */}
          <div className="bg-surface">
            <ol>
              {flowStages.map((s, i) => {
                const isActive = s.id === stage.id;
                const isLast = i === flowStages.length - 1;

                return (
                  <li key={s.id} className="relative">
                    {!isLast && (
                      <span
                        aria-hidden
                        className="absolute left-[2.375rem] top-[3.25rem] h-[calc(100%-2.5rem)] w-px bg-line md:left-[2.875rem]"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setActiveStage(s.id)}
                      aria-current={isActive ? "step" : undefined}
                      className={`flex w-full items-center gap-4 px-6 py-4 text-left transition-colors md:px-8 ${
                        isActive ? "bg-surface-alt" : "hover:bg-surface-alt/60"
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center border text-[0.75rem] font-medium transition-colors ${
                          isActive
                            ? "border-accent bg-accent text-white"
                            : "border-line bg-surface text-ink-subtle"
                        }`}
                      >
                        {s.index}
                      </span>
                      <span
                        className={`text-[0.9375rem] transition-colors ${
                          isActive
                            ? "font-medium text-ink-strong"
                            : "text-ink-muted"
                        }`}
                      >
                        {s.label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="flex items-center gap-3 border-t border-line px-6 py-4 md:px-8">
              <span aria-hidden className="text-sm text-accent">
                &#8634;
              </span>
              <p className="type-eyebrow text-ink-subtle">
                Action returns to 01 — continuous loop
              </p>
            </div>
          </div>

          {/* Detail */}
          <div className="bg-surface px-6 py-10 md:px-12 md:py-14">
            <Eyebrow>
              Stage {stage.index} — {stage.label}
            </Eyebrow>

            <p className="type-title mt-6 max-w-xl font-light leading-snug text-ink-strong">
              {stage.headline}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
              {stage.description}
            </p>

            <div className="mt-10">
              <p className="type-eyebrow text-ink-subtle">Consists of</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {stage.elements.map((element) => (
                  <li
                    key={element}
                    className="border border-line px-3 py-1.5 text-[0.8125rem] text-ink"
                  >
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Foundation ──────────────────────────────────────────────── */}
      <Section tone="light">
        <SectionHeader
          eyebrow="Technology foundation"
          title="The technology foundation behind industrial intelligence"
        />

        <Lattice cols={3} className="mt-16">
          {foundationLayers.map((layer) => (
            <Cell key={layer.index} className="group relative transition-colors hover:bg-surface-alt">
              <span
                aria-hidden
                className="absolute left-0 top-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full"
              />
              <p className="type-eyebrow text-accent">{layer.index}</p>
              <h3 className="mt-5 text-xl">{layer.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {layer.description}
              </p>
            </Cell>
          ))}
        </Lattice>

        {/* Positioning note — brief non-negotiable #7 */}
        <div className="mt-14 border-l-2 border-accent py-1 pl-6">
          <p className="max-w-2xl leading-relaxed">
            <span className="font-medium text-ink-strong">
              5G is an enabling technology, not the core identity of Future
              Tech.
            </span>{" "}
            <span className="text-ink-muted">
              Connectivity is selected to fit the site. The company is defined
              by the intelligence layer built on top of it.
            </span>
          </p>
        </div>
      </Section>
    </>
  );
}
