import Head from "next/head";
import { TimelineSection } from "@/components/timeline-section";
import { ProductCard } from "@/components/ProductCard";
import { products, morePotentialImpact, impactMetrics } from "@/data/products";
import { visionMission } from "@/data/about";
import { ProfessionalContactSection } from "@/components/ui/contact-professional";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { DollarSign, AlertTriangle, Leaf, Target, Zap, TrendingDown, TrendingUp } from "lucide-react";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  AlertTriangle,
  Leaf,
  Target,
  Zap,
};

export default function Page() {
  // State untuk mobile menu jika diperlukan, namun untuk saat ini kita buat statis sesuai struktur html
  // atau menggunakan simple toggle jika ingin interaktif.
  // Mengikuti gaya statis 'page.tsx' sebelumnya, kita gunakan structure HTML yang di-convert ke JSX.

  return (
    <div className="min-h-screen h-screen overflow-y-auto bg-[#0c1220] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Head>
        <title>Minerva Profile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* --- NAVBAR --- 
          Source: index.html (structure)
      */}
      {/* --- NAVBAR --- 
          Source: index.html (structure)
      */}
      <Navbar />

      {/* --- HERO SECTION --- 
          Source: index.html (Video background, Text, Contact Button)
      */}
      <section
        id="home"
        className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/video-dashboard.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0c1220] to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0c1220] to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl px-6 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Future of Industrial Manufacturing</h1>
          <p className="text-gray-300 mb-6 text-lg">
            Driven by Real-time Digital Twin, and Optimize Energy Usage by AI{" "}
            <br className="hidden md:block" />
            Sustainable Smart Manufacturing
          </p>
          <a
            href="https://wa.me/6282217257007?text=Halo%20tim%20MINERVA,%0A%0ASaya%20ingin%20bertanya%20atau%20berdiskusi%20lebih%20lanjut%20terkait%20proyek%20MINERVA.%20Apakah%20bisa%20dijadwalkan%20meeting%20atau%20diberikan%20informasi%20lebih%20lanjut%3F%0A%0ATerima%20kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium inline-block transition-colors"
          >
            Contact Our Team Now
          </a>
        </div>
      </section>

      {/* --- PRODUCT SECTION --- */}
      <section id="product" className="relative py-24 bg-[#0c1220] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            Our Products
          </h2>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                icon={product.icon}
                title={product.title}
                oneLiner={product.oneLiner}
                keyFeatures={product.keyFeatures}
                useCases={product.useCases}
              />
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
              {products.map((product) => (
                <div key={product.id} className="flex-shrink-0 w-[85vw] snap-center">
                  <ProductCard
                    id={product.id}
                    icon={product.icon}
                    title={product.title}
                    oneLiner={product.oneLiner}
                    keyFeatures={product.keyFeatures}
                    useCases={product.useCases}
                  />
                </div>
              ))}
            </div>
            {/* Scroll indicator dots */}
            <div className="flex justify-center gap-2 mt-4">
              {products.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-600"
                />
              ))}
            </div>
          </div>

          {/* More Potential Impact Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                {morePotentialImpact.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
                {morePotentialImpact.subtitle}
              </p>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {impactMetrics.map((metric, index) => {
                const IconComponent = iconMap[metric.icon];
                const isReduce = metric.type === 'reduce';
                const TrendIcon = isReduce ? TrendingDown : TrendingUp;
                const trendColor = isReduce ? 'text-green-400' : 'text-blue-400';
                const bgColor = isReduce ? 'bg-green-500/10' : 'bg-blue-500/10';
                const hoverBgColor = isReduce ? 'group-hover:bg-green-500/20' : 'group-hover:bg-blue-500/20';

                // If it's the last item and there's an odd number, make it span 2 columns on mobile
                const isLastOdd = index === impactMetrics.length - 1 && impactMetrics.length % 2 !== 0;

                return (
                  <div
                    key={index}
                    className={`bg-[#10192e]/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group ${isLastOdd ? 'col-span-2 md:col-span-1' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center mb-4 ${hoverBgColor} transition-colors`}>
                      <IconComponent className={`w-6 h-6 ${trendColor}`} />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendIcon className={`w-5 h-5 ${trendColor}`} />
                      <span className="text-3xl md:text-4xl font-bold text-white">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-1">
                      {metric.description}
                    </p>
                    <p className={`text-xs ${isReduce ? 'text-green-400/70' : 'text-blue-400/70'}`}>
                      {isReduce ? 'Reduce' : 'Improve'}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <div className="mt-12 max-w-4xl mx-auto">
              <p className="text-gray-400 leading-relaxed text-center text-sm md:text-base">
                Transform manufacturing operations from reactive to proactive with AI-powered optimization.
                Gain operational visibility, reduce energy waste, and accelerate decision-making through
                intelligent automation—creating a more resilient and sustainable manufacturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSITION VIDEO SECTION --- 
          Source: index.html
      */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/video-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0c1220] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0c1220] to-transparent"></div>
      </section>

      {/* --- PORTFOLIO SECTION --- 
          Source: index.html (Structure, Image, Text content)
      */}
      <section
        id="portfolio"
        className="relative mt-[-100px] md:mt-[-200px]"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 relative z-10">
            Portfolio
          </h2>

          <div className="bg-[#10192e] rounded-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl relative z-10">
            <img
              src="/hackathon-winner.JPG"
              alt="Hackathon Winner"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />

            <div className="text-left flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  1st Winner Hackathon
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-[16px] line-clamp-4 md:line-clamp-none">
                  MINERVA won 1st place in the 2025 Hackathon organized by
                  Ericsson, Qualcomm, Komdigi, and the Ministry of Industry with
                  a focus on 5G and AI technology. The Future of Tech team won
                  the competition through its AI-Powered Optimization Digital
                  Twin solution. MINERVA is able to address industrial
                  challenges such as high operational costs, manual processes,
                  monitoring delays, and energy waste. With a real-time Digital
                  Twin, predictive AI, and smart energy intelligence, MINERVA
                  delivers more efficient, intelligent, and sustainable
                  operations..
                </p>
              </div>

              <a
                href="/portofolio"
                className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium w-fit transition-colors"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <TimelineSection />

      {/* ================================================================
        ABOUT US SECTION
        ================================================================
      */}
      <section id="about" className="py-24 bg-[#0F141F] mt-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Us</h2>
          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Vision Column */}
            <div>
              <h3 className="text-2xl font-bold text-blue-500 mb-6 uppercase tracking-wider">
                {visionMission.vision.title}
              </h3>
              <div className="text-gray-400 leading-relaxed text-base md:text-lg">
                <p>{visionMission.vision.content}</p>
              </div>
            </div>

            {/* Mission Column */}
            <div>
              <h3 className="text-2xl font-bold text-blue-500 mb-6 uppercase tracking-wider">
                {visionMission.mission.title}
              </h3>
              <div className="text-gray-400 leading-relaxed space-y-4 text-sm md:text-base">
                {visionMission.mission.items.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <TeamSection />

      {/* --- FOOTER --- 
          Source: index.html (Layout, "Try Our Product" section, Contact info)
      */}
      {/* --- FOOTER --- 
          Source: index.html (Layout, "Try Our Product" section, Contact info)
      */}
      <Footer />
    </div>
  );
}
