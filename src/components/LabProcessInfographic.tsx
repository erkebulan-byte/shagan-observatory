"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
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
  const [pulseIndex, setPulseIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);

  const currentStage = labProcessStages[activeStage];
  const photos = getStagePhotos(currentStage);
  const stageLabel = t(currentStage.labelKey);

  const handleStageClick = useCallback((index: number) => {
    setActiveStage(index);
    setPulseIndex(index);
    window.setTimeout(() => setPulseIndex(null), 450);
  }, []);

  const zoomLabels = {
    close: t("info_image_close"),
    zoomIn: t("info_image_zoom_in"),
    zoomOut: t("info_image_zoom_out"),
    reset: t("info_image_zoom_reset"),
    hint: t("info_image_zoom_controls"),
  };

  return (
    <>
      <div className={styles.root}>
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
          <div key={activeStage} className={styles.gallery}>
            {photos.map((src, photoIndex) => {
              const alt = `${stageLabel} — ${t("lab_process_photo_alt")} ${photoIndex + 1}`;

              return (
                <button
                  key={`${currentStage.id}-${src}-${photoIndex}`}
                  type="button"
                  className={styles.galleryItem}
                  aria-label={`${t("info_image_zoom")}: ${alt}`}
                  onClick={() =>
                    setLightboxImage({
                      src,
                      alt,
                      width: GALLERY_IMAGE_SIZE,
                      height: GALLERY_IMAGE_SIZE,
                    })
                  }
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 72px, (max-width: 1200px) 100px, 120px"
                    className={styles.galleryImage}
                  />
                  <span className={styles.galleryZoomHint} aria-hidden="true">
                    <ZoomIn size={16} />
                  </span>
                </button>
              );
            })}
          </div>
          <p className={styles.galleryHint}>{t("info_image_zoom_hint")}</p>
        </div>
      </div>

      {lightboxImage && (
        <ImageZoomLightbox
          key={lightboxImage.src}
          image={lightboxImage}
          labels={zoomLabels}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
