import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Ensure params are correctly typed for Next.js 15/latest (which might require awaiting params in some versions, but standard is props.params)
// However, since this is a client component or server component, let's stick to standard nextjs page props.
// Note: In Next.js 15, params is a Promise. Let's assume standard Next.js 14 behavior first or handle it safely.
// Actually, let's treat it as a server component.

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: any) {
    // Awaiting params if necessary (Next.js 15 compatibility)
    const { id } = await params;
    
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  // Use optimized mp4
  const videoSrc = `/videos/feat-${product.id}.mp4`;

  return (
    <div className="min-h-screen bg-[#0c1220] text-white font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
            
          {/* Back Button */}
          <div className="mb-8">
            <Link 
                href="/#product"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Video */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video">
               {/* 
                  Using standard HTML video tag for simple playback. 
                  Users requested: "memuat video dari @[public/videos/feat-1.mov] sampai @[public/videos/feat-4.mov]"
               */}
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Right Column: Details */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={product.icon} alt={product.title} className="w-16 h-16" />
                <h1 className="text-3xl md:text-4xl font-bold">{product.title}</h1>
              </div>

              <p className="text-xl text-blue-400 italic mb-8 leading-relaxed">
                {product.oneLiner}
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
                    Use Cases
                  </h3>
                  <ul className="space-y-3">
                    {product.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
