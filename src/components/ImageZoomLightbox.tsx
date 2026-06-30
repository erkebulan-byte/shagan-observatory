"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowLeft, Minus, Plus, RotateCcw, X } from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.35;
const ZOOMED_THRESHOLD = 1.02;
const RESET_CLOSE_MS = 180;

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Labels = {
  close: string;
  back: string;
  returnOverview: string;
  zoomIn: string;
  zoomOut: string;
  reset: string;
  hint: string;
};

export default function ImageZoomLightbox({
  image,
  labels,
  onClose,
  restoreScrollRef,
}: {
  image: LightboxImage;
  labels: Labels;
  onClose: () => void;
  restoreScrollRef?: React.RefObject<HTMLElement | null>;
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOrigin = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const isZoomed = scale > ZOOMED_THRESHOLD;
  const isMoved = Math.abs(position.x) > 1 || Math.abs(position.y) > 1;
  const isAdjusted = isZoomed || isMoved;

  const scrollBackToSource = useCallback(() => {
    restoreScrollRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [restoreScrollRef]);

  const finishClose = useCallback(() => {
    onClose();
    window.requestAnimationFrame(() => {
      scrollBackToSource();
    });
  }, [onClose, scrollBackToSource]);

  const handleBack = useCallback(() => {
    if (closeTimerRef.current !== null) return;

    if (isAdjusted) {
      resetView();
      closeTimerRef.current = window.setTimeout(() => {
        closeTimerRef.current = null;
        finishClose();
      }, RESET_CLOSE_MS);
      return;
    }

    finishClose();
  }, [finishClose, isAdjusted, resetView]);

  const clampScale = (value: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

  const zoomIn = () => setScale((current) => clampScale(current + ZOOM_STEP));
  const zoomOut = () => {
    setScale((current) => {
      const next = clampScale(current - ZOOM_STEP);
      if (next <= ZOOMED_THRESHOLD) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleBackdropClick = useCallback(() => {
    if (isAdjusted) {
      resetView();
      return;
    }
    handleBack();
  }, [handleBack, isAdjusted, resetView]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isAdjusted) resetView();
        else handleBack();
        return;
      }
      if (e.key === "+" || e.key === "=") {
        setScale((current) => clampScale(current + ZOOM_STEP));
      }
      if (e.key === "-") {
        setScale((current) => {
          const next = clampScale(current - ZOOM_STEP);
          if (next <= ZOOMED_THRESHOLD) setPosition({ x: 0, y: 0 });
          return next;
        });
      }
      if (e.key === "0") resetView();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleBack, isAdjusted, resetView]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP;
      setScale((current) => {
        const next = clampScale(current + delta);
        if (next <= ZOOMED_THRESHOLD) setPosition({ x: 0, y: 0 });
        return next;
      });
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [image.src]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= ZOOMED_THRESHOLD) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    dragOrigin.current = {
      x: e.clientX,
      y: e.clientY,
      posX: position.x,
      posY: position.y,
    };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPosition({
      x: dragOrigin.current.posX + (e.clientX - dragOrigin.current.x),
      y: dragOrigin.current.posY + (e.clientY - dragOrigin.current.y),
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (isAdjusted) {
      resetView();
      return;
    }
    setScale(2.5);
  };

  const lightbox = (
    <div
      className="fixed inset-0 z-[200] bg-black/92 flex flex-col"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 sm:px-6 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <p className="text-white/75 text-xs sm:text-sm leading-snug pr-2 min-w-0">{labels.hint}</p>
        <div className="flex items-center gap-2 shrink-0">
          {isAdjusted && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                resetView();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              aria-label={labels.returnOverview}
            >
              <RotateCcw size={16} />
              <span className="hidden sm:inline">{labels.returnOverview}</span>
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleBack();
            }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-[#0F2C59] hover:bg-[#F4F7FC] text-sm font-semibold transition-colors"
            aria-label={labels.back}
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">{labels.back}</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleBack();
            }}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label={labels.close}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={`flex-1 overflow-hidden touch-none ${
          isZoomed ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
        }`}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
          <div
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              transition: isDragging ? "none" : "transform 0.18s ease-out",
            }}
            className="origin-center will-change-transform"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              unoptimized
              draggable={false}
              className="max-w-[min(100vw-2rem,1280px)] max-h-[calc(100vh-10rem)] w-auto h-auto select-none"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="sticky bottom-0 z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-4 bg-black/70 backdrop-blur-sm border-t border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={zoomOut}
          disabled={!isZoomed}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
          aria-label={labels.zoomOut}
        >
          <Minus size={16} />
          <span>{labels.zoomOut}</span>
        </button>
        <button
          type="button"
          onClick={resetView}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#4A90E2] hover:bg-[#63B3ED] text-white text-sm font-semibold transition-colors min-w-[5.5rem] justify-center"
          aria-label={labels.reset}
        >
          <RotateCcw size={16} />
          {labels.reset}
        </button>
        <button
          type="button"
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
          aria-label={labels.zoomIn}
        >
          <Plus size={16} />
          <span>{labels.zoomIn}</span>
        </button>
        <span className="w-full text-center text-white/60 text-xs sm:hidden">
          {Math.round(scale * 100)}%
        </span>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;

  return createPortal(lightbox, document.body);
}
