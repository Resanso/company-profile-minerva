import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UseCase2Section } from "@/components/UseCase2Section";

export const metadata = {
  title: "Project IntegrateX — Future Tech MINERVA",
  description:
    "5G-enabled forklift safety monitoring with AI camera and geofencing, enabled by Ericsson Private 5G under the Komdigi × Garuda Spark IntegrateX program.",
};

export default function IntegrateXPage() {
  return (
    <div className="bg-surface">
      <Navbar />

      <main>
        <UseCase2Section />
      </main>

      <Footer />
    </div>
  );
}
