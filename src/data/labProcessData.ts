export type LabStageId =
  | "drying"
  | "ashing"
  | "crushing"
  | "filtration"
  | "evaporation"
  | "radiometry"
  | "storage";

export type LabStageLabelKey =
  | "lab_stage_drying"
  | "lab_stage_ashing"
  | "lab_stage_crushing"
  | "lab_stage_filtration"
  | "lab_stage_evaporation"
  | "lab_stage_radiometry"
  | "lab_stage_storage";

export type LabProcessStage = {
  id: LabStageId;
  labelKey: LabStageLabelKey;
  photos: string[];
};

const GALLERY_SIZE = 16;

const FOTO1 = Array.from(
  { length: 6 },
  (_, index) => `/info/lab-process/foto1/foto1-${String(index + 1).padStart(2, "0")}.jpg`,
);

const FOTO2 = Array.from(
  { length: 9 },
  (_, index) => `/info/lab-process/foto2/foto2-${String(index + 1).padStart(2, "0")}.jpg`,
);

const FOTO3 = Array.from(
  { length: 66 },
  (_, index) => `/gallery/foto3/foto3-${String(index + 1).padStart(3, "0")}.jpg`,
);

function rotate<T>(items: T[], offset: number): T[] {
  if (items.length === 0) return [];
  const normalizedOffset = ((offset % items.length) + items.length) % items.length;
  return [...items.slice(normalizedOffset), ...items.slice(0, normalizedOffset)];
}

function buildGallery(photos: string[]): string[] {
  if (photos.length === 0) return [];
  if (photos.length >= GALLERY_SIZE) return photos.slice(0, GALLERY_SIZE);
  return Array.from({ length: GALLERY_SIZE }, (_, index) => photos[index % photos.length]);
}

export const labProcessStages: LabProcessStage[] = [
  {
    id: "drying",
    labelKey: "lab_stage_drying",
    photos: buildGallery(FOTO1),
  },
  {
    id: "ashing",
    labelKey: "lab_stage_ashing",
    photos: buildGallery([...FOTO1].reverse()),
  },
  {
    id: "crushing",
    labelKey: "lab_stage_crushing",
    photos: buildGallery(FOTO2),
  },
  {
    id: "filtration",
    labelKey: "lab_stage_filtration",
    photos: buildGallery(rotate(FOTO2, 3)),
  },
  {
    id: "evaporation",
    labelKey: "lab_stage_evaporation",
    photos: buildGallery(FOTO3.slice(0, 16)),
  },
  {
    id: "radiometry",
    labelKey: "lab_stage_radiometry",
    photos: buildGallery(FOTO3.slice(16, 32)),
  },
  {
    id: "storage",
    labelKey: "lab_stage_storage",
    photos: buildGallery(FOTO3.slice(32, 48)),
  },
];

export function getStagePhotos(stage: LabProcessStage): string[] {
  return stage.photos;
}
