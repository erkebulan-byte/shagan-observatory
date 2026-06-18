export type UniquenessCardId = "access" | "integration" | "international" | "transparency";

export type UniquenessCard = {
  id: UniquenessCardId;
  titleKey:
    | "uniqueness_card_access_title"
    | "uniqueness_card_integration_title"
    | "uniqueness_card_international_title"
    | "uniqueness_card_transparency_title";
  descKey:
    | "uniqueness_card_access_desc"
    | "uniqueness_card_integration_desc"
    | "uniqueness_card_international_desc"
    | "uniqueness_card_transparency_desc";
  gridArea: "top-left" | "top-right" | "bottom-left" | "bottom-right";
};

export const uniquenessCards: UniquenessCard[] = [
  {
    id: "access",
    titleKey: "uniqueness_card_access_title",
    descKey: "uniqueness_card_access_desc",
    gridArea: "top-left",
  },
  {
    id: "integration",
    titleKey: "uniqueness_card_integration_title",
    descKey: "uniqueness_card_integration_desc",
    gridArea: "top-right",
  },
  {
    id: "international",
    titleKey: "uniqueness_card_international_title",
    descKey: "uniqueness_card_international_desc",
    gridArea: "bottom-left",
  },
  {
    id: "transparency",
    titleKey: "uniqueness_card_transparency_title",
    descKey: "uniqueness_card_transparency_desc",
    gridArea: "bottom-right",
  },
];
