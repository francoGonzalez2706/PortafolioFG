import { SectionTitle } from "@components/ui/SectionTitle/SectionTitle";
import styles from "./AboutMe.module.css";
import aboutImg from "@assets/AboutImg.avif";
import { downloadCV } from "../../utils";
import { useScrollReveal } from "@hooks/useScrollReveal";

export const AboutMe = () => {
  const { ref, isVisible } = useScrollReveal();

  const aboutMeData = [
    { label: "Name", value: "Franco Gonzalez" },
    { label: "Email", value: "franco.gonzalez.reale@gmail.com" },
    { label: "Location", value: "Mendoza, Argentina" },
    { label: "Availability", value: "Open to offers" },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <section className={`${styles.ContainerAbout}`} id="about">
      <SectionTitle
        subtitle="Learn more about my journey, experience, and what drives me as a developer."
        title="About Me"
      />
      <div ref={ref}>
        <div
          className={`${styles.containerAboutData}  ${
            isVisible ? styles.visible : ""
          }`}
        >
          <div className={styles.ImgPlusYears}>
            <img
              src={aboutImg}
              alt="Modern workspace with code on screen"
              className={styles.imgAbout}
            />
            <div className={styles.containerPlusYears}>
              <div className={styles.content}>
                <span className={styles.number}>{currentYear - 2022}+</span>
                <span className={styles.label}>Years of Experience</span>
              </div>
            </div>
          </div>
          <div className={styles.aboutMe}>
            <h3>Frontend Developer </h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate Frontend Developer with a degree in Software
              Development, bringing expertise in creating dynamic and
              interactive web interfaces. My approach blends design and
              functionality to provide optimized user experiences.
            </p>

            <p className="text-muted-foreground mb-6">
              With a focus on modern technologies like React, TypeScript, and
              Three.js, I've successfully developed scalable applications and
              interactive 3D interfaces that engage users and solve complex
              problems.
            </p>

            <p className="text-muted-foreground mb-8">
              My commitment to code quality, performance, and accessibility
              allows me to develop efficient and maintainable applications. I am
              excited to bring my skills and creativity to new challenges.
            </p>

            <div className={styles.gridAboutitems}>
              {aboutMeData.map((data, index) => (
                <div className={styles.gridItem} key={index}>
                  <h4 className={styles.labelData}>{data.label}:</h4>
                  <span
                    className={`${styles.valueData} ${
                      data.label === "Availability" ? styles.available : ""
                    }`}
                  >
                    {data.value}
                  </span>
                </div>
              ))}
            </div>
            <button onClick={downloadCV} className={styles.buttonResume}>
              <i className="ri-download-line mr-2"></i> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
