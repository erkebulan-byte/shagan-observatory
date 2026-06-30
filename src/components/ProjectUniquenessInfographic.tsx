"use client";

import { useId } from "react";
import { useLang } from "@/context/LangContext";
import { useAccordionEntrance } from "@/hooks/useAccordionEntrance";
import { uniquenessCards, type UniquenessCard } from "@/data/projectUniquenessData";
import { uniquenessCardIcons } from "@/data/projectUniquenessIcons";
import styles from "./ProjectUniquenessInfographic.module.css";

const GRID_AREA_CLASS: Record<UniquenessCard["gridArea"], string> = {
  "top-left": styles.cardTopLeft,
  "top-right": styles.cardTopRight,
  "bottom-left": styles.cardBottomLeft,
  "bottom-right": styles.cardBottomRight,
};

function CenterCircle({ topText, bottomText }: { topText: string; bottomText: string }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `uniqueness-clip-${uid}`;
  const topArcId = `uniqueness-top-arc-${uid}`;
  const bottomArcId = `uniqueness-bottom-arc-${uid}`;
  const topRadius = 70;
  const bottomRadius = 58;

  return (
    <div className={styles.centerGlow}>
      <div className={styles.centerCircle} aria-hidden="true">
        <svg viewBox="0 0 240 240" className={styles.centerSvg} role="img">
          <defs>
            <clipPath id={clipId}>
              <circle cx="120" cy="120" r="86" />
            </clipPath>
          </defs>

          <circle cx="120" cy="120" r="88" className={styles.centerDisc} />

          <g clipPath={`url(#${clipId})`} className={styles.centerClipGroup}>
            <g className={styles.centerTextRing}>
              <path
                id={topArcId}
                d={`M ${120 - topRadius} 120 A ${topRadius} ${topRadius} 0 0 1 ${120 + topRadius} 120`}
                fill="none"
                aria-hidden="true"
              />
              <path
                id={bottomArcId}
                d={`M ${120 + bottomRadius} 120 A ${bottomRadius} ${bottomRadius} 0 0 1 ${120 - bottomRadius} 120`}
                fill="none"
                aria-hidden="true"
              />

              <text className={styles.centerTextTop}>
                <textPath
                  href={`#${topArcId}`}
                  startOffset="50%"
                  textAnchor="middle"
                  lengthAdjust="spacingAndGlyphs"
                >
                  {topText}
                </textPath>
              </text>

              <text className={styles.centerTextBottom}>
                <textPath
                  href={`#${bottomArcId}`}
                  startOffset="50%"
                  textAnchor="middle"
                  lengthAdjust="spacingAndGlyphs"
                >
                  {bottomText}
                </textPath>
              </text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function UniquenessCardItem({
  card,
  visible,
  delay,
}: {
  card: UniquenessCard;
  visible: boolean;
  delay: number;
}) {
  const { t } = useLang();

  return (
    <article
      className={[
        styles.card,
        GRID_AREA_CLASS[card.gridArea],
        visible ? styles.cardVisible : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.cardIcon}>{uniquenessCardIcons[card.id]("")}</div>
      <h4 className={styles.cardTitle}>{t(card.titleKey)}</h4>
      <p className={styles.cardDesc}>{t(card.descKey)}</p>
    </article>
  );
}

export default function ProjectUniquenessInfographic({
  isActive = false,
}: {
  isActive?: boolean;
}) {
  const { t } = useLang();
  const { visible } = useAccordionEntrance(isActive);
  const circleTop = t("uniqueness_circle_text_top");
  const circleBottom = t("uniqueness_circle_text_bottom");

  const [topLeft, topRight, bottomLeft, bottomRight] = uniquenessCards;

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={styles.grid}>
          <UniquenessCardItem card={topLeft} visible={visible} delay={0} />
          <UniquenessCardItem card={topRight} visible={visible} delay={0.12} />

          <div
            className={[styles.centerWrap, visible ? styles.centerWrapVisible : ""]
              .filter(Boolean)
              .join(" ")}
            aria-label={`${circleTop}, ${circleBottom}`}
          >
            <CenterCircle topText={circleTop} bottomText={circleBottom} />
          </div>

          <UniquenessCardItem card={bottomLeft} visible={visible} delay={0.24} />
          <UniquenessCardItem card={bottomRight} visible={visible} delay={0.36} />
        </div>
      </div>
    </div>
  );
}
