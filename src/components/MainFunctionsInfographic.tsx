"use client";

import { useEffect, useId, useState } from "react";
import { useLang } from "@/context/LangContext";
import { useAccordionEntrance } from "@/hooks/useAccordionEntrance";
import {
  CARD_HIT_RADIUS,
  CARD_RADIUS,
  CENTER_RADIUS,
  mainFunctionCards,
  polarToPercent,
  type MainFunctionCard,
} from "@/data/mainFunctionsData";
import { mainFunctionIcons } from "@/data/mainFunctionsIcons";
import styles from "./MainFunctionsInfographic.module.css";

const GLOW_STEP_MS = 3000;
const GLOW_STEPS = mainFunctionCards.length + 1;

function offsetPoint(
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  offset: number
) {
  const dx = toX - fromX;
  const dy = toY - fromY;
  const len = Math.hypot(dx, dy) || 1;
  return {
    x: fromX + (dx / len) * offset,
    y: fromY + (dy / len) * offset,
  };
}

function GlowRing({ active }: { active: boolean }) {
  return (
    <span
      className={[styles.glowRing, active ? styles.glowRingActive : ""].filter(Boolean).join(" ")}
      aria-hidden="true"
    />
  );
}

function OrbitCard({
  card,
  visible,
  delay,
  isSequenceGlow,
  onHover,
  onLeave,
}: {
  card: MainFunctionCard;
  visible: boolean;
  delay: number;
  isSequenceGlow: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t } = useLang();
  const pos = polarToPercent(card.angle, CARD_RADIUS);

  return (
    <article
      className={[
        styles.orbitCard,
        visible ? styles.orbitCardVisible : "",
        isSequenceGlow ? styles.orbitCardSequenceGlow : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        left: `${pos.x}%`,
        top: `${pos.y}%`,
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      aria-label={t(card.titleKey)}
    >
      <GlowRing active={isSequenceGlow} />
      <div className={styles.orbitInner}>
        <div className={styles.orbitIconBadge}>
          <div className={styles.orbitIcon}>{mainFunctionIcons[card.id]("")}</div>
        </div>
        <h4 className={styles.orbitTitle}>{t(card.titleKey)}</h4>
      </div>
    </article>
  );
}

function MobileCardRow({
  card,
  visible,
  delay,
  isSequenceGlow,
  isArrowGlow,
  onHover,
  onLeave,
}: {
  card: MainFunctionCard;
  visible: boolean;
  delay: number;
  isSequenceGlow: boolean;
  isArrowGlow: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t } = useLang();

  return (
    <div className="flex flex-col gap-1">
      <div
        className={[
          styles.mobileArrow,
          visible ? styles.mobileArrowVisible : "",
          isArrowGlow ? styles.mobileArrowSequenceActive : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 2v16M6 6l4-4 4 4M6 14l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <article
        className={[
          styles.mobileCard,
          visible ? styles.mobileCardVisible : "",
          isSequenceGlow ? styles.mobileCardSequenceGlow : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ animationDelay: `${delay}s` }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onFocus={onHover}
        onBlur={onLeave}
        tabIndex={0}
      >
        <div className={styles.mobileCardIcon}>{mainFunctionIcons[card.id]("")}</div>
        <h4 className={styles.mobileCardTitle}>{t(card.titleKey)}</h4>
      </article>
    </div>
  );
}

export default function MainFunctionsInfographic({
  isActive = false,
}: {
  isActive?: boolean;
}) {
  const { t } = useLang();
  const uid = useId().replace(/:/g, "");
  const { visible, cycle } = useAccordionEntrance(isActive);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [glowStep, setGlowStep] = useState(0);

  useEffect(() => {
    if (visible) return;
    const resetTimer = window.setTimeout(() => {
      setHoveredId(null);
      setGlowStep(0);
    }, 0);
    return () => window.clearTimeout(resetTimer);
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setGlowStep((current) => (current + 1) % GLOW_STEPS);
    }, GLOW_STEP_MS);

    return () => window.clearInterval(timer);
  }, [visible, cycle]);

  const centerLabel = t("main_func_center");
  const isCenterSequenceGlow = glowStep === 0 && hoveredId === null;

  const isCardSequenceGlow = (index: number) =>
    hoveredId === null && glowStep === index + 1;

  const isArrowSequenceGlow = (index: number) =>
    hoveredId === null && glowStep === index + 1;

  const isCardHoverGlow = (cardId: string) => hoveredId === cardId;

  return (
    <div className={styles.wrapper} role="region" aria-label={centerLabel} key={cycle}>
      <div className={styles.circleLayout}>
        <svg
          className={styles.arrowsSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <marker
              id={`arrow-end-${uid}`}
              markerWidth="4"
              markerHeight="4"
              refX="3.2"
              refY="2"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L4,2 L0,4 Z" fill="#22c55e" />
            </marker>
            <marker
              id={`arrow-start-${uid}`}
              markerWidth="4"
              markerHeight="4"
              refX="0.8"
              refY="2"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M4,0 L0,2 L4,4 Z" fill="#22c55e" />
            </marker>
          </defs>

          {mainFunctionCards.map((card, index) => {
            const end = polarToPercent(card.angle, CARD_RADIUS);
            const start = offsetPoint(50, 50, end.x, end.y, CENTER_RADIUS);
            const finish = offsetPoint(end.x, end.y, 50, 50, CARD_HIT_RADIUS);
            const isArrowGlow =
              isCardHoverGlow(card.id) || isArrowSequenceGlow(index);

            return (
              <line
                key={card.id}
                x1={start.x}
                y1={start.y}
                x2={finish.x}
                y2={finish.y}
                className={[
                  styles.arrowLine,
                  visible ? styles.arrowVisible : "",
                  isArrowGlow ? styles.arrowSequenceActive : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                markerStart={`url(#arrow-start-${uid})`}
                markerEnd={`url(#arrow-end-${uid})`}
              />
            );
          })}
        </svg>

        <div
          className={[
            styles.centerCircle,
            visible ? styles.centerVisible : "",
            isCenterSequenceGlow || hoveredId === "center" ? styles.centerSequenceGlow : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onMouseEnter={() => setHoveredId("center")}
          onMouseLeave={() => setHoveredId(null)}
        >
          <GlowRing active={isCenterSequenceGlow || hoveredId === "center"} />
          <div className={styles.centerInner}>
            <p className={styles.centerTitle}>
              <span className={styles.centerTitleLine}>Shagan</span>
              <span className={styles.centerTitleLine}>Observatory</span>
            </p>
          </div>
        </div>

        {mainFunctionCards.map((card, index) => (
          <OrbitCard
            key={card.id}
            card={card}
            visible={visible}
            delay={0.2 + index * 0.1}
            isSequenceGlow={isCardSequenceGlow(index) || isCardHoverGlow(card.id)}
            onHover={() => setHoveredId(card.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>

      <div className={styles.mobileLayout}>
        <div
          className={[
            styles.mobileCenter,
            visible ? styles.mobileCenterVisible : "",
            isCenterSequenceGlow ? styles.centerSequenceGlow : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <GlowRing active={isCenterSequenceGlow} />
          <div className={styles.centerInner}>
            <p className={styles.centerTitle}>
              <span className={styles.centerTitleLine}>Shagan</span>
              <span className={styles.centerTitleLine}>Observatory</span>
            </p>
          </div>
        </div>

        <div className={styles.mobileGrid}>
          {mainFunctionCards.map((card, index) => (
            <MobileCardRow
              key={card.id}
              card={card}
              visible={visible}
              delay={0.15 + index * 0.08}
              isSequenceGlow={isCardSequenceGlow(index)}
              isArrowGlow={isArrowSequenceGlow(index)}
              onHover={() => setHoveredId(card.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
