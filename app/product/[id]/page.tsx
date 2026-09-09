import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Action } from "@/components/ui/action";

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) notFound();

  const videoSrc = `/videos/feat-${product.id}.mp4`;

  return (
    <div className="bg-surface">
      <Navbar />

      <main>
        {/* Header */}
        <div className="border-b border-line bg-surface-alt">
          <div className="mx-auto w-full max-w-7xl px-6 py-14 md:py-20 lg:px-10">
            <Link
              href="/#product"
              className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the platform
            </Link>

            <div className="mt-10">
              <p className="type-eyebrow text-accent">
                Platform capability {String(product.id).padStart(2, "0")}
              </p>
              <h1 className="type-headline rule-accent mt-4 max-w-3xl">
                {product.title}
              </h1>
            </div>

            <p className="type-lead mt-8 max-w-2xl text-ink-muted">
              {product.oneLiner}
            </p>
          </div>
        </div>

        {/* Demo */}
        <div className="bg-deep">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20 lg:px-10">
            <div className="aspect-video w-full overflow-hidden bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-contain"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Detail */}
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28 lg:px-10">
          <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
            <div>
              <h2 className="type-title font-light">Key capabilities</h2>
              <ul className="mt-8 border-t border-line">
                {product.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-line py-5 leading-relaxed text-ink-muted"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="type-title font-light">Where it applies</h2>
              <ul className="mt-8 border-t border-line">
                {product.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="border-b border-line py-5 leading-relaxed text-ink-muted"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <Action href="/#contact" variant="accent">
              Discuss this capability
            </Action>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
