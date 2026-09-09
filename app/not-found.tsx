import { Action } from "@/components/ui/action";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <p className="type-eyebrow text-accent">Error 404</p>
        <h1 className="type-display rule-accent mt-6 max-w-3xl">
          This page could not be found
        </h1>
        <p className="type-lead mt-10 max-w-xl text-ink-muted">
          The page may have been moved or removed. You can return to the
          homepage or go straight to the platform overview.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Action href="/" variant="solid">
            Back to home
          </Action>
          <Action href="/#product" variant="outline">
            View the platform
          </Action>
        </div>
      </div>
    </div>
  );
}
