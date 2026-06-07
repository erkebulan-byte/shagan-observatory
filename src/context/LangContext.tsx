"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Lang, translations, TranslationKey } from "@/translations";

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  ta: (key: TranslationKey) => string[];
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("RU");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const val = translations[lang][key];
      return Array.isArray(val) ? (val as string[]).join("\n") : (val as string);
    },
    [lang]
  );

  const ta = useCallback(
    (key: TranslationKey): string[] => {
      const val = translations[lang][key];
      return Array.isArray(val) ? (val as string[]) : [val as string];
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
