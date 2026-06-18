"use client";

import type { Lang } from "@/translations";

type LangToggleProps = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export default function LangToggle({ lang, onChange }: LangToggleProps) {
  return (
    <div className="flex items-center border border-[#CBD5E0] rounded-md overflow-hidden text-xs font-semibold">
      {(["RU", "KZ", "EN"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={`px-3 py-1.5 transition-colors ${
            lang === code
              ? "bg-[#0F2C59] text-white"
              : "text-[#6B7280] hover:bg-[#F4F7FC]"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
