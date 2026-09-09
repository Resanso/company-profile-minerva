export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className="h-6 w-6 animate-spin border-2 border-line border-t-accent"
        />
        <p className="type-eyebrow text-ink-subtle">Loading</p>
      </div>
    </div>
  );
}
