"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Action } from "@/components/ui/action";

const NAV_LINKS = [
  { href: "/#technology", label: "Technology" },
  { href: "/#product", label: "Platform" },
  { href: "/#portfolio", label: "Proof" },
  { href: "/#about", label: "About us" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility strip */}
      <div className="hidden bg-deep text-on-deep md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-8 px-6 py-2.5 text-[0.8125rem] lg:px-10">
          <span className="text-on-deep-muted">
            Winner — Ericsson &amp; Qualcomm Hackathon 2025
          </span>
          <a
            href="mailto:minervaenergyid@gmail.com"
            className="text-on-deep transition-colors hover:text-accent-on-deep"
          >
            Contact us
          </a>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center" aria-label="MINERVA — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/MINERVA logo.png"
              alt="MINERVA"
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.9375rem] text-ink transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Action href="/#contact" variant="solid" size="sm">
              Request a briefing
            </Action>
          </div>

          <button
            type="button"
            className="text-ink-strong lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {isOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-surface lg:hidden">
          <nav className="flex flex-col border-t border-line">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-line px-6 py-5 text-xl font-light text-ink-strong"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 py-8">
            <Action
              href="/#contact"
              variant="accent"
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Request a briefing
            </Action>
          </div>
        </div>
      )}
    </header>
  );
}
