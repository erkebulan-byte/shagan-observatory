export type SignificanceCardId = "audience" | "field" | "logistics" | "data";

export type SignificanceCardPosition =
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

export type SignificanceCard = {
  id: SignificanceCardId;
  titleKey:
    | "intl_sig_audience_title"
    | "intl_sig_field_title"
    | "intl_sig_logistics_title"
    | "intl_sig_data_title";
  descKey:
    | "intl_sig_audience_desc"
    | "intl_sig_field_desc"
    | "intl_sig_logistics_desc"
    | "intl_sig_data_desc";
  position: SignificanceCardPosition;
  slideFrom: "left" | "right";
};

/** Anchor points in SVG viewBox 0 0 100 100 (image edge → card center) */
export const significanceConnectorAnchors: Record<
  SignificanceCardPosition,
  { imageX: number; imageY: number; cardX: number; cardY: number }
> = {
  "top-left": { imageX: 41, imageY: 36, cardX: 16, cardY: 18 },
  "bottom-left": { imageX: 41, imageY: 64, cardX: 16, cardY: 82 },
  "top-right": { imageX: 59, imageY: 36, cardX: 84, cardY: 18 },
  "bottom-right": { imageX: 59, imageY: 64, cardX: 84, cardY: 82 },
};

export function buildSignificanceConnectorPath(position: SignificanceCardPosition): string {
  const { imageX, imageY, cardX, cardY } = significanceConnectorAnchors[position];
  const ctrlX = imageX + (cardX - imageX) * 0.45;
  const ctrlY = imageY + (cardY - imageY) * 0.45;
  return `M ${imageX} ${imageY} Q ${ctrlX} ${ctrlY} ${cardX} ${cardY}`;
}

export const significanceCenterImage = {
  src: "/info/infrastructure.png",
  width: 1536,
  height: 1024,
  altKey: "intl_sig_photo_alt" as const,
};

export const significanceCards: SignificanceCard[] = [
  {
    id: "audience",
    titleKey: "intl_sig_audience_title",
    descKey: "intl_sig_audience_desc",
    position: "top-left",
    slideFrom: "left",
  },
  {
    id: "field",
    titleKey: "intl_sig_field_title",
    descKey: "intl_sig_field_desc",
    position: "bottom-left",
    slideFrom: "left",
  },
  {
    id: "logistics",
    titleKey: "intl_sig_logistics_title",
    descKey: "intl_sig_logistics_desc",
    position: "top-right",
    slideFrom: "right",
  },
  {
    id: "data",
    titleKey: "intl_sig_data_title",
    descKey: "intl_sig_data_desc",
    position: "bottom-right",
    slideFrom: "right",
  },
];
