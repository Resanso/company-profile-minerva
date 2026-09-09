import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Actions in this system are square, generously padded and set in semibold —
 * the enterprise button, not the rounded product button.
 *
 *   solid   — primary action on a light band
 *   accent  — the one action per page that should carry colour
 *   outline — secondary action on a light band
 *   onDeep  — outlined action sitting on the deep navy band
 *   quiet   — inline text action with an arrow
 */
const action = cva(
  "inline-flex items-center justify-center gap-2 rounded-none text-[1.0625rem] font-semibold leading-none transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-deep text-on-deep hover:bg-deep-soft",
        accent: "bg-accent text-white hover:bg-accent-hover",
        outline:
          "border border-ink-strong bg-transparent text-ink-strong hover:bg-ink-strong hover:text-white",
        onDeep:
          "border border-white/70 bg-transparent text-white hover:bg-white hover:text-deep",
        quiet:
          "px-0 py-0 text-accent underline-offset-4 hover:text-accent-hover hover:underline",
      },
      size: {
        md: "px-8 py-4",
        sm: "px-6 py-3 text-[0.9375rem]",
      },
    },
    compoundVariants: [
      { variant: "quiet", size: "md", class: "px-0 py-0" },
      { variant: "quiet", size: "sm", class: "px-0 py-0" },
    ],
    defaultVariants: { variant: "solid", size: "md" },
  },
);

type ActionVariants = VariantProps<typeof action>;

export function Action({
  href,
  external,
  variant,
  size,
  className,
  children,
  ...rest
}: ActionVariants & {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(action({ variant, size }), className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  ...rest
}: ActionVariants &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(action({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export { action as actionVariants };
