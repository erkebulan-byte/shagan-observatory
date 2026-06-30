"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/context/LangContext";

const ALLIANCE_URL =
  "https://www.ceh.ac.uk/our-science/projects/radioecology-observatories";

export default function ObservatoriesLanding() {
  const { t } = useLang();

  const bodyKeys = [
    "observatories_p1",
    "observatories_p2",
    "observatories_p3",
  ] as const;

  return (
    <>
      <section className="relative text-white py-24 sm:py-32 bg-[#4A90E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-4xl">
            {t("nav_observatories")}
          </h1>
          <Link
            href="/"
            className="inline-flex mt-8 text-base sm:text-lg font-semibold text-[#63B3ED] hover:text-white transition-colors"
          >
            ← {t("info_back_home")}
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#0F2C59] font-bold text-xl sm:text-2xl lg:text-3xl leading-tight mb-8">
            {t("observatories_lead")}
          </h2>

          <div className="text-[#1E3E62] text-sm sm:text-base leading-relaxed space-y-6 max-w-4xl">
            {bodyKeys.map((key) => (
              <p key={key}>{t(key)}</p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#E2EAF4] max-w-4xl">
            <h3 className="text-[#0F2C59] font-bold text-lg sm:text-xl leading-tight mb-4">
              {t("observatories_more_title")}
            </h3>
            <p className="text-[#1E3E62] text-sm sm:text-base leading-relaxed mb-4">
              {t("observatories_more_desc")}
            </p>
            <a
              href={ALLIANCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 text-[#4A90E2] hover:text-[#0F2C59] font-medium transition-colors duration-200 group/link break-all"
            >
              <span>{ALLIANCE_URL}</span>
              <ExternalLink
                size={16}
                className="flex-shrink-0 mt-0.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
