export type MainFunctionId =
  | "monitoring"
  | "sampling"
  | "safety"
  | "tourism"
  | "education"
  | "research";

export type MainFunctionCard = {
  id: MainFunctionId;
  titleKey:
    | "main_func_monitoring_title"
    | "main_func_sampling_title"
    | "main_func_safety_title"
    | "main_func_tourism_title"
    | "main_func_education_title"
    | "main_func_research_title";
  /** Degrees clockwise from top (12 o'clock) */
  angle: number;
};

/** Clockwise from top-right */
export const mainFunctionCards: MainFunctionCard[] = [
  { id: "monitoring", titleKey: "main_func_monitoring_title", angle: 30 },
  { id: "sampling", titleKey: "main_func_sampling_title", angle: 90 },
  { id: "safety", titleKey: "main_func_safety_title", angle: 150 },
  { id: "tourism", titleKey: "main_func_tourism_title", angle: 210 },
  { id: "education", titleKey: "main_func_education_title", angle: 270 },
  { id: "research", titleKey: "main_func_research_title", angle: 330 },
];

export const CENTER_RADIUS = 14;
export const CARD_RADIUS = 41.5;
export const CARD_HIT_RADIUS = 12.5;

export function polarToPercent(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + radius * Math.cos(rad),
    y: 50 + radius * Math.sin(rad),
  };
}
