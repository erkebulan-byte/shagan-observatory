"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Quote } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonialsData";
import { useLang } from "@/context/LangContext";

function getLocalized<T extends string>(
  item: T | undefined,
  fallback: T,
  alt: T | undefined,
  lang: string,
): T {
  if (lang === "EN" && alt) return alt;
  if (lang === "KZ" && item) return item;
  return fallback;
}

function getParagraphs(item: Testimonial, lang: string): string[] {
  if (lang === "EN" && item.paragraphs_en) return item.paragraphs_en;
  if (lang === "KZ" && item.paragraphs_kz) return item.paragraphs_kz;
  return item.paragraphs;
}

function getExcerpt(paragraphs: string[], maxLength = 220): string {
  const text = paragraphs.join(" ");
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
}

function TestimonialModal({
  item,
  onClose,
}: {
  item: Testimonial;
  onClose: () => void;
}) {
  const { t, lang } = useLang();
  const name = getLocalized(item.name_kz, item.name, item.name_en, lang);
  const degree = getLocalized(item.degree_kz, item.degree, item.degree_en, lang);
  const affiliation = getLocalized(
    item.affiliation_kz,
    item.affiliation,
    item.affiliation_en,
    lang,
  );
  const title = getLocalized(item.title_kz, item.title, item.title_en, lang);
  const paragraphs = getParagraphs(item, lang);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-[#F4F7FC] border-b border-[#E8EFF8] px-5 sm:px-6 pt-5 pb-4 flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#4A90E2]/40 flex-shrink-0 shadow-md">
            <Image
              src={item.avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="80px"
              unoptimized={item.avatar.endsWith(".jfif")}
            />
          </div>
          <div className="flex-1 min-w-0 pr-8">
            <h3 className="text-[#0F2C59] font-bold text-base sm:text-lg leading-tight">
              {name}
            </h3>
            <p className="text-[#4A90E2] font-medium text-sm mt-1">{degree}</p>
            <p className="text-[#6B7280] text-sm mt-0.5 leading-snug">{affiliation}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-[#E2EAF4] text-[#6B7280] hover:text-[#0F2C59] transition-colors"
            aria-label={t("testimonials_close")}
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-5 sm:px-6 py-5 sm:py-6">
          <h4 className="text-[#0F2C59] font-semibold text-base sm:text-lg mb-4 leading-snug">
            {title}
          </h4>
          <div className="flex flex-col gap-4 text-[#1E3E62] text-sm sm:text-base leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  item,
  onOpen,
}: {
  item: Testimonial;
  onOpen: () => void;
}) {
  const { t, lang } = useLang();
  const name = getLocalized(item.name_kz, item.name, item.name_en, lang);
  const degree = getLocalized(item.degree_kz, item.degree, item.degree_en, lang);
  const affiliation = getLocalized(
    item.affiliation_kz,
    item.affiliation,
    item.affiliation_en,
    lang,
  );
  const title = getLocalized(item.title_kz, item.title, item.title_en, lang);
  const paragraphs = getParagraphs(item, lang);
  const excerpt = getExcerpt(paragraphs);

  return (
    <article className="flex flex-col h-full bg-[#F4F7FC] border border-[#E2EAF4] rounded-2xl p-6 hover:border-[#4A90E2]/50 hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4 mb-5">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#4A90E2]/30 flex-shrink-0 shadow-sm">
          <Image
            src={item.avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="96px"
            unoptimized={item.avatar.endsWith(".jfif")}
          />
        </div>
        <div className="min-w-0 pt-1">
          <h3 className="text-[#0F2C59] font-bold text-base sm:text-lg leading-tight">
            {name}
          </h3>
          <p className="text-[#4A90E2] text-xs sm:text-sm font-medium mt-1 leading-snug">
            {degree}
          </p>
          <p className="text-[#6B7280] text-xs sm:text-sm mt-1 leading-snug">
            {affiliation}
          </p>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex gap-2 mb-3">
          <Quote size={18} className="text-[#4A90E2]/60 flex-shrink-0 mt-0.5" />
          <p className="text-[#0F2C59] font-semibold text-sm sm:text-base leading-snug">
            {title}
          </p>
        </div>

        <p className="text-[#1E3E62] text-sm leading-relaxed flex-1">
          {excerpt}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-5 self-start text-[#4A90E2] hover:text-[#0F2C59] font-semibold text-sm transition-colors"
        >
          {t("testimonials_read_more")}
        </button>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const { t } = useLang();

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("testimonials_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-10">
          {t("testimonials_heading")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
              onOpen={() => setSelected(item)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <TestimonialModal item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
