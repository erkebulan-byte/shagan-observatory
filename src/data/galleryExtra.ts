import type { GalleryImage } from "./mockData";

function buildFolderGallery(
  startId: number,
  folder: string,
  prefix: string,
  indices: number[],
  labels: { ru: string; kz: string; en: string },
): GalleryImage[] {
  return indices.map((index, arrayIndex) => {
    const num = String(index).padStart(3, "0");
    const labelSuffix = indices.length > 1 ? ` · ${arrayIndex + 1}` : "";

    return {
      id: startId + arrayIndex,
      src: `/gallery/${folder}/${prefix}-${num}.jpg`,
      alt: `${labels.ru}${labelSuffix}`,
      alt_kz: `${labels.kz}${labelSuffix}`,
      alt_en: `${labels.en}${labelSuffix}`,
      caption: `${labels.ru}${labelSuffix}`,
      caption_kz: `${labels.kz}${labelSuffix}`,
      caption_en: `${labels.en}${labelSuffix}`,
    };
  });
}

const FOTO1_INDICES = [1, 2, 3, 4, 5, 6];

// Duplicates of gallery3, gallery6, gallery10, gallery12 and internal copies.
const FOTO3_SKIP = new Set([5, 47, 56, 60, 63, 64]);
const FOTO3_INDICES = Array.from({ length: 66 }, (_, i) => i + 1).filter(
  (index) => !FOTO3_SKIP.has(index),
);

export function extraGalleryImages(startId: number): GalleryImage[] {
  const foto1 = buildFolderGallery(startId, "foto1", "foto1", FOTO1_INDICES, {
    ru: "Полевые экспедиции радиоэкологической обсерватории «Шаган»",
    kz: "«Шаған» радиоэкологиялық обсерваторияның далалық экспедициялары",
    en: "Field expeditions of the Shagan Radioecological Observatory",
  });

  const foto3 = buildFolderGallery(
    startId + foto1.length,
    "foto3",
    "foto3",
    FOTO3_INDICES,
    {
      ru: "Мониторинговые работы и полевая лаборатория проекта",
      kz: "Жобаның мониторинг жұмыстары және далалық зертхана",
      en: "Monitoring work and field laboratory of the project",
    },
  );

  const FOTO14_INDICES = Array.from({ length: 54 }, (_, i) => i + 1);
  const foto14 = buildFolderGallery(
    startId + foto1.length + foto3.length,
    "foto14",
    "foto14",
    FOTO14_INDICES,
    {
      ru: "Полевые работы и мониторинг на территории обсерватории «Шаган»",
      kz: "«Шаған» обсерваториясы аумағындағы далалық жұмыстар мен мониторинг",
      en: "Field work and monitoring at the Shagan Observatory site",
    },
  );

  const FOTO15_INDICES = Array.from({ length: 6 }, (_, i) => i + 1);
  const foto15 = buildFolderGallery(
    startId + foto1.length + foto3.length + foto14.length,
    "foto15",
    "foto15",
    FOTO15_INDICES,
    {
      ru: "Лабораторный вагон проекта «Шаган»",
      kz: "«Шаған» жобасының зертханалық вагоны",
      en: "Project Shagan laboratory wagon",
    },
  );

  return [...foto1, ...foto3, ...foto14, ...foto15];
}
