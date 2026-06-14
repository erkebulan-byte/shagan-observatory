"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t, lang } = useLang();

  const partners = [
    { name: "Alikhan Bokeikhan University", url: "#" },
    {
      name:
        lang === "KZ"
          ? "«Ядролық технологиялар паркі» АҚ"
          : lang === "EN"
          ? "JSC «Nuclear Technology Park»"
          : "АО «Парк ядерных технологий»",
      url: "#",
    },
    {
      name:
        lang === "KZ"
          ? "Қазақстан Республикасының Ұлттық ядролық орталығы"
          : lang === "EN"
          ? "National Nuclear Centre of the Republic of Kazakhstan"
          : "Национальный ядерный центр Республики Казахстан",
      url: "#",
    },
  ];

  return (
    <footer id="footer" className="bg-[#0F2C59] text-white">
      {/* Partners section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-[#63B3ED] text-xs font-semibold uppercase tracking-widest mb-6 text-center sm:text-left">
            {t("footer_partners_label")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {partners.map((p) => (
              <a
                key={p.name}
                href={p.url}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4A90E2]/50 rounded-xl px-5 py-4 transition-all duration-200 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#4A90E2] flex-shrink-0" />
                <p className="text-white/80 group-hover:text-white text-sm font-medium leading-snug transition-colors">
                  {p.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content — white background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: About */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0F2C59] flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" fill="#4A90E2" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                  </svg>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-black text-[#0F2C59] text-lg tracking-widest uppercase">SHAGAN</span>
                  <span className="font-semibold text-[#4A90E2] text-sm tracking-[0.2em] uppercase">OBSERVATORY</span>
                </div>
              </div>
              <p className="text-[#6B7280] text-xs leading-relaxed max-w-sm mx-auto lg:mx-0 mb-6">
                {t("footer_project_desc")}
              </p>

              {/* PNT Logo — крупно под текстом проекта */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative h-[120px] sm:h-[160px] lg:h-[200px] w-full max-w-[480px] lg:max-w-[640px]">
                  <Image
                    src="/pnt-logo.png"
                    alt="Парк ядерных технологий"
                    fill
                    className="object-contain object-center lg:object-left"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 480px, 640px"
                  />
                </div>
              </div>
            </div>

            {/* Right: Contacts */}
            <div className="text-center lg:text-left relative overflow-hidden">
              {/* Decorative lab instruments — background */}
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80"
                viewBox="0 0 320 320" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Flask / Erlenmeyer */}
                <path d="M120 40 L120 130 L70 210 Q60 230 80 240 L200 240 Q220 230 210 210 L160 130 L160 40 Z" stroke="#0F2C59" strokeWidth="6" strokeLinejoin="round" fill="none"/>
                <line x1="105" y1="60" x2="175" y2="60" stroke="#0F2C59" strokeWidth="5" strokeLinecap="round"/>
                <path d="M85 200 Q140 185 215 205" stroke="#0F2C59" strokeWidth="4" strokeLinecap="round" fill="none"/>
                {/* Bubbles inside flask */}
                <circle cx="125" cy="190" r="7" stroke="#0F2C59" strokeWidth="3" fill="none"/>
                <circle cx="155" cy="175" r="5" stroke="#0F2C59" strokeWidth="3" fill="none"/>
                <circle cx="170" cy="195" r="4" stroke="#0F2C59" strokeWidth="3" fill="none"/>

                {/* Test tube */}
                <rect x="220" y="30" width="22" height="90" rx="11" stroke="#0F2C59" strokeWidth="5" fill="none"/>
                <path d="M220 100 Q231 120 242 100" stroke="#0F2C59" strokeWidth="4" fill="none"/>
                <line x1="215" y1="50" x2="248" y2="50" stroke="#0F2C59" strokeWidth="4" strokeLinecap="round"/>

                {/* Radiation symbol */}
                <circle cx="260" cy="220" r="28" stroke="#0F2C59" strokeWidth="5" fill="none"/>
                <circle cx="260" cy="220" r="7" stroke="#0F2C59" strokeWidth="4" fill="none"/>
                <path d="M260 213 L248 193" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>
                <path d="M260 213 L272 193" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>
                <path d="M254 224 L234 232" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>
                <path d="M266 224 L286 232" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>
                <path d="M252 218 L234 210" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>
                <path d="M268 218 L286 210" stroke="#0F2C59" strokeWidth="6" strokeLinecap="round"/>

                {/* Magnifier */}
                <circle cx="65" cy="255" r="30" stroke="#0F2C59" strokeWidth="5" fill="none"/>
                <line x1="87" y1="277" x2="110" y2="300" stroke="#0F2C59" strokeWidth="7" strokeLinecap="round"/>

                {/* Molecule dots */}
                <circle cx="190" cy="280" r="8" stroke="#0F2C59" strokeWidth="4" fill="none"/>
                <circle cx="220" cy="265" r="6" stroke="#0F2C59" strokeWidth="4" fill="none"/>
                <circle cx="250" cy="280" r="8" stroke="#0F2C59" strokeWidth="4" fill="none"/>
                <line x1="198" y1="278" x2="214" y2="268" stroke="#0F2C59" strokeWidth="3" strokeLinecap="round"/>
                <line x1="226" y1="268" x2="242" y2="278" stroke="#0F2C59" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <p className="text-[#4A90E2] text-xs font-semibold uppercase tracking-widest mb-5">
                {t("footer_contacts_label")}
              </p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[#0F2C59] font-bold text-base">
                    {t("footer_pi_name")}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5">
                    {t("footer_pi_role")}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+77072108847"
                    className="flex items-center justify-center lg:justify-start gap-3 text-[#1E3E62] hover:text-[#4A90E2] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EBF3FC] group-hover:bg-[#4A90E2]/20 flex items-center justify-center transition-colors">
                      <Phone size={13} className="text-[#4A90E2]" />
                    </div>
                    <span className="text-sm font-medium">+7 707 210 88 47</span>
                  </a>

                  <a
                    href="mailto:zh.baigazinov@gmail.com"
                    className="flex items-center justify-center lg:justify-start gap-3 text-[#1E3E62] hover:text-[#4A90E2] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EBF3FC] group-hover:bg-[#4A90E2]/20 flex items-center justify-center transition-colors">
                      <Mail size={13} className="text-[#4A90E2]" />
                    </div>
                    <span className="text-sm font-medium">zh.baigazinov@gmail.com</span>
                  </a>

                  <div className="flex items-center justify-center lg:justify-start gap-3 text-[#6B7280]">
                    <div className="w-8 h-8 rounded-full bg-[#EBF3FC] flex items-center justify-center">
                      <MapPin size={13} className="text-[#4A90E2]" />
                    </div>
                    <span className="text-xs leading-snug">
                      {lang === "KZ" ? (
                        <>Қазақстан Республикасы, Абай облысы<br />Күрші қ., Күрші к-сі 18/1</>
                      ) : lang === "EN" ? (
                        <>Republic of Kazakhstan, Abai Region<br />Kurchatov, 18/1 Kurchatov St.</>
                      ) : (
                        <>Республика Казахстан, Область Абай<br />г. Курчатов, ул. Курчатова 18/1</>
                      )}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2 justify-center lg:justify-start">
                  <a
                    href="https://wa.me/77072108847"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F2C59] hover:bg-[#1E3E62] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs text-center">
            {t("footer_copyright")}
          </p>
          <p className="text-white/20 text-xs text-center">
            {t("footer_grant")}
          </p>
        </div>
      </div>
    </footer>
  );
}
