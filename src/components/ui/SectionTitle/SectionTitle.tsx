import styles from "./SectionTitle.module.css";
import { useScrollReveal } from "@hooks/useScrollReveal";

type Props = {
  title: string;
  subtitle: string;
};
export const SectionTitle = ({ title, subtitle }: Props) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${styles.sectionTitle} ${isVisible ? styles.visible : ""}`}
    >
      <h2 style={{ color: "var(--textColor)" }}>{title}</h2>
      <div className={styles.underline}></div>
      <p>{subtitle}</p>
    </div>
  );
};
