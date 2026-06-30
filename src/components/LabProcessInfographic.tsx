"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLang } from "@/context/LangContext";
import ImageZoomLightbox from "@/components/ImageZoomLightbox";
import { getStagePhotos, labProcessStages } from "@/data/labProcessData";
import { labStageIcons } from "@/data/labProcessIcons";
import styles from "./LabProcessInfographic.module.css";

const GALLERY_IMAGE_SIZE = 800;

function StageChevronShape({
  variant,
  isActive,
  isLast,
}: {
  variant: "first" | "middle";
  isActive: boolean;
  isLast: boolean;
}) {
  const path =
    variant === "first"
      ? "M1,1 H103 L119,48 L103,95 H1 Z"
      : "M1,1 H103 L119,48 L103,95 H1 L17,48 Z";

  return (
    <svg
      className={styles.stageShape}
      viewBox="0 0 120 96"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={path}
        className={styles.stageShapePath}
        data-active={isActive ? "true" : "false"}
        data-last={isLast ? "true" : "false"}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function LabProcessInfographic() {
  const { t } = useLang();
  const [activeStage, setActiveStage] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [pulseIndex, setPulseIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const currentStage = labProcessStages[activeStage];
  const photos = getStagePhotos(currentStage);
  const stageLabel = t(currentStage.labelKey);
  const currentPhoto = photos[photoIndex] ?? photos[0];
  const currentAlt = `${stageLabel} — ${t("lab_process_photo_alt")} ${photoIndex + 1}`;

  useEffect(() => {
    const strip = thumbStripRef.current;
    const activeThumb = strip?.querySelector<HTMLElement>(`[data-index="${photoIndex}"]`);
    activeThumb?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [photoIndex, activeStage]);

  const goPrev = useCallback(() => {
    setPhotoIndex((index) => (index - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const goNext = useCallback(() => {
    setPhotoIndex((index) => (index + 1) % photos.length);
  }, [photos.length]);

  const handleStageClick = useCallback((index: number) => {
    setActiveStage(index);
    setPhotoIndex(0);
    setPulseIndex(index);
    window.setTimeout(() => setPulseIndex(null), 450);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 48) {
      if (delta > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  const openLightbox = useCallback(() => {
    if (!currentPhoto) return;
    setLightboxImage({
      src: currentPhoto,
      alt: currentAlt,
      width: GALLERY_IMAGE_SIZE,
      height: GALLERY_IMAGE_SIZE,
    });
  }, [currentAlt, currentPhoto]);

  const zoomLabels = {
    close: t("info_image_close"),
    back: t("info_image_back"),
    returnOverview: t("info_image_return_overview"),
    zoomIn: t("info_image_zoom_in"),
    zoomOut: t("info_image_zoom_out"),
    reset: t("info_image_zoom_reset"),
    hint: t("info_image_zoom_controls"),
  };

  return (
    <>
      <div className={styles.root} ref={scrollAnchorRef}>
        <div
          className={styles.stageChain}
          role="tablist"
          aria-label={t("lab_process_stages_label")}
        >
          {labProcessStages.map((stage, index) => {
            const label = t(stage.labelKey);
            const isLast = index === labProcessStages.length - 1;
            const isActive = activeStage === index;
            const isPulsing = pulseIndex === index;

            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`lab-gallery-panel-${stage.id}`}
                id={`lab-stage-tab-${stage.id}`}
                onClick={() => handleStageClick(index)}
                className={[
                  styles.stageCard,
                  index > 0 ? styles.stageCardOverlap : "",
                  isLast ? styles.stageCardLast : "",
                  isActive && !isLast ? styles.stageCardActive : "",
                  isPulsing ? styles.stageCardPulse : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ zIndex: isActive || isLast ? 20 : 10 - index }}
              >
                <StageChevronShape
                  variant={index === 0 ? "first" : "middle"}
                  isActive={isActive && !isLast}
                  isLast={isLast}
                />

                <span className={styles.stageContent}>
                  <span className={styles.stageIcon}>
                    {labStageIcons[stage.id]("")}
                  </span>
                  <span className={styles.stageLabel}>{label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`lab-gallery-panel-${currentStage.id}`}
          role="tabpanel"
          aria-labelledby={`lab-stage-tab-${currentStage.id}`}
          className={styles.galleryPanel}
        >
          <div key={activeStage} className={styles.carousel}>
            <div
              className={styles.carouselViewport}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {photos.length > 1 && (
                <button
                  type="button"
                  className={styles.carouselNav}
                  onClick={goPrev}
                  aria-label={t("gallery_prev")}
                >
                  <ChevronLeft size={22} />
                </button>
              )}

              <button
                type="button"
                className={styles.carouselMain}
                aria-label={`${t("info_image_zoom")}: ${currentAlt}`}
                onClick={openLightbox}
              >
                {currentPhoto && (
                  <Image
                    key={`${currentStage.id}-${currentPhoto}-${photoIndex}`}
                    src={currentPhoto}
                    alt={currentAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                    className={styles.carouselImage}
                    priority
                  />
                )}
                <span className={styles.carouselZoomHint} aria-hidden="true">
                  <ZoomIn size={22} />
                </span>
              </button>

              {photos.length > 1 && (
                <button
                  type="button"
                  className={`${styles.carouselNav} ${styles.carouselNavNext}`}
                  onClick={goNext}
                  aria-label={t("gallery_next")}
                >
                  <ChevronRight size={22} />
                </button>
              )}
            </div>

            {photos.length > 1 && (
              <div className={styles.carouselMeta}>
                <p className={styles.carouselCounter}>
                  {photoIndex + 1} / {photos.length}
                </p>
                <div ref={thumbStripRef} className={styles.thumbStrip}>
                  {photos.map((src, index) => {
                    const thumbAlt = `${stageLabel} — ${t("lab_process_photo_alt")} ${index + 1}`;
                    const isActive = index === photoIndex;

                    return (
                      <button
                        key={`${currentStage.id}-thumb-${src}-${index}`}
                        type="button"
                        data-index={index}
                        className={[
                          styles.thumbItem,
                          isActive ? styles.thumbItemActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        aria-label={thumbAlt}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setPhotoIndex(index)}
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="72px"
                          className={styles.thumbImage}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <p className={styles.galleryHint}>{t("info_image_zoom_hint")}</p>
          </div>
        </div>
      </div>

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
