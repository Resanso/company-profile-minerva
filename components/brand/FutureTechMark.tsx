import Image from "next/image";
import { cn } from "@/lib/utils";

export function FutureTechMark({
  tone = "light",
  showWordmark = true,
  showTagline = false,
  className,
}: {
  tone?: "light" | "dark";
  showWordmark?: boolean;
  showTagline?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex overflow-hidden bg-white",
        showTagline ? "h-[5.5rem] w-52" : "h-10 w-28",
        className,
      )}
      data-tone={tone}
    >
      <Image
        src="/brand/future-tech-logo-reference.png"
        alt={showWordmark ? "Future Tech" : "Future Tech logo"}
        width={612}
        height={408}
        className={cn(
          showTagline
            ? "absolute left-1/2 top-1/2 w-52 max-w-none -translate-x-1/2 -translate-y-1/2"
            : "h-full w-full scale-200 object-contain",
        )}
      />
    </span>
  );
}
