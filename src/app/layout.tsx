import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shagan Observatory | Радиоэкологический мониторинг бассейна реки Шаган",
  description:
    "Научный проект по радиоэкологическому мониторингу бассейна реки Шаган в зоне влияния Семипалатинского испытательного полигона. Исследование трития, радионуклидов, гидрогеохимии и дозовых нагрузок населения. Проект АР22783154, Республика Казахстан.",
  metadataBase: new URL("https://observatory-shagan.asia"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Shagan Observatory", "Observatory Shagan", "Обсерватория Шаган", "Шаган обсерватория",
    "Shagan River", "река Шаган", "бассейн реки Шаган",
    "радиоэкология", "радиоэкология Казахстан", "radiation monitoring",
    "радиационный мониторинг", "радиоэкологический мониторинг", "экологический мониторинг",
    "environmental monitoring", "tritium monitoring", "мониторинг трития", "тритий", "tritium",
    "tritium in water", "загрязнение тритием",
    "radionuclides", "радионуклиды", "radionuclide migration", "миграция радионуклидов",
    "hydrogeochemistry", "гидрогеохимия", "groundwater contamination", "подземные воды",
    "surface water monitoring", "поверхностные воды",
    "radiation safety", "радиационная безопасность", "environmental radioactivity",
    "радиоактивное загрязнение", "radiation ecology", "радиационная экология",
    "dose assessment", "дозовые нагрузки населения", "public radiation exposure",
    "water quality monitoring", "качество воды", "nuclear environmental research",
    "научные исследования Казахстан", "Kazakhstan scientific research",
    "Semipalatinsk Test Site", "Semipalatinsk Nuclear Test Site",
    "Семипалатинский испытательный полигон", "Семипалатинский полигон", "СИП",
    "ядерные испытания", "nuclear legacy Kazakhstan", "ядерное наследие Казахстана",
    "National Nuclear Center Kazakhstan", "Национальный ядерный центр Казахстана",
    "Alikhan Bokeikhan University", "Парк ядерных технологий",
    "Курчатов Казахстан", "Kurchatov Kazakhstan", "область Абай", "Abai Region",
    "экологическая безопасность", "радиационный контроль воды",
    "GIS monitoring", "гидрогеологическое моделирование", "FEFLOW", "MODFLOW",
    "Quantulus 1220", "радиационный риск", "радиоактивность в воде",
    "научный проект АР22783154", "AP22783154",
    "Shagan River Basin", "Radioecological Monitoring", "Kazakhstan Radioecology",
  ],
  authors: [{ name: "Байгазинов Жанат Абылканович", url: "https://observatory-shagan.asia" }],
  creator: "Shagan Observatory Research Team",
  publisher: "Alikhan Bokeikhan University",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shagan Observatory | Радиоэкологический мониторинг бассейна реки Шаган",
    description:
      "Научный проект по радиоэкологическому мониторингу бассейна реки Шаган в зоне влияния Семипалатинского испытательного полигона. Проект АР22783154, Республика Казахстан.",
    url: "https://observatory-shagan.asia",
    siteName: "Shagan Observatory",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shagan Observatory — Радиоэкологический мониторинг реки Шаган",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shagan Observatory | Радиоэкологический мониторинг бассейна реки Шаган",
    description:
      "Научный проект по радиоэкологическому мониторингу бассейна реки Шаган. Проект АР22783154, Республика Казахстан.",
    images: ["/og-image.jpg"],
  },
  category: "science",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1E3E62]">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
