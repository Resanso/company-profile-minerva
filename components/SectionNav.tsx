"use client";

import { useEffect, useState } from "react";

/**
 * In-page section nav, sticky beneath the masthead.
 *
 * This is the pattern that makes a long enterprise page navigable: a reader
 * arriving with one question ("where is the proof?") can reach it in a click
 * instead of scrolling for it.
 */

const SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "technology", label: "Technology" },
  { id: "product", label: "MINERVA" },
  { id: "portfolio", label: "Proof" },
  { id: "implementation", label: "Implementation" },
  { id: "industries", label: "Industries" },
  { id: "why-us", label: "Why us" },
  { id: "about", label: "Vision" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Track the topmost section currently intersecting the upper viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-40 border-b border-line bg-surface md:top-[7.5rem]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <nav
          aria-label="Sections"
          className="scrollbar-hide -mx-6 flex gap-8 overflow-x-auto px-6 lg:mx-0 lg:px-0"
        >
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`shrink-0 border-b-2 py-4 text-[0.9375rem] transition-colors ${
                  isActive
                    ? "border-accent text-ink-strong"
                    : "border-transparent text-ink-muted hover:text-ink-strong"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
