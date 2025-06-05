import { useEffect, useRef, useState } from "react";

export const useInView = (
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
        ...options,
      }
    );

    observer.observe(current);

    return () => observer.unobserve(current);
  }, [options]);

  return { refView: ref, isInView };
};
