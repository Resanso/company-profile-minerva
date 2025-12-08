import Head from "next/head";
import Lanyard from "@/components/Lanyard";
import { TimelineSection } from "@/components/timeline-section";
import { ProductCard } from "@/components/ProductCard";
import { products, morePotentialImpact } from "@/data/products";
import { visionMission } from "@/data/about";
import { ContactSection } from "@/components/ui/contact";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Our Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* More Potential Impact Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              More Potential Impact
            </h3>
            <p className="text-gray-300 leading-relaxed text-center">
              {morePotentialImpact.description}
            </p>
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
        className="relative"
        style={{ marginTop: "-200px" }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12 relative z-10">
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
                <p className="text-gray-300 text-sm leading-relaxed text-[16px]">
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
          <h2 className="text-4xl font-bold mb-16 text-center">About Us</h2>
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

      <section className=" bg-[#0B0F17] w-full h-full">
        {/* Team Lanyards - render 4 lanyards for each team member */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div>
            <Lanyard
              image="/band.png"
              model="/3d-model/adrian.glb"
              heightClass="h-[85vh] md:h-[90vh]"
            />
          </div>
          <div>
            <Lanyard
              image="/band.png"
              model="/3d-model/dhafin.glb"
              heightClass="h-[85vh] md:h-[90vh]"
            />
          </div>
          <div>
            <Lanyard
              image="/band.png"
              model="/3d-model/resan.glb"
              heightClass="h-[85vh] md:h-[90vh]"
            />
          </div>
          <div>
            <Lanyard
              image="/band.png"
              model="/3d-model/rafi.glb"
              heightClass="h-[85vh] md:h-[90vh]"
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <div className="dark">
        <ContactSection />
      </div>

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
