"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useAccordionEntrance } from "@/hooks/useAccordionEntrance";
import {
  significanceCards,
  significanceCenterImage,
  type SignificanceCard,
} from "@/data/internationalSignificanceData";
import styles from "./InternationalSignificanceInfographic.module.css";

const POSITION_GRID_CLASS: Record<SignificanceCard["position"], string> = {
  "top-left": styles.cardTopLeft,
  "bottom-left": styles.cardBottomLeft,
  "top-right": styles.cardTopRight,
  "bottom-right": styles.cardBottomRight,
};

const CARD_ENTER_CLASS: Record<SignificanceCard["position"], string> = {
  "top-left": styles.cardEnterTopLeft,
  "bottom-left": styles.cardEnterBottomLeft,
  "top-right": styles.cardEnterTopRight,
  "bottom-right": styles.cardEnterBottomRight,
};

/** Stagger between cards (seconds) */
const CARD_STAGGER_S = 0.125;
const CARD_DURATION_S = 0.9;
const CONNECTOR_BASE_DELAY_S = CARD_DURATION_S + CARD_STAGGER_S * 3 + 0.15;

const CARD_ENTRANCE_ORDER: SignificanceCard["position"][] = [
  "top-left",
  "bottom-left",
  "top-right",
  "bottom-right",
];

const CARD_ENTRANCE_DELAY: Record<SignificanceCard["position"], number> =
  Object.fromEntries(
    CARD_ENTRANCE_ORDER.map((position, index) => [position, index * CARD_STAGGER_S])
  ) as Record<SignificanceCard["position"], number>;

const MOBILE_ORDER_CLASS: Record<SignificanceCard["position"], string> = {
  "top-left": styles.mobileOrderTop,
  "top-right": styles.mobileOrderTop,
  "bottom-left": styles.mobileOrderBottom,
  "bottom-right": styles.mobileOrderBottom,
};

function SignificanceCardItem({
  card,
  visible,
  delay,
  onHover,
  onLeave,
}: {
  card: SignificanceCard;
  visible: boolean;
  delay: number;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t } = useLang();

  return (
    <article
      className={[
        styles.card,
        POSITION_GRID_CLASS[card.position],
        MOBILE_ORDER_CLASS[card.position],
        CARD_ENTER_CLASS[card.position],
        visible ? styles.cardVisible : "",
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
      <div className={styles.cardStripe} aria-hidden="true" />
      <div className={styles.cardBody}>
        <h4 className={styles.cardTitle}>{t(card.titleKey)}</h4>
        <p className={styles.cardDesc}>{t(card.descKey)}</p>
      </div>
    </article>
  );
}

export default function InternationalSignificanceInfographic({
  isActive = false,
}: {
  isActive?: boolean;
}) {
  const { t } = useLang();
  const { visible, cycle: animationCycle } = useAccordionEntrance(isActive);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (visible) return;
    const resetTimer = window.setTimeout(() => {
      setActiveId(null);
    }, 0);
    return () => window.clearTimeout(resetTimer);
  }, [visible]);

  const topCards = significanceCards.filter(
    (c) => c.position === "top-left" || c.position === "top-right"
  );
  const bottomCards = significanceCards.filter(
    (c) => c.position === "bottom-left" || c.position === "bottom-right"
  );

  const renderCard = (card: SignificanceCard) => (
    <SignificanceCardItem
      key={`${card.id}-${animationCycle}`}
      card={card}
      visible={visible}
      delay={CARD_ENTRANCE_DELAY[card.position]}
      onHover={() => setActiveId(card.id)}
      onLeave={() => setActiveId(null)}
    />
  );

  return (
    <div className={styles.wrapper} role="region" aria-label={t("info_plan4_title")}>
      <div className={styles.layout}>
        <svg
          key={`connectors-${animationCycle}`}
          className={styles.connectorSvg}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {significanceCards.map((card, index) => (
            <path
              key={card.id}
              d={card.connectorPath}
              className={[
                styles.connectorPath,
                visible ? styles.connectorVisible : "",
                activeId === card.id ? styles.connectorActive : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                animationDelay: `${CONNECTOR_BASE_DELAY_S + index * 0.1}s`,
              }}
            />
          ))}
        </svg>

        {topCards.map((card) => renderCard(card))}

        <div
          key={`photo-${animationCycle}`}
          className={[styles.photoWrap, styles.mobileOrderPhoto, visible ? styles.photoVisible : ""]
            .filter(Boolean)
            .join(" ")}
        >
          <Image
            src={significanceCenterImage.src}
            alt={t(significanceCenterImage.altKey)}
            width={significanceCenterImage.width}
            height={significanceCenterImage.height}
            className={styles.photoImage}
            sizes="(min-width: 768px) 45vw, 100vw"
            unoptimized
          />
        </div>

        {bottomCards.map((card) => renderCard(card))}
      </div>
    </div>
  );
}
