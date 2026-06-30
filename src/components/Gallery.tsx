"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images, ChevronUp } from "lucide-react";
import { galleryImages, GalleryImage } from "@/data/mockData";
import { useLang } from "@/context/LangContext";

function getImageText(
  img: GalleryImage,
  lang: string,
  field: "alt" | "caption",
): string {
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";

  if (field === "alt") {
    return isEN && img.alt_en ? img.alt_en : isKZ && img.alt_kz ? img.alt_kz : img.alt;
  }

  return isEN && img.caption_en
    ? img.caption_en
    : isKZ && img.caption_kz
      ? img.caption_kz
      : img.caption;
}

function GalleryLightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const { t, lang } = useLang();
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  useEffect(() => {
    const container = thumbsRef.current;
    const active = container?.querySelector<HTMLElement>(`[data-index="${current}"]`);
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  const currentImage = images[current];

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/92 flex flex-col"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={getImageText(currentImage, lang, "alt")}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 shrink-0">
        <p className="text-white/60 text-sm font-medium">
          {current + 1} / {images.length}
        </p>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label={t("gallery_close")}
        >
          <X size={22} />
        </button>
      </div>

      {/* Main viewer */}
      <div
        className="relative flex-1 flex items-center justify-center min-h-0 px-3 sm:px-12"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full max-w-5xl max-h-[calc(100vh-220px)]">
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={getImageText(currentImage, lang, "alt")}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
              aria-label={t("gallery_prev")}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
              aria-label={t("gallery_next")}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      <p className="text-white/75 text-sm sm:text-base text-center px-6 py-3 max-w-3xl mx-auto shrink-0">
        {getImageText(currentImage, lang, "caption")}
      </p>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          ref={thumbsRef}
          className="shrink-0 flex gap-2 px-4 pb-4 overflow-x-auto scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, idx) => (
            <button
              key={img.id}
              data-index={idx}
              onClick={() => setCurrent(idx)}
              className={`relative flex-shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all duration-150 ${
                idx === current
                  ? "border-[#4A90E2] opacity-100 scale-105"
                  : "border-white/20 opacity-50 hover:opacity-90 hover:border-white/50"
              }`}
              aria-label={`${idx + 1}. ${getImageText(img, lang, "alt")}`}
              aria-current={idx === current ? "true" : undefined}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, lang } = useLang();

  const previewImages = galleryImages.slice(0, 6);

  return (
    <>
    <section id="gallery" className="py-20 bg-[#F4F7FC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("gallery_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-2">
          {t("gallery_heading")}
        </h2>
        <p className="text-[#6B7280] text-sm">
          {t("gallery_desc")}
        </p>
      </div>

      {!isExpanded ? (
        <div className="w-full">
          <div className="grid grid-cols-6 gap-1 w-full">
            {previewImages.map((img) => (
              <div
                key={img.id}
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="16vw"
                />
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              aria-expanded={false}
              className="inline-flex items-center gap-2.5 bg-[#4A90E2] hover:bg-[#0F2C59] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Images size={20} />
              {t("gallery_tab")} · {t("gallery_view")}
              <span className="text-white/80 font-normal">
                · {galleryImages.length} {t("gallery_photos_count")}
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 mb-4">
            <p className="text-[#0F2C59] font-semibold text-sm sm:text-base">
              {galleryImages.length} {t("gallery_photos_count")}
            </p>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-expanded={true}
              className="inline-flex items-center gap-2 text-[#4A90E2] hover:text-[#0F2C59] font-semibold text-sm transition-colors duration-200"
            >
              <ChevronUp size={18} />
              {t("gallery_hide")}
            </button>
          </div>

          <div className="grid grid-cols-6 gap-1 w-full">
            {galleryImages.map((img, idx) => (
              <button
                key={img.id}
                type="button"
                className="relative aspect-square overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4A90E2]"
                onClick={() => setLightboxIndex(idx)}
                aria-label={`${t("gallery_open")}: ${getImageText(img, lang, "alt")}`}
              >
                <Image
                  src={img.src}
                  alt={getImageText(img, lang, "alt")}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          key={lightboxIndex}
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
