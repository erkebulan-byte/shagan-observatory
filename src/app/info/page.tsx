import type { Metadata } from "next";
import Header from "@/components/Header";
import InfoLanding from "@/components/InfoLanding";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Стратегические планы развития проекта на период 2026–2030 года | Shagan Observatory",
  description: "Стратегические планы развития радиоэкологической обсерватории «Шаган» на период 2026–2030 года.",
};

export default function InfoPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <InfoLanding />
      </main>
      <Footer />
    </>
  );
}
