import styles from "./Hero.module.css";
import compImg from "@assets/comp.avif";
import myImg from "@assets/myImg.jpeg";
import { IconsSocialMedia } from "@components/ui/IconsSocialMedia/IconsSocialMedia";
export const Hero = () => {
  return (
    <section id="top" className={styles.containerHero}>
      <div
        className={styles.backgroundImg}
        style={{
          backgroundImage: `url(${compImg})`,
        }}
        aria-hidden="true"
      ></div>
      <div className={styles.ContainerPresentation}>
        <div className={styles.PersonalInfoCont}>
          <div className={styles.TitleDeveloper}>
            <div className={styles.bars}></div>
            <h2 className={styles.developer}>Full-Stack Developer</h2>
          </div>
          <h1 className={styles.title}>
            Hi, I'm <span style={{ color: "var(--primary)" }}>Franco</span>{" "}
            Gonzalez
          </h1>
          <p className={styles.description}>
            A passionate Mid-Level Full-Stack Developer specializing in creating
            dynamic and interactive web interfaces with React, TypeScript, and
            3D technologies.
          </p>
          <div className={styles.containerBtns}>
            <a
              href={"#contact"}
              className={`${styles.btn} ${styles.getTouchBtn}`}
            >
              Get In Touch
            </a>
            <a
              href={"#experience"}
              className={`${styles.btn} ${styles.myWorkBtn}`}
            >
              See My Work
            </a>
          </div>
          <IconsSocialMedia />
        </div>

        <div className={styles.containerImg}>
          <img
            src={myImg}
            alt="Franco Gonzalez, Full-Stack Developer"
            className={styles.FGimg}
          />
        </div>
      </div>
      <div className={styles.arrowAbout}>
        <a href="#about" aria-label="Scroll down to About section">
          <i className="ri-arrow-down-line"></i>
        </a>
      </div>
    </section>
  );
};
