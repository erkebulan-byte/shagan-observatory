"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LangContext";
import DocumentsModal from "@/components/DocumentsModal";
import LangToggle from "@/components/LangToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);
  const { lang, setLang, t } = useLang();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const navLinks = [
    { key: "nav_program" as const, href: sectionHref("program") },
    { key: "nav_news" as const, href: sectionHref("news") },
    { key: "nav_gallery" as const, href: sectionHref("gallery") },
    { key: "nav_team" as const, href: sectionHref("team") },
    { key: "nav_partners" as const, href: sectionHref("footer") },
  ];

  const aboutDropdown = [
    { key: "nav_about_lab" as const, href: sectionHref("about"), onClick: undefined as (() => void) | undefined },
    { key: "nav_about_docs" as const, href: "#", onClick: () => setDocsOpen(true) },
  ];

  const infoLinkClass =
    pathname === "/info"
      ? "text-[#4A90E2] font-semibold"
      : "text-[#1E3E62] hover:text-[#4A90E2]";

  const handleNavClick = () => { setIsOpen(false); setAboutOpen(false); };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8EFF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#0F2C59] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" fill="#4A90E2" />
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
              </svg>
            </div>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-black text-[#0F2C59] text-sm tracking-widest uppercase">SHAGAN</span>
              <span className="font-semibold text-[#4A90E2] text-xs tracking-[0.2em] uppercase">OBSERVATORY</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#1E3E62] hover:text-[#4A90E2] transition-colors duration-200 font-medium"
              >
                {t(link.key)}
              </a>
            ))}

            {/* О проекте — dropdown */}
            <div className="relative group">
              <a
                href={sectionHref("about")}
                className="flex items-center gap-1 text-sm text-[#1E3E62] hover:text-[#4A90E2] transition-colors duration-200 font-medium"
              >
                {t("nav_about")}
                <ChevronDown
                  size={13}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </a>
              {/* Dropdown panel */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#E2EAF4] rounded-xl shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {aboutDropdown.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick!(); } : undefined}
                    className="block px-4 py-3 text-sm text-[#1E3E62] hover:bg-[#F4F7FC] hover:text-[#4A90E2] transition-colors duration-150 border-b border-[#F0F4FA] last:border-0 cursor-pointer"
                  >
                    {t(item.key)}
                  </a>
                ))}
              </div>
            </div>

            <Link
              href="/info"
              className={`text-sm transition-colors duration-200 font-medium ${infoLinkClass}`}
            >
              {t("nav_info")}
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LangToggle lang={lang} onChange={setLang} />
            <a
              href="https://wa.me/77072108847"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#4A90E2] hover:bg-[#63B3ED] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta_whatsapp")}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#0F2C59] rounded-md hover:bg-[#F4F7FC] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#E8EFF8] shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-[#1E3E62] hover:text-[#4A90E2] font-medium py-2.5 px-3 rounded-lg hover:bg-[#F4F7FC] transition-colors"
              >
                {t(link.key)}
              </a>
            ))}

            {/* О проекте — expandable */}
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full flex items-center justify-between text-[#1E3E62] hover:text-[#4A90E2] font-medium py-2.5 px-3 rounded-lg hover:bg-[#F4F7FC] transition-colors"
              >
                {t("nav_about")}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {aboutOpen && (
                <div className="ml-4 flex flex-col gap-0.5 mt-0.5">
                  {aboutDropdown.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      onClick={(e) => {
                        if (item.onClick) { e.preventDefault(); item.onClick(); }
                        handleNavClick();
                      }}
                      className="text-[#4A90E2] hover:text-[#0F2C59] text-sm py-2 px-3 rounded-lg hover:bg-[#F4F7FC] transition-colors cursor-pointer"
                    >
                      {t(item.key)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/info"
              onClick={handleNavClick}
              className={`font-medium py-2.5 px-3 rounded-lg hover:bg-[#F4F7FC] transition-colors ${infoLinkClass}`}
            >
              {t("nav_info")}
            </Link>

            <div className="pt-3 border-t border-[#E8EFF8] mt-2 flex items-center gap-3">
              <LangToggle lang={lang} onChange={setLang} />
              <a
                href="https://wa.me/77072108847"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-[#4A90E2] hover:bg-[#63B3ED] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                onClick={handleNavClick}
              >
                {t("cta_whatsapp")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>

    {docsOpen && <DocumentsModal onClose={() => setDocsOpen(false)} />}
  </>
  );
}
