"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Minus, Plus, RotateCcw, X } from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.35;

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Labels = {
  close: string;
  zoomIn: string;
  zoomOut: string;
  reset: string;
  hint: string;
};

export default function ImageZoomLightbox({
  image,
  labels,
  onClose,
}: {
  image: LightboxImage;
  labels: Labels;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOrigin = useRef({ x: 0, y: 0, posX: 0, posY: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  const resetView = useCallback(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const clampScale = (value: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, value));

  const zoomIn = () => setScale((current) => clampScale(current + ZOOM_STEP));
  const zoomOut = () => {
    setScale((current) => {
      const next = clampScale(current - ZOOM_STEP);
      if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") {
        setScale((current) => clampScale(current + ZOOM_STEP));
      }
      if (e.key === "-") {
        setScale((current) => {
          const next = clampScale(current - ZOOM_STEP);
          if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
          return next;
        });
      }
      if (e.key === "0") resetView();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, resetView]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
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
        if (next === MIN_SCALE) setPosition({ x: 0, y: 0 });
        return next;
      });
    };

    node.addEventListener("wheel", onWheel, { passive: false });
    return () => node.removeEventListener("wheel", onWheel);
  }, [image.src]);
  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
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
    if (scale > 1) {
      resetView();
      return;
    }
    setScale(2.5);
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/92 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <p className="text-white/70 text-xs sm:text-sm">{labels.hint}</p>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label={labels.close}
        >
          <X size={22} />
        </button>
      </div>

      <div
        ref={viewportRef}
        className={`flex-1 overflow-hidden touch-none ${
          scale > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
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
              transition: isDragging ? "none" : "transform 0.15s ease-out",
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
              className="max-w-[min(100vw-2rem,1280px)] max-h-[calc(100vh-8rem)] w-auto h-auto select-none"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center gap-2 sm:gap-3 px-4 pb-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
          aria-label={labels.zoomOut}
        >
          <Minus size={16} />
          <span className="hidden sm:inline">{labels.zoomOut}</span>
        </button>
        <button
          type="button"
          onClick={resetView}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors min-w-[4.5rem] justify-center"
          aria-label={labels.reset}
        >
          <RotateCcw size={16} />
          {Math.round(scale * 100)}%
        </button>
        <button
          type="button"
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
          aria-label={labels.zoomIn}
        >
          <Plus size={16} />
          <span className="hidden sm:inline">{labels.zoomIn}</span>
        </button>
      </div>
    </div>
  );
}
