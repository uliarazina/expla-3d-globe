import { useEffect, useRef, useState } from 'react';

// Reveal once per page visit. Motion is handled in CSS so reduced-motion changes
// apply immediately without observers, timers, or frame-by-frame React updates.
export default function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setRevealed(true); observer.disconnect(); }
    }, { threshold: 0.3 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, revealed];
}
