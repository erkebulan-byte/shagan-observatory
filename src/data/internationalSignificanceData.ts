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
  /** SVG connector path (viewBox 0 0 100 100) */
  connectorPath: string;
};

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
    connectorPath: "M 28 24 Q 34 38 42 46",
  },
  {
    id: "field",
    titleKey: "intl_sig_field_title",
    descKey: "intl_sig_field_desc",
    position: "bottom-left",
    slideFrom: "left",
    connectorPath: "M 28 76 Q 34 62 42 54",
  },
  {
    id: "logistics",
    titleKey: "intl_sig_logistics_title",
    descKey: "intl_sig_logistics_desc",
    position: "top-right",
    slideFrom: "right",
    connectorPath: "M 72 24 Q 66 38 58 46",
  },
  {
    id: "data",
    titleKey: "intl_sig_data_title",
    descKey: "intl_sig_data_desc",
    position: "bottom-right",
    slideFrom: "right",
    connectorPath: "M 72 76 Q 66 62 58 54",
  },
];
