import type { ReactNode } from "react";
import type { MainFunctionId } from "./mainFunctionsData";

export type MainFunctionIconRenderer = (className: string) => ReactNode;

export const mainFunctionIcons: Record<MainFunctionId, MainFunctionIconRenderer> = {
  monitoring: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="14" y="26" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M24 26V18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M18 18h12l-2-6h-8l-2 6z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="24" cy="30" r="2" fill="currentColor" />
      <path
        d="M8 14c2-3 5-5 9-5M40 14c-2-3-5-5-9-5M8 34c2 3 5 5 9 5M40 34c-2 3-5 5-9 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path d="M6 24h4M38 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  sampling: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M16 10v22c0 3.3 2.7 6 6 6s6-2.7 6-6V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M14 10h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M30 16h6c1.1 0 2 .9 2 2v18c0 2.2-1.8 4-4 4h-4"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path d="M10 28h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="12" cy="22" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  safety: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M24 6L38 12v12c0 9.5-6.2 16.8-14 18-7.8-1.2-14-8.5-14-18V12L24 6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M24 16c-2.5 0-4.5 2-4.5 4.5 0 3.5 4.5 7 4.5 7s4.5-3.5 4.5-7C28.5 18 26.5 16 24 16z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M20 32c1.2 1.5 2.5 2.5 4 2.5s2.8-1 4-2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  tourism: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M10 34V16l14-8 14 8v18H10z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M10 22h28M24 8v26" stroke="currentColor" strokeWidth="1.25" opacity="0.55" />
      <circle cx="34" cy="14" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M34 10v8M30 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 18l2 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  education: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M6 18l18-8 18 8-18 8-18-8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M14 22v8c0 2.2 4.5 4 10 4s10-1.8 10-4v-8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M38 20v10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="10" y="32" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 35h10M12 38h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  research: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path
        d="M18 36l8-24 4 12 6-8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      <path d="M24 19v-3M24 31v-2M19 24h-3M31 24h-2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <ellipse cx="24" cy="24" rx="9" ry="3.5" stroke="currentColor" strokeWidth="1.25" opacity="0.6" />
    </svg>
  ),
};
