"use client";

import { useState } from "react";
import { FileText, Download } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function About() {
  const [activeSection, setActiveSection] = useState("actuality");
  const { t, ta } = useLang();

  const sections = [
    { id: "actuality", labelKey: "about_s1" as const },
    { id: "goals", labelKey: "about_s2" as const },
    { id: "methodology", labelKey: "about_s3" as const },
  ];

  const lang = useLang().lang;

  const documents = [
    {
      file: "12094u.pdf",
      name_ru: "Документ № 12094у",
      name_kz: "№ 12094у құжаты",
      name_en: "Document No. 12094u",
    },
    {
      file: "452549.pdf",
      name_ru: "Документ № 452549",
      name_kz: "№ 452549 құжаты",
      name_en: "Document No. 452549",
    },
    {
      file: "patent-water-sample.pdf",
      name_ru: "Патент на пробу воды",
      name_kz: "Су үлгісіне патент",
      name_en: "Patent for Water Sampling",
    },
    {
      file: "Темиржанова А.Е._Жандаевские чтения_2025 г..pdf",
      name_ru: "Особенности загрязнения поверхностного водотока Семипалатинского испытательного полигона",
      name_kz: "Семей ядролық сынақ полигонының беткі су ағынының ластану ерекшеліктері",
      name_en: "Features of Surface Watercourse Contamination at the Semipalatinsk Test Site",
    },
    {
      file: "Темиржанова и др._2025_Вестник ЕНУ_151(2)..pdf",
      name_ru: "Вестник ЕНУ, 2025, №151(2)",
      name_kz: "ЕҰУ хабаршысы, 2025, №151(2)",
      name_en: "ENU Bulletin, 2025, No. 151(2)",
    },
    {
      file: "Темиржанова и др._ГиЭ_октябрь, 2025..pdf",
      name_ru: "Гидробиология и экология, октябрь 2025",
      name_kz: "Гидробиология және экология, қазан 2025",
      name_en: "Hydrobiology & Ecology, October 2025",
    },
    {
      file: "Темиржанова и др._конф._ТПУ.pdf",
      name_ru: "Конференция ТПУ",
      name_kz: "ТПУ конференциясы",
      name_en: "TPU Conference",
    },
    {
      file: "Фараби әлемі_2025_Арай..pdf",
      name_ru: "Фараби әлемі, 2025",
      name_kz: "Фараби әлемі, 2025",
      name_en: "Farabi World, 2025",
    },
  ];

  const getDocName = (doc: typeof documents[0]) =>
    lang === "KZ" ? doc.name_kz : lang === "EN" ? doc.name_en : doc.name_ru;

  return (
    <section id="about" className="py-20 bg-[#F4F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-3">
          {t("about_label")}
        </p>
        <h2 className="text-[#0F2C59] font-bold text-2xl sm:text-3xl mb-10">
          {t("about_heading")}
        </h2>

        {/* Mobile / tablet section tabs (hidden on lg+) */}
        <nav className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-8 -mx-4 px-4 scrollbar-none">
          {[...sections, { id: "documents", labelKey: "about_s5" as const }].map((sec) => (
            <a
              key={sec.id}
              href={`#about-${sec.id}`}
              onClick={() => setActiveSection(sec.id)}
              className={`flex-shrink-0 text-sm px-4 py-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                activeSection === sec.id
                  ? "bg-[#4A90E2] text-white shadow-sm"
                  : "bg-white border border-[#E2EAF4] text-[#1E3E62] hover:border-[#4A90E2]/50"
              }`}
            >
              {t(sec.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex gap-10 lg:gap-16 items-start">
          {/* Sticky Sidebar — desktop only */}
          <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-28">
            <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-3 px-2">
              {t("about_nav_label")}
            </p>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#about-${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`text-sm px-3 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                    activeSection === sec.id
                      ? "bg-[#4A90E2] text-white shadow-sm"
                      : "text-[#1E3E62] hover:bg-[#E2EAF4]"
                  }`}
                >
                  {t(sec.labelKey)}
                </a>
              ))}

              {/* Документы — flyout on hover */}
              <div className="relative group/docs">
                <button
                  className="w-full text-left text-sm px-3 py-2.5 rounded-lg font-medium transition-all duration-200 text-[#1E3E62] hover:bg-[#E2EAF4] flex items-center justify-between"
                >
                  {t("about_s5")}
                  <span className="text-[#4A90E2] text-xs">›</span>
                </button>

                {/* Flyout panel */}
                <div className="absolute left-full top-0 ml-2 w-72 bg-white border border-[#E2EAF4] rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover/docs:opacity-100 group-hover/docs:visible transition-all duration-200 translate-x-1 group-hover/docs:translate-x-0 z-50">
                  <div className="px-3 py-2 border-b border-[#F0F4FA]">
                    <p className="text-[#0F2C59] font-semibold text-xs uppercase tracking-wider">
                      {t("about_s5")}
                    </p>
                  </div>
                  <ul className="flex flex-col divide-y divide-[#F0F4FA] max-h-80 overflow-y-auto">
                    {documents.map((doc) => (
                      <li key={doc.file}>
                        <a
                          href={`/documents/${encodeURIComponent(doc.file)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#F4F7FC] transition-colors group/item"
                        >
                          <div className="w-7 h-7 flex-shrink-0 rounded-md bg-[#EBF3FC] flex items-center justify-center group-hover/item:bg-[#4A90E2] transition-colors">
                            <FileText size={13} className="text-[#4A90E2] group-hover/item:text-white transition-colors" />
                          </div>
                          <span className="flex-1 text-[#1E3E62] text-xs font-medium leading-snug group-hover/item:text-[#4A90E2] transition-colors">
                            {getDocName(doc)}
                          </span>
                          <Download size={12} className="text-[#CBD5E0] group-hover/item:text-[#4A90E2] transition-colors flex-shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl space-y-12">
            {/* Актуальность */}
            <div id="about-actuality" className="scroll-mt-24">
              <h3 className="text-[#0F2C59] font-bold text-xl mb-4 pb-3 border-b border-[#E2EAF4]">
                {t("about_s1_heading")}
              </h3>
              <div className="prose prose-sm max-w-none text-[#1E3E62] space-y-4">
                <p className="leading-relaxed">{t("about_s1_p1")}</p>
                <p className="leading-relaxed">{t("about_s1_p2")}</p>
                <div className="bg-[#EBF3FC] border-l-4 border-[#4A90E2] rounded-r-xl p-4">
                  <p className="text-[#0F2C59] font-semibold text-sm mb-1">
                    {t("about_s1_box_title")}
                  </p>
                  <p className="text-sm">{t("about_s1_box")}</p>
                </div>
                <p className="leading-relaxed">{t("about_s1_p3")}</p>
              </div>
            </div>

            {/* Цели и задачи */}
            <div id="about-goals" className="scroll-mt-24">
              <h3 className="text-[#0F2C59] font-bold text-xl mb-4 pb-3 border-b border-[#E2EAF4]">
                {t("about_s2_heading")}
              </h3>
              <div className="space-y-6 text-[#1E3E62]">
                <div>
                  <p className="font-semibold text-[#0F2C59] mb-2">{t("about_s2_main_goal_label")}</p>
                  <p className="text-sm leading-relaxed">{t("about_s2_main_goal")}</p>
                </div>

                <div>
                  <p className="font-semibold text-[#0F2C59] mb-3">{t("about_s2_strategic_label")}</p>
                  <ol className="list-none flex flex-col gap-3">
                    {ta("about_s2_strategic").map((item, idx) => {
                      const separator = " — ";
                      const splitIndex = item.indexOf(separator);
                      const title = splitIndex >= 0 ? item.slice(0, splitIndex) : item;
                      const description = splitIndex >= 0 ? item.slice(splitIndex + separator.length) : "";

                      return (
                        <li key={idx} className="flex gap-3 text-sm leading-relaxed group/task">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A90E2] group-hover/task:bg-[#63B3ED] group-hover/task:shadow-[0_0_12px_rgba(99,179,237,0.8)] text-white text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-200 cursor-default">
                            {idx + 1}
                          </span>
                          <span className="group-hover/task:text-[#0F2C59] transition-colors duration-200">
                            <span className="font-semibold text-[#0F2C59]">{title}</span>
                            {description && (
                              <>
                                {" "}
                                {description}
                              </>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div>
                  <p className="font-semibold text-[#0F2C59] mb-3">{t("about_s2_specific_label")}</p>
                  <ol className="list-none flex flex-col gap-3">
                    {ta("about_s2_specific").map((task, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed group/task">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4A90E2] group-hover/task:bg-[#63B3ED] group-hover/task:shadow-[0_0_12px_rgba(99,179,237,0.8)] text-white text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-200 cursor-default">
                          {idx + 1}
                        </span>
                        <span className="group-hover/task:text-[#0F2C59] transition-colors duration-200">{task}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Методология */}
            <div id="about-methodology" className="scroll-mt-24">
              <h3 className="text-[#0F2C59] font-bold text-xl mb-4 pb-3 border-b border-[#E2EAF4]">
                {t("about_s3_heading")}
              </h3>
              <div className="space-y-4 text-[#1E3E62] text-sm leading-relaxed">
                <p>{t("about_s3_intro")}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { titleKey: "about_s3_block1_title" as const, itemsKey: "about_s3_block1" as const },
                    { titleKey: "about_s3_block2_title" as const, itemsKey: "about_s3_block2" as const },
                  ].map((block) => (
                    <div
                      key={block.titleKey}
                      className="bg-white border border-[#E2EAF4] rounded-xl p-4"
                    >
                      <p className="text-[#0F2C59] font-semibold text-sm mb-3">
                        {t(block.titleKey)}
                      </p>
                      <ul className="flex flex-col gap-2">
                        {ta(block.itemsKey).map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4A90E2] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Documents — mobile / tablet only */}
            <div id="about-documents" className="lg:hidden scroll-mt-24">
              <h3 className="text-[#0F2C59] font-bold text-xl mb-4 pb-3 border-b border-[#E2EAF4]">
                {t("about_s5")}
              </h3>
              <ul className="flex flex-col divide-y divide-[#F0F4FA] bg-white rounded-xl border border-[#E2EAF4] overflow-hidden">
                {documents.map((doc) => (
                  <li key={doc.file}>
                    <a
                      href={`/documents/${encodeURIComponent(doc.file)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#F4F7FC] transition-colors group/item"
                    >
                      <div className="w-8 h-8 flex-shrink-0 rounded-md bg-[#EBF3FC] flex items-center justify-center group-hover/item:bg-[#4A90E2] transition-colors">
                        <FileText size={14} className="text-[#4A90E2] group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="flex-1 text-[#1E3E62] text-sm font-medium leading-snug group-hover/item:text-[#4A90E2] transition-colors">
                        {getDocName(doc)}
                      </span>
                      <Download size={14} className="text-[#CBD5E0] group-hover/item:text-[#4A90E2] transition-colors flex-shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
