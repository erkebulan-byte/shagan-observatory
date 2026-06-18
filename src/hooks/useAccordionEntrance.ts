import { useEffect, useState } from "react";

export const ACCORDION_OPEN_MS = 340;

export function useAccordionEntrance(isActive: boolean) {
  const [visible, setVisible] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!isActive) {
      const resetTimer = window.setTimeout(() => {
        setVisible(false);
      }, 0);
      return () => window.clearTimeout(resetTimer);
    }

    const startTimer = window.setTimeout(() => {
      setCycle((current) => current + 1);
      setVisible(true);
    }, ACCORDION_OPEN_MS);

    return () => window.clearTimeout(startTimer);
  }, [isActive]);

  return { visible, cycle };
}
