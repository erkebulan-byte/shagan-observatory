import type { ReactNode } from "react";
import type { LabStageId } from "./labProcessData";

export type LabStageIconRenderer = (className: string) => ReactNode;

export const labStageIcons: Record<LabStageId, LabStageIconRenderer> = {
  drying: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="8" y="14" width="32" height="18" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 22h24M12 26h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M14 36c2-2 3-2 5 0s3 2 5 0 3-2 5 0M18 40c2-2 3-2 5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  ashing: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="14" y="8" width="20" height="32" rx="1" stroke="currentColor" strokeWidth="1.75" />
      <path d="M14 16h20" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M22 22c0 5 2 8 4 10 2-2 4-5 4-10 0-3-2-5-4-5s-4 2-4 5z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  ),
  crushing: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="19" cy="24" r="7.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="29" cy="24" r="7.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="19" cy="24" r="2" fill="currentColor" />
      <circle cx="29" cy="24" r="2" fill="currentColor" />
      <path d="M23 20l2 8M25 20l-2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  filtration: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="18" y="8" width="12" height="28" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 12h16M16 34h16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 18h6M21 24h6M21 30h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path
        d="M24 38c-1.8 0-3 1-3 2.2S22.2 42.5 24 42.5s3-1.1 3-2.3S25.8 38 24 38z"
        fill="currentColor"
      />
    </svg>
  ),
  evaporation: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M20 36h8l-1.5-16H21.5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M18 36h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <ellipse cx="24" cy="38" rx="8" ry="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M22 12c0 2 1 3 2 4.5s2 2.5 2 4.5M26 10c0 2 1 3 2 4.5s2 2.5 2 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  radiometry: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="18" cy="24" r="9" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="18" cy="24" r="2.5" fill="currentColor" />
      <path d="M18 12v4M18 32v4M9 24h4M27 24h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M28 24h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M34 20l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="40" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M40 22v4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
  storage: (className) => (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="10" y="12" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="24" cy="26" r="7" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
      <rect x="34" y="30" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M37 33v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  ),
};
