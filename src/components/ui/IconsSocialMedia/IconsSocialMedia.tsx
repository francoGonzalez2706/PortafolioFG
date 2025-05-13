import styles from "./IconsSocialMedia.module.css";

export const IconsSocialMedia = () => {
  return (
    <div className={styles.containerIcons}>
      <a
        href="https://www.linkedin.com/in/franco-gonzalez-reale/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconSocialMedia}
        aria-label="LinkedIn"
      >
        <i className="ri-linkedin-fill"></i>
      </a>
      <a
        href="https://github.com/francoGonzalez2706"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconSocialMedia}
        aria-label="GitHub"
      >
        <i className="ri-github-fill"></i>
      </a>
      <a
        href="https://www.instagram.com/francogonzalez276/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.iconSocialMedia}
        aria-label="Instagram"
      >
        <i className="ri-instagram-fill"></i>
      </a>
    </div>
  );
};
