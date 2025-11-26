import React from "react";
import Head from "next/head";
import Image from "next/image";

export default function HackathonWinnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        <title>Future of Tech Juara Hackathon 2025 - Ericsson & Qualcomm</title>
        <meta
          name="description"
          content="Tim Future of Tech menjuarai Hackathon 2025 dengan inovasi Minerva."
        />
      </Head>

      <main className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Header Artikel */}
        <header className="mb-10 border-b pb-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
            Future of Tech Juara Hackathon 2025 Ericsson & Qualcomm, Raih Hadiah
            Rp 90 Juta
          </h1>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <span className="font-bold text-blue-600 uppercase tracking-wide">
              kumparanTECH
            </span>
            <span>•</span>
            <time dateTime="2025-11-14">14 November 2025 19:05 WIB</time>
          </div>
        </header>

        {/* Konten Utama */}
        <article className="prose prose-lg prose-indigo mx-auto text-gray-800">
          {/* Gambar Utama (Placeholder) */}
          <figure className="mb-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm bg-gray-200">
              {/* Replace with actual image file at public/hackathon-winner.JPG */}
              <Image
                src="/hackathon-winner.JPG"
                alt="Para pemenang Hackathon 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
              Para pemenang Hackathon 2025 powered by Ericsson dan Qualcomm di
              FX Sudirman, Jakarta, Jumat (14/11).
            </figcaption>
          </figure>

          {/* Paragraf Pembuka */}
          <p className="lead text-xl font-medium mb-6">
            Tim <strong>Future of Tech</strong> berhasil keluar sebagai juara
            pertama dalam ajang Hackathon 2025, mengalahkan dua finalis lainnya,
            Maikroskop dan Tanikan. Berkat inovasinya, <strong>Minerva</strong>,
            tim ini berhak membawa pulang hadiah utama sebesar{" "}
            <strong>Rp 90 juta</strong>.
          </p>

          <p className="mb-6">
            Hackathon 2025 merupakan hasil kolaborasi antara{" "}
            <strong>Ericsson</strong> dan <strong>Qualcomm</strong>, bekerja
            sama dengan Kementerian Perindustrian (Kemenperin) serta Kementerian
            Komunikasi dan Digital (Komdigi). Kompetisi ini dirancang untuk
            menjaring talenta digital yang mampu menciptakan solusi nyata bagi
            industri di Indonesia.
          </p>

          {/* Section Inovasi Minerva */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Inovasi Minerva: Digital Twin
            </h3>
            <p className="text-blue-800 italic mb-4">
              "Kami membangun Minerva, AI Power Optimization Digital Twin dengan
              konektivitas 5G real-time untuk manufaktur cerdas, proaktif, dan
              berkelanjutan."
            </p>
            <p className="text-sm text-blue-700">
              — Perwakilan Tim Future of Tech
            </p>
          </div>

          <p className="mb-6">
            Inovasi Minerva hadir untuk menjawab masalah besar di sektor
            manufaktur Indonesia, di mana{" "}
            <strong>46% konsumsi energi nasional</strong> berasal dari sektor
            ini, namun banyak yang masih beroperasi secara manual dan tidak
            efisien.
          </p>

          <p className="mb-6">
            Tim ini mengklaim implementasi Minerva di sebuah pabrik manufaktur
            di Medan telah menunjukkan hasil nyata:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2 marker:text-blue-500">
            <li>
              Menurunkan <em>reject rate</em> dari{" "}
              <strong>12% menjadi 3%</strong>.
            </li>
            <li>
              Menekan konsumsi energi sebesar <strong>11%</strong>.
            </li>
            <li>
              Mengurangi emisi karbon hingga <strong>41%</strong>.
            </li>
          </ul>

          {/* Section Juara Lainnya */}
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Pemenang Lainnya
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded uppercase mr-2">
                  Juara 2
                </span>
                <h3 className="font-bold text-lg">Maikroskop</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Menawarkan solusi deteksi sel kanker yang mempercepat waktu
                diagnosis dari 10-14 hari menjadi{" "}
                <strong>kurang dari 1 menit</strong>.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3">
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded uppercase mr-2">
                  Juara 3
                </span>
                <h3 className="font-bold text-lg">Tanikan</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Mengembangkan sistem <strong>AIOT</strong> untuk memonitor kolam
                ikan bioflok guna mencegah kegagalan panen.
              </p>
            </div>
          </div>

          <hr className="my-10 border-gray-200" />

          {/* Dukungan & Quotes */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dukungan Industri dan Pemerintah
          </h2>
          <p className="mb-6">
            Kompetisi ini awalnya diikuti oleh 50 tim dan diseleksi hingga
            menjadi 30 tim sebelum mencapai babak final. Acara ini dihadiri oleh
            berbagai tokoh penting, termasuk:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-sm text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>
                <strong>Daniel Ode</strong> (President Director Ericsson
                Indonesia)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>
                <strong>Nies Purwati</strong> (Senior Director Government
                Affairs Qualcomm)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>
                <strong>Sidik Herman</strong> (Kepala Pusat Diklat SDM Industri
                Kemenperin)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>
                <strong>Aju Widya Sari</strong> (Direktur AI & Ekosistem
                Teknologi Baru Komdigi)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p>
                <strong>Daniel Blockert</strong> (Duta Besar Swedia untuk
                Indonesia)
              </p>
            </div>
          </div>

          <blockquote className="text-gray-600 italic border-l-4 border-gray-300 pl-4 py-2 my-6">
            "Pemerintah berkomitmen membangun ekosistem yang inklusif, aman, dan
            berkelanjutan. Masa depan kita tidak hanya milik mereka yang punya
            teknologi, tetapi mereka yang mau berbagi, berinovasi, dan
            berkolaborasi."
            <footer className="text-sm mt-2 font-bold not-italic text-gray-900">
              — Aju Widya Sari, Komdigi
            </footer>
          </blockquote>
        </article>

        {/* Footer Link */}
        <div className="mt-16 pt-6 border-t text-center text-sm text-gray-500">
          <p>
            Sumber:{" "}
            <a
              href="https://kumparan.com/kumparantech/future-of-tech-juara-hackathon-2025-ericsson-and-qualcomm-raih-hadiah-rp-90-juta-26F61okxRNS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              kumparanTECH
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
