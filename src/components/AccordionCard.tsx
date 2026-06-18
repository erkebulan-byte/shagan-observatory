"use client";

import { ChevronDown } from "lucide-react";

type AccordionCardProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  expandFullWidth?: boolean;
  children: React.ReactNode;
};

export default function AccordionCard({
  title,
  isOpen,
  onToggle,
  expandFullWidth = false,
  children,
}: AccordionCardProps) {
  return (
    <article
      className={`bg-[#F4F7FC] border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen || expandFullWidth
          ? "sm:col-span-2 border-[#4A90E2] shadow-lg"
          : "border-[#E2EAF4] hover:border-[#4A90E2]/50"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full p-5 sm:p-6 text-left cursor-pointer group"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-[#0F2C59] font-bold text-base sm:text-lg leading-snug pr-2">
            {title}
          </h2>
          <ChevronDown
            size={22}
            aria-hidden="true"
            className={`flex-shrink-0 text-[#4A90E2] mt-0.5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "group-hover:translate-y-0.5"
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={isOpen ? "overflow-visible" : "overflow-hidden"}>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-[#E2EAF4]">
            <div className="pt-4">{children}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
