"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Calendar, X, ChevronRight, ChevronLeft, ZoomIn, Newspaper } from "lucide-react";
import { newsData, NewsItem, NewsHighlight } from "@/data/mockData";
import { useLang } from "@/context/LangContext";
import type { Lang } from "@/translations";

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[#0F2C59]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}

function getHighlightContent(highlight: NewsHighlight, lang: Lang) {
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";

  return {
    heading:
      isEN && highlight.heading_en
        ? highlight.heading_en
        : isKZ && highlight.heading_kz
          ? highlight.heading_kz
          : highlight.heading,
    body:
      isEN && highlight.body_en
        ? highlight.body_en
        : isKZ && highlight.body_kz
          ? highlight.body_kz
          : highlight.body,
    figureAlt:
      isEN && highlight.figure.alt_en
        ? highlight.figure.alt_en
        : isKZ && highlight.figure.alt_kz
          ? highlight.figure.alt_kz
          : highlight.figure.alt,
    figureCaption:
      isEN && highlight.figure.caption_en
        ? highlight.figure.caption_en
        : isKZ && highlight.figure.caption_kz
          ? highlight.figure.caption_kz
          : highlight.figure.caption,
  };
}

function NewsHighlightBlock({
  highlight,
  lang,
  onImageClick,
}: {
  highlight: NewsHighlight;
  lang: Lang;
  onImageClick?: () => void;
}) {
  const { heading, body, figureAlt, figureCaption } = getHighlightContent(
    highlight,
    lang,
  );

  return (
    <div className="space-y-4 pt-1">
      <h4 className="text-[#0F2C59] font-bold text-base sm:text-lg leading-snug">
        {heading}
      </h4>

      {body
        .split("\n\n")
        .filter(Boolean)
        .map((paragraph, index) => (
          <p key={index} className="whitespace-pre-line">
            {renderInlineMarkdown(paragraph)}
          </p>
        ))}

      <figure className="mx-auto w-full sm:w-[80%] md:w-[70%]">
        <button
          type="button"
          onClick={onImageClick}
          className="group relative w-full overflow-hidden rounded-[10px] shadow-[0_8px_24px_rgba(15,44,89,0.12)] cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          aria-label={figureAlt}
        >
          <Image
            src={highlight.figure.src}
            alt={figureAlt}
            width={highlight.figure.width}
            height={highlight.figure.height}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 70vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
            <ZoomIn
              size={28}
              className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg"
            />
          </div>
        </button>
        <figcaption className="mt-3 text-center text-[#0F2C59] text-sm sm:text-base font-semibold leading-snug">
          {renderInlineMarkdown(figureCaption)}
        </figcaption>
      </figure>
    </div>
  );
}

/* ─── Photo Lightbox ─────────────────────────────────────────────────────── */
function PhotoLightbox({
  images,
  startIndex,
  onClose,
  lockBody = false,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
  lockBody?: boolean;
}) {
  const [current, setCurrent] = useState(startIndex);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!lockBody) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lockBody]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next, onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Закрыть"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium z-10">
        {current + 1} / {images.length}
      </div>

      {/* Main photo */}
      <div
        className="relative w-full max-w-4xl max-h-[85vh] mx-2 sm:mx-10 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[current]}
          alt={`Фото ${current + 1}`}
          fill
          className="object-contain"
          sizes="90vw"
          priority
        />
      </div>

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Следующее фото"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      {/* Thumbnails strip */}
      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-3 sm:px-4 overflow-x-auto max-w-full scrollbar-none"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative flex-shrink-0 w-10 h-7 sm:w-14 sm:h-10 rounded-md overflow-hidden border-2 transition-all duration-150 ${
                i === current
                  ? "border-white scale-110"
                  : "border-white/30 hover:border-white/70 opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`Миниатюра ${i + 1}`} fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── News Modal ─────────────────────────────────────────────────────────── */
function NewsModal({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  const { t, lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";
  const title = isEN && item.title_en ? item.title_en : isKZ && item.title_kz ? item.title_kz : item.title;
  const date = isEN && item.date_en ? item.date_en : isKZ && item.date_kz ? item.date_kz : item.date;
  const fullText = isEN && item.fullText_en ? item.fullText_en : isKZ && item.fullText_kz ? item.fullText_kz : item.fullText;
  const paragraphs = fullText.split("\n\n").filter(Boolean);
  const highlightInsertAt = item.highlight?.insertAfterParagraph ?? -1;
  const showTopGallery =
    item.galleryImages.length > 0 && !item.highlight?.figure;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [highlightLightbox, setHighlightLightbox] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null || highlightLightbox) return;
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, lightboxIndex, highlightLightbox]);

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-start justify-between p-6 pb-4 border-b border-[#E8EFF8]">
            <div className="flex items-center gap-2 text-[#6B7280] text-sm">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#F4F7FC] text-[#6B7280] hover:text-[#0F2C59] transition-colors"
              aria-label={t("news_close")}
            >
              <X size={18} />
            </button>
          </div>

          {/* Title */}
          <div className="px-6 pt-4 pb-3">
            <h3 className="text-[#0F2C59] font-bold text-lg sm:text-xl leading-snug">
              {title}
            </h3>
          </div>

          {/* Gallery — click to open lightbox */}
          {showTopGallery && (
            <div className="px-6 pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {item.galleryImages.map((src, idx) => (
                  <button
                    key={idx}
                    onClick={() => setLightboxIndex(idx)}
                    className="relative aspect-video rounded-xl overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                    aria-label={`Открыть фото ${idx + 1}`}
                  >
                    <Image
                      src={src}
                      alt={`Фото ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="280px"
                    />
                    {/* Zoom icon overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn
                        size={24}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Full text */}
          <div className="px-6 pb-7">
            <div className="text-[#1E3E62] text-sm sm:text-base leading-relaxed space-y-4">
              {paragraphs.map((para, i) => (
                <div key={i} className="space-y-4">
                  <p className="whitespace-pre-line">{renderInlineMarkdown(para)}</p>
                  {item.highlight && i === highlightInsertAt && (
                    <NewsHighlightBlock
                      highlight={item.highlight}
                      lang={lang}
                      onImageClick={() => setHighlightLightbox(true)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox rendered above modal */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          images={item.galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {highlightLightbox && item.highlight?.figure && (
        <PhotoLightbox
          images={[item.highlight.figure.src]}
          startIndex={0}
          onClose={() => setHighlightLightbox(false)}
        />
      )}
    </>
  );
}

/* ─── News Card ──────────────────────────────────────────────────────────── */
function NewsCard({ item, onOpen }: { item: NewsItem; onOpen: () => void }) {
  const { t, lang } = useLang();
  const isKZ = lang === "KZ";
  const isEN = lang === "EN";
  const title = isEN && item.title_en ? item.title_en : isKZ && item.title_kz ? item.title_kz : item.title;
  const date = isEN && item.date_en ? item.date_en : isKZ && item.date_kz ? item.date_kz : item.date;
  const preview = isEN && item.preview_en ? item.preview_en : isKZ && item.preview_kz ? item.preview_kz : item.preview;

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <article className="bg-[#F4F7FC] border border-[#E2EAF4] rounded-2xl p-6 flex flex-col gap-4 h-full hover:border-[#4A90E2]/50 transition-colors duration-200">
        {/* Date */}
        <div className="flex items-center gap-2 text-[#6B7280] text-xs font-medium">
          <Calendar size={13} />
          <span>{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-[#0F2C59] font-bold text-base leading-snug">
          {title}
        </h3>

        {/* Preview text */}
        <p className="text-[#6B7280] text-sm leading-relaxed flex-1">
          {preview}
        </p>

        {/* Preview images — hover to zoom, click to open lightbox */}
        {item.previewImages.length > 0 && (
          <div className="grid grid-cols-2 gap-2">
            {item.previewImages.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setLightboxIndex(idx)}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                aria-label={`Открыть фото ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`Превью ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={20}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Button */}
        <button
          onClick={onOpen}
          className="self-start inline-flex items-center gap-1.5 text-[#4A90E2] hover:text-[#0F2C59] font-semibold text-sm transition-colors duration-200 group"
        >
          {t("news_more")}
          <ChevronRight
            size={15}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </article>

      {/* Lightbox for preview images */}
      {lightboxIndex !== null && (
        <PhotoLightbox
          images={item.previewImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          lockBody
        />
      )}
    </>
  );
}

/* ─── Placeholder Card ───────────────────────────────────────────────────── */
function NewsPlaceholderCard() {
  const { t } = useLang();

  return (
    <article
      aria-hidden="true"
      className="bg-[#F4F7FC] border border-dashed border-[#C5D5E8] rounded-2xl p-6 flex flex-col gap-4 h-full"
    >
      <div className="flex items-center gap-2 text-[#9CA3AF] text-xs font-medium">
        <Newspaper size={13} />
        <span>{t("news_label")}</span>
      </div>

      <h3 className="text-[#6B7280] font-bold text-base leading-snug">
        {t("news_placeholder_title")}
      </h3>

      <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1">
        {t("news_placeholder_text")}
      </p>

      <div className="grid grid-cols-2 gap-2">
        {[0, 1].map((slot) => (
          <div
            key={slot}
            className="aspect-video rounded-lg border border-dashed border-[#D1DCE8] bg-[#EAF0F8]/60"
          />
        ))}
      </div>

      <div className="self-start h-5 w-24 rounded-md bg-[#E2EAF4]/80" />
    </article>
  );
}

const NEWS_GRID_COLUMNS = 2;

/* ─── News Section ───────────────────────────────────────────────────────── */
export default function News() {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const { t } = useLang();

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("news_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-10">
          {t("news_heading")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              onOpen={() => setSelectedNews(item)}
            />
          ))}
          {Array.from({
            length: (NEWS_GRID_COLUMNS - (newsData.length % NEWS_GRID_COLUMNS)) % NEWS_GRID_COLUMNS,
          }).map((_, index) => (
            <NewsPlaceholderCard key={`placeholder-${index}`} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <NewsModal
          item={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </section>
  );
}
