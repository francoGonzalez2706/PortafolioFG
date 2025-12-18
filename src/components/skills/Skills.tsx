import { SectionTitle } from "@components/ui/SectionTitle/SectionTitle";
import styles from "./Skills.module.css";
import { useInView } from "@hooks/isInView";
import { useScrollReveal } from "@hooks/useScrollReveal";
type Skills = {
  Frontend: { value: string[]; color: string };
  Backend: { value: string[]; color: string };
  Databases: { value: string[]; color: string };
  DevOpsTools: { value: string[]; color: string };
  Design: { value: string[]; color: string };
};

const data: Skills = {
  Frontend: {
    value: ["React", "CSS", "HTML", "Javascript", "React Native + Expo"],
    color: "var(--primary)",
  },
  Backend: {
    value: ["Node.js", "Java/SpringBoot", "Python/Flask"],
    color: "var(--destructive)",
  },
  Databases: {
    value: ["MongoDB", "PostgreSQL", "MySQL"],
    color: "#f80",
  },
  DevOpsTools: {
    value: ["Git", "Docker", "Jest"],
    color: "#A5F",
  },
  Design: {
    value: ["Figma", "UI/UX Design", "Responsive Design"],
    color: "#589",
  },
};
export const Skills = () => {
  const { refView, isInView } = useInView({
    threshold: 0.5,
  });
  const { ref, isVisible } = useScrollReveal(
    {
      threshold: 0.2,
    },
    true
  );

  return (
    <section id="skillData" style={{ padding: "5rem" }} ref={refView}>
      <SectionTitle
        subtitle="Technologies and tools I handle."
        title="My Skills"
      />
      <div ref={ref}>
        <div
          className={`${styles.containerSkills}  ${
            isVisible ? styles.visible : ""
          }`}
        >
          {Object.keys(data).map((skills: string) => (
            <div
              className={`${styles.skills} ${
                isInView ? styles.visibleCards : styles.invisibleCards
              }`}
            >
              <h3>{skills}</h3>
              <div className={styles.skillsTitleContainer}>
                {data[skills as keyof Skills].value.map(
                  (e: string, skillIndex) => {
                    const delay = 0.1 * skillIndex + 0;

                    return (
                      <div
                        key={e}
                        className={`${styles.Title} ${
                          isInView ? styles.scaleIn : styles.scaleOut
                        }`}
                        style={{
                          animationDelay: `${delay}s`,
                          backgroundColor: data[skills as keyof Skills].color,
                        }}
                      >
                        <span>{e}</span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
