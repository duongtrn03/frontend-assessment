import { useState, useEffect } from "react";

/**
 * Custom hook to track whether a CSS media query matches the current viewport.
 * @param {string} query - A CSS media query string ex:"(max-width: 768px)"
 * @returns {boolean} true if the media query matches, false otherwise
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}
