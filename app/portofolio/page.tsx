import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Action } from "@/components/ui/action";

export const metadata = {
  title: "Future of Tech — Juara Hackathon 2025 Ericsson & Qualcomm",
  description:
    "Tim Future of Tech menjuarai Hackathon 2025 dengan inovasi MINERVA.",
};

export default function HackathonWinnerPage() {
  return (
    <div className="bg-surface">
      <Navbar />

      <main>
        {/* Header */}
        <div className="border-b border-line bg-surface-alt">
          <div className="mx-auto w-full max-w-4xl px-6 py-16 md:py-24 lg:px-10">
            <p className="type-eyebrow text-accent">
              Recognition — 14 November 2025
            </p>
            <h1 className="type-display rule-accent mt-6">
              Future of Tech juara Hackathon 2025 Ericsson &amp; Qualcomm
            </h1>
            <p className="type-lead mt-10 text-ink-muted">
              Tim Future of Tech keluar sebagai juara pertama Hackathon 2025
              berkat inovasinya, MINERVA, dan membawa pulang hadiah utama
              sebesar Rp 90 juta.
            </p>
          </div>
        </div>

        <article className="mx-auto w-full max-w-4xl px-6 py-16 md:py-20 lg:px-10">
          <figure>
            <div className="relative aspect-video w-full overflow-hidden bg-surface-sunken">
              <Image
                src="/hackathon-winner.JPG"
                alt="Para pemenang Hackathon 2025"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
            <figcaption className="mt-4 text-sm text-ink-subtle">
              Para pemenang Hackathon 2025 powered by Ericsson dan Qualcomm di
              FX Sudirman, Jakarta, Jumat (14/11).
            </figcaption>
          </figure>

          <div className="mt-14 space-y-6 leading-relaxed text-ink">
            <p>
              Hackathon 2025 merupakan hasil kolaborasi antara Ericsson dan
              Qualcomm, bekerja sama dengan Kementerian Perindustrian
              (Kemenperin) serta Kementerian Komunikasi dan Digital (Komdigi).
              Kompetisi ini dirancang untuk menjaring talenta digital yang mampu
              menciptakan solusi nyata bagi industri di Indonesia. Kompetisi
              diikuti 50 tim dan diseleksi menjadi 30 tim sebelum babak final.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote className="my-14 border-l-2 border-accent pl-8">
            <p className="type-title font-light leading-snug text-ink-strong">
              &ldquo;Kami membangun Minerva, AI Power Optimization Digital Twin
              dengan konektivitas 5G real-time untuk manufaktur cerdas,
              proaktif, dan berkelanjutan.&rdquo;
            </p>
            <footer className="type-eyebrow mt-6 text-ink-subtle">
              Perwakilan Tim Future of Tech
            </footer>
          </blockquote>

          <div className="space-y-6 leading-relaxed text-ink">
            <p>
              Inovasi MINERVA hadir untuk menjawab masalah besar di sektor
              manufaktur Indonesia, di mana 46% konsumsi energi nasional berasal
              dari sektor ini, namun banyak yang masih beroperasi secara manual
              dan tidak efisien.
            </p>
          </div>

          {/* Claimed results — labelled as team claims, not verified figures. */}
          <section className="mt-14">
            <h2 className="type-title font-light">
              Hasil yang diklaim dari implementasi di Medan
            </h2>
            <dl className="mt-8 border-t border-line">
              {[
                ["Reject rate", "12% → 3%"],
                ["Konsumsi energi", "−11%"],
                ["Emisi karbon", "−41%"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_auto] gap-6 border-b border-line py-5"
                >
                  <dt className="text-ink-muted">{label}</dt>
                  <dd className="font-medium text-ink-strong">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-ink-subtle">
              Angka di atas merupakan klaim tim sebagaimana dilaporkan pada saat
              kompetisi, dan belum diverifikasi secara independen.
            </p>
          </section>

          {/* Other winners */}
          <section className="mt-16">
            <h2 className="type-title font-light">Pemenang lainnya</h2>
            <div className="mt-8 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
              <div className="bg-surface p-8">
                <p className="type-eyebrow text-ink-subtle">Juara 2</p>
                <h3 className="mt-4 text-lg">Maikroskop</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Solusi deteksi sel kanker yang mempercepat waktu diagnosis
                  dari 10–14 hari menjadi kurang dari 1 menit.
                </p>
              </div>
              <div className="bg-surface p-8">
                <p className="type-eyebrow text-ink-subtle">Juara 3</p>
                <h3 className="mt-4 text-lg">Tanikan</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  Sistem AIoT untuk memonitor kolam ikan bioflok guna mencegah
                  kegagalan panen.
                </p>
              </div>
            </div>
          </section>

          {/* Attendees */}
          <section className="mt-16">
            <h2 className="type-title font-light">
              Dukungan industri dan pemerintah
            </h2>
            <dl className="mt-8 border-t border-line">
              {[
                ["Daniel Ode", "President Director, Ericsson Indonesia"],
                ["Nies Purwati", "Senior Director Government Affairs, Qualcomm"],
                ["Sidik Herman", "Kepala Pusat Diklat SDM Industri, Kemenperin"],
                ["Aju Widya Sari", "Direktur AI & Ekosistem Teknologi Baru, Komdigi"],
                ["Daniel Blockert", "Duta Besar Swedia untuk Indonesia"],
              ].map(([name, role]) => (
                <div
                  key={name}
                  className="grid grid-cols-1 gap-1 border-b border-line py-5 sm:grid-cols-[14rem_1fr] sm:gap-6"
                >
                  <dt className="font-medium text-ink-strong">{name}</dt>
                  <dd className="text-sm text-ink-muted">{role}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-16 border-t border-line pt-8">
            <p className="text-sm text-ink-subtle">
              Sumber:{" "}
              <a
                href="https://kumparan.com/kumparantech/future-of-tech-juara-hackathon-2025-ericsson-and-qualcomm-raih-hadiah-rp-90-juta-26F61okxRNS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline-offset-4 hover:underline"
              >
                kumparanTECH
              </a>
            </p>

            <div className="mt-10">
              <Action href="/#portfolio" variant="outline" size="sm">
                Back to proof of technology
              </Action>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
