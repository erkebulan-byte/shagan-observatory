"use client";

import { useEffect } from "react";
import { X, FileText, Download } from "lucide-react";
import { useLang } from "@/context/LangContext";

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
    file: "Патент Отбор проб воды.pdf",
    name_ru: "Патент — Отбор проб воды",
    name_kz: "Патент — Су үлгілерін іріктеу",
    name_en: "Patent — Water Sampling",
  },
  {
    file: "Темиржанова А.Е._Жандаевские чтения_2025 г..pdf",
    name_ru: "Темиржанова А.Е. — Жандаевские чтения, 2025",
    name_kz: "Темиржанова А.Е. — Жандай оқулары, 2025",
    name_en: "Temirzhanova A.E. — Zhandayev Readings, 2025",
  },
  {
    file: "Темиржанова и др._2025_Вестник ЕНУ_151(2)..pdf",
    name_ru: "Темиржанова и др. — Вестник ЕНУ, 2025, №151(2)",
    name_kz: "Темиржанова т.б. — ЕҰУ хабаршысы, 2025, №151(2)",
    name_en: "Temirzhanova et al. — ENU Bulletin, 2025, No. 151(2)",
  },
  {
    file: "Темиржанова и др._ГиЭ_октябрь, 2025..pdf",
    name_ru: "Темиржанова и др. — Гидробиология и экология, октябрь 2025",
    name_kz: "Темиржанова т.б. — Гидробиология және экология, қазан 2025",
    name_en: "Temirzhanova et al. — Hydrobiology & Ecology, October 2025",
  },
  {
    file: "Темиржанова и др._конф._ТПУ.pdf",
    name_ru: "Темиржанова и др. — Конференция ТПУ",
    name_kz: "Темиржанова т.б. — ТПУ конференциясы",
    name_en: "Temirzhanova et al. — TPU Conference",
  },
  {
    file: "Фараби әлемі_2025_Арай..pdf",
    name_ru: "Фараби әлемі, 2025 — Арай Темиржанова",
    name_kz: "Фараби әлемі, 2025 — Арай Темиржанова",
    name_en: "Farabi World, 2025 — Arai Temirzhanova",
  },
];

export default function DocumentsModal({ onClose }: { onClose: () => void }) {
  const { lang } = useLang();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const getName = (doc: typeof documents[0]) =>
    lang === "KZ" ? doc.name_kz : lang === "EN" ? doc.name_en : doc.name_ru;

  const heading =
    lang === "KZ" ? "Рұқсат құжаттары" : lang === "EN" ? "Regulatory Documents" : "Разрешительные документы";

  return (
    <div
      className="fixed inset-0 z-[150] bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8EFF8]">
          <h2 className="text-[#0F2C59] font-bold text-lg">{heading}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-[#F4F7FC] text-[#6B7280] hover:text-[#0F2C59] transition-colors"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>

        {/* Document list */}
        <ul className="flex flex-col divide-y divide-[#F0F4FA] px-2 py-2">
          {documents.map((doc) => (
            <li key={doc.file}>
              <a
                href={`/documents/${encodeURIComponent(doc.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-[#F4F7FC] transition-colors group"
              >
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-[#EBF3FC] flex items-center justify-center group-hover:bg-[#4A90E2] transition-colors">
                  <FileText size={18} className="text-[#4A90E2] group-hover:text-white transition-colors" />
                </div>
                <span className="flex-1 text-[#1E3E62] text-sm font-medium leading-snug group-hover:text-[#4A90E2] transition-colors">
                  {getName(doc)}
                </span>
                <Download
                  size={15}
                  className="text-[#CBD5E0] group-hover:text-[#4A90E2] transition-colors flex-shrink-0"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
