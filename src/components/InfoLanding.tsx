"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useLang } from "@/context/LangContext";
import ImageZoomLightbox from "@/components/ImageZoomLightbox";
import LabProcessInfographic from "@/components/LabProcessInfographic";
import ProjectUniquenessInfographic from "@/components/ProjectUniquenessInfographic";
import MainFunctionsInfographic from "@/components/MainFunctionsInfographic";
import InternationalSignificanceInfographic from "@/components/InternationalSignificanceInfographic";
import InfrastructureInfographic from "@/components/InfrastructureInfographic";
import styles from "./InfoLanding.module.css";

type PlanImage = {
  src: string;
  width: number;
  height: number;
  altKey: "info_plan1_image_alt";
  unoptimized?: boolean;
};

type PlanSectionConfig = {
  id: string;
  index: string;
  gridSpan: "full" | "half";
  titleKey:
    | "info_plan1_title"
    | "info_plan2_title"
    | "info_plan3_title"
    | "info_plan4_title"
    | "info_plan5_title";
  descKey:
    | "info_plan1_desc"
    | "info_plan2_desc"
    | "info_plan3_desc"
    | "info_plan4_desc"
    | "info_plan5_desc";
  contentComponent?:
    | "infrastructure"
    | "labProcess"
    | "projectUniqueness"
    | "mainFunctions"
    | "internationalSignificance";
  image?: PlanImage;
};

const planSections: PlanSectionConfig[] = [
  {
    id: "infrastructure",
    index: "01",
    gridSpan: "full",
    titleKey: "info_plan1_title",
    descKey: "info_plan1_desc",
    contentComponent: "infrastructure",
  },
  {
    id: "uniqueness",
    index: "02",
    gridSpan: "full",
    titleKey: "info_plan2_title",
    descKey: "info_plan2_desc",
    contentComponent: "projectUniqueness",
  },
  {
    id: "functions",
    index: "03",
    gridSpan: "full",
    titleKey: "info_plan3_title",
    descKey: "info_plan3_desc",
    contentComponent: "mainFunctions",
  },
  {
    id: "significance",
    index: "04",
    gridSpan: "full",
    titleKey: "info_plan4_title",
    descKey: "info_plan4_desc",
    contentComponent: "internationalSignificance",
  },
  {
    id: "lab-process",
    index: "05",
    gridSpan: "full",
    titleKey: "info_plan5_title",
    descKey: "info_plan5_desc",
    contentComponent: "labProcess",
  },
];

function useSectionInView() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function PlanSection({
  section,
  onImageZoom,
}: {
  section: PlanSectionConfig;
  onImageZoom: (
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    anchor: HTMLElement | null,
  ) => void;
}) {
  const { t } = useLang();
  const { ref, inView } = useSectionInView();

  const paragraphs = t(section.descKey)
    .trim()
    .split("\n\n")
    .filter(Boolean);

  return (
    <article
      ref={ref}
      id={section.id}
      className={[
        styles.planCard,
        section.gridSpan === "full" ? styles.spanFull : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <header className={styles.planHeader}>
        <span className={styles.planIndex}>{section.index}</span>
        <h2 className={styles.planTitle}>{t(section.titleKey)}</h2>
        {paragraphs.length > 0 && (
          <div className={styles.planDesc}>
            {paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.planParagraph}>
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </header>

      <div className={styles.planBody}>
        {section.image && (
          <div>
            <button
              type="button"
              onClick={() =>
                onImageZoom(
                  {
                    src: section.image!.src,
                    alt: t(section.image!.altKey),
                    width: section.image!.width,
                    height: section.image!.height,
                  },
                  ref.current,
                )
              }
              className="group relative w-full rounded-xl overflow-hidden border border-[#E2EAF4] bg-white cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
              aria-label={t("info_image_zoom")}
            >
              <Image
                src={section.image.src}
                alt={t(section.image.altKey)}
                width={section.image.width}
                height={section.image.height}
                unoptimized={section.image.unoptimized}
                className="w-full h-auto"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#0F2C59] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <ZoomIn size={14} />
                  {t("info_image_zoom")}
                </span>
              </div>
            </button>
            <p className="mt-2 text-[#6B7280] text-xs text-center">
              {t("info_image_zoom_hint")}
            </p>
          </div>
        )}

        {section.contentComponent === "infrastructure" && (
          <InfrastructureInfographic isActive={inView} />
        )}

        {section.contentComponent === "projectUniqueness" && (
          <ProjectUniquenessInfographic isActive={inView} />
        )}

        {section.contentComponent === "mainFunctions" && (
          <MainFunctionsInfographic isActive={inView} />
        )}

        {section.contentComponent === "internationalSignificance" && (
          <InternationalSignificanceInfographic isActive={inView} />
        )}

        {section.contentComponent === "labProcess" && <LabProcessInfographic />}
      </div>
    </article>
  );
}

export default function InfoLanding() {
  const { t } = useLang();
  const scrollAnchorRef = useRef<HTMLElement | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);

  const zoomLabels = {
    close: t("info_image_close"),
    back: t("info_image_back"),
    returnOverview: t("info_image_return_overview"),
    zoomIn: t("info_image_zoom_in"),
    zoomOut: t("info_image_zoom_out"),
    reset: t("info_image_zoom_reset"),
    hint: t("info_image_zoom_controls"),
  };

  const handleImageZoom = (
    image: {
      src: string;
      alt: string;
      width: number;
      height: number;
    },
    anchor: HTMLElement | null,
  ) => {
    scrollAnchorRef.current = anchor;
    setLightboxImage(image);
  };

  return (
    <>
      <section className="relative text-white py-20 sm:py-28 bg-[#4A90E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl">
            {t("info_hero_title")}
          </h1>
          <Link
            href="/"
            className="inline-flex mt-6 text-base sm:text-lg font-semibold text-[#63B3ED] hover:text-white transition-colors"
          >
            ← {t("info_back_home")}
          </Link>
        </div>
      </section>

      <section className={styles.plansSection} aria-label={t("info_hero_title")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={styles.plansGrid}>
            {planSections.map((section) => (
              <PlanSection
                key={section.id}
                section={section}
                onImageZoom={handleImageZoom}
              />
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <ImageZoomLightbox
          key={lightboxImage.src}
          image={lightboxImage}
          labels={zoomLabels}
          restoreScrollRef={scrollAnchorRef}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
