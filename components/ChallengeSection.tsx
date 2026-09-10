import Image from "next/image";
import { Section } from "@/components/ui/section";

/**
 * Company profile page 03 — The Industrial Challenge. A single idea: data
 * exists everywhere on the plant floor, but arrives fragmented. This page
 * exists purely to set up Technology (04–05) — it makes no claims of its own.
 */
export function ChallengeSection() {
  return (
    <Section id="challenge" tone="alt">
      <Image
        src="/diagram.png"
        alt="Industrial systems feeding fragmented data and operational consequences"
        width={1776}
        height={888}
        sizes="(max-width: 1200px) 100vw, 1110px"
        className="mx-auto h-auto w-full max-w-[1110px]"
        priority
      />
    </Section>
  );
}
