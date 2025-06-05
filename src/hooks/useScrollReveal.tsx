import { useEffect, useRef, useState } from "react";

export function useScrollReveal(
  options: IntersectionObserverInit = { threshold: 0.1 },
  observerDisconnect: boolean = false
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasRevealed = useRef(false); // para evitar re-evaluación

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isInView = entry.isIntersecting;

      if (isInView && !hasRevealed.current) {
        setIsVisible(true);
        hasRevealed.current = true;

        if (observerDisconnect) {
          observer.unobserve(element);
        }
      }

      // Solo se puede ocultar si NO queremos que se desconecte
      if (!isInView && !observerDisconnect) {
        setIsVisible(false);
        hasRevealed.current = false; // permite re-revelar si vuelve a entrar
      }
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []); // ⛔ NO pongas `options` ni `observerDisconnect` acá

  return { ref, isVisible };
}
