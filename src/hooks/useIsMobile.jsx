import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 1024;
/**
 *Hook to track whether the current viewport is mobile.
 * Updates reactively on window resize via ResizeObserver.
 *
 * @returns {boolean} true if viewport width < MOBILE_BREAKPOINT
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    });

    observer.observe(document.body);

    return () => observer.disconnect();
  }, []);

  return isMobile;
}
