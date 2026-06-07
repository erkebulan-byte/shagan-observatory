"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages, GalleryImage } from "@/data/mockData";
import { useLang } from "@/context/LangContext";

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const { lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <X size={22} />
      </button>

      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
        {current + 1} / {images.length}
      </p>

      <div
        className="relative w-full max-w-4xl max-h-[70vh] mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 900px"
          priority
        />
      </div>

      <p className="text-white/70 text-sm mt-4 px-6 text-center">
        {isEN && images[current].caption_en ? images[current].caption_en : isKZ && images[current].caption_kz ? images[current].caption_kz : images[current].caption}
      </p>

      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-3 pointer-events-none">
        <button
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Предыдущее фото"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="pointer-events-auto p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Следующее фото"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-3 overflow-x-auto max-w-full scrollbar-none">
        {images.map((img, idx) => (
          <button
            key={img.id}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
            className={`relative flex-shrink-0 w-9 h-6 sm:w-12 sm:h-8 rounded overflow-hidden border-2 transition-all ${
              idx === current
                ? "border-[#4A90E2] opacity-100"
                : "border-transparent opacity-50 hover:opacity-75"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="50px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";

  return (
    <section id="gallery" className="py-20 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("gallery_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-2">
          {t("gallery_heading")}
        </h2>
        <p className="text-[#6B7280] text-sm mb-10">
          {t("gallery_desc")}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((img, idx) => (
            <button
              key={img.id}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
              onClick={() => setLightboxIndex(idx)}
              aria-label={`${t("gallery_open")}: ${isEN && img.caption_en ? img.caption_en : isKZ && img.caption_kz ? img.caption_kz : img.caption}`}
            >
              <Image
                src={img.src}
                alt={isEN && img.alt_en ? img.alt_en : isKZ && img.alt_kz ? img.alt_kz : img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#0F2C59]/0 group-hover:bg-[#0F2C59]/40 transition-colors duration-300 flex items-end p-3">
                <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left leading-snug">
                  {isEN && img.caption_en ? img.caption_en : isKZ && img.caption_kz ? img.caption_kz : img.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
