"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "75vh" }}
    >
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
        alt="Степной ландшафт — бассейн реки Шаган"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
        {/* Main Heading */}
        <h1 className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl leading-tight">
          {t("hero_title")}
          <br className="hidden sm:block" />
          <span className="text-[#63B3ED]"> {t("hero_subtitle")}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/75 text-sm sm:text-base max-w-2xl leading-relaxed">
          {t("hero_desc")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2 bg-[#4A90E2] hover:bg-[#63B3ED] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
          >
            {t("hero_cta_program")}
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-colors duration-200 text-sm"
          >
            {t("hero_cta_gallery")}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#program"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Прокрутить вниз"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
