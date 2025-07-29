import { useEffect } from "react";
import styles from "@components/Header/Header.module.css";

export const useSectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`.${styles.navLinkActive}`);
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll(`.${styles.navLink}`);
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
