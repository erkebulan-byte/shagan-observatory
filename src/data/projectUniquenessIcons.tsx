import type { ReactNode } from "react";
import type { UniquenessCardId } from "./projectUniquenessData";

export type UniquenessIconRenderer = (className: string) => ReactNode;

export const uniquenessCardIcons: Record<UniquenessCardId, UniquenessIconRenderer> = {
  access: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <path d="M24 8v5M24 35v5M8 24h5M35 24h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 13l3.5 3.5M31.5 31.5L35 35M35 13l-3.5 3.5M13 35l3.5-3.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  ),
  integration: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="18" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14v20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.5" />
    </svg>
  ),
  international: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.75" />
      <ellipse cx="24" cy="24" rx="5" ry="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 24h24M14 18h20M14 30h20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M10 34c3-2 7-3 14-3s11 1 14 3M10 14c3 2 7 3 14 3s11-1 14-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  transparency: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M24 8L38 16v16L24 40 10 32V16L24 8z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M24 8v32M10 16l14 8 14-8M10 32l14-8 14 8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};
