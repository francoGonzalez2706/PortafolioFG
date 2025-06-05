import { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import { experienceData } from "./ExperienceData";
import { SectionTitle } from "@components/ui/SectionTitle/SectionTitle";
import { useScrollReveal } from "@hooks/useScrollReveal";

export const Exprerience = () => {
  const { ref, isVisible } = useScrollReveal();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const colors = ["#1e90f555", "#f4433655", "#f805", "#A5F5", "#5895"];
  const scrollToCard = (index: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (card) {
      const offsetLeft = card.offsetLeft;
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      container.scrollTo({
        left: offsetLeft - (containerWidth - cardWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex =
      activeIndex === 0 ? experienceData.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      activeIndex === experienceData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToCard(newIndex);
  };

  useEffect(() => {
    scrollToCard(activeIndex);
  }, []);

  return (
    <section className={`${styles.sectionExperience}`} id="experience">
      <SectionTitle
        subtitle="My professional career."
        title="Work Experience"
      />
      <div ref={ref}>
        <div className={styles.carouselWrapper}>
          <div className={styles.icons}>
            <i
              className="ri-arrow-left-s-line"
              onClick={() => handlePrev()}
            ></i>
          </div>
          <div
            className={`${styles.experienceContainer}  ${
              isVisible ? styles.visible : ""
            }`}
            ref={carouselRef}
          >
            {experienceData.map((job, i) => (
              <div
                className={`${styles.cardContainer} ${
                  i === activeIndex ? styles.active : styles.inactive
                }`}
                onClick={() => {
                  setActiveIndex(i);
                  scrollToCard(i);
                }}
              >
                <div className={styles.containerPosition}>
                  <h3 className={styles.position}>{job.position}</h3>
                  {job.isCurrent && (
                    <span className={styles.actual}>Actual</span>
                  )}
                </div>
                <div>
                  <p className={styles.company}>{job.company}</p>
                  <p className={styles.period}>{job.period}</p>
                </div>
                <p className={styles.description}>{job.description}</p>
                <div>
                  <h4 className={styles.responsabilities}>Responsabilities:</h4>
                  <ul className={styles.listResp}>
                    {job.responsabilities.map((item, i) => (
                      <li key={i} className={styles.listItems}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={styles.responsabilities}>Tecnologías:</h4>
                  <div className={styles.listTecnologies}>
                    {job.tecnologies.map((tech, i) => (
                      <div
                        key={i}
                        className={styles.itemTec}
                        style={{
                          backgroundColor: colors[i % colors.length],
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.icons}>
            <i
              className="ri-arrow-right-s-line"
              onClick={() => handleNext()}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
};
