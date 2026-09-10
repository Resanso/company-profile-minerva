import { TimelineSection } from "@/components/timeline-section";
import { TechnologySection } from "@/components/TechnologySection";
import { WhoWeAreSection } from "@/components/WhoWeAreSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { MinervaFlagshipSection } from "@/components/MinervaFlagshipSection";
import { ImplementationSection } from "@/components/ImplementationSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { WhyFutureTechSection } from "@/components/WhyFutureTechSection";
import { impactMetrics } from "@/data/products";
import { visionMission } from "@/data/about";
import { Navbar } from "@/components/Navbar";
import { SectionNav } from "@/components/SectionNav";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { Action } from "@/components/ui/action";
import { Section, SectionHeader, Stat } from "@/components/ui/section";

/**
 * Page order follows the company profile brief's 13-page structure:
 * Cover → Who We Are (02) → The Industrial Challenge (03) →
 * Technology Approach + Foundation (04–05) → MINERVA (06) →
 * Proof of Technology (07) → Industrial Implementation (08) →
 * Applications (09) → Industries & Use Cases (10) → Why Future Tech (12) →
 * Vision (13). Roadmap and Team sit outside the brief's page list but are
 * kept as supporting material before the footer.
 */
export default function Page() {
  return (
    <div className="bg-surface">
      <Navbar />

      {/* ── Cover (page 01) ────────────────────────────────────────── */}
      <section id="home" className="relative isolate overflow-hidden bg-deep">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          preload="metadata"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/video-dashboard.mp4" type="video/mp4" />
        </video>
        {/* Flat scrim, not a gradient — keeps the headline legible without glow. */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-deep/75" />

        <div className="mx-auto w-full max-w-7xl px-6 py-28 md:py-40 lg:px-10">
          <h1 className="type-display rule-accent-on-deep max-w-4xl text-on-deep">
            Industrial intelligence for the physical world
          </h1>

          <p className="type-lead mt-10 max-w-2xl text-on-deep-muted">
            We build intelligent industrial systems that connect physical
            assets, operational data, digital twins and AI — so industries can
            understand, predict and optimise their operations.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Action href="/#contact" variant="accent">
              Request a briefing
            </Action>
            <Action href="/#technology" variant="onDeep">
              See the technology
            </Action>
          </div>
        </div>
      </section>

      <SectionNav />

      {/* ── Who We Are (page 02) ───────────────────────────────────── */}
      <WhoWeAreSection />

      {/* ── The Industrial Challenge (page 03) ─────────────────────── */}
      <ChallengeSection />

      {/* ── Technology Approach + Foundation (pages 04–05) ─────────── */}
      <TechnologySection />

      {/* ── MINERVA — flagship product (page 06) ───────────────────── */}
      <MinervaFlagshipSection />

      {/* ── Proof of Technology (page 07) ──────────────────────────── */}
      <Section id="portfolio" tone="light">
        <SectionHeader
          eyebrow="Proof of technology"
          title="From innovation to industrial validation"
          align="start"
        />

        <div className="mt-16 grid grid-cols-1 items-start gap-x-16 gap-y-10 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden bg-surface-sunken">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hackathon-winner.JPG"
              alt="The Future of Tech team after winning Hackathon 2025"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="type-eyebrow text-accent">Recognition — 2025</p>
            <h3 className="type-title mt-5 font-light leading-snug">
              Winner, Hackathon 2025 — Ericsson &amp; Qualcomm
            </h3>

            <p className="mt-6 leading-relaxed text-ink-muted">
              MINERVA won first place in the 2025 Hackathon organised by
              Ericsson and Qualcomm together with Kemenperin and Komdigi, with
              its AI-powered digital twin optimisation solution — recognition of
              the technology&apos;s industrial innovation potential.
            </p>

            <dl className="mt-10 border-t border-line">
              <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-4 text-sm">
                <dt className="type-eyebrow text-ink-subtle">Relationship</dt>
                <dd className="text-ink">Competition — organiser</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4 border-b border-line py-4 text-sm">
                <dt className="type-eyebrow text-ink-subtle">Awarded</dt>
                <dd className="text-ink">14 November 2025, Jakarta</dd>
              </div>
            </dl>

            <div className="mt-10">
              <Action href="/portofolio" variant="outline" size="sm">
                Read the full story
              </Action>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Industrial Implementation (page 08) ────────────────────── */}
      <ImplementationSection />

      {/* ── Applications / impact (page 09) ────────────────────────── */}
      <Section id="applications" tone="deep">
        <SectionHeader
          tone="deep"
          eyebrow="Potential impact"
          title="Turning industrial data into intelligence"
          lead="Indicative operational outcomes modelled on the platform's deployment in Indonesian heavy-industry manufacturing."
        />

        {/*
          NOTE: these figures are carried over from the previous site and have
          no stated source or project status attached to them. Until each one
          is tied to a named site and a deployment stage, they are presented
          here as indicative — never as validated results.
        */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {impactMetrics.map((metric) => (
            <Stat
              key={metric.title}
              tone="deep"
              value={metric.value}
              caption={metric.description}
              description={
                metric.type === "reduce" ? "Reduction" : "Improvement"
              }
            />
          ))}
        </div>

        <p className="mt-16 max-w-3xl leading-relaxed text-on-deep-muted">
          Transform operations from reactive to proactive: gain operational
          visibility, reduce energy waste, and shorten the path from signal to
          decision.
        </p>
      </Section>

      {/* ── Industries & Use Cases (page 10) ───────────────────────── */}
      <IndustriesSection />

      {/* ── Roadmap (supporting material) ──────────────────────────── */}
      <TimelineSection />

      {/* ── Why Future Tech (page 12) ──────────────────────────────── */}
      <WhyFutureTechSection />

      {/* ── Vision (page 13) ────────────────────────────────────────── */}
      <Section id="about" tone="deep">
        <SectionHeader
          tone="deep"
          eyebrow="About us"
          title="From industrial data to industrial intelligence"
          align="start"
        />

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
          <div>
            <p className="type-eyebrow text-accent-on-deep">
              {visionMission.vision.title}
            </p>
            <p className="type-title mt-6 font-light leading-snug text-on-deep">
              {visionMission.vision.content}
            </p>
          </div>

          <div>
            <p className="type-eyebrow text-accent-on-deep">
              {visionMission.mission.title}
            </p>
            <ul className="mt-6 space-y-5">
              {visionMission.mission.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 leading-relaxed text-on-deep-muted"
                >
                  <span
                    aria-hidden
                    className="mt-3 h-px w-4 shrink-0 bg-line-on-deep"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <TeamSection />

      <Footer />
    </div>
  );
}
