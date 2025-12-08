import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: any) {
  const { id } = await params;
    
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  // Use optimized mp4
  const videoSrc = `/videos/feat-${product.id}.mp4`;

  return (
    <div className="min-h-screen bg-[#0c1220] text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-10 flex flex-col">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col h-full flex-grow">
            
          {/* Back Button */}
          <div className="mb-6">
            <Link 
                href="/#product"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 flex-grow h-full w-full items-start">
            {/* Left: Video Section - Full Screen / Maximized */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black flex-grow w-full lg:w-3/4 h-[60vh] lg:h-[62vh] flex items-center justify-center">
                {/* 
                    Using standard HTML video tag for simple playback. 
                    Users requested: "memuat video dari @[public/videos/feat-1.mov] sampai @[public/videos/feat-4.mov]"
                    Updates: Center position, hide duration bar (remove controls), auto play/loop.
                */}
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>

            {/* Right: Details (Title + OneLiner) */}
            <div className="w-full lg:w-1/4 flex flex-col justify-center h-full gap-6">
              <div className="flex items-center gap-4">
                  <img src={product.icon} alt={product.title} className="w-12 h-12" />
                  <h1 className="text-md font-bold w-full">{product.title}</h1>
              </div>

              <p className="text-lg text-blue-400 italic leading-relaxed">
                {product.oneLiner}
              </p>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase">Key Highlights</h3>
                <ul className="space-y-1">
                  {product.keyFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-sm">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
