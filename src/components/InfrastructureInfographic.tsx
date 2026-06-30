"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ZoomIn, ZoomOut } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { useAccordionEntrance } from "@/hooks/useAccordionEntrance";
import ImageZoomLightbox from "@/components/ImageZoomLightbox";
import {
  infrastructureIcons,
  infrastructureImage,
  infrastructureModules,
  regionStyle,
  type InfrastructureHotspot,
} from "@/data/infrastructureRegions";
import styles from "./InfrastructureInfographic.module.css";

const IMAGE_ENTER_MS = 1200;
const TOUR_START_MS = 1400;
const ICON_STEP_MS = 550;
const MODULE_STEP_MS = 750;
const TOUR_LOOP_PAUSE_MS = 2800;

function Hotspot({
  region,
  active,
  variant,
}: {
  region: InfrastructureHotspot;
  active: boolean;
  variant: "icon" | "module";
}) {
  return (
    <div
      className={[
        styles.hotspot,
        variant === "icon" ? styles.hotspotIcon : styles.hotspotModule,
        active ? styles.hotspotActive : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={regionStyle(region)}
      aria-hidden="true"
    />
  );
}

type InfrastructureInfographicProps = {
  isActive?: boolean;
};

export default function InfrastructureInfographic({
  isActive = false,
}: InfrastructureInfographicProps) {
  const { t } = useLang();
  const tourTimersRef = useRef<number[]>([]);
  const animateRef = useRef(false);
  const startTourRef = useRef<() => void>(() => {});
  const scrollAnchorRef = useRef<HTMLDivElement>(null);
  const { visible: animate, cycle: animationCycle } = useAccordionEntrance(isActive);
  const [imageReady, setImageReady] = useState(false);
  const [tourActive, setTourActive] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [activeIconIndex, setActiveIconIndex] = useState<number | null>(null);
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const alt = t(infrastructureImage.altKey);
  const src = infrastructureImage.src;
  const interactive = infrastructureImage.interactive !== false;
  const totalTourSteps = infrastructureIcons.length + infrastructureModules.length;

  const currentTourLabel = useMemo(() => {
    if (activeIconIndex !== null) {
      const key = infrastructureIcons[activeIconIndex]?.labelKey;
      return key ? t(key) : null;
    }
    if (activeModuleIndex !== null) {
      const key = infrastructureModules[activeModuleIndex]?.labelKey;
      return key ? t(key) : null;
    }
    return null;
  }, [activeIconIndex, activeModuleIndex, t]);

  useEffect(() => {
    animateRef.current = animate;
  }, [animate]);

  const clearTourTimers = useCallback(() => {
    tourTimersRef.current.forEach((id) => window.clearTimeout(id));
    tourTimersRef.current = [];
  }, []);

  const resetTour = useCallback(() => {
    setTourActive(false);
    setTourStep(0);
    setActiveIconIndex(null);
    setActiveModuleIndex(null);
  }, []);

  const startTour = useCallback(() => {
    if (!interactive) return;
    clearTourTimers();
    if (!animateRef.current) return;

    setTourActive(true);
    setTourStep(0);
    setActiveIconIndex(null);
    setActiveModuleIndex(null);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTourStep(totalTourSteps);
      return;
    }

    const schedule = (delay: number, fn: () => void) => {
      tourTimersRef.current.push(window.setTimeout(fn, delay));
    };

    infrastructureIcons.forEach((_, index) => {
      schedule(TOUR_START_MS + index * ICON_STEP_MS, () => {
        if (!animateRef.current) return;
        setTourStep(index + 1);
        setActiveIconIndex(index);
        setActiveModuleIndex(null);
      });
    });

    const moduleBase = TOUR_START_MS + infrastructureIcons.length * ICON_STEP_MS + 200;

    infrastructureModules.forEach((_, index) => {
      schedule(moduleBase + index * MODULE_STEP_MS, () => {
        if (!animateRef.current) return;
        setTourStep(infrastructureIcons.length + index + 1);
        setActiveIconIndex(null);
        setActiveModuleIndex(index);
      });
    });

    const tourEnd = moduleBase + infrastructureModules.length * MODULE_STEP_MS + 600;

    schedule(tourEnd, () => {
      resetTour();
      schedule(TOUR_LOOP_PAUSE_MS, () => {
        if (animateRef.current) startTourRef.current();
      });
    });
  }, [clearTourTimers, resetTour, totalTourSteps, interactive]);

  useEffect(() => {
    startTourRef.current = startTour;
  }, [startTour]);

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const zoomLabels = {
    close: t("info_image_close"),
    back: t("info_image_back_to_plans"),
    returnOverview: t("info_image_return_overview"),
    zoomIn: t("info_image_zoom_in"),
    zoomOut: t("info_image_zoom_out"),
    reset: t("info_image_zoom_reset"),
    hint: t("info_image_zoom_controls"),
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!animate) {
      const resetTimer = window.setTimeout(() => {
        clearTourTimers();
        resetTour();
        setImageReady(false);
        setLightboxOpen(false);
      }, 0);
      return () => window.clearTimeout(resetTimer);
    }

    const enterTimer = window.setTimeout(() => {
      setImageReady(true);
    }, 0);

    const tourTimer = window.setTimeout(() => {
      if (interactive) startTour();
    }, IMAGE_ENTER_MS);

    return () => {
      window.clearTimeout(enterTimer);
      window.clearTimeout(tourTimer);
      clearTourTimers();
    };
  }, [animate, animationCycle, startTour, resetTour, clearTourTimers, interactive]);

  const showTourZoom = tourActive && tourStep > 0;

  return (
    <>
      <div className={styles.card} ref={scrollAnchorRef}>
        <div className={styles.infographicContainer}>
          <div
            key={animationCycle}
            className={[
              styles.stage,
              imageReady ? styles.stageReady : "",
              showTourZoom ? styles.stageTourZoom : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Image
              src={src}
              alt={alt}
              width={infrastructureImage.width}
              height={infrastructureImage.height}
              className={[
                styles.baseImage,
                imageReady ? styles.baseImageVisible : "",
              ]
                .filter(Boolean)
                .join(" ")}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
              priority={false}
              draggable={false}
            />

            {interactive &&
              infrastructureIcons.map((region, index) => (
                <Hotspot
                  key={region.id}
                  region={region}
                  variant="icon"
                  active={activeIconIndex === index}
                />
              ))}

            {interactive &&
              infrastructureModules.map((region, index) => (
                <Hotspot
                  key={region.id}
                  region={region}
                  variant="module"
                  active={activeModuleIndex === index}
                />
              ))}
          </div>
        </div>

        <footer className={styles.cardFooter}>
          {interactive && tourActive && tourStep > 0 && (
            <div className={styles.tourInfo} aria-live="polite">
              <p className={styles.tourProgress}>
                {t("infra_tour_progress")
                  .replace("{current}", String(tourStep))
                  .replace("{total}", String(totalTourSteps))}
              </p>
              {currentTourLabel && (
                <p className={styles.tourCurrent}>{currentTourLabel}</p>
              )}
            </div>
          )}

          <button type="button" className={styles.viewCloserBtn} onClick={openLightbox}>
            <span className={styles.viewCloserIcons} aria-hidden="true">
              <ZoomIn size={17} />
              <ZoomOut size={17} />
            </span>
            <span>
              <strong>{t("infra_view_closer")}</strong>
              <small>{t("infra_view_closer_hint")}</small>
            </span>
          </button>
        </footer>
      </div>

      {lightboxOpen && (
        <ImageZoomLightbox
          key={src}
          image={{
            src,
            alt,
            width: infrastructureImage.width,
            height: infrastructureImage.height,
          }}
          labels={zoomLabels}
          restoreScrollRef={scrollAnchorRef}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
