"use client";

import Image from "next/image";
import { FlaskConical, Droplets, BarChart3, FileText } from "lucide-react";
import { useLang } from "@/context/LangContext";

const featureIcons = [FlaskConical, Droplets, BarChart3, FileText];

export default function Program() {
  const { t } = useLang();

  const researchAreas = [
    { icon: featureIcons[0], titleKey: "program_feat1_title" as const, descKey: "program_feat1_desc" as const },
    { icon: featureIcons[1], titleKey: "program_feat2_title" as const, descKey: "program_feat2_desc" as const },
    { icon: featureIcons[2], titleKey: "program_feat3_title" as const, descKey: "program_feat3_desc" as const },
    { icon: featureIcons[3], titleKey: "program_feat4_title" as const, descKey: "program_feat4_desc" as const },
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("program_label")}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Content Card */}
          <div className="bg-[#F4F7FC] border border-[#E2EAF4] rounded-2xl p-7 sm:p-9">
            <h2 className="text-[#0F2C59] font-bold text-xl sm:text-2xl leading-tight mb-4">
              {t("program_heading")}
              <br />
              <span className="text-[#4A90E2]">{t("program_heading2")}</span>
            </h2>

            <p className="text-[#1E3E62] text-sm sm:text-base leading-relaxed mb-6">
              {t("program_p1")}
            </p>

            <p className="text-[#1E3E62] text-sm sm:text-base leading-relaxed mb-7">
              {t("program_p2")}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {researchAreas.map((area) => (
                <div
                  key={area.titleKey}
                  className="flex gap-3 bg-white rounded-xl p-4 border border-[#E2EAF4] transition-transform duration-200 hover:scale-[1.04] hover:shadow-md cursor-default"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#EBF3FC] flex items-center justify-center">
                    <area.icon size={16} className="text-[#4A90E2]" />
                  </div>
                  <div>
                    <p className="text-[#0F2C59] font-semibold text-xs mb-1">
                      {t(area.titleKey)}
                    </p>
                    <p className="text-[#6B7280] text-xs leading-relaxed">
                      {t(area.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 pt-6 border-t border-[#E2EAF4] grid grid-cols-3 gap-4 text-center">
              {[
                { val: "program_stat1_val", label: "program_stat1_label" },
                { val: "program_stat2_val", label: "program_stat2_label" },
                { val: "program_stat3_val", label: "program_stat3_label" },
              ].map((stat) => (
                <div
                  key={stat.val}
                  className="transition-transform duration-200 hover:scale-[1.04] hover:shadow-md rounded-xl py-1 cursor-default"
                >
                  <p className="text-[#0F2C59] font-bold text-2xl">{t(stat.val as Parameters<typeof t>[0])}</p>
                  <p className="text-[#6B7280] text-xs mt-1">{t(stat.label as Parameters<typeof t>[0])}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photos — natural aspect ratio, no stretch */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <Image
                src="/program/program-photo1.png"
                alt={t("program_img_caption")}
                width={1792}
                height={2390}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <Image
                src="/program/program-photo2.jpg"
                alt={t("program_img_sub")}
                width={1013}
                height={297}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
