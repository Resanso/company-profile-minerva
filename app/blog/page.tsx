import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Action } from "@/components/ui/action";

export default function BlogPage() {
  return (
    <div className="bg-surface">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-10">
        <p className="type-eyebrow text-accent">Insights</p>
        <h1 className="type-display rule-accent mt-6 max-w-3xl">
          Coming soon
        </h1>
        <p className="type-lead mt-10 max-w-xl text-ink-muted">
          We are preparing a set of technical notes on industrial data
          contextualisation, digital twins and deployment in live plant
          environments.
        </p>
        <div className="mt-12">
          <Action href="/" variant="outline">
            Back to home
          </Action>
        </div>
      </main>

      <Footer />
    </div>
  );
}
