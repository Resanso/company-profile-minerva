"use client";

import { useState } from "react";
import Link from "next/link";
import { ActionButton } from "@/components/ui/action";
import { SectionHeader } from "@/components/ui/section";

const FIELD =
  "w-full border border-line bg-surface px-4 py-3 text-[0.9375rem] text-ink placeholder:text-ink-subtle focus:border-accent focus:outline-none";

const LABEL = "mb-2 block text-sm font-medium text-ink-strong";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="bg-surface-alt py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Contact"
            title="Start a conversation about your operation"
            lead="Tell us what you run and what you are trying to improve. We will come back with whether the platform is a fit — and where it is not."
            align="start"
          />

          <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
            {/* Details */}
            <div>
              <dl className="border-t border-line">
                <div className="grid grid-cols-1 gap-1 border-b border-line py-6 sm:grid-cols-[8rem_1fr]">
                  <dt className="type-eyebrow text-ink-subtle">Email</dt>
                  <dd>
                    <a
                      href="mailto:minervaenergyid@gmail.com"
                      className="text-ink transition-colors hover:text-accent"
                    >
                      minervaenergyid@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 border-b border-line py-6 sm:grid-cols-[8rem_1fr]">
                  <dt className="type-eyebrow text-ink-subtle">Phone</dt>
                  <dd>
                    <a
                      href="tel:+6282217257007"
                      className="text-ink transition-colors hover:text-accent"
                    >
                      +62 822-1725-7007
                    </a>
                  </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 border-b border-line py-6 sm:grid-cols-[8rem_1fr]">
                  <dt className="type-eyebrow text-ink-subtle">Office</dt>
                  <dd className="text-ink-muted">
                    Jl. Telekomunikasi No.1, Sukapura
                    <br />
                    Dayeuhkolot, Kabupaten Bandung
                    <br />
                    Jawa Barat 40257, Indonesia
                  </dd>
                </div>
              </dl>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={LABEL}>
                    Name
                  </label>
                  <input
                    id="name"
                    className={FIELD}
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="company" className={LABEL}>
                    Company
                  </label>
                  <input
                    id="company"
                    className={FIELD}
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={LABEL}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={FIELD}
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={LABEL}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    className={FIELD}
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={LABEL}>
                  What would you like to discuss?
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={FIELD}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {submitStatus === "success" && (
                <p className="border-l-2 border-accent bg-accent-soft px-4 py-3 text-sm text-ink">
                  Thank you — your message has been sent. We will be in touch.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-ink">
                  Something went wrong. Please try again, or email us directly.
                </p>
              )}

              <ActionButton
                type="submit"
                variant="accent"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </ActionButton>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-deep text-on-deep">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/MINERVA logo.png"
                alt="MINERVA"
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="mt-6 max-w-sm leading-relaxed text-on-deep-muted">
                Industrial intelligence systems that connect physical assets,
                operational data, digital twins and AI.
              </p>
            </div>

            <nav>
              <p className="type-eyebrow text-accent-on-deep">Explore</p>
              <ul className="mt-5 space-y-3 text-[0.9375rem]">
                {[
                  { href: "/#technology", label: "Technology" },
                  { href: "/#product", label: "Platform" },
                  { href: "/#portfolio", label: "Proof" },
                  { href: "/#about", label: "About us" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-on-deep-muted transition-colors hover:text-on-deep"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="type-eyebrow text-accent-on-deep">Get in touch</p>
              <ul className="mt-5 space-y-3 text-[0.9375rem] text-on-deep-muted">
                <li>
                  <a
                    href="mailto:minervaenergyid@gmail.com"
                    className="transition-colors hover:text-on-deep"
                  >
                    minervaenergyid@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+6282217257007"
                    className="transition-colors hover:text-on-deep"
                  >
                    +62 822-1725-7007
                  </a>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="transition-colors hover:text-on-deep"
                  >
                    Request a briefing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-line-on-deep pt-8 text-sm text-on-deep-muted">
            © {new Date().getFullYear()} MINERVA. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
