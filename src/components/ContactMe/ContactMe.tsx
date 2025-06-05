import { SectionTitle } from "@components/ui/SectionTitle/SectionTitle";
import styles from "./ContactMe.module.css";

export const ContactMe = () => {
  return (
    <section className={`${styles.sectionContactMe}`} id="experience">
      <SectionTitle
        subtitle="My professional career."
        title="Work Experience"
      />
    </section>
  );
};
