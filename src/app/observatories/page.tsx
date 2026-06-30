import type { Metadata } from "next";
import Header from "@/components/Header";
import ObservatoriesLanding from "@/components/ObservatoriesLanding";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Радиоэкологические обсерватории | Shagan Observatory",
  description:
    "Обсерватория «Шаган» станет пятой международной радиоэкологической обсерваторией в сети ALLIANCE Radioecological Observatories.",
};

export default function ObservatoriesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ObservatoriesLanding />
      </main>
      <Footer />
    </>
  );
}
