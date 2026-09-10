import Image from "next/image";
import { cn } from "@/lib/utils";

export function MinervaMark({
  tone = "light",
  size = "md",
  showTagline = false,
  className,
}: {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: { wrapper: "h-9 w-28", image: "w-28" },
    md: { wrapper: "h-12 w-40", image: "w-40" },
    lg: { wrapper: "h-20 w-64", image: "w-64" },
  }[size];

  return (
    <span
      className={cn(
        "relative inline-flex overflow-hidden bg-white",
        sizes.wrapper,
        className,
      )}
      data-tone={tone}
    >
      <Image
        src="/logo/minerva.png"
        alt={showTagline ? "MINERVA Industrial Intelligence Platform" : "MINERVA"}
        width={640}
        height={360}
        className={cn(
          "absolute left-1/2 max-w-none -translate-x-1/2 top-1/2 -translate-y-1/2",
          sizes.image,
        )}
      />
    </span>
  );
}
