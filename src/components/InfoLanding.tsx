"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ZoomIn } from "lucide-react";
import { useLang } from "@/context/LangContext";
import AccordionCard from "@/components/AccordionCard";
import ImageZoomLightbox from "@/components/ImageZoomLightbox";
import LabProcessInfographic from "@/components/LabProcessInfographic";
import ProjectUniquenessInfographic from "@/components/ProjectUniquenessInfographic";
import MainFunctionsInfographic from "@/components/MainFunctionsInfographic";
import InternationalSignificanceInfographic from "@/components/InternationalSignificanceInfographic";
import InfrastructureInfographic from "@/components/InfrastructureInfographic";

type PlanImage = {
  src: string;
  width: number;
  height: number;
  altKey: "info_plan1_image_alt";
  unoptimized?: boolean;
};

type PlanBlock = {
  titleKey:
    | "info_plan1_title"
    | "info_plan2_title"
    | "info_plan3_title"
    | "info_plan4_title"
    | "info_plan5_title"
    | "info_plan6_title";
  descKey:
    | "info_plan1_desc"
    | "info_plan2_desc"
    | "info_plan3_desc"
    | "info_plan4_desc"
    | "info_plan5_desc"
    | "info_plan6_desc";
  expandFullWidth?: boolean;
  contentComponent?:
    | "infrastructure"
    | "labProcess"
    | "projectUniqueness"
    | "mainFunctions"
    | "internationalSignificance";
  image?: PlanImage;
  href?: string;
  linkLabelKey?: "info_plan6_link";
};

const planBlocks: PlanBlock[] = [
  {
    titleKey: "info_plan1_title",
    descKey: "info_plan1_desc",
    expandFullWidth: true,
    contentComponent: "infrastructure",
  },
  {
    titleKey: "info_plan2_title",
    descKey: "info_plan2_desc",
    expandFullWidth: true,
    contentComponent: "projectUniqueness",
  },
  {
    titleKey: "info_plan3_title",
    descKey: "info_plan3_desc",
    expandFullWidth: true,
    contentComponent: "mainFunctions",
  },
  {
    titleKey: "info_plan4_title",
    descKey: "info_plan4_desc",
    expandFullWidth: true,
    contentComponent: "internationalSignificance",
  },
  {
    titleKey: "info_plan5_title",
    descKey: "info_plan5_desc",
    expandFullWidth: true,
    contentComponent: "labProcess",
  },
  {
    titleKey: "info_plan6_title",
    descKey: "info_plan6_desc",
    href: "https://www.ceh.ac.uk/our-science/projects/radioecology-observatories",
    linkLabelKey: "info_plan6_link",
  },
];

export default function InfoLanding() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);

  const toggleBlock = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const zoomLabels = {
    close: t("info_image_close"),
    zoomIn: t("info_image_zoom_in"),
    zoomOut: t("info_image_zoom_out"),
    reset: t("info_image_zoom_reset"),
    hint: t("info_image_zoom_controls"),
  };

  const renderBlockContent = (block: PlanBlock, isBlockOpen: boolean) => (
    <div className="text-[#1E3E62] text-sm sm:text-base leading-relaxed space-y-4">
      {block.image && (
        <div>
          <button
            type="button"
            onClick={() =>
              setLightboxImage({
                src: block.image!.src,
                alt: t(block.image!.altKey),
                width: block.image!.width,
                height: block.image!.height,
              })
            }
            className="group relative w-full rounded-xl overflow-hidden border border-[#E2EAF4] bg-white cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            aria-label={t("info_image_zoom")}
          >
            <Image
              src={block.image.src}
              alt={t(block.image.altKey)}
              width={block.image.width}
              height={block.image.height}
              unoptimized={block.image.unoptimized}
              className="w-full h-auto"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-[#0F2C59] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                <ZoomIn size={14} />
                {t("info_image_zoom")}
              </span>
            </div>
          </button>
          <p className="mt-2 text-[#6B7280] text-xs text-center">
            {t("info_image_zoom_hint")}
          </p>
        </div>
      )}

      {block.contentComponent === "infrastructure" && (
        <InfrastructureInfographic isActive={isBlockOpen} />
      )}

      {block.contentComponent === "labProcess" && <LabProcessInfographic />}

      {block.contentComponent === "projectUniqueness" && (
        <ProjectUniquenessInfographic isActive={isBlockOpen} />
      )}

      {block.contentComponent === "mainFunctions" && (
        <MainFunctionsInfographic isActive={isBlockOpen} />
      )}

      {block.contentComponent === "internationalSignificance" && (
        <InternationalSignificanceInfographic isActive={isBlockOpen} />
      )}

      {t(block.descKey)
        .trim()
        .split("\n\n")
        .filter(Boolean)
        .map((paragraph, i) => (
          <p key={i} className="whitespace-pre-line">
            {paragraph}
          </p>
        ))}

      {block.href && block.linkLabelKey && (
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-start gap-2 text-[#4A90E2] hover:text-[#0F2C59] font-medium transition-colors duration-200 group/link"
        >
          <span className="break-all">{t(block.linkLabelKey)}</span>
          <ExternalLink
            size={16}
            className="flex-shrink-0 mt-0.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
          />
        </a>
      )}
    </div>
  );

  return (
    <>
      <section className="relative text-white py-24 sm:py-32 overflow-hidden">
        <Image
          src="/info/hero-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F2C59]/70" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl">
            {t("info_hero_title")}
          </h1>
          <Link
            href="/"
            className="inline-flex mt-8 text-[1.75rem] font-semibold text-[#63B3ED] hover:text-white transition-colors"
          >
            ← {t("info_back_home")}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {planBlocks.map((block, index) => (
              <AccordionCard
                key={block.titleKey}
                title={t(block.titleKey)}
                isOpen={openIndex === index}
                onToggle={() => toggleBlock(index)}
                expandFullWidth={block.expandFullWidth && openIndex === index}
              >
                {renderBlockContent(block, openIndex === index)}
              </AccordionCard>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <ImageZoomLightbox
          key={lightboxImage.src}
          image={lightboxImage}
          labels={zoomLabels}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}
