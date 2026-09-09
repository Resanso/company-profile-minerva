"use client";

import { useEffect } from "react";
import { ActionButton, Action } from "@/components/ui/action";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center bg-surface">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
        <p className="type-eyebrow text-accent">Unexpected error</p>
        <h1 className="type-display rule-accent mt-6 max-w-3xl">
          Something went wrong
        </h1>
        <p className="type-lead mt-10 max-w-xl text-ink-muted">
          We hit an unexpected error while loading this page. You can retry, or
          return to the homepage.
        </p>

        {process.env.NODE_ENV === "development" && (
          <pre className="mt-10 max-w-2xl overflow-x-auto border-l-2 border-destructive bg-surface-alt px-5 py-4 font-mono text-xs text-ink">
            {error.message}
            {error.digest ? `\n\nDigest: ${error.digest}` : ""}
          </pre>
        )}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <ActionButton onClick={reset} variant="solid">
            Try again
          </ActionButton>
          <Action href="/" variant="outline">
            Back to home
          </Action>
        </div>
      </div>
    </div>
  );
}
