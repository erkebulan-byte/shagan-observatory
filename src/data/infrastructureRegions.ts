import type { CSSProperties } from "react";
import type { TranslationKey } from "@/translations";

export type RegionRect = {
  l: number;
  t: number;
  w: number;
  h: number;
};

export type InfrastructureHotspot = RegionRect & {
  id: string;
  labelKey?: TranslationKey;
};

export const infrastructureImage = {
  src: "/info/infrastructure-photo.png",
  width: 1013,
  height: 297,
  altKey: "info_plan1_image_alt" as const,
  interactive: false,
};

/** Hotspots for tour highlight — aligned to infrastructure diagram (1536×1024) */
export const infrastructureIcons: InfrastructureHotspot[] = [
  { id: "icon-1", l: 2.2, t: 27.8, w: 6.8, h: 7.2, labelKey: "infra_icon_research" },
  { id: "icon-2", l: 10.2, t: 27.8, w: 6.8, h: 7.2, labelKey: "infra_icon_monitoring" },
  { id: "icon-3", l: 18.2, t: 27.8, w: 6.8, h: 7.2, labelKey: "infra_icon_tourism" },
  { id: "icon-4", l: 26.2, t: 27.8, w: 6.8, h: 7.2, labelKey: "infra_icon_education" },
  { id: "icon-5", l: 34.2, t: 27.8, w: 6.8, h: 7.2, labelKey: "infra_icon_safety" },
];

export const infrastructureModules: InfrastructureHotspot[] = [
  { id: "module-1", l: 1.1, t: 37.2, w: 23.6, h: 21.2, labelKey: "infra_module_1" },
  { id: "module-2", l: 25.2, t: 37.2, w: 23.6, h: 21.2, labelKey: "infra_module_2" },
  { id: "module-3", l: 49.3, t: 37.2, w: 23.6, h: 21.2, labelKey: "infra_module_3" },
  { id: "module-4", l: 73.4, t: 37.2, w: 23.6, h: 21.2, labelKey: "infra_module_4" },
  { id: "module-5", l: 1.1, t: 58.8, w: 23.6, h: 21.2, labelKey: "infra_module_5" },
  { id: "module-6", l: 25.2, t: 58.8, w: 23.6, h: 21.2, labelKey: "infra_module_6" },
  { id: "module-7", l: 49.3, t: 58.8, w: 23.6, h: 21.2, labelKey: "infra_module_7" },
  { id: "module-8", l: 73.4, t: 58.8, w: 23.6, h: 21.2, labelKey: "infra_module_8" },
];

export function regionStyle(region: RegionRect): CSSProperties {
  return {
    left: `${region.l}%`,
    top: `${region.t}%`,
    width: `${region.w}%`,
    height: `${region.h}%`,
  };
}
